var firebaseConfig = {
    apiKey: "AIzaSyCc6u2fmFtKLCc-9nDUzDG9_tcEuTFcGLo",
    authDomain: "project94-a2a07.firebaseapp.com",
    projectId: "project94-a2a07",
    storageBucket: "project94-a2a07.appspot.com",
    messagingSenderId: "83854043617",
    appId: "1:83854043617:web:bc6a76661d3ef717428aa0"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user");
      room_name = localStorage.getItem("roomtosend");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }