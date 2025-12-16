import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Produto } from '@/models/interfaces';

interface ProdutoCardProps {
    produto: Produto;
}

export default function ProdutoCard({ produto }: ProdutoCardProps) {
    const imagePrefix = 'https://deisishop.pythonanywhere.com';
    const imageUrl = imagePrefix + produto.image;

    return (
        <article className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full overflow-hidden">
            <div className="relative w-full h-48 bg-gray-50 p-4 flex items-center justify-center border-b border-gray-100">
                <Image
                    src={imageUrl}
                    alt={produto.title}
                    width={200}
                    height={200}
                    className="object-contain max-h-full mix-blend-multiply"
                    priority={false}
                />
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 bg-blue-50 w-fit px-2 py-1 rounded">
                    {produto.category}
                </span>
                
                <h3 className="font-semibold text-gray-800 text-lg leading-tight mb-3 line-clamp-2" title={produto.title}>
                    {produto.title}
                </h3>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50 gap-2">
                    <span className="text-xl font-bold text-gray-900">
                        {produto.price.toFixed(2)} €
                    </span>
                    
                    <div className="flex gap-2">
                        <Link href={`/produtos/${produto.id}`}>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer">
                                + Info
                            </button>
                        </Link>
                        
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors shadow-sm cursor-pointer">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}