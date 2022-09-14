import React from "react";

function Submit(props) {
  const { onSubmit } = props;
  return (
    <button
      type="button"
      className="btn btn-info btn-lg btn-block mb-5 mt-2"
      onClick={onSubmit}
    >
      Generate Password
    </button>
  );
}

export default Submit;
