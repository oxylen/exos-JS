class Imc{
    constructor(nom, poids, taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }

    calculImc(){
        return this.poids/(this.taille)^2;
    }

    displayImc(){
        console.log(`${this.nom} pèse ${this.poids} kg, mesure ${this.taille} m, son IMC est de : ${this.calculImc()}`);
    }
}

let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO", 300, 2),
    new Imc("Gontrand", 90, 1.75),
    new Imc("Colonel Clock", 200, 1.75),
    new Imc("Josiane de la Vega", 99, 1.55)
];

//test for
console.log("TEST FOR");
for(let i=0; i<list.length; i++){
    list[i].displayImc();
}

//test map
console.log("TEST MAP");
const newTab = list.map((e)=> {
    e.displayImc();
});

//test for of
console.log("TEST FOR OF");
for(e of list){
    e.displayImc();
}