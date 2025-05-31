import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const [status, setStutus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            // create mailjs template
        )
    }
}