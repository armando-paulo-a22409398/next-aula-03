import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex flex-col items-center">
            <h1>React ❤️ Next.js</h1>
            <nav className="flex gap-4">
                <Link href="/" className="hover:underline">Intro</Link>
                <Link href="/sobre" className="hover:underline">Sobre</Link>
                <Link href="/hooks" className="hover:underline">Hooks</Link>
                {/* Adicionado link para Produtos */}
                <Link href="/produtos" className="hover:underline">Produtos</Link>
            </nav>
        </header>
    )
}