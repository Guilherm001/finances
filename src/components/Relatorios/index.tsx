'use client'

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
        }

    ]
    
    return (
        <div>
            <table className="w-full text-sm text-left text-gray-900">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                        {simulacaoRelatorios.map(relatorio => (
                    <tr>
                        <td>{relatorio.title}</td>
                        <td>{relatorio.amount}</td>
                        <td>{relatorio.category}</td>
                        <td>{relatorio.date}</td>
                    </tr>
                ))}
                    
                </tbody>
            </table>
        </div>
    );
}
