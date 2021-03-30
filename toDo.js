var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var check = document.querySelector("UL");
check.addEventListener("click",function(ev){
  if (ev.target.tagName === "LI"){
    ev.target.classList.toggle("checked");
  }
}, false);

function addItem(){
  var li = document.createElement("LI");
  var inputValue = document.getElementById("input").value;
  var txtNode = document.createTextNode(inputValue);
  li.appendChild(txtNode);

  if (inputValue === "") {
    alert("Please enter a value to add for the list");
  }
  else{
    document.getElementById("items").appendChild(li);
  }
  document.getElementById("input").value = "";
  
  var listItem = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < listItem.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listItem[i].appendChild(span);
  }


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

}
