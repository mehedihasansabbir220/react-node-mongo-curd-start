import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handelUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'post',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Use added suceess')
                    e.target.reset();
                }
            })
        e.preventDefault();

    }
    return (
        <div>
            <h2>Please Add some  User</h2>
            <form onSubmit={handelUser}>
                <input type="text" placeholder='your name' ref={nameRef} />
                <input type="email" name="" id="" placeholder="your email please " ref={emailRef} />
                <input type="Submit" value="add" />

            </form>
        </div>
    );
};

export default AddUser;