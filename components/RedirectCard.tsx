import React from 'react';
import { COVER_IMAGE_URL } from '../constants';

interface RedirectCardProps {
  onRetry: () => void;
}

export const RedirectCard: React.FC<RedirectCardProps> = ({ onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 text-center">
      {/* Hero Image with Red Glow Border */}
      <div className="w-[85%] max-w-[350px] mb-6 relative">
         <img 
           src={COVER_IMAGE_URL} 
           alt="Edge of Purity" 
           className="w-full h-auto object-cover"
           style={{ 
             borderRadius: '12px',
             border: '2px solid #ff4d4d',
             boxShadow: '0 0 30px rgba(255, 77, 77, 0.4)'
           }}
         />
      </div>

      {/* Main Action Button */}
      <button 
        onClick={onRetry}
        className="text-white border-none cursor-pointer transition-transform duration-200 active:scale-95"
        style={{
          background: '#00d564',
          padding: '18px 40px',
          borderRadius: '50px',
          fontWeight: 800,
          fontSize: '1.1rem',
          boxShadow: '0 4px 15px rgba(0,213,100,0.3)',
          textTransform: 'uppercase'
        }}
      >
        Open in App
      </button>

      {/* Sub-text */}
      <p style={{ marginTop: '15px', fontSize: '0.8rem', color: '#888' }}>
        Recommended for the best reading experience
      </p>
    </div>
  );
};