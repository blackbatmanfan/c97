
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDKKTOtYzUtpVR4W_FLPJLhIy31SCpoPig",
      authDomain: "twitter-ripof.firebaseapp.com",
      databaseURL: "https://twitter-ripof-default-rtdb.firebaseio.com",
      projectId: "twitter-ripof",
      storageBucket: "twitter-ripof.appspot.com",
      messagingSenderId: "535457465260",
      appId: "1:535457465260:web:ddccb0046eda7b9c267009"
    };
    
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "Kwitter_page.html";

}      

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Names - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='rdirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
       });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room", name);
       window.location = "Kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location = "index.html";
}
