'use strict'

function StudentObject(name){
    this.name=name;
    this.min=18;
    this.max=24;
    StudentObject.names.push(this);

  
    
}

StudentObject.prototype.age =function() {
    for(let i in StudentObject.names){}
    StudentObject.studentAge.push(Math.floor(Math.random()*(this.max-this.min+1)+this.min));

}
StudentObject.names=[];
StudentObject.studentAge=[];

new StudentObject('ali')
new StudentObject('mohammed')
new StudentObject('saif')
new StudentObject('rami')

let parent1=document.getElementById('parent')
let table=document.createElement('table');
parent1.appendChild(table);

let headerRow=document.createElement('tr')
table.appendChild(headerRow)
headerRow.textContent=''




