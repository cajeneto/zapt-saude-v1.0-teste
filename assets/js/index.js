"use strict";
 import { registerLog } from './_DATE_PATIENT.js'
 

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
 


 
 
 const conteudo = document.querySelector('body');
    function create(){
 // FUNÇÃO DO BOTÃO 'CADASTRAR' INSERE TODAS INFORMAÇÕES NO LOCAL STORAGE E CRIA 'ATALHO' NO CAMPO "REGISTRO CADASTRO".
 const btn = document.querySelector('#btnCadastro').addEventListener('click', () =>{ // AO CLICAR NO BOTÃO 'CADASTRAR' EXECUTA FUNÇÃO
    
    // PEGA VALORES DOS INPUT's DA CRIANÇA.
    const inputNameComplete = document.querySelector("#inputNameComplete").value;   
    const infoRegistro = document.querySelector("#infoRegistro").value;   
    const inputCPF = document.querySelector("#inputCPF").value;
    const inputDN = document.querySelector("#inputDN").value;
    const inputCartaoSUS = document.querySelector("#inputCartaoSUS").value;
    const inputRG = document.querySelector("#inputRG").value;
    const inputContato = document.querySelector("#inputContato").value;
       if(inputNameComplete == "" || infoRegistro == "" || inputCPF == "" || inputDN == "" || inputCartaoSUS == "" || inputContato == ""){
           alert("Preencha todos os dados da criança!");
           return false;
        }

        //CRIA OBJETO PARA ARMAZENAR INFORMAÇÕES DA CRIANÇA E INSERIR NO LOCAL STORAGE

        const armazena = {
        nomeCompletoCrianca : inputNameComplete,
        id_user             : infoRegistro,
        cpfCrianca          : inputCPF,
        dataNascimento      : inputDN,
        cartaoSus           : inputCartaoSUS,
        rg                  : inputRG,
        contato             : inputContato
        };
    
        // INSERE DADOS NO LOCAL STORAGE
      
        // FIM DA COLETA DE INPUT's DA CRIANÇA.


        // PEGA VALORES DOS INPUT's DO RESPONSÁVEL.
        let inputNameResp = document.querySelector("#inputNameResp").value;       
        let inputCPFResp = document.querySelector("#inputCPFResp").value;
        let inputRGResp = document.querySelector("#inputRGResp").value;
        let inputRua = document.querySelector("#inputRua").value;
        let inputNumero = document.querySelector("#inputNumero").value;
        let inputENDER = document.querySelector("#inputENDER").value;
        let inputCidade = document.querySelector("#inputCidade").value;
        let inputTitulo = document.querySelector("#inputTitulo").value;
        let inputZona = document.querySelector("#inputZona").value;
        let inputSecao = document.querySelector("#inputSecao").value;
        if(inputNameResp == "" || inputCPFResp == "" || inputRGResp == "" || inputRua == "" || inputTitulo == "" || inputZona == "" || inputSecao == ""){
            alert("Preencha todos os dados do responsável!");
            return false;
        }

        
        //CRIA OBJETO PARA ARMAZENAR INFORMAÇÕES DO RESPONSÁVEL E INSERIR NO LOCAL STORAGE
        const armazenaRESP = {
        nomeCompleto_RESP   : inputNameResp,
        cpf_RESP            : inputCPFResp,
        RG_RESP             : inputRGResp,
        RUA_RESP            : inputRua,
        NUM_RESP            : inputNumero,
        BAIRRO_RESP         : inputENDER,
        CIDADE_RESP         : inputCidade,
        TITULO_RESP         : inputTitulo,
        ZONA_RESP           : inputZona,
        SECAO_RESP          : inputSecao
        };
        
      


     /////////// CHAMA FUNÇÃO DE DATE PATIENT \\\\\\\\\\\\\\\\\\\\\\

     registerLog();

    /////////// FIM DA FUÇÃO DE DATE PATIENT \\\\\\\\\\\\\\\\\\\\\\

        
//////// FUNÇÃO PARA INSERIR DADOS NA COLLECTION PESSOA.
    function insertData(){
        set(ref(db, 'pessoa/'+infoRegistro), {
            crianca: armazena,
            responsavel: armazenaRESP
        })
        .then(()=> {
            alert('Inserido com sucesso')
        })
        .catch((error)=> {
            alert(error)
        })
     };
     insertData();

     ///// FUNÇÃO PARA BUSCAR DADOS NA COLLECTION PESSOA.
     /* function getDataPessoa() {
      const dbref = ref(db);
      var id_user = '01'
      get(child(dbref, "pessoa/"+ id_user))
        .then((snapshot) => {
            if (snapshot.exists()){
              console.log("teste" + snapshot.val().crianca);
            }
            else {
              console.log('nao encontrado');
            }
          })
          .catch((error)=>{
            console.log(error);
          })
        }
        getDataPessoa(); */

    // FUNÇÃO PARA EDITAR DADOS NA COLLECTION PESSOA.
   /*  function editData(){
      update(ref(db, 'pessoa/' + infoRegistro),{
        crianca : armazena ,
        responsavel : armazenaRESP
        })
        .then(()=>{
          alert('Alterado com Sucesso');
        })
        .catch((error)=>{
          alert(error);
        })
    }  */


        // LIMPAR CAMPOS DO INPUT.
                setTimeout(() => {
                // CAMPOS CRIANÇA
        document.querySelector("#inputNameComplete").value="";    
        document.querySelector("#infoRegistro").value="";    
        document.querySelector("#inputCPF").value="";
        document.querySelector("#inputDN").value="";
        document.querySelector("#inputCartaoSUS").value="";
        document.querySelector("#inputRG").value="";
        document.querySelector("#inputContato").value="";
                            
            // CAMPOS RESPONSÁVEL
        document.querySelector("#inputNameResp").value="";       
        document.querySelector("#inputCPFResp").value="";
        document.querySelector("#inputRGResp").value="";
        document.querySelector("#inputRua").value="";
        document.querySelector("#inputNumero").value="";
        document.querySelector("#inputENDER").value="";
        document.querySelector("#inputCidade").value="";
        document.querySelector("#inputTitulo").value="";
        document.querySelector("#inputZona").value="";
        document.querySelector("#inputSecao").value="";
                        
    }, 100) // CONTA OS MILISSEGUNDOS PARA LIMPAR OS CAMPOS  
} )
}
//// FIM DA FUNÇÃO CADASTRAR INFORMAÇÕES \\\\\

create();
 

    














// BOTÃO PARA GERAR DOCUMENTO PDF E DISPONIBIZA PARA IMPRESSÃO
    
