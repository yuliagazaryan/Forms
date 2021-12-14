import React from 'react';

const view = ({firstname, lastname, phonenumber, role, message}) => {
    return (
<div id="view">
    <h2>Check your input</h2>
        <div className="lines"></div>
        <ul className="list">
            <li>Firstname: {firstname}</li>
            <li>Lastname: {lastname}</li>
            <li>Phone: {phonenumber}</li>
            <li>Role: {role}</li>
            <li>Message: {message}</li>
        </ul>
</div>
    
    );
};

export default view;