
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCHsRpyLVhpJZyOpZ14DssEVo60alkM8po",
    authDomain: "ulisesproject-9cbd7.firebaseapp.com",
    databaseURL: "https://ulisesproject-9cbd7.firebaseio.com",
    projectId: "ulisesproject-9cbd7",
    storageBucket: "ulisesproject-9cbd7.appspot.com",
    messagingSenderId: "292343109983"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var employeeName = "Connor";
  var role = "Badass";
  var startDate = "01/01/1971";
  var monthlyRate = 

  database.ref().set({
    employeeName: employeeName,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });


  $("#add-employee-btn").on("click", function(e){
      e.preventDefault();

      employeeName = $("#employee-name-input").val().trim();
      role = $("#role-input").val().trim();
      startDate = $("#start-input").val().trim();
      monthlyRate = $("#rate-input").val().trim();

      database.ref().push({
        employeeName : employeeName,
        role : role,
        startDate : startDate,
        monthlyRate : monthlyRate
      })

      $("#employee-name-input").val("").trim();
      $("#role-input").val("").trim();
      $("#start-input").val("").trim();
      $("#rate-input").val("").trim();


  })

