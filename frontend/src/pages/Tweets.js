import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Tweets() {
    const [users, setUser] = useState([])

    useEffect(() => {
        getUsers();
    }, []);
    
    const getUsers = async () => {
        const response = await axios.get("http://127.0.0.1:5000/api/tweets")
        setUser(response.data);
    }

    return (
        <>
            <h1>Here is a tweets from relate topics</h1>
            {users.map((user) => {
                return (
                    <>
                        <p>{user.created_at}</p>
                        <p>{user.text}</p>
                        <p>{user.hashtags}</p>
                    </>
                )
            })}
        </>
    );
}