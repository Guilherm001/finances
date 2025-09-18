'use client';
import Cards from "@/components/Home/Cards";
import Grafics from "@/components/Home/Grafic";

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
          
          <Grafics />
        </div>
      </main>
    </div>
  );
}
