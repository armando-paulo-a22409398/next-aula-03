import Contador from "@/components/Contador/page"
import ContadorPorTecnologia from "@/components/ContadorPorTecnologia/ContadorPorTecnologia"
import FetchUser from "@/components/FetchUser/FetchUser"

import InputEcho from "@/components/InputEcho/InputEcho"
import Produtos from "@/components/Produtos/Produtos"
import SeletorTecno from "@/components/SeletorTecno/SeletorTecno"
import Tarefas from "@/components/Tarefas/Tarefas"
import Tecnologias from "@/components/Tecnologias/Tecnologias"
export default function HooksPage() {

    return (
        <>
            <section className="p-4">
                <h2 className="text-2xl font-bold mb-4">Hooks</h2>
                <div className="bg-blue-300 px-4 py-4 rounded-xl mb-6">
                    <p className="mb-2">
                        Hooks são funções React para gerir o comportamento de componentes.
                        Tornam o código mais modular e fácil de entender. 
                        São uma das principais inovações do React.
                    </p>
                    <p>
                        Hooks: <strong><code>useState, useEffect, useSWR, useParams</code></strong>
                    </p>
                </div>
            </section>

            <div className="flex flex-col gap-6 p-4">
                <Contador />
                
                {/* CORREÇÃO: Adicionada a prop 'tecnologia' obrigatória */}
                <div className="flex flex-col items-start gap-2">
                    <h3 className="font-bold">Contador por Tecnologia:</h3>
                    <ContadorPorTecnologia tecnologia="React" />
                </div>
                
                <InputEcho /> 

                <SeletorTecno /> 

                <Tarefas /> 
            </div>
        </>
    )
}