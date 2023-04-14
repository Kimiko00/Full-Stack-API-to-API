import React from 'react';
import { useState, useEffect } from 'react';

export default function Nist() {
    const [cves, setCves] = useState()

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/nist')
        .then((response) => response.json())
        .then((data) => console.log(data.vulnerabilities))
    }, []);

    return <p className="container p-2">here all the cves list</p>

}