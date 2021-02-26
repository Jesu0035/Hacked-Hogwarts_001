'use strict';

window.addEventListener('DOMContentLoaded', start);



const allStudents = [];
const settings = {
  filterBy: "all",
  sortBy: "firstname",
  sortDir: "asc",
};
const Student = {
  firstName:'',
  middleName:'',
  lastName: '',
  gender:'',
  house: ''
};
function start(){
 loadJSON() 

}

function loadJSON() {
  fetch("https://petlatkea.dk/2021/hogwarts/students.json")
    .then((response) => response.json())
    .then((jsonData) => {
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
 
jsonData.forEach((jsonObject) => {
/* console.log (jsonObject); */
const student = Object.create(Student);


const fullNameTrim = jsonObject.fullname.trim();
const firstSpace = fullNameTrim.indexOf(" ");
const lastSpace = fullNameTrim.lastIndexOf(" ");

const firstName = fullNameTrim.substring(0, firstSpace);
const firstNameTrim = firstName.trim();
const firstNameFinal = firstNameTrim.charAt(0).toUpperCase() + firstNameTrim.substring(1).toLowerCase();

const middleName = fullNameTrim.substring(firstSpace + 1, lastSpace);
const middleNameTrim = middleName.trim();
const middleNameFinal = middleNameTrim.charAt(0).toUpperCase() + middleNameTrim.substring(1).toLowerCase();

const lastName = fullNameTrim.substring(lastSpace);
const lastNameTrim = lastName.trim();
const lastNameFinal = lastNameTrim.charAt(0).toUpperCase() + lastNameTrim.substring(1).toLowerCase();

const house = jsonObject.house.trim();
const houseFinal = house[0].toUpperCase() + house.substring(1).toLowerCase();

student.firstName = firstNameFinal;
student.middleName = middleNameFinal;
student.lastName = lastNameFinal;

student.house = houseFinal;
allStudents.push(student); 

const texts = jsonObject.fullname.trim().split(' '); 

  if(texts.lengt == 1){

    student.firstName = capitalizeString(texts[0]);
  }
  
  if (texts.lengt == 1){
    student.middleName = capitalizeString(texts[1]);
  }
  
if ( texts.leght == 2){
  student.lastName= capitalizeString(texts[2]);
}
  student.gender = capitalizeString(jsonObject.gender);
  student.house = capitalizeString(jsonObject.house); 
 
});
function capitalizeString(string){
return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase(); 
} 
console.log(allStudents);

 displayList(allStudents);
 builtList()
} 
//----------------filtering
function selectFilter(event) {
  const filter = event.target.dataset.filter;
  // console.log(`User selected ${filter}`);
  setFilter(filter);
}

function setFilter(filter) {
  settings.filterBy = filter;
  builtList()
} 
function builtList(){
  const currentList =  allStudents; 
  // TODO: Add filter and sort on this list, before displaying
    displayList( currentList );
}

function displayList(Students){
 
  // clear the list


  // build a new list
    Students.forEach( displayStudent ); 
   
}
function displayStudent( student) {
  // create clone
   const copy = document.querySelector("template#myTemplate").content.cloneNode(true);

  // set clone data
  
  copy.querySelector('.firstname').textContent = student.firstName;
  copy.querySelector('.middlename').textContent = student.middleName;
  copy.querySelector('.lastname').textContent = student.lastName;
  /* copy.querySelector('.midlename').textContent = student.middleName; */

  copy.querySelector('.gender').textContent = student.gender;
  copy.querySelector('.house').textContent = student.house;

const parentElement = document.querySelector('section#students');

document.querySelector('main').appendChild(copy);
  // TODO: Display winner

  // TODO: Display star
};