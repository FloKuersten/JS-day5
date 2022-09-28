// let student = {
//     firstName: "John", // property
//     lastName: "Doe",
//     age: 25,
//     img: "images/pic1.jpg",
//     gym: true,
//     hobbies: ["Swim", "Code", "Reading"],
//     printInfo: function() { /// method
//         return `
//         <div class="card" style="width: 18rem;">
//             <img src="${this.img}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${this.firstName}  ${this.lastName}</h5>
//                 <p class="card-text">${this.hobbies[0]} ${this.hobbies[2]}</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//       `;
//     }
// }

let arr = [];

class Student {
    firstName;
    lastName;
    age;
    img;
    gym;
    hobbies;

    constructor(fname, lname, age, img, gym, hobbies) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.img = img;
        this.gym = gym;
        this.hobbies = hobbies;

        arr.push(this);
    }


    printInfo() {
        return `
        <div class="card" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.firstName}  ${this.lastName}</h5>
                <p class="card-text">${this.hobbies[0]} ${this.hobbies[2]}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      `;
    }
}

class Teacher extends Student {
    title;
    salary;

    constructor(fname, lname, age, img, gym, hobbies, x, y) {
        super(fname, lname, age, img, gym, hobbies);
        // this.firstName = fname;
        // this.lastName = lname;
        // this.age = age;
        // this.img = img;
        // this.gym = gym;
        // this.hobbies = hobbies;

        this.title = x;
        this.salary = y;
    }

    printInfo() {
        return `
        <div class="card" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.title} ${this.firstName}  ${this.lastName}</h5>
                <p class="card-text">${this.hobbies[0]} ${this.hobbies[2]} | ${this.salary}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      `;
    }
}

let student1 = new Student("John", "Doe", 22, "images/pic1.jpg", false, ["Reading", "Cooking", "Walking"]);

let student2 = new Student("Thomas", "Doe", 22, "images/pic2.jpg", false, ["Reading", "Cooking", "Walking"]);
let student3 = new Student("Acilio", "Doe", 22, "images/pic2.jpg", false, ["Reading", "Cooking", "Walking"]);
let student4 = new Student("Serri", "Doe", 22, "images/pic2.jpg", false, ["Reading", "Cooking", "Walking"]);
let teacher = new Teacher("test", "test", 30, "images/pic1.jpg", true, [1, 2, 3], "Meg", 3000);

// console.table(student2);

for (let val of arr) {
    document.getElementById("demo").innerHTML += val.printInfo();
}


// document.getElementById("demo").innerHTML = student.printInfo();
// document.getElementById("demo").innerHTML += student2.printInfo();
// document.getElementById("demo").innerHTML += student3.printInfo();
// document.getElementById("demo").innerHTML += student4.printInfo();