"use client";

import Image from 'next/image';

export default function Polaroids() {
    const memories = [
        {
            id: 1,
            src: "/images/memories/1.jpg",
            date: "June 26, 2021",
            rotation: "rotate-[-4deg]",
            position: "object-center"
        },
        {
            id: 2,
            src: "/images/memories/2.jpg",
            date: "April 9, 2022",
            rotation: "rotate-[-3deg]",
            position: "object-top"
        },
        {
            id: 3,
            src: "/images/memories/3.jpg",
            date: "October 15, 2022",
            rotation: "rotate-[4deg]",
            position: "object-center"
        },
        {
            id: 4,
            src: "/images/memories/4.jpg",
            date: "January 5, 2023",
            rotation: "rotate-[2deg]",
            position: "object-center"
        },
        {
            id: 5,
            src: "/images/memories/5.jpg",
            date: "October 26, 2024",
            rotation: "rotate-[-2deg]",
            position: "object-center"
        },
        {
            id: 6,
            src: "/images/memories/6.jpg",
            date: "December 25, 2024",
            rotation: "rotate-[3deg]",
            position: "object-center"
        },
        {
            id: 7,
            src: "/images/memories/7.jpg",
            date: "May 18, 2025",
            rotation: "rotate-[-3deg]",
            position: "object-top"
        },
        {
            id: 8,
            src: "/images/memories/8.jpg",
            date: "July 19, 2025",
            rotation: "rotate-[4deg]",
            position: "object-center"
        },
        {
            id: 9,
            src: "/images/memories/9.jpg",
            date: "September 21, 2025",
            rotation: "rotate-[-4deg]",
            position: "object-center"
        },
        {
            id: 10,
            src: "/images/memories/10.jpg",
            date: "October 17, 2025",
            rotation: "rotate-[2deg]",
            position: "object-center"
        },
        {
            id: 11,
            src: "/images/memories/11.jpg",
            date: "October 25, 2025",
            rotation: "rotate-[-2deg]",
            position: "object-center"
        },
        {
            id: 12,
            src: "/images/memories/12.jpg",
            date: "October 31, 2025",
            rotation: "rotate-[3deg]",
            position: "object-center"
        },
        {
            id: 13,
            src: "/images/memories/13.jpg",
            date: "April 21, 2026",
            rotation: "rotate-[-3deg]",
            position: "object-center"
        },
    ];


    return (
        <section className="w-full bg-background py-20">
            <div className="sticky top-0 z-[500] py-10 text-center">
                <h2 className="text-5xl text-sage font-pinyon mb-2">Our Love Story</h2>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                {memories.map((memory, i) => (
                    /* This is the cardContainer from your inspiration logic */
                    <div 
                        key={memory.id} 
                        className="h-screen flex items-center justify-center sticky top-0"
                    >
                        {/* This is the card from your inspiration logic */}
                        <div 
                            className={`relative w-72 md:w-80 bg-white p-4 pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 rounded-sm ${memory.rotation}`}
                            style={{ 
                                /* EXACT LOGIC: 
                                   Calculates the resting position based on index.
                                   Note: Changed -5vh to 5vh so it doesn't hide behind the top of your screen! */
                                top: `calc(-5vh + ${i * 5}px)`,
                                zIndex: i
                            }}
                        >
                            {/* Photo Frame */}
                            <div className="w-full aspect-square bg-gray-100 mb-4 overflow-hidden relative border border-gray-200">
                                <Image 
                                    src={memory.src} 
                                    alt={`Memory from ${memory.date}`}
                                    fill
                                    className={`object-cover ${memory.position || 'object-center'}`}
                                    sizes="(max-width: 768px) 288px, 320px"
                                />
                            </div>

                            {/* Date Stamp */}
                            <div className="flex flex-col items-center justify-center text-center mt-2">
                                <span className="font-c_sc text-2xl text-sage tracking-wide">{memory.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Extra space so the last card has room to be scrolled into the stack */}
            <div className="pb-10" />
        </section>
    );
}