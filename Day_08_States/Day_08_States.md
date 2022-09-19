<div align="center">
  <h1> 30 Days Of React: States </h1>
  <!-- <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/"> -->
  <!-- <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social"> -->
  <!-- </a> -->
  <!-- <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh"> -->
  <!-- <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social"> -->
  <!-- </a> -->

<!-- <sub>Author: -->
<!-- <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br> -->

</sub>

</div>

<!-- [<< Day 4](../04_Day_Component/04_components.md) | [Day 6 >>](../06_Day_Map_List_Keys/06_map_list_keys.md) -->

![30 Days of React banner](../images/react_intro.png)

- [States](#states)
  <!-- - [Props in Functional Component](#props-in-functional-component) -->
  - [What is State?](#what-is-state)
  - [Code illustration](#Code-illustration)
- [Exercises](#exercises)
  - [Counter-App](#Counter-App)

# States

## What is State?

What is state ? The English meaning of state is _the particular condition that someone or something is in at a specific time_.

Let us see some states being something - Are you happy or sad? - Is light on or off ? Is present or absent ? - Is full or empty ? For instance, I am happy because I am enjoying creating 30 Days Of React challenge. I believe that you are happy too.

State is an object in react which let the component re-render when state data changes.

- If I want React to track any variable, I need to create it using state hook.
- React will track that variable for changes.
- IF there are any changes, the componet will be re-rendered.
- useState is the name of that hook which we will use to create trackable variables.
- Wheneven we invoke the useState hook method, we can give the default value as it's argument (actual parameter).
- We can pass anything as an argument (function, primitive, non primitive, undefined, null).
- When we invoke the function of useState. It will retuen an array of 2 elements.
- The 0th index will contain the tracked variable.
- If this variable is updated, it will trigger a component re-rendering.
- In JS, variables cannot be tracked.
- Since it is not possible in the language itself, React has to find an alternate.
- That is, it will give a function.
- So, whenver we want to update the value of that state, we invoke the function.
- When invoking, we have to give the new value.
- Here, there are two possibilities:

  - New value is dependent on the current value. - In this case, we pass the callback function, this callback function receives the current value as it's param and it manipulates whatever is needed and then returns the new (updated) value.
  - New value is not dependent on the current value. - We just pass that as parameter.

  # Code illustration

```js
import React, { useState } from "react";

const MyComponent = () => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Increment Value</button>
    </div>
  );
};
```

# Now let us see if we were to make a couter app wothout using states in react , how would that look:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="States.css" />
    <title>Counter</title>
  </head>
  <body>
    <div class="container">
      <h1>Counter</h1>
      <span id="counter">0</span>
      <div class="btn-container">
        <button class="btn increase">Increase</button>
      </div>
    </div>

    <script src="States.js"></script>
  </body>
</html>
```

```js
// buttons and counter text
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

// initialize the count variable
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    styles.contains("increase");
    count++;
    counter.classList.add("up");

    counter.textContent = count;
  });
});
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
}

.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

span {
  font-size: 100px;
  padding: 10px;
  color: grey;
}

.btn {
  background: none;
  outline: none;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
}
```

**States are those variables which are tracked by React, updating which will trigger a component re-render.**
**observable - tracked.**
**change the behaviour/output of the component - component re-rendering.**

## As you can see the js code , we are adding an event listener and storing it in an vaibale called const.

## inshort , a lot of reudundant and hectic work is being done while implementing this simple function, and think of examples where the project size is large and you have to implement the same functunality where you have to re-render a piece of functunality again and again.

# Thats is why we use states .

## below is the same functunalty but this time it is being done with the help of states

```js
import "./App.css";
import { useState } from "react";

function App() {
  const tracable = useState(0);
  const counter = tracable[0];
  const update = tracable[1];
  const fn = () => {
    update((current_val) => {
      const new_val = current_val + 1;
      return new_val;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fn}>Click me</button>
        <p>clicked: {counter} times</p>
      </header>
    </div>
  );
}

export default App;
```

- When we invoke the function of useState. It will retuen an array of 2 elements.
- The 0th index will contain the tracked variable.(tracable)
- If this variable is updated, it will trigger a component re-rendering.(update)

# Exercises

## Counter-App

## You have to Implement a counter App which will keep track of the numbers of clicks a user has made on a button

It should have the following functunalities:

- increment
- decrement
- reset

[<< Day 7 ](../Day_07_MappingArrays/Day_07_MappingArrays.md) | [ Day 9 >> ](../Day_09_Password_generator/Day_09_Password_generator.md)
