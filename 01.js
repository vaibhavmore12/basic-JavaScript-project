const allUsers = [
    "Anurag",
    "Mithun",
    "Alka",
    "Prabir",
    "Vinay",
    "Shubham",
    "Shivan",
    "Farman",
  ];

  function isUserPresent(user){
    if(allUsers.includes(user)){
        console.log(`this user ${user} is valid`)
        return true;
    }else{
        console.log(`this user in not valid ${user}`)
        return true;
    }
  }

  isUserPresent("Mithun");
  isUserPresent("someone");


  function calculateTotalCartValue() {
    let totalValue = 0;
    for(i =0; i<arguments.length; i++){
        totalValue += arguments[i];
    }
    console.log(`The total cart value is ${totalValue}`);
    return totalValue;
}

calculateTotalCartValue(125, 20, 30);

const students = [
    {
      name: "Mithun",
      marks: 95,
    },
    {
      name: "Prabir",
      marks: 75,
    },
    {
      name: "Alka",
      marks: 92,
    },
    {
      name: "Shivam",
      marks: 70,
    },
    {
      name: "Farman",
      marks: 99,
    },
  ];


const checkResults = (name) =>{
    for (let student of students){
    if (student.name===name){
        return student.marks>90 
       ? console.log(`congragulation ${student.name}!you cleard the exam`)
       : console.log(`Sorry ! You have not cleared the exam.`);
    }
    }
    console.log("Invalid User !!!");
}
checkResults("Mithun");
// OUTPUT: Congratulations Mithun! You have cleared the exam.

checkResults("Prabir");
// OUTPUT: Sorry ! You have not cleared the exam.

checkResults("Mithun S");
// OUTPUT: Invalid User !!!


const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
  ];
  let maxProduct = { name: "", price: 0 };
  let minProduct = { name: "", price: Number.MAX_VALUE };  

  for (let product of products){
    if ( product.price>maxProduct.price){
        maxProduct=product;
    }if ( product.price<maxProduct.price){
        minProduct=product;
    }
  }

  console.log(
    `The product with maximum ammount is ${maxProduct.name} which is priced at Rs. ${maxProduct.price}`
  );
  console.log(
    `The product with minimum ammount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`
  );

  const guests = ["Anurag", "Mithun", "Alka", "Prabir", "Shivam", "Farman"];

// OUTPUT: Anurag, Mithun, Alka, Prabir, Shivam, Farman

console.log(guests.join(", "));

const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
  };

  console.log("Below are the product details.");
for (let keys of Object.keys(productDetails)) {
  console.log(`${keys} : ${productDetails[keys]}`);
}

function generateOtp(){
    const min =1000;
    const max =9999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    return otp.toString();
}
console.log(`Here is your otp: ${generateOtp()}`);

function calculateRemainingDays(eventDate) {
    const currentDate = new Date();
    const eventDateTime = new Date(eventDate);

    const timeDifference = eventDateTime - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining;
}

const eventDate = '2023-08-31'
console.log(calculateRemainingDays(eventDate));

function uniqueCharactersCheck(inputString) {
    const charSet = new Set();

    for (const char of inputString) {
        if (charSet.has(char)) {
            console.log("The input string contains duplicates.");
            return false;
        }
        charSet.add(char);
    }
    console.log("The input string contains only unique characters.");
    return true;
}

uniqueCharactersCheck("mithun")
// OUTPUT: The input string contains unique characters.

uniqueCharactersCheck("anurag")
// OUTPUT: The input string contains duplicates.    

function wordCounter(sentence) {
    const wordFrequencyMap = new Map();

    const words = sentence.split(/\s+/); // Split the sentence into words using whitespace as separator

    for (const word of words) {
        const cleanWord = word.toLowerCase().replace(',', ''); // Remove non-alphanumeric characters and convert to lowercase

        if (cleanWord.length > 0) {
            wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
        }
    }

    return wordFrequencyMap;
}

const sentence = "please please submit your assignment on time, your assignments are important ";
const result = wordCounter(sentence);

console.log(result);
