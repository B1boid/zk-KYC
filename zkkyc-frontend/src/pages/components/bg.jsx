import React from 'react';

const Flow = () => {
    return (
        <svg viewBox="0 0 1920 1970" fill="none" className="fixed indent-0 -z-10">
            <path d="M1 3.00354C179.628 198.347 377.216 285 632.684 285C888.152 285 973.973 285 1290.31 285C1606.65
285 1797.76 143.751 1921 1.00002" stroke="url(#lines-path)" vectorEffect="non-scaling-stroke"></path>

            <path d="M1 197.5C185.5 282.5 336 320 631 320C926 320 980 320 1291 320C1602 320 1746.5 276.5 1921 197.5"
                  stroke="url(#lines-path)" vectorEffect="non-scaling-stroke"></path>

            <path d="M1 354H1921" stroke="url(#lines-path)" vectorEffect="non-scaling-stroke"></path>
            <path d="M1 510C185.5 425 336 387.5 631 387.5C926 387.5 980 387.5 1291 387.5C1602 387.5 1746.5 431 1921 510"
                  stroke="url(#lines-path)" vectorEffect="non-scaling-stroke"></path>

            <path
                d="M1 704.996C179.628 509.653 377.216 423 632.684 423C888.152 423 973.973 423 1290.31 423C1606.65 423 1797.76 564.249 1921 707"
                stroke="url(#lines-path)" vectorEffect="non-scaling-stroke"></path>

            <line x1="0" y1="0" x2="80" y2="0" stroke="url(#lines-gradient)" strokeWidth="2" strokeLinecap="round"
                  transform="translate(-80,0)" vectorEffect="non-scaling-stroke">
                <animateMotion dur="3s" repeatCount="indefinite"
                               path="M1 3.00354C179.628 198.347 377.216 285 632.684 285C888.152 285 973.973 285 1290.31 285C1606.65 285 1797.76 143.751 1921 1.00002"
                               rotate="auto" begin="1"></animateMotion>
            </line>

            <line x1="0" y1="0" x2="80" y2="0" stroke="url(#lines-gradient)" strokeWidth="3" strokeLinecap="round"
                  transform="translate(-80,0)" vectorEffect="non-scaling-stroke">
                <animateMotion dur="2.5s" repeatCount="indefinite"
                               path="M1 197.5C185.5 282.5 336 320 631 320C926 320 980 320 1291 320C1602 320 1746.5 276.5 1921 197.5"
                               rotate="auto" begin="5"></animateMotion>
            </line>

            <line x1="0" y1="0" x2="80" y2="0" stroke="url(#lines-gradient)" strokeWidth="3" strokeLinecap="round"
                  transform="translate(-80,0)" vectorEffect="non-scaling-stroke">
                <animateMotion dur="4s" repeatCount="indefinite" path="M1 354H1921" rotate="auto" begin="3"></animateMotion>
            </line>

            <line x1="0" y1="0" x2="80" y2="0" stroke="url(#lines-gradient)" strokeWidth="3" strokeLinecap="round"
                  transform="translate(-80,0)" vectorEffect="non-scaling-stroke">
                <animateMotion dur="3.5s" repeatCount="indefinite"
                               path="M1 510C185.5 425 336 387.5 631 387.5C926 387.5 980 387.5 1291 387.5C1602 387.5 1746.5 431 1921 510"
                               rotate="auto" begin="2"></animateMotion>
            </line>

            <line x1="0" y1="0" x2="80" y2="0" stroke="url(#lines-gradient)" strokeWidth="3" strokeLinecap="round"
                  transform="translate(-80,0)" vectorEffect="non-scaling-stroke">
                <animateMotion dur="4.5s" repeatCount="indefinite"
                               path="M1 704.996C179.628 509.653 377.216 423 632.684 423C888.152 423 973.973 423 1290.31 423C1606.65 423 1797.76 564.249 1921 707"
                               rotate="auto" begin="0">

                </animateMotion>
            </line>

            <defs>
                <linearGradient id="lines-gradient" x1="0" y1="0" x2="80" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="transparent " offset="0"></stop>
                    <stop stopColor="#93c5fd" offset="1"></stop>
                </linearGradient>
                <linearGradient id="lines-path" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="transparent " offset="0%"></stop>
                    <stop stopColor="#fcd34d" offset="20%"></stop>
                    <stop stopColor="#fcd34d" offset="90%"></stop>
                    <stop stopColor="transparent" offset="100%"></stop>
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Flow;