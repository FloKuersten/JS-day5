let car = {
    brand: "Volkswagen", // property
    c_name: "Bug / Käfer",
    type: "Type:Compact car",
    year: "Production: 1938 - 2002",
    img: "images/car1.jpg",
    info: 'The Volkswagen Beetle—officially the Volkswagen Type 1, informally in German der Käfer (meaning "beetle"), in parts of the English-speaking world the Bug, and known by many other nicknames in other languages—is a two-door, rear-engine economy car, intended for five occupants (later, Beetles were restricted to four people in some countries), that was manufactured and marketed by German automaker Volkswagen (VW) from 1938 until 2003.',
    numbers_built: "Numbers built: >21 Million",
    designer: "Designer: Ferdinand Porsche",

    printInfo: function() { /// method

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

let animal = {
    name: "Savannah Cat", // property
    type: "Hybrid cat breed",
    img: "images/cat.jpg",
    origin: "Origin:USA",
    info: 'The Savannah is a hybrid cat breed. It results from a cross between a serval and a domestic cat.[1][2][3] This hybridization typically produces large and lanky offspring with vibrant spotted coats.',
    price: "Price: 50 000 $ ",

    printInfo: function() { /// method

        return `<div class="card" style="width: 18rem; ">
        <img src="${this.img}" style="height: 300px" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name} </h5>
          <p class="card-text">${this.info}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.name} ${this.type}</li>
          <li class="list-group-item">${this.price}</li>
          <li class="list-group-item">${this.origin}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`;

    }
}

let person = {
    name: "Jacque Fresco", // property
    age: "March 13, 1916 – May 18, 2017",
    occupation: "Futurist, social engineer, structural engineer, architectural designer, industrial designer, author, lecturer",
    known_for: "The Venus Project, resource-based economy ideas.",
    img: "images/fresco.jpg",
    info: 'Jacque Fresco (March 13, 1916 – May 18, 2017) was an American futurist and self-described social engineer. Self-taught, he worked in a variety of positions related to industrial design. Fresco wrote and lectured his views on sustainable cities, energy efficiency, natural-resource management, cybernetic technology, automation, and the role of science in society. He directed the Venus Project[5] and advocated global implementation of a socioeconomic system which he referred to as a "resource-based economy".',


    printInfo: function() { /// method

        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" style="height: 300px" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.info}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.age}</li>
          <li class="list-group-item">${this.occupation}</li>
          <li class="list-group-item">${this.known_for}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`;

    }
}

document.getElementById("demo").innerHTML = car.printInfo();
document.getElementById("demo").innerHTML += animal.printInfo();
document.getElementById("demo").innerHTML += person.printInfo();