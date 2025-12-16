import React from 'react';
import Image from 'next/image';
import { Produto } from '@/models/interfaces';

interface ProdutoDetalheProps {
    produto: Produto;
}

export default function ProdutoDetalhe({ produto }: ProdutoDetalheProps) {
    // Reconstruir o URL da imagem
    const imagePrefix = 'https://deisishop.pythonanywhere.com';
    const imageUrl = imagePrefix + produto.image;

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Coluna da Imagem */}
                <div className="bg-gray-50 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="relative w-full h-[400px]">
                        <Image
                            src={imageUrl}
                            alt={produto.title}
                            fill
                            className="object-contain mix-blend-multiply"
                            priority
                        />
                    </div>
                </div>

                {/* Coluna da Informação */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
                        {produto.category}
                    </span>
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {produto.title}
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center mb-6 bg-yellow-50 w-fit px-3 py-1 rounded-full border border-yellow-100">
                        <span className="text-yellow-500 mr-1 text-lg">★</span>
                        <span className="font-bold text-gray-700 mr-1">{produto.rating.rate}</span>
                        <span className="text-gray-400 text-sm">({produto.rating.count} avaliações)</span>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {produto.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-4xl font-bold text-gray-900">
                            {produto.price.toFixed(2)} €
                        </span>
                        
                        <button 
                            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-200 transform hover:-translate-y-0.5"
                            onClick={() => alert('Adicionado ao carrinho!')}
                        >
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}