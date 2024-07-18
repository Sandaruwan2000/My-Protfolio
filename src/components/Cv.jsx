import React, { useState } from 'react';
import cv from "../assets/Resume Lahiru_Sandaruwan.pdf";
import { SectionWrapper } from "../hoc";

const Cv = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
  };

  return (
    <div className='h-40'>
      <div className="flex flex-col items-center">
        <a
          href={cv}
          download="Lahiru_Sandaruwan_CV.pdf"
          className={`download-button ${downloaded ? '' : 'animate-pulse'}`}
          onClick={handleDownload}
        >
          Download CV
        </a>
        {downloaded && (
          <p className="thank-you-message">Thank you for downloading!</p>
        )}
      </div>

      <style jsx>{`
        .download-button {
          background-color: #1f2937; /* Replace with your 'bg-tertiary' color */
          padding: 12px 32px;
          border-radius: 16px;
          color: white;
          font-weight: bold;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          position: relative;
          overflow: hidden;
          z-index: 1;
          transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        .download-button::before,
        .download-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid transparent;
          border-radius: 16px;
          box-sizing: border-box;
          z-index: -1;
          transition: border-color 0.3s ease-in-out;
        }

        .download-button::before {
          border-top-color: #3b82f6; /* Replace with your primary color */
          border-right-color: #3b82f6;
          transition-delay: 0.15s;
        }

        .download-button::after {
          border-bottom-color: #3b82f6;
          border-left-color: #3b82f6;
          transition-delay: 0.3s;
        }

        .download-button:hover::before,
        .download-button:hover::after {
          border-color: #3b82f6; /* Replace with your primary color */
        }

        .download-button:hover {
          color: #3b82f6; /* Replace with your primary color */
          transform: scale(1.05);
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .thank-you-message {
          margin-top: 16px;
          color: #3b82f6; /* Replace with your primary color */
          font-weight: bold;
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Cv, "cv");
