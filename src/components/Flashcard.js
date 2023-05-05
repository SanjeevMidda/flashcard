import React, { useState } from 'react'
import "../index.css"

function Flashcard({korean}) {

    const [status, setStatus] = useState(true);

    function changeStatus(){
        setStatus(!status);
    }

  return (
    <div className='flashcard' onClick={changeStatus}>
        {
            status? <h1>{korean[0]}</h1> : <p>{korean[1]}</p>
        }
    </div>
  )
}

export default Flashcard