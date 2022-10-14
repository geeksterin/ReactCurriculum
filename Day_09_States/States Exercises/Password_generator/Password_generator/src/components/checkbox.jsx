import React from "react";

function Checkbox(props) {
  const { types, onCheck } = props;
  return (
    <React.Fragment>
      {types.map((type) => (
        <div key={type.id} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={type.id}
            onChange={() => onCheck(type)}
            defaultChecked
          ></input>
          <label className="form-check-label" htmlFor={type.id}>
            Include {type.label}
          </label>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Checkbox;
