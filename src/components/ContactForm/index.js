import React, { useState } from 'react'

function ContactForm() {
    // set the initial state inside the 'useState()' method. in this casean empty string
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        // 'e.terget.value to change the name to the input value and we use '...' spread operater to keep the other key values and not overwrite them
        // 'e.target.name' makes the form atribut values dynamic to chose one of the three
        setFormState({ ...formState, [e.target.name]: e.target.value })
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
                    {/* 'onChange' event listener will call the 'handleChange' function when there is a keystroke */}
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    {/* // email input */}
                    {/* jsx version of 'for=""' is 'htmlFor='*/}
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                <div>
                    {/* // message text area */}
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;