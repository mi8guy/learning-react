import React from 'react'

function Button({btnText, color, setColor, textColor="white"}) {
    return (
        <button className='outline-none px-4 py-1 rounded-full shadow-lg'
         style={{backgroundColor: color, color: textColor}}
         onClick={() => setColor(color)}
         >
            {btnText}
        </button>    
    )
}

export default Button
