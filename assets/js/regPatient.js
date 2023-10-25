//import { db } from "./index.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { getDatabase, set, get, update, remove, ref, child} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js"
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





/* export function getDataPessoa() {
   const dbref = ref(db);
   var id_user = '02'
   var btnEditReg = document.getElementById('btnEditReg').addEventListener('click', ()=> {
      get(child(dbref, 'pessoa/'+ id_user))
      .then((snapshot)=>{
          const criancaCol = snapshot.val().crianca.nomeCompletoCrianca;
          
          console.log(criancaCol)
          const responsavelCol = snapshot.val().responsavel.nomeCompleto_RESP;
          console.log(responsavelCol)
         })
      .catch((error)=> {
         console.log(error);
         })
   });
   
}
   getDataPessoa(); */
























// função para puxar dados do localStorage e inserir na guia de Relatórios.


//const reg1 = document.querySelector('.reg1')
/* const insereDiv = `
<div class="qntPac">
   <div class="nomePacListReg"><strong>NOME DA CRIANÇA: <br></strong></div>
   <div class="idPacReg"></div>
   <div class="cpfCriaReg"></div>
   <div class="ResponsavelCriaReg"></div>
   <div class="dnCriaReg"></div>
   <div class="SUSReg"></div>
   <div class="TelefoneReg"></div>
<div class="buttonEdit">
   <button id="btnEditReg">Editar</button>
</div>
<div class="buttonImprime">
   <button id="btnImprimeReg">Imprimir</button>
</div>
</div>
`

function criaDivfilho() {
   const reg1 = document.querySelector('.pacCad')
   reg1.innerHTML+=insereDiv
   btnEditarReg();
   btnImprimeReg();
   //getDataPessoa();
   //criaElementoReg();
} */
//criaDivfilho();

/* export function insereListReg(){
   var nomePacListReg = document.querySelector('.nomePacListReg').innerHTML+="<strong>NOME DA CRIANÇA: <br></strong>"+localStorage.getItem('NOME_CRIANCA');
   var cpfCriaReg = document.querySelector('.cpfCriaReg').innerHTML+="<strong> CPF: <br></strong>"+localStorage.getItem('CPF_CRIANCA');
   var dnCriaReg = document.querySelector('.dnCriaReg').innerHTML+=" <strong>DATA NASCIMENTO: <br></strong>"+localStorage.getItem('DN_CRIANCA');
   //dados responsável
   var ResponsavelCriaReg = document.querySelector('.ResponsavelCriaReg').innerHTML+="<strong> RESPONSÁVEL:<br></strong> "+localStorage.getItem('NOME_RESP');
   var SUSReg = document.querySelector('.SUSReg').innerHTML+="<strong> CARTÃO SUS:<br></strong> "+localStorage.getItem('CARTAOSUS_CRIANCA');
   var TelefoneReg = document.querySelector('.TelefoneReg').innerHTML+="<strong> CONTATO: <br></strong> "+localStorage.getItem('CONTATO_CRIANCA');
   
} */
//insereListReg();


function btnEditarReg(){
   var btnEditReg = document.getElementById('btnEditReg').addEventListener('click', ()=> {
   });
   
}

function btnImprimeReg(){
   var btnImprimeReg = document.getElementById('btnImprimeReg').addEventListener('click', ()=> {
      alert('ola mundo imprime')
   });
   
}


/* function criaElementoReg(){
   let insereDivFilho = document.querySelector('.pacCad')//pega a div pacCad para inserir elemento dentro dela.
   let divFilho = document.createElement("div")// cria elemento div //.setAttribute('class', 'qntPac');
   divFilho.setAttribute('class', 'qntPac')//adiciona class com valor qntPac na div que foi criada
   insereDivFilho.appendChild(divFilho)
   
} */


/* function getDataPessoa() {
   const dbref = ref(db);
   //console.log(get(child(dbref, 'pessoa/')))
   var id_user = '234'            
   //var btnEditReg = document.getElementById('btnEditReg').addEventListener('click', ()=> {
      get(child(dbref, 'pessoa/'+ id_user))
      .then((snapshot)=>{
         const criancaCol = snapshot.val().crianca.nomeCompletoCrianca; 
         const responsavelCol = snapshot.val().responsavel.nomeCompleto_RESP;
         const cartaoSus = snapshot.val().crianca.cartaoSus; 
         const contato = snapshot.val().crianca.contato; 
         const cpfCrianca = snapshot.val().crianca.cpfCrianca; 
         const dataNascimento = snapshot.val().crianca.dataNascimento; 
         const rg = snapshot.val().crianca.rg; 

   

         var nomePacListReg = document.querySelector('.nomePacListReg').innerHTML+="<strong>NOME DA CRIANÇA: <br></strong>"+criancaCol;
         var idPacReg = document.querySelector('.idPacReg').innerHTML+="<strong>ID Registro: <br></strong>"+id_user;
         var cpfCriaReg = document.querySelector('.cpfCriaReg').innerHTML+="<strong> CPF: <br></strong>"+cpfCrianca;
         var dnCriaReg = document.querySelector('.dnCriaReg').innerHTML+=" <strong>DATA NASCIMENTO: <br></strong>"+dataNascimento;
         //dados responsável
         var ResponsavelCriaReg = document.querySelector('.ResponsavelCriaReg').innerHTML+="<strong> RESPONSÁVEL:<br></strong> "+responsavelCol;
         var SUSReg = document.querySelector('.SUSReg').innerHTML+="<strong> CARTÃO SUS:<br></strong> "+cartaoSus;
         var TelefoneReg = document.querySelector('.TelefoneReg').innerHTML+="<strong> CONTATO: <br></strong> "+contato;

         })
      .catch((error)=> {
         console.log(error);
         })
 
   
} */
   //getDataPessoa();




   
   // Função para listar o array
   function listarArray() {
      const dbref = ref(db);
      const collectionName = 'pessoa/';
      const id_user = ''
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

               console.log(criancaCol)
               console.log(infoRegistro)
               console.log(responsavelCol)
               console.log(cartaoSus)
               console.log(contato)
               console.log(cpfCrianca)
               console.log(dataNascimento)
               console.log('--------------------------------')

               
const insereDiv = `
<div class="qntPac">
   <div class="nomePacListReg"><strong>NOME DA CRIANÇA: <br></strong>${criancaCol}</div>
   <div class="idPacReg"><strong>ID Registro: <br></strong>${infoRegistro}</div>
   <div class="cpfCriaReg"><strong> CPF: <br></strong>${cpfCrianca}</div>
   <div class="ResponsavelCriaReg"><strong>DATA NASCIMENTO: <br></strong>${dataNascimento}</div>
   <div class="dnCriaReg"><strong> RESPONSÁVEL:<br></strong>${responsavelCol}</div>
   <div class="SUSReg"><strong> CARTÃO SUS:<br></strong>${cartaoSus}</div>
   <div class="TelefoneReg"><strong> CONTATO: <br></strong>${contato}</div>
<div class="buttonEdit">
   <button id="btnEditReg">Editar</button>
</div>
<div class="buttonImprime">
   <button id="btnImprimeReg">Imprimir</button>
</div>
</div>
`
function criaDivfilho() {
   const reg1 = document.querySelector('.pacCad')
   reg1.innerHTML+=insereDiv
   btnEditarReg();
   btnImprimeReg();
   //getDataPessoa();
   //criaElementoReg();
}
criaDivfilho();

               //btnImprimeReg();
               //var nomePacListReg = document.querySelector('.nomePacListReg').innerHTML=criancaCol;
               //var idPacReg = document.querySelector('.idPacReg').innerHTML="<strong>ID Registro: <br></strong>"+infoRegistro;
               //var cpfCriaReg = document.querySelector('.cpfCriaReg').innerHTML="<strong> CPF: <br></strong>"+cpfCrianca;
               //var dnCriaReg = document.querySelector('.dnCriaReg').innerHTML=" <strong>DATA NASCIMENTO: <br></strong>"+dataNascimento;
               //dados responsável
               //var ResponsavelCriaReg = document.querySelector('.ResponsavelCriaReg').innerHTML="<strong> RESPONSÁVEL:<br></strong> "+responsavelCol;
               //var SUSReg = document.querySelector('.SUSReg').innerHTML="<strong> CARTÃO SUS:<br></strong> "+cartaoSus;
               //var TelefoneReg = document.querySelector('.TelefoneReg').innerHTML="<strong> CONTATO: <br></strong> "+contato;
               //console.log(childKey)
               //console.log(childData)
               



               //console.log(`${childKey}: ${JSON.stringify(childData)}`);
            
   
       })
      })
       .catch((error) => {
         console.error('Erro ao listar o array:', error);
       });
   }

   
   // Chame a função para listar o array
   //listarArray();




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











window.onload = () => {
   //getDataPessoa();
   //criaDivfilho();
   listarArray()
   //obterRegistros5Min();
}















