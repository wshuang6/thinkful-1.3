var arra = [{"name": "Superman", "job title": "The most powerful being on earth"},
{"name": "Batman", "job title": "The Dark Knight of Gotham", "boss":"Superman"},
{"name": "Aquaman", "job title": "The King of Atlantis", "boss":"Superman"}];

function nameTitle(key) {
  if (key.boss) {
    console.log(`${key["job title"]}, ${key["name"]} reports to ${key["boss"]}.`);

  }else {
    console.log(`${key["job title"]}, ${key["name"]} doesn't report to anybody.`);
  }
}

arra.forEach(nameTitle);
