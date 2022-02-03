import React, { Component } from "react";

export default class PersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    console.log(values.profilePicture);
    return (
      <div className="signup-form">
        <div className="text-xl font-bold text-gray-100 tracking-wide">
          ADRESS
        </div>
        <input
          className="w-full text-lg text-gray-900 p-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          name="address"
          type="text"
          value={values.address}
          onChange={handleChange("address")}
          placeholder="ADRESS"
        />
        <div className="text-xl font-bold text-gray-100 tracking-wide mt-8">
          JOB
        </div>
        <input
          name="job"
          className="w-full text-lg text-gray-900 p-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={values.job}
          onChange={handleChange("job")}
          placeholder="JOB"
        />
        <div className="text-xl font-bold text-gray-100 tracking-wide mt-8">
          GENDER
        </div>
        <select
          value={this.gender}
          onChange={handleChange("gender")}
          name="gender"
          className="w-full text-lg text-gray-800 p-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
        >
          <option value="none" selected>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div className="text-xl font-bold text-gray-100 tracking-wide mt-8">
          HOBBIES <p className="text-sm">(please put ; between hobbies)</p>
        </div>
        <input
          name="hobbies"
          className="w-full text-lg p-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={values.hobbies}
          onChange={handleChange("hobbies")}
          placeholder="HOBBIES"
        />
        <div class="my-10 flex flex-row">
          <button
            onClick={this.continue}
            className=" bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline  shadow-lg    bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline  shadow-lg"
          >
            {" "}
            next step
          </button>
          <button
            onClick={this.back}
            className=" bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline  shadow-lg    bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline  shadow-lg"
          >
            {" "}
            previous step
          </button>
        </div>
      </div>
    );
  }
}
