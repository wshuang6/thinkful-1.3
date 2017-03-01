var charactersLOTR = [
  {name:'Gandolf the White', role:'Wizard of the Middle Earth'},
  {name:'Bilbo Baggins', role:'Hobbit of the Shire'},
  {name:'Frodo Baggins', role:'Hobbit of the Shire'},
  {name:'Aragorn son of Arathon', role:'Man of the Dunnedain'},
  {name:'Legolas is a Elf', role:'Woodland Realm'}
];

function printLOTR(characters) {
  characters.forEach(
    function(person){console.log(`${person.name} is a ${person.role}`);}
  );
}

function printLOTRweapons(characters){
  characters.forEach(
      function(person){
        if(person.weapon){
          console.log(`${person.name} is a ${person.role} who uses a ${person.weapon}`);
        }else {
          console.log(`${person.name} is a ${person.role} who doesn't have a weapon.`);
        }
      }
  );
}

function isCharacter(objectPerson, name) {
  if (objectPerson.name === name){
    console.log('what is this ' + objectPerson);
  return objectPerson;
  }
}

function addWeapon(database, name, weapon){
  console.log(database.find(isCharacter, name));

}

charactersLOTR.push(
  {name:'Arwen Undomiel', role:'Half-Elf of Rivendell'}
);

printLOTR(charactersLOTR);
printLOTRweapons(charactersLOTR);
//console.log(charactersLOTR);
addWeapon(charactersLOTR, 'Gandolf the White', 'wizard staff');
