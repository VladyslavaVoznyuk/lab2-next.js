import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email } = req.body;
        try {
            const user = await prisma.user.create({
                data: { name, email },
            });
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    } else if (req.method === 'GET') {
        try {
            const users = await prisma.user.findMany();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
