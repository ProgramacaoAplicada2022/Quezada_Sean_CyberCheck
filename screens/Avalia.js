import React, { useEffect, useState } from 'react'
import { ScrollView, SafeAreaView, TouchableOpacity,StyleSheet, Text, View, TextInput } from 'react-native'
import {auth, firebase, db} from '../firebase';
import { doc, getDoc, serverTimestamp } from "firebase/firestore";
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import style from '../src/style';
var cnt2=0,cnt1=0;
var loc="", tempo=0, num=0;
var s,j=0;



function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Fev','Mar','Abr','Maio','Jun','Jul','Ago','Set','Out','Nov','Dec'];
  var year = a.getFullYear()-3969;
  var month = a.getMonth();
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(); 
  var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
  var time = date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}
function ListAvals(props){
    const tempo=timeConverter(props.avaliacao.realTime)
    return (
        <View style={{padding:10}}>
        <View style={styles.itemAval}>
        <TouchableOpacity
            onPress={() => {}}
            style={{width:'100%', height:'100%', flexDirection:'row',backbroundColor:'yellow'}}
        >
            <View style={{flex:1}}>
                <Text style={{color:'black'}}> Relatorio da avaliação realizada em: {tempo} </Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>
    );
}


const Controle1 = ({route}) =>{
    loc=route.params.loc
    num=route.params.numero+1
    const [color1, setColor1] = useState(0)
    const navigation = useNavigation();
    return (
            
        <SafeAreaView style={styles.fundo}>
            
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}>Inventório e Controle de Ativos de Hardware </Text>
                    <Text style={styles.descricao}>
                        Controlar ativamente (inventariar, rastrear e corrigir) todos os dispositivos de hardware na rede para que apenas autorizados tenham acesso, e não autorizados e não gerenciados sejam encontrados e impedidos de obter acesso. 
                        {' '}
                        <Text style={{color: '#4FBDFD',fontWeight: 'bold' }}>
                         Marque os sub controles utilizados pela sua empresa:
                        </Text>
                    </Text>
                </View>
                <View style={styles.muralAlt}>
                <View style={[{ height:50,backgroundColor:(color1&1)===1? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color1&1)===1 ? setColor1(color1-1) : setColor1(color1+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Manter inventário de ativos
 </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:60,backgroundColor:(color1&2)===2? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color1&2)===2 ? setColor1(color1-2) : setColor1(color1+2)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Manipular ativos não autorizados </Text>
                    </TouchableOpacity>
                </View>
                
             </View>    
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt1=color1
                                navigation.navigate("Controle2")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color='#4FBDFD' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
const Controle2 = () =>{
    const [color2, setColor2] = useState(0)
    const navigation = useNavigation();
    console.log(color2)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}> Inventório e Controle de Ativos de Software</Text> 
                    <Text style={styles.descricao}>
                        Controlar ativamente (inventariar, rastrear e corrigir) todos os softwares na rede para que apenas os autorizados sejam instalados e possam ser executados, e que todos os não autorizados e não gerenciados sejam encontrados e impedidos de instalação ou execução.
                        {' '}
                    <Text style={{color: '#4FBDFD',fontWeight: 'bold' }}>
                          Marque os sub controles utilizados pela sua empresa:
                    </Text>
                    </Text>
                </View>
                <View style={styles.muralAlt}>
                <View style={[{height:60,backgroundColor:(color2&1)===1? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color2&1)===1 ? setColor2(color2-1) : setColor2(color2+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Manter estoque de software autorizado </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:60,backgroundColor:(color2&2)===2? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color2&2)===2 ? setColor2(color2-2) : setColor2(color2+2)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Certificar que o software seja suportado pelo fornecedor</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:60,backgroundColor:(color2&4)===4? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color2&4)===4 ? setColor2(color2-4) : setColor2(color2+4)
                        }}
                        style={{flex:1, alignItems: 'center'}}
                    >
                        <Text style={styles.textAlt}> Manipular programas não autorizados </Text>
                    </TouchableOpacity>
                </View> 
                </View>
            </View>
                <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt2=color2
                                navigation.navigate("Controle1", {loc:loc, numero:num})}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt2=color2
                                navigation.navigate("Controle3")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
        </SafeAreaView>
    );
}


var cnt3=0
const Controle3 = () =>{
    const [color3, setColor3] = useState(0)
    const navigation = useNavigation();
    console.log(color3)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={[styles.muralUtil, {flex:0.6}]}>
                    <Text style={styles.titulo}>Gerência Contínua de Vulnerabilidade</Text>
                    <Text style={styles.descricao}>
                        Adquirir, avaliar e agir continuamente sobre novas informações a fim de identificar vulnerabilidades, remediar e minimizar a janela de oportunidade para os invasores.
                        {' '}
                    <Text style={{color: '#4FBDFD',fontWeight: 'bold' }}>
                         Marque os sub controles utilizados pela sua empresa:
                    </Text>
                    </Text>
                </View>
                <View style={styles.muralAlt}>
                <View style={[{height:100,backgroundColor:(color3&1)===1? '#92c5f7' :'white'},styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color3&1)===1 ? setColor3(color3-1) : setColor3(color3+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}>
                         Implantar ferramentas automatizadas de gerenciamento de Patch do sistema operacional
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:100,backgroundColor:(color3&2)===2? '#92c5f7' :'white'},styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color3&2)===2 ? setColor3(color3-2) : setColor3(color3+2)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Implantar ferramentas automatizadas de gerenciamento de Patch de Programas
 </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle2")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt3=color3
                                navigation.navigate("Controle4")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}


var cnt4=0
const Controle4 = () =>{
    const [color4, setColor4] = useState(0)
    const navigation = useNavigation();
    console.log(color4)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={[{flex:0.8, width:'85%'}, styles.muralUtil]}>
                    <Text style={styles.titulo}> Uso Controlado de Privilégios Administrativos </Text>
                    <Text style={styles.descricao}>
                        Os processos e ferramentas usados ​​para rastrear, controlar, prevenir ou corrigir o uso, atribuições e configurações de privilégios administrativos em computadores, redes e aplicativos.
                        {' '}
                    <Text style={{color: '#4FBDFD',fontWeight: 'bold' }}>
                       Marque os sub controles utilizados pela sua empresa:
                    </Text></Text>
                </View>
                <View style={styles.muralAlt}>
                <View style={[{height: 50,backgroundColor:(color4&1)===1? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color4&1)===1 ? setColor4(color4-1) : setColor4(color4+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Alterar senhas padrão </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height: 60,backgroundColor:(color4&2)===2? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color4&2)===2 ? setColor4(color4-2) : setColor4(color4+2)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Garanta o uso dedicado de contas administrativas
                    </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle3")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt4=color4
                                navigation.navigate("Controle5")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
var cnt5=0
const Controle5 = () =>{
    const [color5, setColor5] = useState(0)
    const navigation = useNavigation();
    console.log(color5)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}> 
                        Configuração segura para hardware e software em aparelhos móveis, notebooks, estações de trabalho e servidores
                    </Text>
                    <Text style={styles.descricao}>
                        Estabelece, implementa e gerencia ativamente a configuração de segurança de dispositivos móveis, laptops, servidores e estações de trabalho usando uma configuração rigorosa processo de gerenciamento e controle de mudanças, a fim de evitar que invasores explorem serviços e configurações vulneráveis.
                    
                    <Text style={{color: '#4FBDFD',fontWeight: 'bold' }}>
                        {" "}Marque os sub controles utilizados pela sua empresa:
                    </Text></Text>
                </View>
                <View style={[styles.muralAlt, { flex:0.45}]}>
                    <View style={[{height:60,backgroundColor:(color5&1)===1? '#92c5f7' :'white'}, styles.alternativa]}>
                        <TouchableOpacity
                            onPress={() => {
                                (color5&1)===1 ? setColor5(color5-1) : setColor5(color5+1)
                            }}
                            style={{flex:1}}
                        >
                        <Text style={styles.textAlt}> Estabelecer configurações de segurança</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle4")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt5=color5
                                navigation.navigate("Controle6")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
            
        </SafeAreaView>
    );
}
var cnt6=0
const Controle6 = () =>{
    const [color6, setColor6] = useState(0)
    const navigation = useNavigation();
    console.log(color6)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={[{height:'82%', width:'90%'}, styles.mural]}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}> Manutenção, Monitoramento e Análise de Audit Logs </Text>
                    <Text style={styles.descricao}> 
                        Colete, gerencie e analise logs de auditoria de eventos que podem ajudar a detectar, compreender, ou se recuperar de um ataque.
                   
                    <Text style={{color: '#4FBDFD',fontWeight: 'bold' }}>
                        {" "}Marque os sub controles utilizados pela sua empresa:
                    </Text> </Text>
                </View>
                <View style={[styles.muralAlt, {flex:1.3}]}>
                <View style={[{height: 50,backgroundColor:(color6&1)===1? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color6&1)===1 ? setColor6(color6-1) : setColor6(color6+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Ativar registro de auditoria
                    </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle5")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt6=color6
                                navigation.navigate("Controle7")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </SafeAreaView>
    );
}
var cnt7=0
const Controle7 = () =>{
    const [color7, setColor7] = useState(0)
    const navigation = useNavigation();
    console.log(color7)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}> Proteção de e-mail e browser de web </Text>
                    <Text style={styles.descricao}>
                        Minimiza a superfície de ataque e as oportunidades para possíveis atacantes manipularem o comportamento humano através de intera13ões por meio de browsers de web e sistemas de email.
                    
                    <Text style={{color: '#4fbdfd',fontWeight: 'bold' }}>
                        {" "}Marque os sub controles utilizados pela sua empresa:
                    </Text>  </Text>     
                </View>
                <View style={[styles.muralAlt, {flex:1.2}]}>
                <View style={[{height: 80, backgroundColor:(color7&1)===1? '#92c5f7' :'white'},styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color7&1)===1 ? setColor7(color7-1) : setColor7(color7+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> 
                        Garante o uso somente de browsers com suporte completo e cliente de email
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:60,backgroundColor:(color7&2)===2? '#92c5f7' :'white'},styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color7&2)===2 ? setColor7(color7-2) : setColor7(color7+2)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Uso de serviços de filtragem de DNS </Text>
                    </TouchableOpacity>
                </View>
             
            </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle6")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt7=color7
                                navigation.navigate("Controle8")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        
        </SafeAreaView>
    );
}

var cnt8=0
const Controle8 = () =>{
    const [color8, setColor8] = useState(0)
    const navigation = useNavigation();
    console.log(color8)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}>Defesas contra Malware </Text>
                    <Text style={styles.descricao}>
                     Controle da instalação, disseminação e execução de códigos maliciosos em múltiplos pontos da empresa, e ao mesmo tempo otimiza o uso da automação de modo a permitir a rápida atualização da defesa, coleta de dados e ações corretivas.
                    
                    <Text style={{color: '#4FBDFD',fontWeight: 'bold' }}>
                        {" "}Marque os sub controles utilizados pela sua empresa:
                    </Text></Text>
                </View>
                <View style={[styles.muralAlt, {flex:1.2}]}>
                <View style={[{height:80,backgroundColor:(color8&1)===1? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color8&1)===1 ? setColor8(color8-1) : setColor8(color8+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}>Garante que os Softwares e banco de dados Anti-Malware estão atualizados
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:80, backgroundColor:(color8&2)===2? '#92c5f7' :'white'},styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color8&2)===2 ? setColor8(color8-2) : setColor8(color8+2)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Configura o escaneamento Anti-Malware de mídia removível
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:80,backgroundColor:(color8&4)===4? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color8&4)===4 ? setColor8(color8-4) : setColor8(color8+4)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Configura dispositivos para não executar conteúdo automaticamente
                    </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle7")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt8=color8
                                navigation.navigate("Controle9")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

var cnt9=0
const Controle9 = () =>{
    const [color9, setColor9] = useState(0)
    const navigation = useNavigation();
    console.log(color9)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}> Limitação e controle de Portas de Rede, Protocolos e Serviços</Text>
                    <Text style={styles.descricao}>
                         Gere o uso operacional de portas, protocolos e serviços em dispositivos de rede de modo a minimizar as janelas de vulnerabilidade disponíveis para atacantes.
                    
                    <Text style={{color: '#4FBDFD',fontWeight: 'bold' }}>
                        {" "}Marque os sub controles utilizados pela sua empresa:
                    </Text></Text>
                </View>
                <View style={[styles.muralAlt, {flex:1.2}]}>
                <View style={[{height:60,backgroundColor:(color9&1)===1? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color9&1)===1 ? setColor9(color9-1) : setColor9(color9+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Aplica Host-Based Firewalls ou Filtragem de Portas </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle8")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt9=color9
                                navigation.navigate("Controle10")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
var cnt10=0
const Controle10 = () =>{
    const [color10, setColor10] = useState(0)
    const navigation = useNavigation();
    console.log(color10)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}> Capacidade de Recuperação de Dados</Text>
                    <Text style={styles.descricao}>
                     Os processos e ferramentas utilizadas para realizar back-ups de informações críticas de maneira correta, utilizando metodologias que garantem a sua rápida recuperação.
                    
                    <Text style={{color: '#4FBDFD',fontWeight: 'bold' }}>
                        {" "}Marque os sub controles utilizados pela sua empresa:
                    </Text></Text>
                </View>
                <View style={[styles.muralAlt, {flex:1.5}]}>
                <View style={[{height: 60,backgroundColor:(color10&1)===1? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color10&1)===1 ? setColor10(color10-1) : setColor10(color10+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Garante back-ups regulares automáticos</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:60,backgroundColor:(color10&2)===2? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color10&2)===2 ? setColor10(color10-2) : setColor10(color10+2)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}>Realização de back-ups completos do Sistema </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:45,backgroundColor:(color10&4)===4? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color10&4)===4 ? setColor10(color10-4) : setColor10(color10+4)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}>Proteção dos back-ups</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:80,backgroundColor:(color10&8)===8? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color10&8)===8 ? setColor10(color10-8) : setColor10(color10+8)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}>Garante que todos os back-ups tem pelo menos uma destinação offline</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle9")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt10=color10
                                navigation.navigate("Controle11")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
var cnt11=0
const Controle11 = () =>{
    const [color11, setColor11] = useState(0)
    const navigation = useNavigation();
    console.log(color11)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}> Configuração segura para Dispositivos de Rede, tais como Firewalls, Roteadores e Switches</Text>
                    <Text style={styles.descricao}>
                        Estabelece, implementa e gera ativamente a configuração de segurança dos dispositivos de infraestrutura de rede utilizando uma rigorosa gestão  de configurações e processos de mudança de controle de modo a impedir que atacantes explorem serviços e configurações vulneráveis.
                    </Text>
                </View>
                <View style={[styles.muralAlt, {flex:0.55}]}>
                <View style={[{height:120,backgroundColor:(color11&1)===1? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color11&1)===1 ? setColor11(color11-1) : setColor11(color11+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Instala as versões estáveis mais recentes de todas as atualizações relacionadas à segurança em todos os dispositivos de rede </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle10")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt11=color11
                                navigation.navigate("Controle12")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
var cnt12=0
const Controle12 = () =>{
    const [color12, setColor12] = useState(0)
    const navigation = useNavigation();
    console.log(color12)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}> Defesa de Perímetro</Text>
                    <Text style={styles.descricao}>
                        Detecta, previne e corrige o fluxo da transferência de informações pela rede em diferentes níveis de confiança com foco em informações prejudiciais à segurança.
                    </Text>
                </View>
                <View style={[styles.muralAlt, {flex:2.3}]}>
                <View style={[{height:60,backgroundColor:(color12&1)===1? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color12&1)===1 ? setColor12(color12-1) : setColor12(color12+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Mantém um inventário de Perímetro da Rede
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:60,backgroundColor:(color12&2)===2? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color12&2)===2 ? setColor12(color12-2) : setColor12(color12+2)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> 
                        Nega comunicação através de portas não autorizadas
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle11")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt12=color12
                                navigation.navigate("Controle13")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
var cnt13=0
const Controle13 = () =>{
    const [color13, setColor13] = useState(0)
    const navigation = useNavigation();
    console.log(color13)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}> Proteção da Informação</Text>
                    <Text style={styles.descricao}>
                        Os processos e ferramentas utilizadas para prevenir que a informação seja exfiltrada, mitiga os efeitos da exfiltração da informação e assegura a privacidade e integridade de informação sensível.
                    </Text>
                </View>
                <View style={[styles.muralAlt, {flex:2}]}>
                <View style={[{height:60,backgroundColor:(color13&1)===1? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color13&1)===1 ? setColor13(color13-1) : setColor13(color13+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Mantém um inventário de informação sensível</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:80,backgroundColor:(color13&2)===2? '#92c5f7' :'white'},styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color13&2)===2 ? setColor13(color13-2) : setColor13(color13+2)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Remove informação sensível ou sistemas não acessados regularmente pela organização</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:60,backgroundColor:(color13&4)===4? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color13&4)===4 ? setColor13(color13-4) : setColor13(color13+4)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Encripta informação de dispositivos móveis</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle12")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt13=color13
                                navigation.navigate("Controle14")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
var cnt14=0
const Controle14 = () =>{
    const [color14, setColor14] = useState(0)
    const navigation = useNavigation();
    console.log(color14)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}> Acesso controlado baseado na Necessidade de Saber</Text>
                    <Text style={styles.descricao}>
                    </Text>
                </View>
                <View style={[styles.muralAlt, {flex:5}]}>
                <View style={[{height:60,backgroundColor:(color14&1)===1? '#92c5f7' :'white'},styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color14&1)===1 ? setColor14(color14-1) : setColor14(color14+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Protege informação por meio de listas de controle de acesso</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle13")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt14=color14
                                navigation.navigate("Controle15")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}


var cnt15=0
const Controle15 = () =>{
    const [color15, setColor15] = useState(0)
    const navigation = useNavigation();
    console.log(color15)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}> Controle de acesso sem fio</Text>
                    <Text style={styles.descricao}>
                    </Text>
                </View>
                <View style={[styles.muralAlt, {flex:6}]}>
                <View style={[{height:80,backgroundColor:(color15&1)===1? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color15&1)===1 ? setColor15(color15-1) : setColor15(color15+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Aproveita o Padrão Avançado de Criptografia (AES em inglês) para criptografar dados sem fio</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:80,backgroundColor:(color15&2)===2? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color15&2)===2 ? setColor15(color15-2) : setColor15(color15+2)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Cria Redes sem Fio separadas para dispositivos pessoais e não confiáveis</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle14")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt15=color15
                                navigation.navigate("Controle16")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}



var cnt16=0
const Controle16 = () =>{
    const [color16, setColor16] = useState(0)
    const navigation = useNavigation();
    console.log(color16)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}>  Monitoramento e Controle de contas</Text>
                    <Text style={styles.descricao}>
                    </Text>
                </View>
                <View style={[styles.muralAlt, {flex:7.5}]}>
                <View style={[{height:60,backgroundColor:(color16&1)===1? '#92c5f7' :'white'},styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color16&1)===1 ? setColor16(color16-1) : setColor16(color16+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Desativa quaisquer contas não associadas </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:45,backgroundColor:(color16&2)===2? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color16&2)===2 ? setColor16(color16-2) : setColor16(color16+2)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Desativa contas inativas</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:60,backgroundColor:(color16&4)===4? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color16&4)===4 ? setColor16(color16-4) : setColor16(color16+4)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Bloqueia seções de estação de trabalho depois de inatividade</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle15")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt16=color16
                                navigation.navigate("Controle17")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

var cnt17=0
const Controle17 = () =>{
    const [color17, setColor17] = useState(0)
    const navigation = useNavigation();
    console.log(color17)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={[styles.muralUtil, {width:'95%'}]}>
                    <Text style={[styles.titulo, {width: '100%'}]}>
                         Implementação de{'\n'}Consciência de Segurança{'\n'} e Programa de Treinamento
                    </Text>
                </View>
                <View style={[styles.muralAlt, {flex:5.5}]}>
                <View style={[{height: 55, backgroundColor:(color17&1)===1? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color17&1)===1 ? setColor17(color17-1) : setColor17(color17+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Implementa um programa de consciência de segurança</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height: 50,backgroundColor:(color17&2)===2? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color17&2)===2 ? setColor17(color17-2) : setColor17(color17+2)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={[styles.textAlt ]}> Treina força de trabalho em uma autenticação segura</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height: 75,backgroundColor:(color17&4)===4? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color17&4)===4 ? setColor17(color17-4) : setColor17(color17+4)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Treina força de trabalho na identi- {'\n'}ficação de ataques de engenharia social</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height: 50,backgroundColor:(color17&8)===8? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color17&8)===8 ? setColor17(color17-8) : setColor17(color17+8)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> Treina a força de trabalho em{'\n'} como lidar com dados sensíveis</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height: 50,backgroundColor:(color17&16)===16? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color17&16)===16 ? setColor17(color17-16) : setColor17(color17+16)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> 
                        Treina força de trabalho nas causas da exposição de dados
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height: 70,backgroundColor:(color17&32)===32? '#92c5f7' :'white'},styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color17&32)===32 ? setColor17(color17-32) : setColor17(color17+32)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> 
                        Treina membros da força de trabalho em identificar e{'\n'} reportar incidentes
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle16")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt17=color17
                                navigation.navigate("Controle18")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        
        </SafeAreaView>
    );
}

var cnt18=0
const Controle18 = () =>{
    const [color18, setColor18] = useState(0)
    const navigation = useNavigation();
    console.log(color18)
    return (
        <SafeAreaView style={styles.fundo}>
            <View style={styles.mural}>
                <View style={styles.muralUtil}>
                    <Text style={styles.titulo}> Gestão e resposta de incidentes</Text>
                    <Text style={styles.descricao}></Text>
                </View>
                <View style={[styles.muralAlt,{flex:6}]}>
                <View style={[{height:60, backgroundColor:(color18&1)===1? '#92c5f7' :'white'},styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color18&1)===1 ? setColor18(color18-1) : setColor18(color18+1)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}>
                        Documento dos procedimentos{'\n'} de resposta ao incidente
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:70,backgroundColor:(color18&2)===2? '#92c5f7' :'white'},styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color18&2)===2 ? setColor18(color18-2) : setColor18(color18+2)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> 
                        Designar Pessoal de gerenciamento para suporte ao Tratamento de incidentes
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:70,backgroundColor:(color18&4)===4? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color18&4)===4 ? setColor18(color18-4) : setColor18(color18+4)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}> 
                        Manter informações de contato para reportar incidentes de segurança
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{height:70,backgroundColor:(color18&8)===8? '#92c5f7' :'white'}, styles.alternativa]}>
                    <TouchableOpacity
                        onPress={() => {
                            (color18&8)===8 ? setColor18(color18-8) : setColor18(color18+8)
                        }}
                        style={{flex:1}}
                    >
                    <Text style={styles.textAlt}>
                         Publicar informações sobre a reportagem de Incidentes e Anomalias de computadores
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row', width:'80%', marginTop:15}}>
                <View style={styles.fundoBotao}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Controle17")}
                    ><Entypo name="chevron-left" size={38} color="#4fbdfd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <View style={styles.fundoBotao}>
                        <TouchableOpacity
                            onPress={() => {
                                cnt18=color18
                                if(finalizarAval(loc,num)) navigation.navigate("Avals")}}
                            style={{paddingLeft:1}}
                        ><Entypo name="chevron-right" size={38} color="#4fbdfd" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
function finalizarAval(nome,number){
    const real=firebase.firestore.Timestamp.now()
    tempo=-real
        db.collection("users").doc(firebase.auth().currentUser.email).collection("avals").doc(nome).set({
            contador:number,
            nome:nome,
            createdAt: tempo,
            realTime:real,
        })
        var sol = db.collection("users").doc(firebase.auth().currentUser.email).collection("avals").doc(nome);
        sol.get().then((doc) => {
            if (doc.exists) {
                const real=firebase.firestore.Timestamp.now()
                tempo=-real
                db.collection("users").doc(firebase.auth().currentUser.email).collection("avals").doc(nome).collection("aval").doc(number+"").set({
                    contad:number,
                    r1: cnt1,
                    r2: cnt2,
                    r3: cnt3,
                    r4: cnt4,
                    r5: cnt5,
                    r6: cnt6,
                    r7: cnt7,
                    r8: cnt8,
                    r9: cnt9,
                    r10: cnt10,
                    r11: cnt11,
                    r12: cnt12,
                    r13: cnt13,
                    r14: cnt14,
                    r15: cnt15,
                    r16: cnt16,
                    r17: cnt17,
                    r18: cnt18,
                    createdAt: tempo,
                    realTime:real,
                })
                console.log("Document data:", doc.data());
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    return true
}

const Relatorio = ({route})=>{
    const nome=route.params.loc;
    const numero=route.params.numero;
    const navigation=useNavigation();
    return (
        <SafeAreaView style={{flex:1, alignItems:'center', backgroundColor:'#4fbdfd'}}>
        <View style={{width:'100%'}}>
            <View style={{width:'10%'}}>
              <TouchableOpacity
                  onPress={() => navigation.navigate('Avalia', {loc:nome})}
                style={{paddingLeft:10}}>
                <Entypo name="chevron-left" size={32} color="white" />
              </TouchableOpacity>
            </View>
        </View>
            <Text style={{color:'white', fontSize:28}}>Relatório</Text>
            <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center' }} style={{flex:1, borderTopRightRadius:25, borderTopLeftRadius:25,  paddingTop:20, backgroundColor:'white'}}>
                {SC1(route.params.r1)}
                {SC2(route.params.r2)}
                {SC3(route.params.r3)}
                {SC4(route.params.r4)}
                {SC5(route.params.r5)}
                {SC6(route.params.r6)}
                {SC7(route.params.r7)}

            </ScrollView>
        </SafeAreaView>
    )
}
function SC1 (resposta) {
    if(resposta==0){
        return (
            <View style={styles.relItem}><Text style={styles.txtRelItem}>Não mantém inventário de ativos</Text><Text style={styles.txt}>Solução: Entre as opções mais conhecidas esta a utilização de planilhas, úteis para gerir um volume bastante limitado de informações.</Text></View>
        );
    } else return <View></View>
}

function SC2 (resposta) {
    if(resposta==0){
        return (
            
            <View style={styles.relItem}><Text style={styles.txtRelItem}>Não manipula ativos não autorizados</Text><Text style={styles.txt}>Solução: Entre as opções mais conhecidas esta a utilização de planilhas, úteis para gerir um volume bastante limitado de informações.</Text></View>
            );
    } else return <View></View>
}

function SC3 (resposta) {
    if(resposta==0){
        return (
            <View style={styles.relItem}><Text style={styles.txtRelItem}>Não mantém estoque de software autorizado</Text><Text style={styles.txt}>Solução: A partir da comparação entre o inventário de ativos e os ativos conectados à rede, detectam-se ativos não registrados. Dessa forma, há dois caminhos possíveis, bloquear o ativo de conectar-se a rede ou registrá-lo no inventário. 
            </Text></View>
        );
    } else return <View></View>
}

function SC4 (resposta) {
    if(resposta==0){
        return (
            <View style={styles.relItem}><Text style={styles.txtRelItem}>Não certifica que o software seja suportado pelo fornecedor</Text><Text style={styles.txt}>Solução: Utilize uma planilha para registrar informações a respeito de elementos como a versão do produto, sua data de instalação, o dia em que ocorreu a última atualização, além da natureza dos suportes realizados. </Text></View>
        );
    } else return <View></View>
}

function SC5 (resposta) {
    if(resposta==0){
        return (
<View style={styles.relItem}><Text style={styles.txtRelItem}>Não manipula programas não autorizados</Text><Text style={styles.txt}>Solução: Periodicamente verificar atualizações dos sistemas operacionais e softwares do inventário. Caso estejam defasados ou sejam incompatíveis, é necessário atualizá-los ou substituí-los..</Text></View>        );
    } else return <View></View>
}

function SC6 (resposta) {
    if(resposta==0){
        return (
            <View style={styles.relItem}><Text style={styles.txtRelItem}>Não implanta ferramentas automatizadas de gerenciamento de Patch do sistema operacional</Text><Text style={styles.txt}>Solução: Periodicamente verificar atualizações dos sistemas operacionais e softwares do inventário. Caso estejam defasados ou sejam incompatíveis, é necessário atualizá-los ou substituí-los.
            </Text></View>
        );
    } else return <View></View>
}

function SC7 (resposta) {
    if(resposta==0){
        return (
            <View style={styles.relItem}><Text style={styles.txtRelItem}>Não implanta ferramentas automatizadas de gerenciamento de Patch de Programas</Text><Text style={styles.txt}>Solução: Para cada Software a ser baixado nos ativos, antes de fazê-lo, deve-se checar o inventário ou atualizá-lo com as informações do novo software. Além disso, é necessário orientar funcionários a controlar os softwares de seus dispositivos,  apagando ou inutilizando aqueles não autorizados.
            </Text></View>
        );
    } else return <View></View>
}

function SC8 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC9 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC10 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC11 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC12 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC13 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC14 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC15 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC16 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC17 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC18 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC19 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC20 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC21 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC22 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC23 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC24 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC25 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC26 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC27 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC28 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC29 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC30 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC31 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC32 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC33 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC34 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}

function SC35 (resposta) {
    if(resposta==0){
        return (
            <View><Text>a</Text></View>
        );
    } else return <View></View>
}
const Avalia = ({route}) => {
    const navigation = useNavigation();
    const nome=route.params.loc;
    const avalRef = db.collection("users").doc(firebase.auth().currentUser.email).collection("avals").doc(nome).collection("aval");
    const query2= avalRef.orderBy('createdAt');
    const [avaliacoes2]= useCollectionData(query2, {idField: 'id2'});
    var passar=0;
    return (
        <SafeAreaView style={{height:'100%',backgroundColor:'#4fbdfd'}}>
        <View style={{width:'100%',backgroundColor:'#4fbdfd'}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Avals')}
                style={{paddingLeft:10}}>
                <Entypo name="chevron-left" size={32} color="white" />
            </TouchableOpacity>
        </View>
        <View style={{flex:7,backgroundColor:'#4fbdfd', alignItems: 'center'}}>
        <Text style={{color:'white', fontSize:28}}> Avaliações Recentes </Text>
        <ScrollView style={{flex:1}}>
        {avaliacoes2&& avaliacoes2.map(aval=>{
            if(aval.contad>passar) passar=aval.contad
            return (
            <View key={aval.id2} style={{padding:10}}>
            <View style={styles.itemAval}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Relatorio', {loc:nome, numero:aval.contad, r1:aval.r1, r2:aval.r2, r3:aval.r3,
                    r4:aval.r4,r5:aval.r5,r6:aval.r6,r7:aval.r7,r8:aval.r8,r9:aval.r9,r10:aval.r10,r11:aval.r11,r12:aval.r12,r13:aval.r13,
                    r14:aval.r14,r15:aval.r15,r16:aval.r16,r17:aval.r17,r18:aval.r18})}}
                    style={{width:'100%', height:'100%', flexDirection:'row'}}
                >
                    <View style={{flex:1}}>
                        <Text style={{color:'black'}}> Avaliação realizada em: {timeConverter(aval.realTime)} </Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
            );
        })}
        </ScrollView>
        </View>
        <View style={{height: 100,
            backgroundColor: '#4fbdfd',
            justifyContent: 'center',
            alignContent: 'center', 
            alignItems:'center'}}>
        
        <TouchableOpacity
            onPress={() => {navigation.navigate("Control",{screen: 'Controle1', params: {loc:nome, numero:passar}})}}
            style={[{width: '80%',width:'45%', height: '60%', backgroundColor: 'white',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center', 
            justifyContent: 'center'}]}>
            <Text style={{color:'#4fbdfd', fontSize:16, fontWeight: 'bold'}}> Nova Avaliação </Text>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}

export {Avalia, Relatorio, Controle1, Controle2, Controle3, Controle4, Controle5, Controle6, Controle7, Controle8, Controle9, Controle10, Controle11, Controle12, Controle13, Controle14, Controle15, Controle16, Controle17, Controle18}
const styles = StyleSheet.create({
    itemAval:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        color: 'white',
        padding:20,
        backgroundColor:'white',
        borderRadius:20,
         //borderColor:'#0782F9', borderWidth:1
    },
    bigBox: {
        alignItems:'center',
        justifyContent:'flex-start',
        flex:1,
        backgroundColor:'#67BDF4',
    },
    questionBox:{
        alignItems:'center',
        justifyContent:'center',
        flex:2,
        margin:15
    },

    plusButton:{
        height:30,
        width:30,
        backgroundColor:'white',
        borderRadius:30,
        justifyContent:'center',
         alignItems:'center'
    },

    buttonBox:{
        marginTop:5,
        width: '90%',
        //borderColor: 'black',
        //borderWidth:3,
        alignItems:'flex-end',
        justifyContent:'center',
    },

    input:{
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        width: "95%",
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: '#9E9E9E',
        
  },
    fundo:{
                flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#4FBDFD',
                    
                },

                mural:{
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    height:'82%', 
                    width:'90%', 
                    backgroundColor:'white', 
                    alignItems:'center',
                    paddingBottom:20,
                    borderRadius:25,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.36,
                    shadowRadius: 6.68,
                    marginTop: 15,
                    elevation: 11,
                    justifyContent: 'flex-start'
                },

                muralUtil:{ 
                    //borderWidth: 2,
                    flex:0.8,
                    width:'85%', 
                    padding:10,
                    marginTop:10, 
                    marginBottom:5, 
                    borderRadius:15, 
                    borderWidth:0, 
                    alignItems:'center'
                },
                
                titulo:{
                    color:'#4FBDFD', 
                    fontSize: 20,
                    fontWeight: 'bold', 
                    justifyContent: 'center', 
                    textAlign: 'center',
                },

                descricao:{
                    textAlign: 'justify', 
                    marginTop:20, 
                    //borderWidth: 2,
                },

                alternativa:{
                    width:'80%',
                    paddingTop:5,
                    paddingRight:5,
                    paddingLeft:5,
                    paddingBottom: 5,
                    marginTop:15, 
                    marginBottom:5, 
                    borderRadius:15, 
                    borderColor:'#4FBDFD', 
                    borderWidth:1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems:'center',
                },

                fundoBotao:{
                    height:50, 
                    width:60, 
                    borderRadius:10, 
                    backgroundColor:'white', 
                    alignItems:'center', 
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.36,
                    shadowRadius: 6.68,
                    elevation:6,
                    justifyContent:'center',
                },

                textAlt:{
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    //borderWidth: 2,
                    //height: '90%',
                },
                button: {
                        backgroundColor: '#4fbdfd',
                        width: '100%',
                        padding: 15,
                        borderRadius: 10,
                        alignItems: 'center',
  },
                muralAlt:{
                    flex:1, 
                    justifyContent: 'flex-start', 
                    alignItems: 'center', 
                    width:'100%',
                    //borderWidth: 2,
                    //marginBottom:15,
                }, 
                
                relItem:{
                    padding:10, width:'90%', backgroundColor:'white', 
                    borderColor:"#4fbdfd",
                    borderWidth:1,
                    paddingBottom:10, paddingTop:10,
                    borderRadius:15,
                    marginBottom: 20,
                },

                txtRelItem:{
                    color: '#4fbdfd', 
                    fontSize: 16,
                    marginBottom:5,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems:'center', 
                    textAlign: 'justify',
                    
                },

                txt:{
                    textAlign: 'justify',
                },
             
})
