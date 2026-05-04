"use client";

import { useEffect, useState, useRef } from "react";

const TearOffCard = ({ value, label, tickId }: { value: string; label: string; tickId: number; }) => {
  const paperStyles = "absolute top-0 left-0 w-full h-full bg-[#ffffff] border border-[#dcd3b6] rounded-sm shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_0_0_20px_rgba(139,69,19,0.03)] flex flex-col items-center justify-center";
  
  const [flyingPages, setFlyingPages] = useState<{id: number, val: string, rot: number}[]>([]);
  
  const prevValue = useRef(value);
  const prevTick = useRef(tickId);

  useEffect(() => {
    if (tickId !== prevTick.current && prevTick.current > 0) {
      // Synchronized rotation so the "sheet" flies together
      const synchronizedRotation = (tickId % 2 === 0) ? -10 : 8; 

      const id = prevTick.current;
      const valToFly = prevValue.current;

      setFlyingPages(prev => [...prev, { id, val: valToFly, rot: synchronizedRotation }]);

      // Clean up the DOM quickly since they are flying fast
      setTimeout(() => {
        setFlyingPages(prev => prev.filter(p => p.id !== id));
      }, 400); 
    }

    prevValue.current = value;
    prevTick.current = tickId;
  }, [tickId, value]);

  return (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="relative w-20 h-28 md:w-28 md:h-36 overflow-visible">
        
        {/* Hardware Binding */}
        <div className="absolute top-2 left-3 md:left-5 w-2 h-4 md:h-5 border-2 border-background bg-background rounded-full z-30"></div>
        <div className="absolute top-2 right-3 md:right-5 w-2 h-4 md:h-5 border-2 border-background bg-background rounded-full z-30"></div>
        
        {/* Back Paper */}
        <div className={`${paperStyles} z-10`}>
          <div className="absolute top-7 w-full h-[1px] bg-black/5"></div>
          <span className="relative z-10 text-4xl md:text-6xl text-sage font-c_g tracking-tight mt-4">
            {value}
          </span>
        </div>

        {/* Flying Papers */}
        {flyingPages.map(page => (
          <div 
            key={page.id}
            className={`${paperStyles} z-20 origin-top-left animate-continuous-tear pointer-events-none`}
            style={{ '--rotation': `${page.rot}deg` } as React.CSSProperties}
          >
            <div className="absolute top-7 w-full h-[1px] bg-black/5"></div>
            <span className="relative z-10 text-4xl md:text-6xl text-sage font-c_g tracking-tight mt-4 opacity-40">
               {page.val}
            </span>
            <div className="absolute top-7 w-full h-[1px] border-t border-black/10 border-dashed z-40"></div>
          </div>
        ))}

      </div>
      
      <span className="mt-4 text-xs md:text-sm font-c_g font-semibold text-light-sage uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
};

export default function Countdown() {
  const [realTime, setRealTime] = useState({ years: 0, months: 0, days: 0 });
  
  // Rips through 40 pages (longer animation)
  const [ticksLeft, setTicksLeft] = useState(25); 

  const targetDateStr = "2028-04-22T00:00:00";

  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDateStr);

    if (target <= now) return { years: 0, months: 0, days: 0 };

    let years = target.getFullYear() - now.getFullYear();
    let months = target.getMonth() - now.getMonth();
    let days = target.getDate() - now.getDate();

    if (days < 0) {
      months -= 1;
      const previousMonthDays = new Date(target.getFullYear(), target.getMonth(), 0).getDate();
      days += previousMonthDays;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  };

  useEffect(() => {
    setRealTime(calculateTimeLeft());

    // 75ms tick speed = very fast page rips
    const tickSpeed = 75; 
    
    const interval = setInterval(() => {
      setTicksLeft(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, tickSpeed);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (ticksLeft > 0) return;

    const timerInterval = setInterval(() => {
      setRealTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [ticksLeft]);

  // Modulo math ensures the ticking numbers look like realistic calendar dates
  // even when we add 40 ticks to them!
  const displayYears = String(realTime.years + Math.floor(ticksLeft / 5)).padStart(2, '0');
  const displayMonths = String((realTime.months + ticksLeft) % 12).padStart(2, '0');
  const displayDays = String((realTime.days + ticksLeft) % 31).padStart(2, '0');

  return (
    <>
      <style>{`
        @keyframes continuousTearOff {
          0% { 
            transform: perspective(400px) rotateX(0deg) rotateZ(0deg) translateY(0); 
            opacity: 1; 
          }
          10% { 
            transform: perspective(400px) rotateX(-20deg) rotateZ(-2deg) translateY(2px); 
            opacity: 1;
          }
          100% { 
            /* Faster launch, goes straight up */
            transform: perspective(400px) rotateX(-75deg) rotateZ(var(--rotation)) translateY(-400px); 
            opacity: 0;
          }
        }
        .animate-continuous-tear {
          /* Duration is down to 0.4s so they fly incredibly fast */
          animation: continuousTearOff 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      {/* CRITICAL FIX: Added 'overflow-hidden' right here.
        This forces the flying papers to visually disappear the exact moment 
        they hit the top edge of this container, ensuring they NEVER touch the Navbar.
      */}
      <div className="relative w-full overflow-hidden bg-transparent pt-12 pb-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <TearOffCard value={displayYears} label="Years" tickId={ticksLeft} />
            <TearOffCard value={displayMonths} label="Months" tickId={ticksLeft} />
            <TearOffCard value={displayDays} label="Days" tickId={ticksLeft} />
          </div>
        </div>
      </div>
    </>
  );
}