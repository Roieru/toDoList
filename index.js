var pushID = 'h';

function submitClick(){
      var database = firebase.database().ref();
      var taskText = document.getElementById("task").value;
      var btnComplete = document.getElementById("add");

      var push = database.child("allTasks").push();
      push.set(taskText);
      pushID = push.key;
}
