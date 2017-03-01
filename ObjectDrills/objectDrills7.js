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
          console.log(`${person.name} is a ${person.role} who uses a ${person.weapon}.`);
        }else {
          console.log(`${person.name} is a ${person.role} who doesn't have a weapon.`);
        }
      }
  );
}

charactersLOTR.push(
  {name:'Arwen Undomiel', role:'Half-Elf of Rivendell'}
); //adds Arwen

charactersLOTR[0].weapon = "wizard staff";
charactersLOTR[1].weapon = "the Ring";
charactersLOTR[2].weapon = "String and Barrow Blade";
charactersLOTR[3].weapon = "Anduril";
charactersLOTR[4].weapon = "Bow and Arrow";
charactersLOTR[5].weapon = "Hadhafang"; //adds weapons

//complicated attempts
// function isCharacter(objectPerson, name) {
//   if (objectPerson.name === name){
//     console.log('what is this ' + objectPerson);
//   return objectPerson;
//   }
// }

// function addWeapon(database, name, weapon){
//   console.log(database.find(isCharacter, name));

// }



printLOTR(charactersLOTR);
printLOTRweapons(charactersLOTR);
//console.log(charactersLOTR);
//addWeapon(charactersLOTR, 'Gandolf the White', 'wizard staff');
