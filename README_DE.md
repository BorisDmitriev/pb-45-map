# Array Methode .map

- arbeite in der bereitgestellten Datei `index.js`.
#### 1. Schreibe eine Funktion namens `camelize`, die durch Bindestriche getrennte Wörter wie "my-short-string" in camel-cased "myShortString" verwandelt.

* Diese Funktion entfernt alle Bindestriche, und jedes Wort nach dem Bindestrich wird großgeschrieben.

Beispiele:
```js
console.log(camelize("background-color")) == 'backgroundColor';
console.log(camelize("list-style-image")) == 'listStyleImage';
console.log(camelize("-webkit-transition")) == 'WebkitTransition';
``` 

#### 2. Du hast drei Benutzer-Objekte. Jeder Benutzer hat 3 Eigenschaften: `name` (Vorname), `surname` (Nachname) und `id`. Siehe unten:

```js

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

```
#### Jetzt haben wir drei Benutzer in einem Array namens `users` (Benutzer).

```js
let users = [ john, pete, mary ];
```

 #### Schreibe den Code, um ein Array namens `usersMapped` zu erstellen. 
 
* Dieses Array enthält Objekte mit zwei Eigenschaften: `fullName` und `id`. 
* Um diese in `usersMapped` zu haben, musst du das Array `users` mappen und auf die Objekteigenschaften der einzelnen Benutzer zugreifen. (Tipp: Du bekommst den `fullName`, indem du `name` und `surname` kombinierst.)

* Auf der Konsole sieht die Ausgabe von `userMapped` wie folgt aus: 

```js
[
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
```
