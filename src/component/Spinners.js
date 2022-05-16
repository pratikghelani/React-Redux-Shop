import React from 'react'
export default function Spinners() {
  return (
    <>
      <div className="text-center">
        <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  )
}
