let array = [];

class car {
    brand;
    c_name;
    type;
    year;
    img;
    info;
    numbers_built;
    designer;

    constructor(brand, c_name, type, year, img, info, numbers_built, designer) {
        this.brand = brand;
        this.c_name = c_name;
        this.type = type;
        this.year = year;
        this.img = img;
        this.info = info;
        this.numbers_built = numbers_built;
        this.designer = designer;

        array.push(this);


    }


    printInfo() { /// method

        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" style="height: 300px; object-fit:fill;" class="card-img-top" alt="..." >
        <div class="card-body">
          <h5 class="card-title">${this.brand} - ${this.c_name}</h5>
          <p class="card-text">${this.info}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.year}</li>
          <li class="list-group-item">${this.designer}</li>
          <li class="list-group-item">${this.numbers_built}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`;

    }
}

class Motorbike extends car {
    number_of_wheels;
    power;

    constructor(brand, c_name, type, year, img, info, numbers_built, designer, number_of_wheels, power) {
        super(brand, c_name, type, year, img, info, numbers_built, designer)

        this.number_of_wheels = number_of_wheels;
        this.power = power;
    }

    printInfo() { /// method

        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" style="height: 300px; object-fit:fill;" class="card-img-top" alt="..." >
        <div class="card-body">
          <h5 class="card-title">${this.brand} - ${this.c_name}</h5>
          <p class="card-text">${this.info}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.year}</li>
          <li class="list-group-item">${this.designer}</li>
          <li class="list-group-item">${this.numbers_built}</li>
          <li class="list-group-item">${this.number_of_wheels}</li>
          <li class="list-group-item">${this.power}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`;

    }

}




// animal

class animal {
    name;
    type;
    img;
    origin;
    info;
    price;

    constructor(name, type, img, origin, info, price) {
        this.name = name;
        this.type = type;
        this.img = img;
        this.origin = origin;
        this.info = info;
        this.price = price;

        array.push(this);


    }


    printInfo() { /// method

        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" style="height: 300px; object-fit:fill;" class="card-img-top" alt="..." >
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.info}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.origin}</li>
          <li class="list-group-item">${this.price}</li>
          <li class="list-group-item">${this.type}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`;

    }
}

class dog extends animal {
    weight;

    constructor(name, type, img, origin, info, price, weight) {
        super(name, type, img, origin, info, price)
        this.name = name;
        this.type = type;
        this.img = img;
        this.origin = origin;
        this.info = info;
        this.price = price;
        this.weight = weight;
    }

}





// Person

class person {
    name;
    born;
    img;
    info;
    occupation;

    constructor(name, born, img, info, occupation) {
        this.name = name;
        this.born = born;
        this.img = img;
        this.info = info;
        this.occupation = occupation;

        array.push(this);


    }


    printInfo() { /// method

        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" style="height: 300px; object-fit:fill;" class="card-img-top" alt="..." >
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.info}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.born}</li>
          <li class="list-group-item">${this.occupation}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`;

    }
}

let car1 = new car("mercedes", "AMG", "Subsidiary (GmbH)", "1967", "images/amg.jpg", "Die Mercedes-AMG GmbH, auch einfach nur AMG genannt, ist eine Tochtergesellschaft der Mercedes-Benz AG und zuständig für die Hochleistungsfahrzeuge des Konzerns.", "200 Millions", "Hans Werner Aufrecht");

let motorbike1 = new Motorbike("Zero Motorcyle", "Electric Motorcycles", "e-bike", "2006", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2014_Zero_Motorcycles_Zero_S.JPG/220px-2014_Zero_Motorcycles_Zero_S.JPG", "Zero Motorcycles Inc. is an American manufacturer of electric motorcycles. Formerly called Electricross, it was founded in 2006 by Neal Saiki, a former NASA engineer, in Santa Cruz, California. The company is now located nearby in Scotts Valley", "100 000", "Neal Saiki", "Number of Wheels:2", "500 PS")


let person1 = new person("Denzel Washington", "1960", "images/denzel.jpg", "Denzel Hayes Washington Jr. (* 28. Dezember 1954 in Mount Vernon, New York) ist ein US-amerikanischer Schauspieler, Regisseur und Filmproduzent. Er ist zweifacher Oscarpreisträger und der zweite afroamerikanische Schauspieler nach Sidney Poitier, der für eine Hauptrolle mit diesem Filmpreis ausgezeichnet wurde.", "Actor");


let animal1 = new animal("Savannah Cat", "Hybrid cat breed", "images/cat.jpg", "USA", "The Savannah is a hybrid cat breed. It results from a cross between a serval and a domestic cat.[1][2][3] This hybridization typically produces large and lanky offspring with vibrant spotted coats.", "50 000 Dollar");

let animal2 = new animal("Tibetan Mastiff", "Tibetan Breed", "https://www.zooplus.de/magazin/wp-content/uploads/2017/12/do-khyi-1024x683.jpeg", "Tibet", "The Tibetan Mastiff (Standard Tibetan: འདོགས་ཁྱི, THL: Do khyi, Wylie: 'dogs khyi)[a] is a large size Tibetan dog breed. Its double coat is medium to long, subject to climate, and found in a wide variety of colors, including solid black, black and tan, various shades of red (from pale gold to deep red) and bluish-gray (dilute black), and sometimes with white markings around neck, chest and legs.", "up to 1,5 Million $")






for (let val of array) {

    if (val == car) {
        document.getElementById("demo1").innerHTML += val.printInfo();
    } else if (val == animal) {
        document.getElementById("demo2").innerHTML += val.printInfo();
    } else { document.getElementById("demo3").innerHTML += val.printInfo(); }
}





// let car = {
//     brand: "Volkswagen", // property
//     c_name: "Bug / Käfer",
//     type: "Type:Compact car",
//     year: "Production: 1938 - 2002",
//     img: "images/car1.jpg",
//     info: 'The Volkswagen Beetle—officially the Volkswagen Type 1, informally in German der Käfer (meaning "beetle"), in parts of the English-speaking world the Bug, and known by many other nicknames in other languages—is a two-door, rear-engine economy car, intended for five occupants (later, Beetles were restricted to four people in some countries), that was manufactured and marketed by German automaker Volkswagen (VW) from 1938 until 2003.',
//     numbers_built: "Numbers built: >21 Million",
//     designer: "Designer: Ferdinand Porsche",

//     printInfo: function() { /// method

//         return `<div class="card" style="width: 18rem;">
//         <img src="${this.img}" style="height: 300px; object-fit:fill;" class="card-img-top" alt="..." >
//         <div class="card-body">
//           <h5 class="card-title">${this.brand} - ${this.c_name}</h5>
//           <p class="card-text">${this.info}</p>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">${this.year}</li>
//           <li class="list-group-item">${this.designer}</li>
//           <li class="list-group-item">${this.numbers_built}</li>
//         </ul>
//         <div class="card-body">
//           <a href="#" class="card-link">Card link</a>
//           <a href="#" class="card-link">Another link</a>
//         </div>
//       </div>`;

//     }
// }

// let animal = {
//     name: "Savannah Cat", // property
//     type: "Hybrid cat breed",
//     img: "images/cat.jpg",
//     origin: "Origin:USA",
//     info: 'The Savannah is a hybrid cat breed. It results from a cross between a serval and a domestic cat.[1][2][3] This hybridization typically produces large and lanky offspring with vibrant spotted coats.',
//     price: "Price: 50 000 $ ",

//     printInfo: function() { /// method

//         return `<div class="card" style="width: 18rem; ">
//         <img src="${this.img}" style="height: 300px" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${this.name} </h5>
//           <p class="card-text">${this.info}</p>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">${this.name} ${this.type}</li>
//           <li class="list-group-item">${this.price}</li>
//           <li class="list-group-item">${this.origin}</li>
//         </ul>
//         <div class="card-body">
//           <a href="#" class="card-link">Card link</a>
//           <a href="#" class="card-link">Another link</a>
//         </div>
//       </div>`;

//     }
// }

// let person = {
//     name: "Jacque Fresco", // property
//     age: "March 13, 1916 – May 18, 2017",
//     occupation: "Futurist, social engineer, structural engineer, architectural designer, industrial designer, author, lecturer",
//     known_for: "The Venus Project, resource-based economy ideas.",
//     img: "images/fresco.jpg",
//     info: 'Jacque Fresco (March 13, 1916 – May 18, 2017) was an American futurist and self-described social engineer. Self-taught, he worked in a variety of positions related to industrial design. Fresco wrote and lectured his views on sustainable cities, energy efficiency, natural-resource management, cybernetic technology, automation, and the role of science in society. He directed the Venus Project[5] and advocated global implementation of a socioeconomic system which he referred to as a "resource-based economy".',


//     printInfo: function() { /// method

//         return `<div class="card" style="width: 18rem;">
//         <img src="${this.img}" style="height: 300px" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${this.name}</h5>
//           <p class="card-text">${this.info}</p>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">${this.age}</li>
//           <li class="list-group-item">${this.occupation}</li>
//           <li class="list-group-item">${this.known_for}</li>
//         </ul>
//         <div class="card-body">
//           <a href="#" class="card-link">Card link</a>
//           <a href="#" class="card-link">Another link</a>
//         </div>
//       </div>`;

//     }
// }

// document.getElementById("demo").innerHTML = car.printInfo();
// document.getElementById("demo").innerHTML += animal.printInfo();
// document.getElementById("demo").innerHTML += person.printInfo();