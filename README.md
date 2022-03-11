# Sobre PalpiteBox.
  Este projeto foi desenvolvido ao assistir as aulas do DevPleno do curso FullStack Master.
  Proejto este que consiste em uma aplicação para envio de sugestões ou críticas de estabelicimentos,
  onde o proprietario pode acompanhar o que seus clientes enviou atraves da Planilha do Google Drive.
  Onde o mesmo ainda pode criar algumas promoções e assim que o cliente enviar ganha cupons de desconto ou 
  ganha que o proprietario criar.

  Projeto com uma versão online que pode ser visualizado em: https://palpite-box-azure.vercel.app
  Caso visualizar dados enviados pode acessar a Planilha em: https://docs.google.com/spreadsheets/d/10aE7nPYACkXJAjyE37SxGIF4V7qafgTKAW0BBFPlub0/edit?usp=sharing
  
  # Imagem do projeto.
 ![Preview](https://github.com/tuliofaria/palpite-box/blob/master/print.png?raw=true)

 # Como rodar o aplicativo.
  * Clone this repositóry $ git clone
  * access directory $ cd
  * Install all dependencies $ npm i
  * Run the aplication $ npm run dev
  * Caso queira criar uma nova Planilha no Google Drive pode alterar as Variaveis locais
    ```
      SHEET_CLIENT_EMAIL=client email do service credential
      SHEET_PRIVATE_KEY=private key do service credential - lembrar de substituir \n por quebras de linha e de codificar em base 64
      SHEET_DOC_ID=id da planilha
    ```

# Construido com.
  * [NextJS](https://nextjs.org/) - The React Framework.
  * [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
  * [Google Sheets](https://drive.google.com) - Planilhas online do Google



