# Array Method .map

- work in the provided `index.js` file
#### 1. Write a function named `camelize` that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

* This function removes all dashes, and each word after dash becomes upper-case.

Examples:
```js
console.log(camelize("background-color")) == 'backgroundColor';
console.log(camelize("list-style-image")) == 'listStyleImage';
console.log(camelize("-webkit-transition")) == 'WebkitTransition';
``` 

#### 2. You have three user objects. Each user has 3 properties: `name`, `surname` and `id`. See below:

```js

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

```
#### Now we have three users in an array named `users`.

```js
let users = [ john, pete, mary ];
```

 #### Write the code to create an array named `usersMapped`. 
 
* This array contains objects with two properties: `fullName` and `id`. 
* To have these in `usersMapped`, map the `users` array and access each user's object properties. (Hint: you can get `fullName` by combining `name` and `surname`.)

* When printed to the console, the output of `userMapped` is as below: 

```js
 [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
```