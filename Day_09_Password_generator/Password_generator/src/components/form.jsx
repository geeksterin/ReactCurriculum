import React, { Component } from "react";
import { toast } from "react-toastify";
import Submit from "./submit";
import Checkbox from "./checkbox";
import Password from "./password";
import Length from "./length";
class Form extends Component {
  state = {
    types: [
      { id: 0, name: "upper", label: "uppercase letters", checked: true },
      { id: 1, name: "lower", label: "lowercase letters", checked: true },
      { id: 2, name: "numbers", label: "numbers", checked: true },
      { id: 3, name: "symbols", label: "symbols", checked: true },
    ],
    password: "",
    passLength: 8,
  };

  handleSubmit = () => {
    const { types, passLength } = this.state;
    const hasUpper = types[0].checked;
    const hasLower = types[1].checked;
    const hasNumbers = types[2].checked;
    const hasSymbols = types[3].checked;
    const passwordLength = +passLength; // add (+) to parse string to number

    const newPass = generatePassword(
      hasUpper,
      hasLower,
      hasNumbers,
      hasSymbols,
      passwordLength
    );

    this.setState({ password: newPass });
  };

  handleCheck = (type) => {
    const types = [...this.state.types]; // (...)spread operator to clone array
    const index = types.indexOf(type);
    types[index] = { ...type };
    types[index].checked = !type.checked;
    this.setState({ types });
  };

  handleCopy = (pass) => {
    const textarea = document.createElement("textarea");
    const password = this.state.password;
    const toastOpts = {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    };

    if (!password) {
      return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    toast.success("copied to clipboard", toastOpts);
    textarea.remove();
  };

  handleLength = (event) => {
    const passLength = event.target.value;
    this.setState({ passLength });
  };

  render() {
    const { types, password, passLength } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid bg-light fullHeight">
          <div className="row">
            <div className="col-sm-6 offset-sm-3 top-5 bg-white shadow-lg rounded">
              <form className="form-signin top-5">
                <h2 className="text-center">Password Generator</h2>
                <Password pass={password} onCopy={this.handleCopy}></Password>
                <Length
                  onHandleLength={this.handleLength}
                  passlength={passLength}
                ></Length>
                <Checkbox types={types} onCheck={this.handleCheck}></Checkbox>
                <Submit onSubmit={this.handleSubmit}></Submit>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const randomFunc = {
  hasLower: getRandomLower,
  hasUpper: getRandomUpper,
  hasNumbers: getRandomNumber,
  hasSymbols: getRandomSymbol,
};

// Generate password function
function generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length) {
  // 1. init password variable
  // 2. filter unchecked types
  // 3. loop over length call generator function for each type
  // 4. update password variable
  let generatedPassword = "";
  const toastOpts = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  const typesCount = hasUpper + hasLower + hasNumbers + hasSymbols;

  if (length < 8) {
    toast.warning("Password minimun length must be 8.", toastOpts);
    return;
  }

  if (length > 16) {
    toast.warning("Password maximun length must be 16.", toastOpts);
    return;
  }

  if (typesCount === 0) {
    toast.warning("You must tick at least one checkbox.", toastOpts);
    return;
  }

  //Filter array and keep only true values.
  const typesArr = [
    { hasUpper },
    { hasLower },
    { hasNumbers },
    { hasSymbols },
  ].filter((item) => Object.values(item)[0]);

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];

      generatedPassword += randomFunc[funcName]();
    });
  }

  return generatedPassword.slice(0, length);
}

// generator functions
function getRandomLower() {
  // gets random number between 1 and 26
  // remove decimals
  // adds 97 to the results since lower characters in charset go from 97 to 122
  const formula = Math.floor(Math.random() * 26) + 97;

  // Gets characters based on chart.
  return String.fromCharCode(formula);
}

function getRandomUpper() {
  // gets random number between 1 and 26
  // remove decimals
  // adds 65 to the results since lower characters in charset go from 65 to 89
  const formula = Math.floor(Math.random() * 26) + 65;

  // Gets characters based on chart.
  return String.fromCharCode(formula);
}

function getRandomNumber() {
  // gets random number between 1 and 26
  // remove decimals
  // adds 48 to the results since number characters in charset go from 48 to 57
  const formula = Math.floor(Math.random() * 10) + 48;

  // Gets characters based on chart.
  return String.fromCharCode(formula);
}

function getRandomSymbol() {
  const symbols = "!@#$%&/=";
  const formula = Math.floor(Math.random() * symbols.length);

  return symbols[formula];
}

export default Form;
