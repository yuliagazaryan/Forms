import React from 'react';

const view = (props) => {
    return (
<div id="view">
    <h2>Check your input</h2>
        <div className="lines"></div>
        <ul className="list">
            <li>Firstname: {props.first}</li>
            <li>Lastname: {props.last}</li>
            <li>Phone: {props.phone}</li>
            <li>Role: {props.role}</li>
            <li>Message: {props.message}</li>
        </ul>
</div>
    
    );
};

export default view;