const firebaseConfig = {
    apiKey: "AIzaSyAlH7uUCo7skC7tuEAWFIyIYk71cYf5R94",
    authDomain: "chatt-c2e59.firebaseapp.com",
    databaseURL: "https://chatt-c2e59-default-rtdb.firebaseio.com",
    projectId: "chatt-c2e59",
    storageBucket: "chatt-c2e59.appspot.com",
    messagingSenderId: "1030276219488",
    appId: "1:1030276219488:web:083d0f8fa2cd2a6ee2b905",
    measurementId: "G-5VSQLY2885"
  };
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"     +user_name +"!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
     getData();
     function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html"
     }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="qwitter.html";
}


