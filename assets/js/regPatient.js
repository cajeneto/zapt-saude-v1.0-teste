//import { db } from "./index.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { getDatabase, set, get, update, remove, ref, child} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js"
//import { registerLog } from "./_DATE_PATIENT";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYuTeXoVD_bPDJmXFsmLg1jZnmCeoApWE",
  authDomain: "zapt-saude-main.firebaseapp.com",
  projectId: "zapt-saude-main",
  storageBucket: "zapt-saude-main.appspot.com",
  messagingSenderId: "323783024816",
  appId: "1:323783024816:web:ee878fa77af952b335db75",
  measurementId: "G-8WJ4W944C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getDatabase(app);
//console.log(app)



   
   // Função para listar o array que está dentro da collection
   function listarArray() {
      const dbref = ref(db);
      const collectionName = 'pessoa/';
      //const id_user = ''
      get(child(dbref, collectionName))
      .then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
               let childKey = childSnapshot.key;
               let childData = childSnapshot.val();
               var criancaCol = childSnapshot.val().crianca.nomeCompletoCrianca; 
               var infoRegistro = childSnapshot.val().crianca.id_user;
               var responsavelCol = childSnapshot.val().responsavel.nomeCompleto_RESP;
               var cartaoSus = childSnapshot.val().crianca.cartaoSus; 
               var contato = childSnapshot.val().crianca.contato; 
               var cpfCrianca = childSnapshot.val().crianca.cpfCrianca; 
               var dataNascimento = childSnapshot.val().crianca.dataNascimento; 
               var rg = childSnapshot.val().crianca.rg;
               var cpf_resp = childSnapshot.val().responsavel.cpf_RESP;
               var rua_resp = childSnapshot.val().responsavel.RUA_RESP;
               var numero_resp = childSnapshot.val().responsavel.NUM_RESP;
               var bairro_resp = childSnapshot.val().responsavel.BAIRRO_RESP;
               var cidade_resp = childSnapshot.val().responsavel.CIDADE_RESP;
               var rg_resp = childSnapshot.val().responsavel.RG_RESP;
               var titulo_resp = childSnapshot.val().responsavel.TITULO_RESP;
               var zona_resp = childSnapshot.val().responsavel.ZONA_RESP;
               var secao_resp = childSnapshot.val().responsavel.SECAO_RESP;


               
               
               // Função para criar e retornar a div com as informações
function criarDiv(infoRegistro, criancaCol, cpfCrianca, responsavelCol, dataNascimento, cartaoSus, contato) {
   const div = document.createElement('div');
   div.classList.add('qntPac');
   div.id = `qtdPac-${infoRegistro}`;

   div.innerHTML = `
       <div class="nomePacListReg"><strong>NOME DA CRIANÇA: <br></strong>${criancaCol}</div>
       <div class="cpfCriaReg"><strong> CPF: <br></strong>${cpfCrianca}</div>
       <div class="idPacReg"><strong>ID REGISTRO: <br></strong>${infoRegistro}</div>
       <div class="ResponsavelCriaReg"><strong> RESPONSÁVEL:<br></strong>${responsavelCol}</div>
       <div class="dnCriaReg"><strong>DATA NASCIMENTO: <br></strong>${dataNascimento}</div>
       <div class="SUSReg"><strong> CARTÃO SUS:<br></strong>${cartaoSus}</div>
       <div class="TelefoneReg"><strong> CONTATO: <br></strong>${contato}</div>
       <div class="buttonEdit">
           <button class="btnEditReg">Editar
           <span class="material-symbols-outlined">edit
           </span>
           </button>
       </div>
       <div class="buttonImprime">
       <button class="btnImprimeReg">Imprimir
       <span class="material-symbols-outlined">print</span>
       </button>
       </div>
   `;

   const btnEdit = div.querySelector('.btnEditReg');
    const btnImprime = div.querySelector('.btnImprimeReg');

   // Adicionar listeners para os botões dentro da div criada
   div.querySelector('.btnEditReg').addEventListener('click', () => {
       //console.log('Esse é o botão de editar do ID ' + infoRegistro);
       // Aqui você pode adicionar a lógica para editar com o ID infoRegistro
       acaoBotaoEdit()
   });

   div.querySelector('.btnImprimeReg').addEventListener('click', () => {
      // console.log('Esse é o botão de imprimir o ID ' + infoRegistro);
       // Aqui você pode adicionar a lógica para imprimir com o ID infoRegistro
       acaoBotaoImprime(infoRegistro);
   });

   return div;
}

function acaoBotaoEdit(){
   const modal = document.querySelector('dialog')
   
   if(confirm(`Você deseja editar o dados do paciente: \n${criancaCol}\nID Registro: ${infoRegistro}`)){
      modal.showModal()
      // PEGA DADOS DO PACIENTE PARA QUE POSSAR SER EDITADO;
      const edit_inputNameComplete = document.querySelector('#inputNameCompleteModal').value = criancaCol
      const edit_inputCPF = document.querySelector('#inputCPFModal').value = cpfCrianca
      const edit_inputDN = document.querySelector('#inputDNModal').value = dataNascimento
      const edit_inputCartaoSUS = document.querySelector('#inputCartaoSUSModal').value = cartaoSus
      const edit_inputRG = document.querySelector('#inputRGModal').value = rg
      const edit_inputContato = document.querySelector('#inputContatoModal').value = contato
      const edit_inputIDRegistroModal = document.querySelector('#inputIDRegistroModal').value = infoRegistro
      

      // PEGA DADOS DO RESPONSÁVEL PARA QUE POSSAR SER EDITADO;/////////////////////////////////////

      const inputNomeResponsavelModal = document.querySelector('#inputNomeResponsavelModal').value = responsavelCol
      const inputCPFResponsavelModal = document.querySelector('#inputCPFResponsavelModal').value = cpf_resp
      const inputRuaResponsavelModal = document.querySelector('#inputRuaResponsavelModal').value = rua_resp
      const inputBairroModal = document.querySelector('#inputBairroModal').value = bairro_resp
      const inputCidadeModal = document.querySelector('#inputCidadeModal').value = cidade_resp

      /// CONFIGURAÇÃO DOS BOTÕES DO MODAL

      const btnCadastroModal = document.querySelector('#btnCadastroModal').addEventListener('click', ()=> {
         alert("Dados alterado com sucesso!")
         modal.close();
         location.reload();
      })

      const btnCancel = document.querySelector('#btnCancel').addEventListener('click', () => {
         modal.close();
      })
   }

   

}



function acaoBotaoImprime(id) {
   if (id === infoRegistro) {
       //console.log('Ação de impressão para o ID '+infoRegistro);
       
      const conteudo = `
      <div class="imgLogo1">
         <img class="imgLogo" src="/assets/img/zapt-saude-logo.jpeg">
      </div>
      <div class="headerZapt">
         <h4 style='text-align:start'>HORÁRIO DE CHEGADA: _____________</h4>
         <h4 style='text-align:end'>HORÁRIO DE SAÍDA: _____________</h4>
         <h4 style='text-align:start'>ASSISTENTE SOCIAL: _____________</h4>
         <h4 style='text-align:end'>PSICÓLOGA(O): _____________</h4>
      </div>
      <div class="pacienteTitulo">
            <p class="nomePacientePDF">DADOS DO PACIENTE</p>
      </div>
      <div class="dadosPaciente">
            <h4 style='text-align:start'>NOME: ${criancaCol}</h4>
            <h4 style='text-align:start' class="cpfCrianca">CPF: ${cpfCrianca}</h4>
            <h4 style='text-align:start' class="dataNascimentoCrianca">DATA NASCIMENTO: ${dataNascimento}</h4>
            <h4 style='text-align:start' class="cartaoSUSCrianca">CARTÃO SUS: ${cartaoSus}</h4>
            <h4 style='text-align:start' class="RGCrianca">RG: ${rg}</h4>
      </div>
      <div class="pacienteTitulo">
            <p class="nomePacientePDF">DADOS DO RESPONSÁVEL</p>
      </div>
      <div class="dadosResponsavel">
            <h4 style='text-align:start' class="nomeResponsavel">NOME RESPONSÁVEL: ${responsavelCol}</h4>
            <h4 style='text-align:start' class="CPFResponsavel"> CPF: ${cpf_resp}</h4>
            <h4 style='text-align:start' class="RGResponsavel">RG RESPONSÁVEL: ${rg_resp}</h4>
            <h4 style='text-align:start' class="ContatoResponsavel">CONTATO: ${contato}</h4>
            <h4 style='text-align:start' class="EnderecoResponsavel">ENDEREÇO: ${rua_resp}, ${numero_resp}, ${bairro_resp} - ${cidade_resp}.</h4>
            <h4 style='text-align:start' class="tituloResponsavel">NÚMERO TÍTULO DE ELEITOR: ${titulo_resp} ZONA: ${zona_resp} SEÇÃO: ${secao_resp}</h4>
      </div>
      `;
      const tabela = `
      <div class="prontuario">
         <h3>PRONTUÁRIO</h3>
      </div>
      <table>
      <thead>
        <tr>
          <th class="data">
            <h3>DATA</h3>
          </th>
          <th class="especialidade">
            <h3>ESPECIALIDADE</h3>
          </th>
          <th class="tratativa">
            <h3>TRATATIVA</h3>
          </th>
          <th class="aa">
            <h3>A.</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
      </tbody>`;



      let estilo = "<style>";
      estilo += "body{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;}";
      estilo += ".imgLogo1 {display: flex; align-itens: center; justify-content: center;}"; //alinha a img no centro da página
      estilo += ".imgLogo {display: flex; background-image: url('/assets/img/zapt-saude-logo1.jpeg'); width: 250px; height: 95px; align-itens: center; justify-content: center; border: none}";
      estilo += ".headerZapt {font-size: 11px; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 0.5fr 0.5fr; height: 90px}";
      estilo += ".pacienteTitulo {font-size: 20px; display: flex; align-itens: center; justify-content: center; height: 40px; }";
      estilo += ".dadosPaciente {font-size: 12px;padding: 5px;display: grid; grid-template-columns: 1.5fr 1fr 1fr; grid-template-rows: 0.5fr 0.5fr; gap: 10px;border: 2px solid gray; border-radius: 20px; margin-top: 15px; margin-bottom: -17px;padding-bottom: 10px}";
      estilo += ".dadosResponsavel {font-size: 12px; padding: 5px; display: grid; grid-template-columns: 2fr 1.5fr; grid-template-rows: 0.5fr 0.5fr 0.5fr;gap: 10px; border: 2px solid gray; border-radius: 20px; margin-top: 15px;padding-bottom: 20px}";
      estilo += ".prontuario {display: grid; align-itens: center; justify-content: center; height: 50px}";
      estilo += "table {border-collapse: collapse;}";
      estilo += "table tr, table td, table th {border: 2px solid gray;}";
      estilo += "table td {height: 30px;}";
      estilo += ".data { width: 90px;padding-top: 20px;font-size: 12px;}";
      estilo += ".especialidade { width: 200px; padding-top: 20px;font-size: 12px;}";
      estilo += ".tratativa { width: 350px; padding-top: 20px;font-size: 12px;}";
      estilo += ".aa { width: 90px; padding-top: 20px;font-size: 12px;}";
      estilo += "h4 { height: 5px; }";

      
      
      estilo += "</style>";
      const win = window.open('','', 'height=700,width=900');
      win.document.write('<html><head>');
      win.document.write('<title>ZAPT SAÚDE</title>');
      win.document.write(estilo);
      win.document.write('</head>');
      win.document.write('<body>');
      win.document.write(conteudo+tabela);
      //win.document.write(tabela);
      win.document.write('</body></html>');
      win.print()
      //win.close()
      

       // Coloque aqui a lógica para imprimir o item com o ID 123
   } else {
       console.log('Ação de impressão para outro ID');
       // Outra ação ou lógica para IDs diferentes
   }
}

function criaDivFilho() {
   // Suponhamos que você tenha variáveis com os valores necessários
   const infoRegistro1 = 'infoRegistro';
   const criancaCol1 = criancaCol;
   const cpfCrianca1 = '123.456.789-00';
   const responsavelCol1 = 'Maria';
   const dataNascimento1 = '01/01/2010';
   const cartaoSus1 = '1234567890';
   const contato1 = '987654321';

   const reg1 = document.querySelector('.pacCad');
   reg1.appendChild(criarDiv(infoRegistro, criancaCol, cpfCrianca, responsavelCol, dataNascimento, cartaoSus, contato));
}



criaDivFilho();

                  

                  
                 
                  
               })
            })
            .catch((error) => {
               console.error('Erro ao listar o array:', error);
            });
   }

   listarArray();

   
   
   
   
   //btNew();
   // Chame a função para listar o array
   
   //function obterRegistros5Min() {
      // Defina a lógica para obter registros aqui
      //console.log('Obtendo registros a cada 1 minuto...');
      //listarArray()
      //}
      
      // Defina um intervalo de 5 minutos (5 * 60 * 1000 milissegundos)
      //const intervalo = 1 * 60 * 1000;
      
      // Execute a função a cada 5 minutos
      //setInterval(obterRegistros5Min, intervalo);
      
      // Chame a função uma vez imediatamente para iniciar o processo
      
      
      
      
      
      
      
      
      
      /* window.onload = () => {
         //getDataPessoa();
         //criaDivfilho();
         //listarArray()
         //obterRegistros5Min();
         //EditDados()
         
      } */
      
      
         
      


// função para editar dados
function EditDados(){

   const collectionName = 'pessoa/';
   const trocaNome = 'teste troca de nome 11'
   
      update(ref(db, collectionName +'12/crianca'), {
         nomeCompletoCrianca: trocaNome,
         
      })
      .then(()=>{
         alert("Atualizado com sucesso!");
         //window.location.reload();
         }).catch((error)=>{
            console.error(`Error: ${error}`);
            });
            
   }
  //EditDados()

  




 




// getHoss








