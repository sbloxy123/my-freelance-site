import React from "react";
import "../css/form.css";

const ContactForm = () => {
  return (
    <div className="my-formy bg-theme_black-900">
      <div className="content-container py-12">
        <div className="d-flex justify-content-center align-items-center login-box">
          <div className="">
            <div className="text-theme_white-900 text-center w-[40%] mx-auto py-12 text-2xl">
              GET IN TOUCH
            </div>
            <div className="col-span-12 text-left">
              <form
                action="https://formspree.io/f/meqvjrla"
                //change action address on completion
                method="POST"
                className="form-elements w-[90%] md:w-[40%] m-auto"
              >
                <div className="grid grid-cols-1">
                  <label
                    htmlFor="name"
                    className="form-control-label  text-theme_white-900 m-0"
                  >
                    YOUR NAME
                  </label>
                  <input name="name" type="text" className="form-control" />
                </div>
                <div className="grid grid-cols-1">
                  <label
                    htmlFor="email"
                    className="form-control-label  text-theme_white-900 m-0"
                  >
                    YOUR EMAIL
                  </label>
                  <input name="email" type="email" className="form-control" />
                </div>
                <div className="grid grid-cols-1">
                  <label
                    htmlFor="message"
                    className="form-control-label  text-theme_white-900 m-0"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    type="message"
                    col="10"
                    rows="5"
                    className="form-control"
                    i
                  ></textarea>
                </div>
                <div className="p-0 ">
                  <button type="submit" className="contact-button">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
