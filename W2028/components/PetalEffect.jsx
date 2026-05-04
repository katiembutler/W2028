"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Optional: If you want to use a PNG petal

export default function PetalEffect() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;

      if (target.closest('a, button, .cursor-pointer')) {
        return; 
      }
      
      const { clientX, clientY } = e;
      
      // 2. Generate a unique ID for this batch so React can track them
      const batchId = Date.now();

      // 3. Create 3 individual petals per click with random drifts and spins
      const newPetals = Array.from({ length: 5 }).map((_, i) => ({
        id: `${batchId}-${i}`,
        x: clientX,
        y: clientY,
        offsetX: (Math.random() - 0.5) * 100, // Drifts between -50px and +50px
        startRot: Math.random() * 360,
        endRot: Math.random() * 360 + 180, // Spins at least 180 degrees
        delay: Math.random() * 0.2, // Some fall slightly after others
      }));

      // 4. Add them to the screen
      setPetals((prev) => [...prev, ...newPetals]);

      // 5. Clean them up after 2 seconds so the browser doesn't crash from too many divs!
      setTimeout(() => {
        setPetals((prev) => 
          prev.filter((p) => !newPetals.map((np) => np.id).includes(p.id))
        );
      }, 2000);
    };

    // Attach the listener
    window.addEventListener("click", handleClick);
    
    // Cleanup the listener when the component unmounts
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    // pointer-events-none ensures this overlay doesn't block you from clicking buttons!
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute text-2xl animate-petal flex items-center justify-center"
          style={{
            /* Center the petal exactly on the mouse cursor tip */
            left: petal.x + 10, 
            top: petal.y + 25,
            /* Pass the random math to our CSS via CSS Variables */
            "--offset-x": `${petal.offsetX}px`,
            "--start-rot": `${petal.startRot}deg`,
            "--end-rot": `${petal.endRot}deg`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg 
            width="20" 
            height="24" 
            viewBox="0 0 20 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            // The drop-shadow ensures you can see the white petal even on light backgrounds
            className="drop-shadow-sm opacity-90" 
          >
            <path 
              d="M10 0C10 0 20 7 20 16C20 21 15 24 10 24C5 24 0 21 0 16C0 7 10 0 10 0Z" 
              fill="white" 
            />
          </svg>
        </div>
      ))}
    </div>
  );
}