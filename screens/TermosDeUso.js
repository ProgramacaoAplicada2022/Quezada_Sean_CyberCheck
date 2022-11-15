import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Button, TouchableOpacity,ScrollView} from 'react-native';
import {style} from '../src/style';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';


const TermosDeUso = (route)=>{
  const navigation = useNavigation();
    return (
    <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
    <View style={{width:'10%'}}>
      <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        style={{paddingLeft:10}}>
        <Entypo name="menu" size={28} color="black" />
      </TouchableOpacity>
    </View>
    <ScrollView style={{ flex: 5}}>
        <View style={{alignItems:'center',justifyContent:'center'}} >
        <Text style={[{fontSize: 18,alignItems:'center',justifyContent:'center'}]}> 
        Termo de Uso do Aplicativo
        </Text>
        </View>
        <Text style={{padding: 5}}> 
        1 - ACEITAÇÃO {"\n"}
<View style={{alignItems:'center',justifyContent:'center',padding: 10, width: "98%"}} >
    <Text style={{alignContent: 'justify'}}>
Este é um contrato firmado entre você, de agora em diante denominado como usuário, e a CyberCheck, empresa cadastrada no CNPJ sob nº **.***.***/****-** com sede no município do Rio de Janeiro, capital do estado, em Praça General Tibúrcio, nº 80. Este “Termo de Uso de Aplicativo” rege o uso de todos os aplicativos disponibilizados gratuitamente pela CyberCheck, sejam para dispositivos móveis (Android, IOS, Windows Mobile), servidores, computadores pessoais (desktops) ou serviços web. Se você não concordar com estes termos não use este aplicativo.

Você reconhece ainda que analisou e aceitou as condições de uso. Leia-as atentamente pois o uso deste aplicativo significa que você aceitou todos os termos e concorda em cumpri-los. Se você, usuário, for menor de idade ou declarado incapaz em quaisquer aspectos, precisará da permissão de seus pais ou responsáveis que também deverão concordar com estes mesmos termos e condições. 
</Text>
</View>
{"\n"}2 - LICENÇA LIMITADA{"\n"}
<View style={{alignItems:'center',justifyContent:'center',padding: 10}} >
    <Text>
Você recebeu uma licença limitada, não transferível, não exclusiva, livre de royalties e revogável para baixar, instalar, executar e utilizar este aplicativo em seu dispositivo. Você reconhece e concorda que a CyberCheck concede ao usuário uma licença exclusiva para uso e desta forma não lhe transfere os direitos sobre o produto.

O aplicativo deverá ser utilizado por você, usuário. A venda, transferência, modificação, engenharia reversa ou distribuição bem como a cópia de textos, imagens ou quaisquer partes nele contido é expressamente proibida.

</Text>
</View>
{"\n"}3 - ALTERAÇÕES, MODIFICAÇÕES E RESCISÃO{"\n"}
<View style={{alignItems:'center',justifyContent:'center',padding: 10}} >
    <Text>
A CyberCheck reserva-se no direito de, a qualquer tempo, modificar estes termos seja incluindo, removendo ou alterando quaisquer de suas cláusulas. Tais modificações terão efeito imediato. Após publicadas tais alterações, ao continuar com o uso do aplicativo, você terá aceitado e concordado em cumprir os termos modificados.

A CyberCheck pode, de tempos em tempos, modificar ou descontinuar (temporária ou permanentemente) a distribuição ou a atualização deste aplicativo.

A CyberCheck não é obrigada a fornecer nenhum serviço de suporte para este aplicativo.

O usuário não poderá responsabilizar a CyberCheck nem seus diretores, executivos, funcionários, afiliados, agentes, contratados ou licenciadores por quaisquer modificações, suspensões ou descontinuidades do aplicativo.
</Text>
</View>
{"\n"}4 - CONSENTIMENTO PARA COLETA E USO DE DADOS{"\n"}
<View style={{alignItems:'center',justifyContent:'center',padding: 10}} >
    <Text>
Você concorda que a CyberCheck pode coletar e usar dados técnicos de seu dispositivo tais como especificações, configurações, versões de sistema operacional, tipo de conexão à internet e afins.
</Text>
</View>
{"\n"}5 - ISENÇÃO DE GARANTIAS E LIMITAÇÕES DE RESPONSABILIDADE{"\n"}
<View style={{alignItems:'center',justifyContent:'center',padding: 10}} >
    <Text>
Este aplicativo estará em contínuo desenvolvimento e pode conter erros e, por isso, o uso é fornecido "no estado em que se encontra" e sob risco do usuário final. Na extensão máxima permitida pela legislação aplicável a CyberCheck e seus fornecedores isentam-se de quaisquer garantias e condições expressas ou implícitas incluindo, sem limitação, garantias de comercialização, adequação a um propósito específico, titularidade e não violação no que diz respeito ao aplicativo e qualquer um de seus componentes ou ainda à prestação ou não de serviços de suporte. A CyberCheck não garante que a operação deste aplicativo seja contínua e sem defeitos. 

Exceto pelo estabelecido neste documento não há outras garantias, condições ou promessas aos aplicativos, expressas ou implícitas, e todas essas garantias, condições e promessas podem ser excluídas de acordo com o que é permitido por lei sem prejuízo à CyberCheck e seus colaboradores. 

{"\n"}I. A CyberCheck não garante, declara ou assegura que o uso deste aplicativo será ininterrupto ou livre de erros e você concorda que a CyberCheck poderá remover por períodos indefinidos ou cancelar este aplicativo a qualquer momento sem que você seja avisado.
{"\n"}II. A CyberCheck não garante, declara nem assegura que este aplicativo esteja livre de perda, interrupção, ataque, vírus, interferência, pirataria ou outra invasão de segurança e isenta-se de qualquer responsabilidade em relação a essas questões. Você é responsável pelo backup do seu próprio dispositivo.
{"\n"}III. Em hipótese alguma a CyberCheck, bem como seus diretores, executivos, funcionários, afiliadas, agentes, contratados ou licenciadores responsabilizar-se-ão por perdas ou danos causados pelo uso do aplicativo.
{"\n"}IV. Os conteúdos transmitidos pelos aplicativos tais como a transmissão da programação de rádios AM, FM, programações televisivas e afins são de responsabilidade de seus idealizadores. A CyberCheck isenta-se de qualquer responsabilidade direta ou indireta sobre estes conteúdos e o acesso é facultativo ao usuário.
</Text>
</View>
        </Text>
        
    </ScrollView> 
    </SafeAreaView>
  );
}
export default TermosDeUso