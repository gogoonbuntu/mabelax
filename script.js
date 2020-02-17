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