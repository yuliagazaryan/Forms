import React from 'react';

const form = ({ submit, change }) => {
    return (
    <form onSubmit={submit}>
        <div className="inputs">
        <div>
            <label htmlFor="firstname">First name</label>
            <input 
                type="text"
                name="firstname"
                id="firstname"
                required
                onChange={change}/>
        </div>
        <div>
            <label htmlFor="lastname">Last name</label>
            <input
                type="text"
                name="lastname"
                id="lastname"
                required
                onChange={change}/>
        </div>
        <div>
            <label htmlFor="phonenumber">Phone number</label>
            <input
                type="text"
                name="phonenumber"
                id="phonenumber"
                required
                onChange={change}/>
        </div>
        <div>
            <label htmlFor="role">Role</label>
            <select
                name="role"
                id="role"
                required
                onChange={change}>
                    <option value="" >Choose a role ...</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                </select>
        </div>
        <div id="message">
            <label htmlFor="message">Message</label>
            <textarea
                name="message"
                id="message"
                required
                onChange={change}></textarea>
        </div>
        <button>Send</button>
        </div>
    </form>
    );
};

export default form;