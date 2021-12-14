import React from 'react';


const closeHandler = () => {
    window.location.reload();
};


const Popup = ({ firstname, lastname, phonenumber, role, message, posting }) => {
    return (
        <div id="container">
            <div className="pop-up">
                <h2>Your note:</h2>
                <div id="inputs-popup">
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Phone: {phonenumber}</p>
      <p>Role: {role}</p>
      <p>Message: {message}</p></div>
            <div className="buttons">
            <button onClick={posting}>Yes, I'm sure</button>
            <button className="secondary" onClick={closeHandler}>Nope, don't want to post it</button>
            </div>
            </div>
        </div>
    );
};

export default Popup;