// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDDeZ_XLauRZWKrh9aE_hVud3nLKwI5i_k",
    authDomain: "kwitter-44011.firebaseapp.com",
    databaseURL: "https://kwitter-44011-default-rtdb.firebaseio.com",
    projectId: "kwitter-44011",
    storageBucket: "kwitter-44011.appspot.com",
    messagingSenderId: "309215219518",
    appId: "1:309215219518:web:8f44413f89f02c9a85a66f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
