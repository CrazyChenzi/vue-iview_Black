class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
    middleInitial:string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.middleInitial +","+ person.lastName;
}

var user = new Student("Jane", "M.", "www");

document.body.innerHTML = greeter(user);
