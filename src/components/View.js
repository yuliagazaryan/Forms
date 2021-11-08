import React from 'react';

const view = (props) => {
    return (
        <div>
      <p>Firstname: {props.first}</p>
      <p>Lastname: {props.last}</p>
      <p>Phone: {props.phone}</p>
      <p>Role: {props.role}</p>
      <p>Message: {props.message}</p>
        </div>
    );
};

export default view;