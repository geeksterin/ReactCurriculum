import React from "react";

function Length(props) {
  const { onHandleLength } = props;
  const selectValues = [
    { id: 1, value: 8 },
    { id: 2, value: 9 },
    { id: 3, value: 10 },
    { id: 4, value: 11 },
    { id: 5, value: 12 },
    { id: 6, value: 13 },
    { id: 7, value: 14 },
    { id: 8, value: 15 },
    { id: 9, value: 16 },
  ];
  return (
    <div className="form-group row">
      <label htmlFor="pasword" className="col-sm-9 col-form-label">
        Select Password length
      </label>
      <div className="col-sm-3">
        <select
          className="form-control"
          aria-label=""
          id="password"
          name="password"
          onChange={onHandleLength}
          autoFocus
        >
          {selectValues.map((val) => (
            <option key={val.id} val={val.value}>
              {val.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Length;
