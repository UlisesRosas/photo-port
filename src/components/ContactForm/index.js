import React, { useState } from 'react'
// this is a helper function to validate the email input
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // set the initial state inside the 'useState()' method. in this casean empty string
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    // initial state of errorMessage is an empty string
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        // this is to validate the email from the input field
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            // isValid conditional statement for error handle
            if (!isValid) {
                // this sets the state of 'errorMessage' 
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            //   this is ti handle any emoty fields
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        // state is only updated if there is no error message
        if (!errorMessage) {
            // 'e.terget.value to change the name to the input value and we use '...' spread operater to keep the other key values and not overwrite them
            // 'e.target.name' makes the form atribut values dynamic to chose one of the three
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // JSX
    return (
        <section>
            <h1>Contact me</h1>
            {/* added 'onSubmit' event listener for the form to trigger 'handleSubmit' function */}
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    {/* // name input */}
                    <label htmlFor="name">Name:</label>
                    {/* 'onChange' event listener will call the 'handleBlur' function when the user changes forms */}
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    {/* // email input */}
                    {/* jsx version of 'for=""' is 'htmlFor='*/}
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    {/* // message text area */}
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {/* this is the same as encapsulating the code in an 'if' statement but the react version */}
                {/* the div block will render if 'errorMessage' evaluates to true */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;