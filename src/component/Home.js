import React from 'react'
import Productlist from './Productlist'
export default function Home() {
  return (
    <>
      <div className="container mt-5">
          <div className="row mt-5">
            <h2 classname="mt-5" style={{marginTop: '3%', textTransform: 'uppercase'}}>Welcome to my shop</h2>
          </div>
      </div>
      <div className="container mt-5">
          <Productlist />
      </div>
    </>
  )
}