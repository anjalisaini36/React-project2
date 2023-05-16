import React from "react";
const Formstep2 = (props) => {
  const { Birthday } = props;
  return (
    <div className="formstep2">
      <div >
        <label className="birth-class" for="birthday">{Birthday}</label>
        <input type="date" id="birthday" name="birthday"></input>
      </div>
      <br />

      <div >
        <label className="height-class" for="height">Height: </label>

        <label className="feet-class">
          Feet:
          <select>
            <option selected> 0</option>
            <option> 1</option>
            <option> 2</option>
            <option> 3</option>
            <option> 4</option>
            <option> 5</option>
            <option> 6</option>
            <option> 7</option>
            <option> 8</option>
            <option> 9</option>
            <option> 10</option>
            <option> 11</option>
          </select>
        </label>

        <label>
          Inches:
          <select>
            <option selected> 3</option>
            <option> 4</option>
            <option> 5</option>
            <option> 6</option>
            <option> 7</option>
            <option> 8</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Formstep2;
