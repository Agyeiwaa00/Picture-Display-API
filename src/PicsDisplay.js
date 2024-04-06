import {useCallback, useEffect, useState} from "react";


const API_URL = `https://dog.ceo/api/breeds/image/random`

function PicsDisplay() {
  // API: https://dog.ceo/dog-api/
  const [picDisplay, setPicDisplay] = useState('')
  const getPicDisplay = async () => {
  const data = await fetch(API_URL);
  const {message, status} = await data.json()
    if (status === "success") {
      setPicDisplay(message)
    }
  }

  useEffect(() => {getPicDisplay().catch(err => {
        return err
      })
  }, [])

  return (
    <div className='pic-Display m-20'>
      <img src={picDisplay} alt='Doggie' className="w-50 h-60"/>
      <button className='border-2 px-2 border-gray-400 m-5' onClick={() => getPicDisplay()}> Click to display
      </button>
    </div>

  )
}

export default PicsDisplay;
