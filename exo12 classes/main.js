class Employee{
    constructor(nom, prenom, age, salaire){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaire = salaire;
    }
    
    coutSalaire(){
        return this.salaire*12;
    }
}

class Pme{
    constructor(nom, equipe, revenus, fraisFixes, fraisAchat){
        this.nom = nom;
        this.equipe = equipe;
        this.revenus = revenus;
        this.fraisFixes = fraisFixes;
        this.fraisAchat = fraisAchat;
    }

    coutInitial(){
        return this.fraisAchat+this.fraisFixes;
    }

    coutTotalEquipe(){
        let total = 0;
        for(let e of this.equipe){
            total+=e.coutSalaire();
        }
        total*=1.9;
        return total;
    }

    bilan(){
        let total = this.revenus - this.coutTotalEquipe() - this.coutInitial();
        return total;
    }

    bilanCalcul(){
        console.log("---------------MA PME---------------");
        console.log(`${this.nom}: Cout Initial : ${this.coutInitial()}`);
        console.log(`${this.nom}: Cout Total Equipe : ${this.coutTotalEquipe()}`);
        console.log(`${this.nom}: VENTES : ${this.revenus}`);
        console.log(`${this.nom}: BILAN : ${this.bilan()}`);
    }
}

const pme = new Pme(
"Ma Petite Entreprise - ",
[new Employee ("Duval", "Paul", 30, 2000),
new Employee ("Durand", "Alain", 40, 3000),
new Employee ("Dois", "Sylvia", 50, 4000)],
300000,
20000,
50000);

pme.bilanCalcul();