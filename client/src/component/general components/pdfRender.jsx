import React from "react";
import PDF from "client/src/Ressources/Histoire_littéraire.pdf#toolbar=0";
import { Link } from "react-router-dom";

function PdfRending() {
  return (
    <div>
      <Link to="/content">
        <div className="bg-[#323639] px-6 pt-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 63 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M62.5499 19.25V47.75C62.5499 52.9893 59.4587 57.25 55.6499 57.25H7.34995V43H52.1999V24H14.25V33.5L0.449951 16.875L14.25 0.25V9.75H55.6499C57.4799 9.75 59.235 10.7509 60.529 12.5325C61.823 14.3141 62.5499 16.7304 62.5499 19.25Z"
              fill="white"
            />
          </svg>
        </div>
      </Link>
      <embed className="w-full h-screen" src={PDF} type="" />
    </div>
  );
}

export default PdfRending;
