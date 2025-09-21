'use client';
import Transacao from '@/components/transations';

export default function Transactions() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Transações</h1>
            <p>Aqui você pode ver todas as suas transações financeiras.</p>
            <Transacao />
        </div>
    );
}