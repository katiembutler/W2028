import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='w-full p-6 border border-light-beige flex justify-between items-center cursor-pointer bg-white'>
            <div className='text-3xl font-pinyon'>K & X
            </div>
            <div className='space-x-6'>
                <Link href="/" className='hover:text-light-sage'>HOME</Link>
                <Link href="/faq" className='hover:text-light-sage'>FAQ</Link>
                <Link href="/rsvp" className='hover:text-light-sage'>RSVP</Link>
                <Link href="/registry" className='hover:text-light-sage'>REGISTRY</Link>
            </div>
        </nav>
    );
}
