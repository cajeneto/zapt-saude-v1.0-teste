import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
//import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
 //import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
 

 export const firebaseConfig = {
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
 //export const db = getFirestore(app);




/* 
 const special = doc(db, 'testeCol');
 function docEmBrancoTeste(){

    const docData = {
        first: "Ada",
        last: "Lovelace",
        born: 1815
    }
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    setDoc(special, docData)
 }
docEmBrancoTeste() */
