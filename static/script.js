var el = x => document.getElementById(x);

function LoadImage(input) {
	//이전 객체 지우기
	var upimg = el('upimg');
	if(upimg){
		document.getElementById("screen").removeChild(upimg);
	}

  var reader = new FileReader();
  reader.onload = function (e) {
		var w = window.innerWidth;
		var elem = document.createElement("img");
		elem.setAttribute("src", e.target.result);
		if(w>420){
			elem.setAttribute("style", "max-height: 300px; max-width: 400px; position: absolute; z-index: -1; 	top: 50%; left:50%;  transform:translate(-50%, -50%);");
		}
		else {
			elem.setAttribute("style", "max-height: 180px; max-width: 200px; position: absolute; z-index: -1; 	top: 50%; left:50%;  transform:translate(-50%, -50%);");
		}
		elem.setAttribute("alt", "Flower");
		elem.setAttribute("id", "upimg");
		document.getElementById("screen").appendChild(elem);
		
  }
  reader.readAsDataURL(input.files[0]);
  $("#screen-text").text("processing...");
	$("#g1").removeClass("g1slow").addClass("g1fast").;
	$("#g2").removeClass("g2slow").addClass("g2fast");
	$("#g3").removeClass("g3slow").addClass("g3fast");
	$("#g1").attr('fill', '#e70000')
  $(".filebox").addClass("hide");
}