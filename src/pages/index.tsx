import { PrismaClient } from '@prisma/client';
import { useState } from 'react';

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.findFirst();
    console.log(user);
    console.log('Successfully connected to the database!');
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);

    const createUser = async () => {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });
        const newUser = await response.json();
        setUsers([...users, newUser]);
    };

    const getUsers = async () => {
        const response = await fetch('/api/users');
        const usersData = await response.json();
        setUsers(usersData);
    };

    return (
        <div>
            <h1>Create User</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button onClick={createUser}>Create</button>
            <button onClick={getUsers}>Get Users</button>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}
