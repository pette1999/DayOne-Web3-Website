import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import TrackVisibility from 'react-on-screen';

export const Signup = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if(status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    firstName &&
    lastName &&
    email.indexOf("@") > -1 &&
    onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
    });
  }

  return (
    <form
            className="mc__form"
            onSubmit={(e) => handleSubmit(e)}
        >
            <h3 className="mc__title">
                {status === "success" ? "Success!" :
                    "Join our email list for future updates."}
            </h3>

            {status === "sending" && (
                <div
                    className="mc__alert mc__alert--sending"
                >sending...</div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            {status !== "success" ? (
                <div className="mc__field-container">
                    <input
                        label="First Name"
                        onChangeHandler={setFirstName}
                        type="text"
                        value={firstName}
                        placeholder="Jane"
                        isRequired
                    />

                    <input
                        label="Last Name"
                        onChangeHandler={setLastName}
                        type="text"
                        value={lastName}
                        placeholder="Doe"
                        isRequired
                    />

                    <input
                        label="Email"
                        onChangeHandler={setEmail}
                        type="email"
                        value={email}
                        placeholder="your@email.com"
                        isRequired
                    />

                </div>
            ) : null}

            {/*Close button appears if form was successfully sent*/}
            {
                <input
                    label="subscribe"
                    type="submit"
                    formValues={[email, firstName, lastName]}
                />

            }
        </form>
  )
}
