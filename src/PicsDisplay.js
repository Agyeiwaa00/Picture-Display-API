import { useEffect, useState } from "react";


const getPicDisplay = async() => {
const response = await fetch('https://dog.ceo/api/breeds/image/random')
const dog = await response.json()
return dog.message
}

function PicsDisplay(){
    // API: https://dog.ceo/dog-api/
    const[picDisplay, setPicDisplay]=useState('')
    useEffect(() =>{
    getPicDisplay().then(pic=>setPicDisplay(pic))
    }, []
    )
    return (
        <div className='pic-Display m-20'>
            <img src={picDisplay} alt='Doggie' className="w-50 h-60"/>
           <button className='border-2 px-2 border-gray-400 m-5' onclick={async e => setPicDisplay(await getPicDisplay())}> Click to display </button>
        </div>
        
    )
}
export default PicsDisplay;