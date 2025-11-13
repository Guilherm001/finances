
export default function Pes() {
  return (
    <form className=" mb-4 flex items-center b-g-white p-4 rounded shadow">
      <input
        type="text"
        placeholder="escreva para pesquisar..."
        className="border border-gray-300 p-2 rounded w-full bg-white"
      />
      <button type="submit" className='bg-blue-500 text-white p-2 ml-2 rounded'>
        Buscar
      </button>
    </form>
  );
}

