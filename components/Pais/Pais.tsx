import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Pais } from '@/models/interfaces';

interface PaisCardProps {
    pais: Pais;
 
}

export default function PaisCard({ pais }: PaisCardProps) {


    return (
        <article className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full overflow-hidden">


            <div className="p-4 flex flex-col flex-grow">
 
                
                <h3 className="font-semibold text-gray-800 text-lg leading-tight mb-3 line-clamp-2" title={pais.name}>
                    {pais.name}
                </h3>
                </div>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50 gap-2">
                    <span className="text-xl font-bold text-gray-900">
                        
                        {Number(pais.area).toFixed(2)} km²
                    </span>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50 gap-2">
                    <span className="text-xl font-bold text-gray-900">
                        
                        {Number(pais.population)} habitantes
                    </span>
                    
                    
                    <div className="flex gap-2">
                        {/* Link +Info */}
                        <Link href={`/produtos/${produto.id}`}>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer">
                                + Info
                            </button>
                        </Link>
                        
                       

                    </div>
                </div>
            </div>
        </article>
    );
}