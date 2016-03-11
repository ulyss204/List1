var btn = document.getElementById('btn');
var ult = document.getElementById('das');
 var p = document.getElementById('text');   
  

btn.addEventListener("click",function(){
  
  var li = document.createElement('li');
  var span = document.createElement('span');
  li.appendChild(document.createTextNode(document.getElementById('inp').value));
  li.appendChild(span);
  li.classList.toggle("das__item");
  span.classList.toggle("das__cross");
  span.innerHTML = "&times";

  span.onclick = function() {ult.removeChild(li);};
  if(document.getElementById('inp').value == ''){p.innerHTML = "ошибка,введите текст!";
  p.style.display = "block";

  }
  else{ult.appendChild(li);
  	}
   

  document.getElementById('inp').value = ''; 
});
document.getElementById('inp').addEventListener("click",function(){
  	p.style.display = "none";
  }); 
var x = ult.children;
for (var i = 0; i < x.length; i++){
    x[i].addEventListener("click",function(){
      this.remove();
      
     })
};