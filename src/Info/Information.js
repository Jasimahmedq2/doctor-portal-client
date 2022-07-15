import React from 'react';

const Information = ({image, title, bgClass}) => {
  return (
    <div class={`card lg:card-side bg-base-100 shadow-xl text-white ${bgClass}`}>
   <figure> <img src={image} alt="Album"/></figure>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
    </div>
  </div>
  );
};

export default Information;