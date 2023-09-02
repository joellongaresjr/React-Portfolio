import React, { useState } from "react";
import { validateEmail } from "../utils/helper";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "Email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto p-4">
      <div className="bg-white border-2 border-[#FCB97D] rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text 2x1 font-bold mb-4">Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <label
              htmlFor="Name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Your Name"
                  defaultValue={name}
                  onBlur={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="Email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  autoComplete="Email"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Your Email"
                  defaultValue={email}
                  onBlur={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="Message"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="Message"
                name="Message"
                placeholder="How may I help?"
                rows="3"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={message}
                onChange={handleChange}
              />
            </div>
          </div>

          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}

          <div className="mt-5 mb-5">
            <button
              data-testid="button"
              className="bg-black hover:bg-[#FCB97D] text-white font-bold py-2 px-4 rounded-full"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
