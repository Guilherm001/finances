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
                <h1>clicaaa</h1>
                <button onClick={() => setIsModalOpen(!isModalOpen)} className="bg-green-500">Nova Transação</button>

                <Modal isOpen={isModalOpen} />

            </div>
            
            <div>
                <table>
                    <thead>
                        <tr className="text-left text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <th className="p-4">Título</th>
                            <th className="p-4">Valor</th>
                            <th className="p-4">Categoria</th>
                            <th className="p-4">Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {simulacaoTransacoes.map(transacao => (
                            <tr key={transacao.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
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