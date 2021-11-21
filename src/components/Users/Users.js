import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/users')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    console.log(users)
    if (loading) {
        return <p>Data is loading...</p>;
    }
    return (
        <div>
            <ul>
                {users.map((item) => (
                    <li key={item._id}>{item.name} :: {item.email}</li>
                ))}
            </ul>

        </div>
    );
};

export default Users;