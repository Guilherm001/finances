'use client';
import Transacao from '@/components/transations';
import Cards from "@/components/Home/Cards";

export default function Transactions() {

    return (
        <div>
            <div className='flex'>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Transações</h1>
                    <p>Aqui você pode ver todas as suas transações financeiras.</p>
                </div>
                <div className='mt-30 ml-30'>
                    <Cards title="Total" value={3000} valueclassName="text-sky-500" />
                </div>
            </div>
            
            <Transacao />
            
        </div>
    );
}