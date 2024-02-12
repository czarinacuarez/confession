
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBHLkEHuq0AloJT6PmfBbMdNiU48exOFQ",
    authDomain: "confessionwall-70aca.firebaseapp.com",
    databaseURL: "https://confessionwall-70aca-default-rtdb.firebaseio.com",
    projectId: "confessionwall-70aca",
    storageBucket: "confessionwall-70aca.appspot.com",
    messagingSenderId: "1007893096286",
    appId: "1:1007893096286:web:df104b2100717e7c11d1cf"
  };
  
   firebase.initializeApp(firebaseConfig);
  
   var confessionDB = firebase.database().ref("confessionwall");
   document.getElementById("confession").addEventListener("submit", submitForm);
  
  
   function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var program = getElementVal("program");
    var msgContent = getElementVal("msgContent");
    var date = getElementVal("date");
 
    saveMessages(name, program, date, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("confession").reset();
  }
  
  const saveMessages = (name, program, date, msgContent) => {
    var newContactForm = confessionDB.push();
  
    newContactForm.set({
      name: name,
      program: program,
      date:date,
      msgContent: msgContent,
    });
  };
  
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
  
