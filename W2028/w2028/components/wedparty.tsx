"use client";

import Image from 'next/image';

export default function Wp_page() {
    const people = [
        {
            id: 1,
            name: 'Madison Gonnerman',
            pos: 'Maid of Honor',
            relation: 'Friend of the Bride'
        },
        {
            id: 2,
            name: 'PLACEHOLDER',
            pos: 'Best Man',
            relation: 'Friend of the Groom'
        },
        {
            id: 3,
            name: 'Olivia Lucas',
            pos: 'Maid of Honor',
            relation: 'Friend of the Bride'
        },
        {
            id: 4,
            name: 'PLACEHOLDER',
            pos: 'Groomsman',
            relation: 'Friend of the Groom'
        },
        {
            id: 5,
            name: 'Nicole Defalco',
            pos: 'Bridesmaid',
            relation: 'Friend of the Bride'
        },
        {
            id: 6,
            name: 'PLACEHOLDER',
            pos: 'Groomsman',
            relation: 'Friend of the Groom'
        },
        {
            id: 7,
            name: 'Vaidehi Patel',
            pos: 'Bridesmaid',
            relation: 'Friend of the Bride'
        },
        {
            id: 8,
            name: 'PLACEHOLDER',
            pos: 'Groomsman',
            relation: 'Friend of the Groom'
        },
        {
            id: 9,
            name: 'Kendall Mallaro',
            pos: 'Bridesmaid',
            relation: 'Friend of the Bride'
        },
        {
            id: 10,
            name: 'David Butler',
            pos: 'Groomsman',
            relation: 'Brother of the Bride'
        },
        {
            id: 11,
            name: 'Ava Mallaro',
            pos: 'Bridesmaid',
            relation: 'Friend of the Bride'
        },
        {
            id: 12,
            name: 'John Butler',
            pos: 'Groomsman',
            relation: 'Brother of the Bride'
        }
    ];


    return (
        <main className='min-h-screen flex-col items-center p-24'>
            <h2 className='text-5xl text-sage font-pinyon mb-4 p-14'>The Wedding Party</h2>
            <div className='grid grid-cols-2 gap-6 max-w-3xl mx-auto p-4'>
                {people.map((item, index) => (
                    <div key={item.id} className='text-center'>
                        <div className='text-center text-4xl font-pinyon text-light-sage'>{item.name}</div>
                        <div className='text-center font-c_sc text-light-beige'>{item.pos}</div>
                        <div className='text-center font-c_sc text-light-beige'>{item.relation}</div>
                    </div>
                ))}
            </div>
            <div className='text-center text-center p-4'>
                    <div className='text-center text-4xl font-pinyon text-light-sage'>Chip Uhrmacher</div>
                    <div className='text-center font-c_sc text-light-beige'>Officient</div>
                    <div className='text-center font-c_sc text-light-beige'>Father of the Groom</div>
            </div>
            <div className='text-center text-center p-4'>
                    <div className='text-center text-4xl font-pinyon text-light-sage'>PLACEHOLDER</div>
                    <div className='text-center font-c_sc text-light-beige'>Priest</div>
            </div>
        </main>
    );
};