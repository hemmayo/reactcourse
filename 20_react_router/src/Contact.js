import React from "react";

export default function Contact(props) {
    return (
        <div>
            <h1>This is the contact page</h1>
            <p>My email is: {props.email}</p>
        </div>
    );
}
