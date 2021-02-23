'use strict';
window.addEventListener('DomContentLoaded', start);


function start(){
  
}

fetch('https://petlatkea.dk/2021/hogwarts/students.json')
.then(function(response){
    console.log(response)
    return response.json(); 
})
.then(function(data){
console.log(data);
    dataReceived(data);
})
function dataReceived(students){
 students.forEach(student => {
   console.log(student);
   showList(student);
   
 });
       
}      
function showList(student){
    console.log(student);
const template = document.querySelector('#myTemplate').content;
const copy = template.cloneNode(true);
copy.querySelector('.name').textContent = student.fullname;
copy.querySelector('.gender').textContent = student.gender;
copy.querySelector('.house').textContent = student.house;

const parentElement = document.querySelector('section#students');

document.querySelector('main').appendChild(copy);

modal(student);
};

function modal(student){

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}  
};




/*   // Get the modal
  const modal = document.getElementById("myModal");
  // Get the button that opens the modal
  const btn = document.getElementById("myBtn");
  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }  
  }; */
