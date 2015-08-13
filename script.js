window.onload = function  () { 
  console.log("JavaScript is alive");
  document.getElementById('greeting').innerText="Hi Planet Earth";
  changer();
  eventListener();  
  eventClearer();
};
var change = document.querySelectorAll("#essentials ul li");

function changer(){
  for(i=0; i<change.length; i++ ){
    change[i].style.backgroundColor="yellow";
  }
}



// add event listener for all list items
// when clicked

function eventListener(){
  // lis.addEventListener('click',function(){
    for(i=0; i<change.length; i++)
      change[i].addEventListener('click',function(){
      console.log(this);
      this.classList.add("selected");
    });
}


function eventClearer(){
    var restart = document.getElementById('reset');
    restart.addEventListener('click', function(){  
      for(i=0; i<change.length; i++){
        change[i].classList.remove('selected');
        change[i].style.backgroundColor='';
      }
  });
}
