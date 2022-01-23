let idCount = 1;
let numberOfChildren = 3;
// let numberOfChildren = initalNumberOfChildren;
// let inheritanceType = 'Autosomal Dominant';
let inheritanceType = 'X-Linked Recessive';

class Individual {

    // constructor(id, gender, allele1, allele2, fatherId, motherId, spouseId) {
    constructor(gender, genotype, affected) {
        // this.id = id;
        this.gender = gender;
        this.genotype = genotype;
        this.affected = false;
        // this.al = allele1;
        // this.a2 = allele2;
        // this.fatherId = fatherId;
        // this.motherId = motherId;
        // this.spouseId = spouseId;
    }

    // setId() {
    //     this.id = idCount;
    //     return idCount++;
    // }

    setGender() {
        let num = Math.ceil(Math.random() * 2);
        if (num === 2) {
            this.gender = 'male';
        } else {
            this.gender = 'female';
        }
    }

    setGenotype(male, female) {
        let num1 = Math.floor(Math.random() * 2);
        let num2 = Math.floor(Math.random() * 2);

        if (male.length >= 2) {
            male = [male.slice(0,2), male.slice(2)];
            console.log(male);
        }
        
        if (female.length >= 2) {
            female = [female.slice(0,2), female.slice(2)];
            console.log(female);
        }

        let allele1 = male[num1];
        let allele2 = female[num2];

        if (allele2 === 'A' || allele2 === 'XA' || allele1 === 'Y') {
            this.genotype = allele2 + allele1;
        } else {
            this.genotype = allele1 + allele2;
        }
    }

    isAffected() {
        switch (inheritanceType) {
            case 'Autosomal Dominant':
            case 'X-Linked Dominant':
                if (this.genotype.includes('A') || this.genotype.includes('XA')) {
                    this.affected = true;
                }
                break;
            case 'Autosomal Recessive':
            case 'X-Linked Recessive':
                if (this.genotype.includes('aa') || this.genotype.includes('XaXa') || this.genotype.includes('XaY')) {
                    this.affected = true;
                }
                break;
            case 'Y-Linked':
                if (this.genotype.includes('Y')) {
                    this.affected = true;
                }
                break;
        }
    }

    // generateChildren() {
    //     for(let i=0; i<numberOfChildren+1; i++) {
    //         window[this.id + 'child' + i] = new Individual(setId(), setGender(), a1, a2, 77, 777, -1);
    //     }
    // }
}

let male = 'XaY'; 
let female = 'XAXa';

const testPerson = new Individual();
// testPerson.setId();
testPerson.setGender();
testPerson.setGenotype(male, female);
testPerson.isAffected();
console.table(testPerson);
// console.log(testPerson.generateChildren());

