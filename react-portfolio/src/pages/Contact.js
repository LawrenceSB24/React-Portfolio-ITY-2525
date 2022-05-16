import React from "react";

export default function Contact() {
    return (
        <div className="container">
            <h1>Contact</h1>

            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name" >Name:</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="email" >Email Address:</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp"/>
                </div>

                <div className="form-group">
                    <label htmlFor="message" >Message:</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}