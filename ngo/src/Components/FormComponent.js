import { useState } from 'react';
import dividerTop from "../images/divider-top.png"
import dividerBottom from "../images/divider-bottom.png"

function FormComponent() {
    const [submitted, setSubmit] = useState(true)
    const [fname, setfNameState] = useState('')
    const [lname, setlNameState] = useState('')
    const [email, setEmailState] = useState('')
    const [subject, setSubjectState] = useState('')
    const [message, setMessageState] = useState('')
    function HandleSubmit(event) {
        event.preventDefault();
        setSubmit(false)

        let object =
        {
            firstName: fname,
            lastName: lname,
            emailAdress: email,
            Subject: subject,
            Message: message
        }

        console.log(object)
    }

    let content =
        <div className='form'>
            <h1>Contact Us</h1>
            <img src={dividerTop} alt="divider" aria-hidden="true" />
            <form>
                <label>
                    <textarea rows={1} cols={30} placeholder="First name" onChange={(e) => setfNameState(e.target.value)} />
                    <textarea rows={1} cols={30} placeholder="Last name" onChange={(e) => setlNameState(e.target.value)} />
                    <textarea rows={1} cols={30} placeholder="Email address" onChange={(e) => setEmailState(e.target.value)} />
                    <textarea rows={1} cols={30} placeholder="Subject" onChange={(e) => setSubjectState(e.target.value)} />
                    <textarea rows={3} cols={30} placeholder="Message" onChange={(e) => setMessageState(e.target.value)} />
                </label>
                <input type="submit" value="Submit" onClick={HandleSubmit} />
            </form>
            <img src={dividerBottom} alt="divider" aria-hidden="true" />
        </div>
    if (submitted) {
        return content;
    }
    return (
        <p>We appreciate you contacting us. One of our colleagues will get back in touch with you soon! Have a great day!</p>
    )



}


export default FormComponent;