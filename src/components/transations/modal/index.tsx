interface  modal {
    isOpen: boolean;
}
const Modal = ({ isOpen }: modal) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-black">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                <button className="text-xl mb-4">Nova Transação</button>
                <form>
                    <input type="text" placeholder="Título" className="w-full mb-2 p-2 border" />
                    <input type="number" placeholder="Valor" className="w-full mb-2 p-2 border" />
                    <div className="mb-2">
                        <input type="radio" id="income" name="type" value="income" />
                        <label htmlFor="income" className="mr-4">Entrada</label>
                        <input type="radio" id="expense" name="type" value="expense" />
                        <label htmlFor="expense">Saída</label>
                    </div>
                    <input type="text" placeholder="Categoria" className="w-full mb-4 p-2 border" />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Cadastrar</button>
                    <button type="submit" className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">Fechar</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;