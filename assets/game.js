
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApUg7Mr6v6DwW6bjTcEIYS47J8egFqoWE",
    authDomain: "rock-paper-scissors-35eda.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-35eda.firebaseio.com",
    projectId: "rock-paper-scissors-35eda",
    storageBucket: "rock-paper-scissors-35eda.appspot.com",
    messagingSenderId: "588343723798"
  };
  firebase.initializeApp(config);




  $('.test').text('HELLO THERE')

let database = firebase.database();
let counter = 0;

  $('.stillTesting').on('click', function(){
    counter++;
    database.ref().set({
      clickCount: counter
    });
  })


  database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
    $("#click-value").text(snapshot.val().clickCount);
    counter = snapshot.val().clickCount;
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });