"use client";  // Make the component client-side

import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import Fooder from '../Base/Fooder';
import Header from '../Base/Header';
import Content from '../Base/Content';

const Front = () => {
 

  return (
    <>
      <div className='flex justify-center pt-2'>
        <Header />
      </div>

      <div className='min-h-screen'>
        <Content/>
      </div>
      <Fooder />
    </>
  );
};

export default Front;
