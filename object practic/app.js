// let a = {
//     fName : "Aahad",
//     lName : "ali",
//     age : 18,

// };
// //console.log(a)


// // console.log(delete a.fName,delete a.age,)

// document.write(a.fName +" <br> " + a.lName+" <br> " + a.age);

// propertyExists = "fName" in a;
// console.log(propertyExists)

// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7]
// };
// alert(plan1.name +" \n " + plan1.price +" \n " + plan1.space +" \n " + plan1.transfer +" \n " + plan1.pages +" \n " + plan1.discountMonths);
// document.write(plan1.name +" <br> " + plan1.price +" <br> " + plan1.space +"<br> " + plan1.transfer +" <br> " + plan1.pages +" <br> " + plan1.discountMonths);


// function calcAnnual() {
//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMo = currDate.getMonth();
//     for (var i = 0; i < plan1.discountMonths.length; i++) {
//         if (plan1.discountMonths[i] === thisMo) {
//             bestPrice = plan1.price * .8;
//             break;
//         }
//     }
//     return bestPrice * 12;
// }
// console.log(calcAnnual());



// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7],



//     calcAnnual: function () {
//         var bestPrice = plan1.price;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < plan1.discountMonths.length; i++) {
//             if (plan1.discountMonths[i] === thisMo) {
//                 bestPrice = plan1.price * .8;
//                 break;
//             }
//         }
//         return bestPrice * 12;


//     }

// }
// console.log(calcAnnual());




// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,

//     pages: 10,
//     discountMonths: [6, 7],
//     calcAnnual: function (percentIfDisc) {
//         var bestPrice = this.price;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < this.discountMonths.length; i++) {
//             if (this.discountMonths[i] === thisMo) {
//                 bestPrice = this.price * percentIfDisc;
//                 break;
//             }
//         }
//         return bestPrice * 12;
//     }
// };


function Plan(name, price, space, transfer, pages) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
}


var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
var plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);


function Plan(name, price, space, transfer, pages) {
    this.doc = name;
    this.grumpy = price;
    this.sleepy = space;
    this.bashful = transfer;
    this.sneezy = pages;
}