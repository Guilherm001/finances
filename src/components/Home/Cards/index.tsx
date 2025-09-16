interface CardsProps {
    title: string;
    value: number;
    valueclassName?: string;
}



export default function Cards({ title, value, valueclassName }: CardsProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-48 m-2 ">
            <h2 className="text-gray-500 font-semibold text-lg ">{title}</h2>
            <h1 className={` text-gray-600 font-bold text-lg text-[24px] ${valueclassName}`}>R$ {value}</h1>
        </div>
    );
}