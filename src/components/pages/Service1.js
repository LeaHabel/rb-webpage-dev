import React, { useState, useEffect } from 'react';

export default function Service1() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <h1 className='service1  h-40 text-2xl my-40'>Automotive SPICE</h1>
    </>
  );
}
