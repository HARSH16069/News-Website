import React from "react";

const Contect = () => {
  return (
    <div>
      <label className="Contect-Title">Contect Us</label>
      <form>
        {/* <label className="Contect-name">Name</label> */}
        <input
          type="text"
          className="From-input-name From1"
          placeholder="Enter Your Name"
        ></input>
        <input
          type="Number"
          className="From-input-name From1"
          placeholder="Enter Your Number"
        ></input>

        <textarea
          className="From-input-name From1"
          placeholder="Enter Your Comment"
        ></textarea>
      </form>
    </div>
  );
};

export default Contect;
