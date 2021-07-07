


function SimplePassword(str){
// Input Password and Submit  6 to 20 characters 
//which contain at least one numeric digit, one uppercase and one lowercase letter  
let paswd1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

//To check a password between 7 to 15 characters which contain at least one numeric digit 
//and a special character
let paswd2 =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;


// 1. It must have capital letter
// 2. It must contain at least one number
// 3. It must contain a punctuation mark or mathematical symbol.
// 4. It cannot have the word "password" in the string
// 5. It must be longer than 7 characters and shorter than 31 characters
let regex =  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{7,131}$/;

//TODO dash -- and ]
  if(!str.match(regex)) {
    return false
  }

  if((str.toLowerCase().includes("password"))){
    return false
  }
  return true
}

console.log(SimplePassword("passWord123!!!!") )//false
console.log(SimplePassword("turkey90AAA=")) //true