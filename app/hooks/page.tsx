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
            <section>
                <h2>Hooks</h2>
                <div className="bg-blue-300 px-2 py-4 rounded-xl">
                    <p>
                        Hooks são funções React para gerir o comportamento de componentes.
                        Tornam o código mais modular e fácil de entender. 
                        São uma das principais inovações do React.
                    </p>
                    <p>
                        Hooks: <strong><code>useState, useEffect, useSWR, useParams</code></strong>
                    </p>
                    
                </div>
            </section>

            <Contador />
            <ContadorPorTecnologia />
            
             <InputEcho /> 

            <SeletorTecno /> 

             <Tarefas /> 

            {/* <Tecnologias /> */}

            {/* <FetchUser /> */}

            {/* <FetchUsers /> */}
        </>
    )
}