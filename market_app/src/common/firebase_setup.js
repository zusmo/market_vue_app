import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCu1DH7WkyDNIWhElfluSSi6oG__nYP6PA",
    authDomain: "marketapp-278e2.firebaseapp.com",
    databaseURL: "https://marketapp-278e2.firebaseio.com",
    projectId: "marketapp-278e2",
    storageBucket: "marketapp-278e2.appspot.com",
    messagingSenderId: "387499543848",
    appId: "1:387499543848:web:f0db60af46d3407a35141d"
  };

  export default firebase.initializeApp(firebaseConfig); 