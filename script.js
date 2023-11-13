//Oppgave 1
let cat = ["Bengal", "Huskatt", "Main Coon", "Sphynx", "Oriental", "Perser", "Siameser", "Sibir", "Norsk Skogskatt", "Ragdoll"];
console.log(cat);
cat.pop();
console.log(cat);
cat.push("Cornish Rex");
console.log(cat);

cat.splice(6, 1);

cat.splice(2, 1);
console.log(cat);

//Oppgave 1.1
console.log(cat[5] + " Dette er index 5 ");

//Oppgave 2
let person = [ {
    firstname: "Sabine",
    lastname: "Ingi",
    age: 28,
    hobbies: ["Gaming", "Filmer", "Kampsport"],
},
{
    firstname: "Maya",
    lastname: "Ludo",
    age: 30,
    hobbies: ["Gaming", "Filmer", "Kampsport"],
}];
console.log(person);

console.log(person[0].firstname);
console.log(person[0].lastname);
console.log(person[0].age);
console.log(person[0].hobbies);
console.log(person[1].firstname);
console.log(person[1].lastname);
console.log(person[1].age);
console.log(person[1].hobbies);

//Oppgave 3
let handlekurv = 1000;
let enBruker = false;

if (handlekurv >= 500 && enBruker === true){
    console.log ("Gratulerer du får gratis sokker")
} else (handlekurv >= 500 && enBruker === false)
{
    console.log("Bli medlem for å få gratis sokker med på kjøpet :D")
};

