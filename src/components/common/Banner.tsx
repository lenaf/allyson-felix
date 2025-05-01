"use client"

import { useState } from 'react';
import { IconX } from './icons';

const Banner = ({ children, className }) => {
  const [show, setShow] = useState(true)


  return (show &&
    <div className={`py-2.5 px-4 bg-primary text-sm/6 text-black flex flex-wrap items-center justify-center gap-4 ${className ?? ''}`}>
      {children}
      <button onClick={() => setShow(false)} type="button" className="absolute right-0 mx-4 focus-visible:outline-offset-[-4px]">
        <span className="sr-only">Dismiss</span>
        <IconX />
      </button>
    </div>

  )
}

export default Banner
