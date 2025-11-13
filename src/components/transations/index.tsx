'use client'
import { useState } from "react";
import Modal from './modal/index'

const Lista = ()=>{

    interface Transaction {
        id: number;
        title: string;
        amount: number;
        type: 'income' | 'expense';
        category: string;
    }

    const simulacaoTransacoes: Transaction[] = [
        {
            id: 1,
            title: 'Freelance de website',
            amount: 5000,
            type: 'income',
            category: 'Trabalho'
        },
        {
            id: 2,
            title: 'Aluguel',
            amount: 1500,
            type: 'expense',
            category: 'Casa'
        },
        {
            id: 3,
            title: 'Mercado',
            amount: 300,
            type: 'expense',
            category: 'Alimentação'
        }
    ];

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


        

    return (
        
        <div>
            <div>
                
                <button onClick={() => setIsModalOpen(!isModalOpen)} className="bg-green-500 p-2 rounded-3xl m-3 hover:bg-sky-500 ">Nova Transação</button>

                <Modal isOpen={isModalOpen} />

            </div>
            
            <div>
                <table className="w-full text-sm text-left text-gray-900">
                    <thead>
                        <tr className="text-xs text-gray-700 uppercase bg-gray-50">
                            <th className="p-4">Título</th>
                            <th className="p-4">Valor</th>
                            <th className="p-4">Categoria</th>
                            <th className="p-4">Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {simulacaoTransacoes.map(transacao => (
                            <tr key={transacao.id} className="bg-white border-b odd:bg-gray-150 even:bg-gray-50 hover:bg-gray-200 ">
                                <td className="p-4">{transacao.title}</td>
                                <td>{transacao.amount}</td>
                                <td>{transacao.type}</td>
                                <td>{transacao.category}</td>
                                </tr>
                         ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Lista;