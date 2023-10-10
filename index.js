// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//1
function camelize(str) {
  if (str[0] === '-') str = str.slice(1, str.length);
  if (str[str.length - 1] === '-') str = str.slice(0, str.length - 1);

  return str.split('-').map((el, index) => index > 0 ? el[0].toUpperCase() + el.slice(1, el.length) : el).join("");
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))





//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
//2

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

 const usersMapped = users.map((obj) => {
  obj['fullName'] = `${obj.name} ${obj.surname}`; 
  obj['id'] = obj.id;
  return obj;
});

console.log(usersMapped);

// usersMapped = [
//     { fullName: "John Smith", id: 1 },
//     { fullName: "Pete Hunt", id: 2 },
//     { fullName: "Mary Key", id: 3 }
//   ] 

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // John Smith
