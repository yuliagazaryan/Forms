import React from 'react';


const Notes = ({ firstname, lastname, phonenumber, role, message }) => {
        return (
            <div>
                    <div className="notes">
                        {firstname} {lastname} - <em>{role}</em> | {phonenumber} | <strong>{message}</strong>
                    </div>
            </div>
        );
    }


export default Notes;