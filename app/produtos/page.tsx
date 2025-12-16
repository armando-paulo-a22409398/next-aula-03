'use client'

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Produto } from '@/models/interfaces';
import ProdutoCard from '@/components/ProdutoCard';

// Função fetcher padrão para o SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProdutosPage() {
    // Fetch de dados da API
    const { data, error, isLoading } = useSWR<Produto[]>(
        'https://deisishop.pythonanywhere.com/products', 
        fetcher
    );

    // 1. Estado para guardar o termo de pesquisa
    const [search, setSearch] = useState('');
    
    // 2. Estado para guardar a lista filtrada
    const [filteredData, setFilteredData] = useState<Produto[]>([]);

    // 3. useEffect para atualizar filteredData quando search ou data mudam
    useEffect(() => {
        if (data) {
            const results = data.filter(produto => 
                produto.title.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredData(results);
        }
    }, [search, data]);

    // Estados de Erro e Carregamento
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-red-600 bg-red-50 p-6 rounded-xl mx-auto max-w-lg mt-10">
                <p className="text-xl font-bold mb-2">⚠️ Erro ao carregar</p>
                <p>Não foi possível obter os produtos. Tente novamente mais tarde.</p>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                <p className="text-blue-600 font-medium animate-pulse">A carregar a loja...</p>
            </div>
        );
    }

    return (
        <main className="container mx-auto p-6 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                DEISI Shop
            </h1>
            <p className="text-center text-gray-500 mb-8">
                Os melhores produtos tecnológicos ao teu alcance.
            </p>

            {/* Barra de Pesquisa */}
            <div className="mb-8 flex justify-center">
                <input
                    type="text"
                    placeholder="Pesquisar produto por nome..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
            </div>

            {/* Renderização da Lista Filtrada */}
            {(!filteredData || filteredData.length === 0) ? (
                <div className="text-center text-gray-500 bg-gray-100 p-8 rounded-lg">
                    {search ? (
                        <p>Não foram encontrados produtos com o nome "{search}".</p>
                    ) : (
                        <p>Nenhum produto disponível.</p>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredData.map((produto) => (
                        <ProdutoCard key={produto.id} produto={produto} />
                    ))}
                </div>
            )}
        </main>
    );
}