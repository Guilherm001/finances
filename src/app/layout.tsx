import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Dashboard financeiro",
  description: "controle de vendas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex h-screen bg-gray-900 text-white max-w-1024">

        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 p-4 flex flex-col">
          <h1 className="text-2x1 font-bold mb-6 text-slate-200">💰 Dashboard</h1>
          <nav className="flex flex-col gap-4 ">
            <a href="./" className="hover:text-green-400 text-slate-200"> Dashboard</a>
            <a href="/transactions" className="hover:text-green-400 text-slate-200">Transações</a>
            <a href="/relatorios" className="hover:text-green-400 text-slate-200">Relarorios</a>
            <a href="#" className="hover:text-green-400 text-slate-200">Configurações</a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col">

          {/* Header */}
          <header className="bg-gray-700 p-4 flex justify-between items-center gap-4">
            <span className="text-lg font-semibold ">Bem vindo Guilherme!</span>
            <button className=" px-3 py-1  bg-green-600 rounded-md hover:bg-green-700">Sair</button>
          </header>
          <section className="flex-1 p-6 overflow-y-auto bg-gray-300">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
