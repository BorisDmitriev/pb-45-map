[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)
### Array Method .map

#### 1. Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

* That is: removes all dashes, each word after dash becomes uppercased.

Examples:
```js
console.log(camelize("background-color")) == 'backgroundColor';
console.log(camelize("list-style-image")) == 'listStyleImage';
console.log(camelize("-webkit-transition")) == 'WebkitTransition';
``` 

#### 2. You have an array of user objects, each one has name, surname and id.

* Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

For instance:
```js
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */


/* usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith
``` 
* So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Camelize

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Should accept a string and return Camelized version |

### 2. User Object

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Should return a new user object with 'id, fullName' |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=)


[//]: # (autograding info end)