# CyberCheck
# Membros: Quezada e Sean Lebeis
# 1) Proposta de projeto

## Motivação

Atualmente nas grandes empresas, é de suma importância considerar o risco de ataques cibernéticos a seus servidores e bancos de dados. Nesse contexto, surge a ideia de um aplicativo que funciona como um acessor de segurança cibernética, avaliando se os recursos online da empresa estão devidamente protegidos.

Assim, surge a ideia do **CyberCheck**, um programa de segurança, que ajuda o usuário a avaliar o quão protegidos estão os dados de seu interesse.

## Principais Funcionalidades

### Login e Signup

Será possível criar uma conta para fazer os registros dos dados do usuário, juntamente com sua atividade.

### Avaliar vulnerabilidades cibernéticas 

A funcionalidade principal do programa é avaliar se a segurança cibernética de uma empresa ou instituição está boa o suficiente, através de questionários e pedidos. As respostas serão julgadas e armazenadas, sendo utilizadas para enviar à conta do usuário propostas de melhoria.


# 2) Instalação

O aplicativo usa a plataforma Expo que vem do react, para isso devemos primeiramente baixar a pasta do trabalho (download zip no github) e após instalar diversar bibliotecas e o aplicativo Expo Go para Android e iOS (discriminados abaixo).<br/>
OBS: Partimos do príncipio que o visual studio code ou similar já está instalado na máquina do usuário.

## Windows e MacOS

instalar o node LTS - https://nodejs.org/en/ <br />
instalar o yarn via npm (direto do terminal)- https://classic.yarnpkg.com/en/docs/install#mac-stable <br />
instalar a extensão do expo para visual studio - https://marketplace.visualstudio.com/items?itemName=byCedric.vscode-expo <br />
instalar o expo (direto do terminal): yarn add expo

OBS1 : caso a máquina não reconheça o npm usar o código : npm config get prefix <br />
OBS2 (Wndows)) : Sempre abrir o visual studio no modo administrador <br />

## Android e iOS

Expo Go para android - https://play.google.com/store/apps/details?id=host.exp.exponent <br />
Expo Go para iOS - https://apps.apple.com/app/expo-go/id982107779 <br />

# 3) Teste do Aplicativo
Após a instalação de todas as bibliotecas necessárias, vamos inicar um servidor direto do terminal usando <br />
npx expo start <br />

Automaticamente serão instaladas as principais bibliotecas restantes <br />

Após basta acessar o QR code fornecido pelo terminal e acessar o aplicativo pelo Expo Go.

OBS: o celular deve estar conectado na mesma rede que o computador
OBS2: para parar o servidor a qualquer momento basta um control c no terminal

# 4) Interface do Aplicativo

![image](https://user-images.githubusercontent.com/114265258/205094932-63807ba6-7988-4685-95d2-9d1da144038c.png)
![image](https://user-images.githubusercontent.com/114265258/205095407-56472097-c9a6-4d5b-ab62-44d67ffb28b9.png)
![image](https://user-images.githubusercontent.com/114265258/205095690-e315b223-794a-4192-af8b-5fb0f84ebf22.png)
![image](https://user-images.githubusercontent.com/114265258/205097224-85e7bd6f-65fb-4f7a-92c1-631e354e3823.png)

# 5) CIS Top 20

Foi utilizado como referência para as perguntas sobre a segurança cibernética o CIS top 20 (Center for Internet Security), separamos as principais perguntas separadas por blocos, para poder gerar as solucões. <br />

https://www.redseal.net/files/Compliance%20Datasheets/REDSEALcscCIScompliance03.pdf
