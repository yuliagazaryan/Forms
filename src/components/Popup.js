import React from 'react';

const closeHandler = () => {
    window.location.reload();
};

const Popup = (props) => {
    return (
        <div id="container">
            <div className="pop-up">
                <h2>Your note:</h2>
                <div id="inputs-popup">
      <p>Firstname: {props.first}</p>
      <p>Lastname: {props.last}</p>
      <p>Phone: {props.phone}</p>
      <p>Role: {props.role}</p>
      <p>Message: {props.message}</p></div>
            <div className="buttons">
            <button onClick={closeHandler}>Yes, I'm sure</button>
            <button className="secondary" onClick={closeHandler}>Nope, don't want to post it</button>
            </div>
            </div>
        </div>
    );
};

export default Popup;