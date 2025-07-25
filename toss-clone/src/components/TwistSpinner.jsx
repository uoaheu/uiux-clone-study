// import React from 'react';
// import '../styles/twist.css';

// const TwistSpinner = ({ progress = 1, isLoading = false }) => {
//     return (
//       <div
//         className={`twist-spinner-wrapper ${isLoading ? 'loading' : ''}`}
//       >
//         <div
//           className="twist-spinner"
//           style={{
//             transform: `rotate(${progress * 360}deg) scale(${1 + progress * 0.5})`,
//             opacity: isLoading ? 1 : progress,
//           }}
//         >
//           <div className="twist-circle" />
//         </div>
//       </div>
//     );
//   };
  
//   export default TwistSpinner;

import React from 'react';

const TwistSpinner = ({ isLoading = false, progress = 0 }) => {
  const rotation = isLoading ? 'animate-spin' : '';
  const size = 24 + progress * 16;

  return (
    <div
      className={`mx-auto my-4 rounded-full border-4 border-blue-500 border-t-transparent ${rotation}`}
      style={{ width: size, height: size }}
    />
  );
};

export default TwistSpinner;