import React, { useState, useEffect } from 'react';

export default function Marketing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <h1 className='marketing'>Automotive SPICE</h1>
    </>
  );
}
