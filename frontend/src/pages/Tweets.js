import { useState, useEffect } from 'react';
import axios from 'axios';
import TweetItem from '../components/TweetItem';
import { v4 as uuidv4 } from 'uuid';

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
        <div className="flex flex-wrap justify-center">
            {users.map((user) => {
                return (
                    <TweetItem key = {uuidv4()} user = {user} />
                )
            })}
        </div>
    );
}