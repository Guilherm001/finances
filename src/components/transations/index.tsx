
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
        

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {simulacaoTransacoes.map(transacao => (
                        <tr key={transacao.id}>
                            <td>{transacao.title}</td>
                            <td>{transacao.amount}</td>
                            <td>{transacao.type}</td>
                            <td>{transacao.category}</td>
                            </tr>
                     ))}
                </tbody>
            </table>
        </div>
    )
}

export default Lista;