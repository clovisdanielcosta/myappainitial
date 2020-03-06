# myappainitial

ReactJS

    O ReactJS não é uma linguagem de programação e nem tampouco um Framework.
    Trata-se de uma biblioteca de JavaScript desenvolvida pelos engenheiros 
    do Facebook para facilitar suas rotinas internas no desenvolvimento 
    de interfaces de usuários em algumas aplicações mas que acabou 
    sendo liberada como open source.

Instalação 
É preciso instalar o npm (instalador para qualquer
projeto JavaScript): $ sudo apt-get npm install
Crie um diretório onde irá instalar o projeto: $ mkdir meuprojeto
Dentro do diretório: $ npm init
Depois: $ npm install --save react@16.8.6 react-dom@16.8.6 react-scripts@3.0.1
Editar o arquivo package.json com as configurações necessárias.
Exemplo:
<imagem>
Subindo a Aplicação
Após instalado levantar o servidor: $ npm start

Importante: 
O nome do seu projeto não pode ser o nome do diretório.
Caso contr  ário um erro será gerado como abaixo:
$ npm ERR! Refusing to install react as a dependency of itself
Se precisar alterar o nome do projeto edite o arquivo package.json
gerado após o comando anterior 'npm init'. Troque o "name" para 
qualquer nome diferente do diretório onde o projeto está sendo criado. 

Detalhe (não é uma boa prática mas pode ser útil):
Após ter rodado todos os comandos e efetuado todas as configurações para 
que a aplicação possa subir, pode-se copiar todo o conteúdo do diretório 
atual para um novo diretório e efetuar as apropriados customizações nos 
arquivos package.json, index.html, index.js e styles.css e a nova aplicação
estará pronta para subir. Caso nenhuma alteração seja efetuada a aplicação 
que subirá no servidor será um clone da anterior.
