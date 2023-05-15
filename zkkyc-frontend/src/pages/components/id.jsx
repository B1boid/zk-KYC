import React from 'react';

const ToyIDDocument = ({ firstName, lastName, country }) => {
    const generateRandomPoints = (numPoints, maxX, maxY) => {
        const points = [];
        for (let i = 0; i < numPoints; i++) {
            const x = Math.floor(Math.random() * (maxX - 6)); // Subtracting dot size from maxX
            const y = Math.floor(Math.random() * (maxY - 6)); // Subtracting dot size from maxY
            points.push({ x, y });
        }
        return points;
    };

    const dotSizeVariants = ['2', '4', '6']; // Array of dot size variants

    const dotPositions = generateRandomPoints(100, 120, 124); // Generate random dot positions

    const svgStyle = {
        width: '40.67vw', // 2/3 of the viewport width
        height: '40.67vh', // 2/3 of the viewport height
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={svgStyle}
            viewBox="0 0 600 380"
            fill="none"
            stroke="black"
            strokeWidth="2"
        >
            <rect x="20" y="20" width="560" height="320" rx="16" />
            <line x1="20" y1="90" x2="580" y2="90" />
            <text x="40" y="65" fontSize="28" fontWeight="bold">
                ID Document
            </text>
            <text x="40" y="135" fontSize="24">
                First Name: {firstName}
            </text>
            <text x="40" y="210" fontSize="24">
                Last Name: {lastName}
            </text>
            <text x="40" y="285" fontSize="24">
                Country: {country}
            </text>

            {/* Square in the bottom-right part */}
            <rect x="400" y="170" width="140" height="130" strokeWidth="2" fill="none" />

            {/* Random dots inside the square */}
            {dotPositions.map((point, index) => {
                const dotSize = dotSizeVariants[Math.floor(Math.random() * dotSizeVariants.length)];
                return (
                    <circle
                        key={index}
                        cx={406 + point.x}
                        cy={176 + point.y}
                        r={dotSize}
                        fill="black"
                        opacity="0.8"
                    />
                );
            })}
        </svg>
    );
};

export default ToyIDDocument;
