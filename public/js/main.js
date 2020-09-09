// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCBdMlSJKBNafROhSHy3KC_NWT86Uy1bRk",
    authDomain: "call-for-speakers-tnl.firebaseapp.com",
    databaseURL: "https://call-for-speakers-tnl.firebaseio.com",
    projectId: "call-for-speakers-tnl",
    storageBucket: "call-for-speakers-tnl.appspot.com",
    messagingSenderId: "537174530738",
    appId: "1:537174530738:web:367a659c4c03bf28e487ab",
    measurementId: "G-84V245HDZX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//reference messages collection
var messagesRef = firebase.database().ref('messages');

// store all radio buttons
var radios = document.getElementsByName('radios');

//listen for form submit
document.getElementById('cfs_form').addEventListener('submit', submitForm);


//submit form
function submitForm(e){
 e.preventDefault();

 //get values
 var title = getInputVal('title');
 var name = getInputVal('name');
 var email = getInputVal('email');
 var descrp = getInputVal('descrp');
 var aud = getInputVal('aud');
 var solucoes = getInputVal('solucoes');
 var selectedLab;

 for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    // save selected radio to the previously declared variable
    selectedLab = radios[i].value;

    // only one radio can be logically checked, don't check the rest
    break;
  }
}
  
  //save message
 saveMessage(title, name, email, descrp, aud, solucoes, selectedLab);

//Clear form after submitting
  document.getElementById('cfs_form').reset();

}



//function to get form values
function getInputVal(id){
 return document.getElementById(id).value;
}

//save message to firebase 
function saveMessage(title, name, email, descrp, aud, solucoes, selectedLab){
 var newMessageRef = messagesRef.push();
 newMessageRef.set({
  title: title,
  name: name,
  email: email,
  selectedLab: selectedLab,
  descrp: descrp,
  aud: aud,
  solucoes: solucoes
 });

alert("Cadastro feito com sucesso");

}