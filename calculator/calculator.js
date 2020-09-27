var nums=document.querySelectorAll(".num");
var equal=document.getElementById("equal");
var input=document.querySelector("input");
var clear=document.getElementById("clr");
var back=document.getElementById("back");
Array.from(nums).forEach(
  function(num){
      num.addEventListener("click",            
      function (e){
        input.value+=e.target.id;
  })}
)
clear.addEventListener("click",
      function(){
        input.value="";
      })
equal.addEventListener("click",
      function(){
        input.value=eval(input.value);
      })
back.addEventListener("click",
      function(){
          input.value=input.value.substring(0,input.value.length-1)
      })


