var elements= document.getElementsByClassName('column');
var i;
function one(){
  for(i= 0; i< elements.length; i++){
    elements[i].style.msFlex= '100%';
    elements[i].style.flex= '100%';
  }
}

function two(){
  for(i= 0; i< elements.length; i++){
    elements[i].style.msFlex= '50%';
    elements[i].style.flex= '50%';
  }
}

function four(){
  for(i= 0; i< elements.length; i++){
    elements[i].style.msFlex= '25%';
    elements[i].style.flex= '25%';
  }
}

function More(){
  for(i= 0;i< elements.length; i++){
    elements[i].style.msFlex= '10%';
    elements[i].style.flex= '10%';
  }
}