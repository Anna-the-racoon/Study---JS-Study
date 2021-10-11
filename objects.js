let name = prompt("Как зовут Вашего котика?");

let paroda = "cat";

let cat = {
  animal : true,
   [paroda] : 'mainkun',
}

cat.nicname = name;

alert('Кошка ' + cat.nicname + ' породы ' + cat[paroda]);

for(let key in cat){
  alert(key + ": " + cat[key]);
}

delete cat.animal;

cat.nicname = 'Даша';

alert('Кошка ' + cat.nicname + ' породы ' + cat[paroda]);

for(let key in cat){
  alert(key + ": " + cat[key]);
}
