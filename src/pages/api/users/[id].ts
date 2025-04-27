import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'PATCH') {
        const { name, email } = req.body;
        const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data: { name, email },
        });
        res.status(200).json(updatedUser);
    } else if (req.method === 'DELETE') {
        await prisma.user.delete({
            where: { id: Number(id) },
        });
        res.status(204).end();
    } else {
        res.setHeader('Allow', ['PATCH', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
