'use client'
import {useEffect, useState} from 'react'

export default function Tarefas() {

    //
    // A. estados
    const [novaTarefa, setNovaTarefa] = useState<string>("")
    // tarefas, lista de tarefas


    //
    // B. event handlers


    //
    // C. renderização
    return (
        <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

            <h2>Tarefas</h2>

            <input
                type="text"
                placeholder="Escreva algo..."
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 m-2 border border-green-700 rounded"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
            />
            <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 m-2 border border-green-700 rounded"
                // onClick = 
            >
                Adicionar
            </button>

            
            <p>Lista de Tarefas:</p>
            {/* 
            <ul>
                {tarefas.map((tarefa,index) => <li key={index}>{tarefa}</li> )}
            </ul> 
            */}
        </section>
    )
}
