import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow1 from "../images/arrow.png";

gsap.registerPlugin(ScrollTrigger);

const ContactMeSection = () => {
  const form = useRef();
  const [submitButtonText, setSubmitButtonText] = useState("Submit");

  //EmailJs function
  const sendEmail = (e) => {
    e.preventDefault();

    setSubmitButtonText("Sending...");

    emailjs
      .sendForm(
        "service_thn3hn8",
        "template_6djmjxe",
        form.current,
        "mdMfzEGTXq2_--3G5"
      )
      .then(
        (result) => {
          e.target.reset();

          // Change the submit button text to "Sent!" after successful submission
          setSubmitButtonText("Sent!");

          // After 3 seconds, revert the submit button text back to "Submit" and reset the input fields
          setTimeout(() => {
            setSubmitButtonText("Submit");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setSubmitButtonText("Submit");
        }
      );
  };

  //Input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //Check if all input fields are empty
  const isSubmitDisabled = !(name && email && subject && message);

  return (
    <div className="contact-me">
      <div className="contact-me-wrapper" id="contact-me-nav">
        <div className="form-header power4Fx">
          <h3 className="fadeToUp">Your feedback matters.</h3>
          <h1 className="fadeToRight">Feel free to</h1>
          <h1 className="fadeToRight">get in touch!</h1>
        </div>
        <form onSubmit={sendEmail} className="power4Fx fadeToRight" ref={form}>
          <div className="input-row">
            <div className="input">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="input">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="input">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div
            className={`btn ${isSubmitDisabled ? "disabled" : ""}`}
            title={isSubmitDisabled ? "Fill up the form first" : ""}
          >
            <input
              type="submit"
              value={submitButtonText} //
              disabled={isSubmitDisabled}
            />
            <img src={arrow1} alt="arrow-icon" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMeSection;
