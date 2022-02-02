import React, { Component } from "react";
import PasswordDetails from "./PasswordDetails";
import PersonalDetails from "./PersonalDetails";
import UserDetails from "./UserDetails";

export default class Signup extends Component {
  state = {
    step: 1,
    full_name: "",
    e_mail: "",
    password: "",
    date_birthday: "",
    profilePicture: "",
    coverPicture: "",
    address: "",
    gender: "",
    job: "",
    
    hobbies: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      full_name,
      e_mail,
      password,
      date_birthday,
      profilePicture,
      coverPicture,
      address,
      gender,
      job,
      hobbies,
    } = this.state;
    const values = {
      full_name,
      e_mail,
      password,
      date_birthday,
      profilePicture,
      coverPicture,
      address,
      gender,
      job,
      hobbies,
    };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <PasswordDetails
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            values={values}
          />
        );

      default:
    }
  }
}
