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

**States are those variables which are tracked by React, updating which will trigger a component re-render.**
**observable - tracked.**
**change the behaviour/output of the component - component re-rendering.**

# Exercises

## Counter-App

- You have to Implement a counter App which will keep track of the numbers of clicks a user has made on a button

[<< Day 5 ](../Day_5_MappingArrays/Day_5_MappingArrays.md) | [ Day 7 >> ]()
