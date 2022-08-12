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

function namer() {
  var username = localStorage.getItem("user");
  document.getElementById("name").innerHTML = "Hi," + username;
}
function roomname(){
var room = document.getElementById("roomname").value;
localStorage.setItem("roomtosend",room);
firebase.database().ref("/").child(room).update({
  purpose:"addingroomname"
});
window.location= "kwitterpage.html";



}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
lol = "<div class='roomname' id ="+Room_names+" onclick = 'redirecttoroom(this.id)'>#"+Room_names+"</div>";
document.getElementById("output").innerHTML = lol;
//End code
});});}
getData();
function redirecttoroom(Room_names){
localStorage.setItem("room",Room_names);
window.location="kwitterpage.html";
}
