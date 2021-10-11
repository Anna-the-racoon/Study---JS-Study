let male = confirm('Are you male?');

let femailName= function(){
  alert('Hello, Anna');
}

if (male) {
  ShowName('Alex');
} else {
  femailName();
}

function ShowName(name){
  alert('Hello, ' + name);
}

let name = ShowName;
name('Kevin');   //copy of function
