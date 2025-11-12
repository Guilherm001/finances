'use client'

export default function Relatorios() {
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Relatório de Vendas</td>
                        <td>Resumo das vendas mensais</td>
                    </tr>
                    <tr>
                        <td>Relatório de Clientes</td>
                        <td>Detalhes dos clientes cadastrados</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
