import React from 'react';

const form = (props) => {
    return (
    <form>
        <div>
            <label htmlFor="firstname">First name</label>
            <input
                type="text"
                name="firstname"
                id="firstname"
                required
                onChange={props.change}/>
        </div>
        <div>
            <label htmlFor="lastname">Last name</label>
            <input
                type="text"
                name="lastname"
                id="lastname"
                required
                onChange={props.change}/>
        </div>
        <div>
            <label htmlFor="phonenumber">Phone number</label>
            <input
                type="text"
                name="phonenumber"
                id="phonenumber"
                required
                onChange={props.change}/>
        </div>
        <div>
            <label htmlFor="role">Role</label>
            <select
                name="role"
                id="role"
                required
                onChange={props.change}>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                </select>
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea
                name="message"
                id="message"
                required
                onChange={props.change}></textarea>
        </div>
    </form>
    );
};

export default form;