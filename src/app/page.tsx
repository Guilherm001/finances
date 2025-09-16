import Image from "next/image";
import Cards from "@/components/Home/Cards";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <h1>Visão geral</h1>
        </div>
        <div className="flex">
          <Cards title="Entradas" value={5000} valueclassName="text-green-500"/>
          <Cards title="Saidas" value={2000} valueclassName="text-red-500" />
          <Cards title="Total" value={3000} valueclassName="text-sky-500" />
        </div>
        <div>
          <h1>Evolução financeira</h1>
        </div>
      </main>
    </div>
  );
}
