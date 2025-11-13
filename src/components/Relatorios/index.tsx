'use client'
import Pesquisa from "./Pesquisa/index";

export default function Relatorios() {

    interface Relatorio {
        id: number;
        title: string;
        amount: number;
        category: string;
        date: string;
    }

    const simulacaoRelatorios: Relatorio[] = [
        {
            id: 1,
            title: 'Feijão',
            amount: 9.50,
            category: 'Despesas',
            date: '20/10/2023'
        },
        {
            id: 2,
            title: 'Salario',
            amount: 1500,
            category: 'Renda',
            date: '20/11/2023'
        },
        {
            id: 3,
            title: 'Vale Alimentação',
            amount: 300,
            category: 'Renda',
            date: '22/11/2023'
        },
        {
            id: 4,
            title: 'Aluguel',
            amount: 800,
            category: 'Despesas',
            date: '01/11/2023'
        },
        {
            id: 5,
            title: 'Academia',
            amount: 120,
            category: 'Despesas',
            date: '01/11/2023'
        }

    ]
    
    return (
        <div>
            <div>
                <Pesquisa />
            </div>
            <table className="w-full text-sm text-left text-gray-900">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
            <th scope="col" className="px-6 py-3">Titulo</th>
            <th scope="col" className="px-6 py-3">Valor</th>
            <th scope="col" className="px-6 py-3">Categoria</th>
            <th scope="col" className="px-6 py-3">Data</th>
        </tr>
    </thead>
    <tbody>
        {simulacaoRelatorios.map((relatorio, index) => (
            
            <tr 
                key={index}
                className="bg-white border-b odd:bg-gray-150 even:bg-gray-50 hover:bg-gray-200"
            >
                <td className="px-6 py-4">{relatorio.title}</td>
                <td className="px-6 py-4">{relatorio.amount}</td>
                <td className="px-6 py-4">{relatorio.category}</td>
                <td className="px-6 py-4">{relatorio.date}</td>
            </tr>
        ))}
    </tbody>
</table>

        </div>
    );
}
