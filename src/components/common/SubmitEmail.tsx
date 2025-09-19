"use client"

import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function SubmitEmail() {
    const [result, setResult] = useState("");

    const onSubmit2 = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        try {
            const response = await fetch("https://formsubmit.co/bmarkham@dctvny.org", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setResult("Email Submitted");
                event.target.reset();
            } else {
                console.log("Error", response);
                setResult("Oops, try again");
            }
        } catch (e) {
            console.log("Error", e,);
            setResult("Oops, try again");
        }
    };

    return (
        <div>
            <form className="mb-2" onSubmit={onSubmit2}>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_cc" value="lena.forti@disney.com,lena.forti@hulu.com" />
                <div className="flex items-end">
                    <Input label="Email Address" type="email" name="email" required className="w-60 mr-2" />
                    <Button className='bg-gray-800 hover:bg-gray-700 w-28' type="submit">Submit</Button>
                </div>
            </form >
            <span className="text-xs">{result}</span>
        </div>
    );
}