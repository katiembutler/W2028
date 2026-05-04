import React from 'react';

const faq = [
    {
        q: "Where can I book accomodations?",
        a: "We've reserved room blocks at XXX and XXX. Please call the hotel reception to book."
    },
    {
        q: "Is there parking at the venue?",
        a: "Yes, there is parking available at the venue (the lower level). Cars are able to remain overnight until 11AM the following day."
    },
    {
        q: "What's the dress code?",
        a: "Come dance the night away with us wearing your your best cocktail attire. Keep in mind the ceremony will be outdoors and reception will be indoors."
    },
    {
        q: "Are kids invited?",
        a: "While we love your little ones, our wedding will be adult only. Please enjoy a date night on us."
    },
    {
        q: "Can I bring a plus one?",
        a: "Unfortunetly due to venue capacity, we are only able to accomodate those listed specifically on the invitation."
    }
]

const faqpage = () => {
    return (
        <main className='min-h-screen flex-col items-center p-24'>
            <h1 className='text-4xl font-c_g text-sage text-center mb-8'>FAQ</h1>
            <div className='flex flex-col gap-4 max-w-3xl mx-auto p-4'>
                {faq.map((item, index) => (
                    <details
                        key={index}
                        className='border bg-white border-light-beige text-center rounded-md p-4 cursor-pointer'
                    >
                        <summary className='font-bold'>{item.q}</summary>
                        <p className='mt-2'>{item.a}</p>
                    </details>
                ))}
            </div>
        </main>
    );
};

export default faqpage;