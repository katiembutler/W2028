"use client";

import { useState } from 'react';
import {useRouter} from 'next/navigation';

const INVITE_LIST = [
    { 
      partyName: "Katie Butler", 
      guests: ["Katie Butler", "Xavier Uhrmacher"], 
    },
    { 
      partyName: "Amy Uhrmacher", 
      guests: ["Amy Uhrmacher", "Chip Uhrmacher"], 
    },
];

export default function RSVP() {
    const router = useRouter();

    const [searchName, setSearchName] = useState("");
    const [foundParty, setFoundParty] = useState<null | { guests: string[] }>(null);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // We can now use e.currentTarget instead of e.target as HTMLFormElement!
        const formData = new FormData(e.currentTarget);
        
        const partyResponses = foundParty?.guests.map((guest, index) => {
            return {
                guestName: guest,
                attendance: formData.get(`attendance-${index}`),
                mealDetails: formData.get(`meal-${index}`)
            };
        });

        console.log("Final RSVP Submission:", partyResponses);
        alert(`RSVP submitted for the ${foundParty?.partyName} party!`);

        router.push('/');
    };

    const handleCheckInvite = () => {
        const party = INVITE_LIST.find(p => 
            p.guests.some(g => g.toLowerCase() === searchName.trim().toLowerCase())
        );
        setFoundParty(party || null);
        setHasSearched(true);
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl font-c_g text-sage mb-8">RSVP</h1>

            <div className="w-full max-w-md p-8  bg-white border border-light-beige rounded-lg">
                {!foundParty ? (
                    <div className="flex flex-col gap-4">
                        <label className="font-semibold text-sage text-center">
                            Enter your full name as it appears on your invitation:
                        </label>
                        <input 
                            type="text" 
                            className="p-2 border rounded text-gray-900"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                        <button 
                            onClick={handleCheckInvite}
                            className="bg-sage text-white py-2 rounded font-bold hover:bg-light-sage transition-colors"
                        >
                            Check Invite
                        </button>
                        
                        {hasSearched && !foundParty && (
                            <p className="text-red-500 font-bold mt-2 text-center text-sm">
                                Invitation not found. Please check your spelling.
                            </p>
                        )}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <h2 className="text-xl font-bold border-light-beige pb-2 text-gray-800">We found your party!</h2>
                        
                        {foundParty.guests.map((guest, index) => (
                            <div key={index} className="p-4 border-l-4 border-sage bg-white shadow-sm">
                                <p className="font-bold mb-2 text-gray-900">{guest}</p>
                                <select name={`attendance-${index}`} className="w-full p-2 border rounded bg-gray-50 text-gray-900">
                                    <option value="attending">Joyfully Accepts</option>
                                    <option value="declining">Regretfully Declines</option>
                                </select>
                                
                                <input 
                                    type="text" 
                                    name={`meal-${index}`}
                                    placeholder="Meal preferences / Allergies" 
                                    className="w-full mt-2 p-2 text-sm border rounded italic text-gray-900"
                                />
                            </div>
                        ))}

                        <button 
                            type="submit"
                            className="bg-sage text-white py-2 rounded font-bold hover:opacity-90 transition-opacity"
                        >
                            Submit RSVP for Party
                        </button>
                        
                        <button 
                            type="button"
                            onClick={() => {setFoundParty(null); setHasSearched(false); setSearchName("");}}
                            className="text-xs text-gray-400 mt-2 underline text-center"
                        >
                            Not you? Search again.
                        </button>
                    </form>
                )}
            </div>
        </main>
    );
}