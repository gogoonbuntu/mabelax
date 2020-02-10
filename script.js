var el = x => document.getElementById(x);
welcome();


function LoadImage(input) {
  var reader = new FileReader();
  reader.onload = function (e) {
    el('mainimg').src = e.target.result;
  }
  reader.readAsDataURL(input.files[0]);
  $(".instruction").text("processing...");
  $(".filebox").addClass("hide");
}

function welcome() {
  var a = Math.random();
  if(a<0.3){
    $("#welcome").text("Welcome to our service :)");
  } else if(a<0.6){
    $("#welcome").text("Have a great day :D");
  } else {
    $("#welcome").text("You look nice today 乃");
  }
  
}