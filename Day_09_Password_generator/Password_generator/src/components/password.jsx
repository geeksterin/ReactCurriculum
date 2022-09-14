import React from "react";

function Password(props) {
  const { pass, onCopy } = props;
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder={pass}
        aria-label=""
        aria-describedby="basic-addon2"
        readOnly
      ></input>
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => onCopy(pass)}
        >
          <i className="fa fa-clipboard" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default Password;
