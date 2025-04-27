import { useState } from "react";

export default function TestCreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function createUser(name: string, email: string) {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Create User</h1>
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ display: 'block', marginBottom: '10px' }}
            />
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: 'block', marginBottom: '10px' }}
            />
            <button onClick={() => createUser(name, email)}>
                Create User
            </button>
        </div>
    );
}
