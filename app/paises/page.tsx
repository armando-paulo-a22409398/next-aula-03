'use client'

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Pais } from '@/models/interfaces';
import PaisCard from '@/components/Pais/Pais';


const fetcher = (url: string) => fetch(url).then((res) => res.json());


export default function PaisesPage() {
    const { data, error, isLoading } = useSWR<Pais[]>(
        'https://restcountries.com/v3.1/independent?status=true&fields=name,area,population', 
        fetcher
    );

    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [filteredData, setFilteredData] = useState<Pais[]>([]);
    
   

    

    // Filtragem e Ordenação
    useEffect(() => {
        if (data) {
            let result = data.filter(pais => 
                pais.name.toLowerCase().includes(search.toLowerCase())
            );
            //ordenação por população
            if (sort === 'population-asc') {
                result.sort((a, b) => a.population - b.population);
            } else if (sort === 'population-desc') {
                result.sort((a, b) => b.population - a.population);
            }
            setFilteredData(result);
        }
    }, [search, sort, data]);

  



    // CORREÇÃO DO ERRO: Garantir que preço e quantidade são números


    if (error) return <div>Erro ao carregar</div>;
    if (isLoading) return <div>A carregar...</div>;

    return (
        <main className="container mx-auto p-6 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Países DEISI</h1>
            

            <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Coluna dos países */}
                <div className="flex-grow">
                    <div className="mb-6 flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg"
                        />
                        <select 
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
                        >
                            <option value="">Sem ordenação</option>
                            <option value="population-asc">População: Crescente</option>
                            <option value="population-desc">População: Decrescente</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredData.map((pais) => (
                            <PaisCard 
                                key={pais.name} 
                                pais={pais} 
                                
                            />
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}