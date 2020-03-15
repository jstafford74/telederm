import React from "react";
import emailjs from "emailjs-com";
import { Field, reduxForm } from "redux-form";

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_5lh5ZqYz", e.target, "user_Jph9lLQbkZwLwESsROAFg")
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail} >
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="FirstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="LastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email_s"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>DOB</label>
        <div>
          <Field
            name="dob"
            component="input"
            type="text"
            placeholder="YYYY-MM-DD"
          />
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SimpleForm);

