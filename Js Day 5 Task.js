//write a class to calculate the uber price.

class Uber {
    constructor(distance, rate, waitingTime) {
        this.distance = distance;
        this.rate = rate;
        this.waitingTime = waitingTime;
    }
    getRideDetails() {
        return (`The Distance of the ride is ${this.distance} with a rate of ${this.rate} and the waiting period will be ${this.waitingTime}`)
    }
    getPrice() {
        let price = ((this.distance * 30) + (5 * this.waitingTime));
        return price;
    }
    setDistance(dist) {
        this.distance = dist;
    }
}

const cab = new Uber(50, 1500, 5);

let distance = 40;
const cab1 = new Uber(50, 1500, 5);
cab1.setDistance(43);
console.log(cab1.getRideDetails());
console.log(cab1.getPrice());


// ---------------------------------------------------------------------------------------

//Write a “person” class to hold all the details.
class Person {
    constructor(fname, lname, age, gender, education, occupation, livingArea, maritalStatus, skill, bloodGroup) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gender = gender;
        this.education = education;
        this.occupation = occupation;
        this.livingArea = livingArea;
        this.maritalStatus = maritalStatus;
        this.skill = skill;
        this.bloodGroup = bloodGroup;
    }
    getPersonalDetails() {
        return (`My name is ${(this.fname+" "+this.lname)} I'm ${this.age} years old, I'm a straight ${this.gender},
        my education qualification is ${this.education}, my occupation is ${this.occupation}, I'm living in ${this.livingArea}, I'm a ${this.maritalStatus} person,
        I'm skillful in ${this.skill}, my blood group is ${this.bloodGroup}`)
    }
}

const employee1 = new Person("Yogeshwaran", "Rathinam", "23", "male", "Diploma in Mechanical", "Machine Programmer", "Chennai Thoraipakkam", "Unmarried", "Full Stack Web Development", "O+");

console.log(employee1.getPersonalDetails());