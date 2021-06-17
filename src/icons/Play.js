import React from 'react';

/**
 * Post like icon
 *
 * @param {string} width
 * @param {string} color
 */
export const PlayIcon = ({ width, color }) => {
  const DEFAULT_WIDTH = width || '80';
  const DEFAULT_COLOR = '#666';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ DEFAULT_WIDTH}
      fill={color || DEFAULT_COLOR}
      viewBox="0 0 1024 1024"
      >
         <path
      
        d="M512 85.333c235.648 0 426.667 191.019 426.667 426.667S747.648 938.667 512 938.667 85.333 747.648 85.333 512 276.352 85.333 512 85.333zm0 64a362.667 362.667 0 100 725.334 362.667 362.667 0 000-725.334zm-125.739 216.96a21.333 21.333 0 0125.046-10.922l3.584 1.408 272.298 136.106a21.333 21.333 0 013.243 36.182l-3.243 2.005-272.298 136.15a21.333 21.333 0 01-30.55-15.233l-.341-3.882V375.85a21.333 21.333 0 012.261-9.558z"
      />

     </svg>
  );
};

