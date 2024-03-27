
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [showWelcome, setShowWelcome] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    setShowWelcome(true);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
    
      <h1
        className="text-6xl"
        style={{
          animation: showWelcome
            ? 'welcome 5s ease forwards'
            : 'none',
          fontWeight: showWelcome ? '600' : '300',
        }}
      >
        Welcome to 
        <span className="text-green-500 font-semibold"> Ware</span>
        <span className="text-yellow-500 font-semibold">Flow</span> Africa
      </h1>
      <style jsx>{`
        @keyframes welcome {
          0% {
            transform: scale(0.5);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
