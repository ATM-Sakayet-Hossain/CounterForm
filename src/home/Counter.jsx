import { useState } from "react"

const Counter = () => {
  let [count, setcount] =useState(1)
  let quantity = 10
  const plusNum= ()=>{
    if (count < quantity) {
      setcount(++count)
    }
  }
  const subNum= ()=>{
    if (count > 1) {
      setcount(--count)
    }
  }
  return (
    <>
    <div className='flex gap-2'>
      <button onClick={subNum} className='text-4xl text-black font-serif'>-</button>
      <h1 className='text-4xl text-black font-serif font-bold'>{count}</h1>
      <button onClick={plusNum} className='text-4xl text-black font-serif'>+</button>
    </div>
    </>
  )
}

export default Counter