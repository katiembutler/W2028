"use client";

import Image from 'next/image';

export default function Wp_page() {
    const people = [
        {
            id: 1,
            name: 'Madison Gonnerman',
            pos: 'Maid of Honor',
            relation: ''
        },
        {
            id: 2,
            name: 'Reece Gallagher',
            pos: 'Best Man',
            relation: ''
        },
        {
            id: 3,
            name: 'Olivia Lucas',
            pos: 'Maid of Honor',
            relation: ''
        },
        {
            id: 4,
            name: 'Jack Pieters',
            pos: 'Groomsman',
            relation: ''
        },
        {
            id: 5,
            name: 'Nicole Defalco',
            pos: 'Bridesmaid',
            relation: ''
        },
        {
            id: 6,
            name: 'Pasil Salih',
            pos: 'Groomsman',
            relation: ''
        },
        {
            id: 7,
            name: 'Vaidehi Patel',
            pos: 'Bridesmaid',
            relation: ''
        },
        {
            id: 8,
            name: 'Graham Fry',
            pos: 'Groomsman',
            relation: ''
        },
        {
            id: 9,
            name: 'Kendall Mallaro',
            pos: 'Bridesmaid',
            relation: ''
        },
        {
            id: 10,
            name: 'David Butler',
            pos: 'Groomsman',
            relation: ''
        },
        {
            id: 11,
            name: 'Ava Mallaro',
            pos: 'Bridesmaid',
            relation: ''
        },
        {
            id: 12,
            name: 'John Butler',
            pos: 'Groomsman',
            relation: ''
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
                    <div className='text-center text-4xl font-pinyon text-light-sage'>Lauren Carley and Sophia Mason</div>
                    <div className='text-center font-c_sc text-light-beige'>Personal Attendants</div>
                    <div className='text-center font-c_sc text-light-beige'></div>
            </div>
            <div className='text-center text-center p-4'>
                    <div className='text-center text-4xl font-pinyon text-light-sage'>Chip Uhrmacher</div>
                    <div className='text-center font-c_sc text-light-beige'>Officient</div>
                    <div className='text-center font-c_sc text-light-beige'></div>
            </div>
            <div className='text-center text-center p-4'>
                    <div className='text-center text-4xl font-pinyon text-light-sage'>PLACEHOLDER</div>
                    <div className='text-center font-c_sc text-light-beige'>Priest</div>
            </div>
        </main>
    );
};