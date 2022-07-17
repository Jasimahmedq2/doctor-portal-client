import React from 'react';

const Loading = () => {
  return (
   
<div class="flex justify-center items-center h-screen ">
  <div class="spinner-border border-primary animate-spin inline-block w-20 h-20 border-4 rounded-full" role="status">
    <span class="visually-hidden text-secondary">Loading...</span>
  </div>
</div>

    
  );
};

export default Loading;