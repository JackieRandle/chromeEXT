// let person = {
//     name: Jacqueline
//     age: 63,         
//     country: "USA"
// };
// function logData() {
//     const logMessage = `${person.name} is ${person.age} years old and lives in ${person.country}.`;
//     console.log(logMessage);
// }

// logData();








// let age = 15

// if (age < 6) {
//     console.log("you get in for free.");

// } else if (age < 18) {
//     console.log("You get a child discount.");

// } else if (age < 27) {
//     console.log("You get a student discount.");

// } else if (age < 66) {
//     console.log("You pay the full price.");

// } else if (age > 66) {
//     console.log("Senoior citizen discount");

// }



// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " +largeCountries[i]);
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia","Monaco"]

// largeCountries.shift();
// largeCountries.pop();
// largeCountries.unshift("China");
// largeCountries.push("Pakistan");

// for(let i = 0; i < largeCountries.length; i++){
//     console.log(largeCountries[i]);
// }

// let dayofMonth = 31
// let weekday = "Friday"

// if (weekDay === "Friday" && dayOfMonth === 13) {
//     console.log("🐱‍👤");
// }


// let hands = ["rock", "paper", "scissor"]

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands [randomIndex]

// }
// console.log(getHand)


// let travel = ["Airplane", "Ship", "Car", "Train", "Bus"]

// function getTravel() {
//     let randomIndex = Math.floor( Math.random() *5)
//     return travel[randomIndex]

// }
// console.log(getTravel() )

// let fruit = ["🍎", "🍊", "🍎", "🍎"] 
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// function sortFruits() {
   
//     for (let i = 0; i < fruit.length; i++) {
//         if (fruit[i] === "apple") {
//             appleShelf.textContent += fruit[i] + " ";
//         } else if (fruit[i] === "orange") {
//             orangeShelf.textContent += fruit[i] + " ";
//         }
//     }

//     sortFruits();
// }

// let box = document.getElementById('box')

// box.addEventListener("click", function() {
//     console.log("I want to open th box!")
// })


// let inputBtn = document.getElementById("input-btn")
// inputBtn.addEventListener("click", function() {
//     console.log("Button clicked!")
// })
// function saveLead() {
//     console.log("Butto clicked!")

// }

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// const basePrice = 520;
// const discount = 120;
// let shippingCost = 12;
// let shippingTime = "5-12 days";

// shippingCost = 15;
// shippingTime = "7-12 days";

// const fullPrice = basePrice - discount + shippingCost;

// button.addEventListener("click", function() {
//     const lead = inputEl.value;
//     if (lead) {
//         myLeads.push("www.awesomelead.com")
//     console.log(myLeads)
//     inputEl.value = "";
//     } else {
//         console.log("input is empty, nothing was added.")
//     }

//     }
    
// }
// inputEl.value = "";

// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById('ulEl');
// console.log(ulEl)
// inputBtn.addEventListener("click", function() {
//      myLeads.push(inputEl.value)
//      renderLeads()

//      function renderLeads() {
//         for (let i = 0; i < myLeads.length; i++) {
//             listItems += "<li>" + myLeads[i] + "</li>"
//           ulEl.innerHTML += "<li>"  + myLeads[i] + "</li>"
//         }
//         ulEl.innerHTML = listItems
//     }
// })


    // for (let i = 0; i < myLeads.length; i++) {
    //     ulEl.innerHTML += "<li>"  + myLeads[i] + "</li>"

    //     let container = document.getElementById('container');
    //     container.innerHTML = "<button>Buy!</button>";
    // }
    
    // function buy() {
    //     container.innerHTML += "<p>Thank you for buying!</p>"
    // }
    // let listItems = ""
    // for (let i = 0; i < myLeads.length; i++) {
    //     listItems += "<li>" + myLeads[i] + "</li>"
    //   ulEl.innerHTML += "<li>"  + myLeads[i] + "</li>"
    // }
    // ulEl.innerHTML = listItems

    // function renderLeads() {
    //     for (let i = 0; i < myLeads.length; i++) {
    //         listItems += "<li>" + myLeads[i] + "</li>"
    //       ulEl.innerHTML += "<li>"  + myLeads[i] + "</li>"
    //     }
    //     ulEl.innerHTML = listItems
    }

//     const li = document.createElement("li")
//     li.textcontent = myLeads[i]
//     ulEl.append(li)
// }

// // create element 
// document.createElement("li")
// // store in variable
// const li = document.createElement("li")
// //set text cntent
// li.textContent = myLeads[i]
// // append to ul
// ulEl.append(li)
// set text content*

const email = `Hey ${recipient}! How is it going? Cheers Per` 

const sender = "Jacqueline"
const email = `Hey ${recipient}! How is it going? Cheers ${sender}` 
