import React, { Component } from "react";

export default class UserDetails extends Component {
   getAge = (dateString)=> {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  continue = (e) => {
    e.preventDefault();
    if(this.getAge(this.props.values.date_birthday ) > 50){
      this.props.nextStep();
    }else {
      alert('you are not allowed with this age ')
    }
    
  };
  render() {
    const { values, handleChange } = this.props;
   

    return (
      <div className="signup-form">
        <div className="text-xl font-bold text-gray-100 tracking-wide">
          Full Name
        </div>
        <input
          className="w-full text-lg p-2  text-gray-900 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={values.full_name}
          onChange={handleChange("full_name")}
          placeholder="Full Name"
        />
        <div className="text-xl font-bold text-gray-100 tracking-wide mt-8">
          Date of Birthday
        </div>
        <input
          className="w-full text-lg text-gray-800 p-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type="date"
          value={values.date_birthday}
          onChange={handleChange("date_birthday")}
          placeholder="Full Name"
        />
        <div class="my-10">
          <button
            onClick={this.continue}
            className=" bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline  shadow-lg    bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline  shadow-lg"
          >
            {" "}
            next step
          </button>
        </div>
      </div>
    );
  }
}
