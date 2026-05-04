import React from 'react';
import Link from 'next/link';

const registry = [
    {
        id: 1,
        site: 'Amazon',
        link: 'PLACEHOLDER'
    },
    {
        id: 2,
        site: 'Crate and Barrel',
        link: 'PLACEHOLDER'
    }
]

const regpage = () => {
    return (
        <main className='min-h-screen flex-col items-center p-24'>
            <h1 className='text-4xl font-c_g text-sage text-center mb-8'>REGISTRY</h1>
            <div className='flex flex-col gap-4 max-w-3xl mx-auto p-4'>
                {registry.map((item, index) => (
                    <Link  key={item.id} href={item.link} className='border bg-white border-light-beige font-semibold text-sage text-center rounded-md p-4'>{item.site}</Link>
                ))}
            </div>
        </main>
    );
};

export default regpage;