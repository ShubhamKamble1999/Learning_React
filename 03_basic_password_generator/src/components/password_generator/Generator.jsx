import React, { useCallback, useEffect, useState } from 'react'
import "./generator.css"

export default function Generator() {

  const [password,setPassword] = useState("asdf123")
  const [cursorCount,setCursorCount] = useState(8)
  const [numberCheck,setNumberCheck] = useState(false)
  const [specialCharCheck,setSpecialCharCheck] = useState(false)

  const handleCursor = (event) => {
    console.log("EVENT :: " + event.target.value);
    setCursorCount(event.target.value)
  }

  const handleGeneratePassword = useCallback(() => {

    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let generatedPassword = ""
    if (numberCheck) {
      string += "1234567890"
    }
    if (specialCharCheck) {
      string += "@#$%^&*(){}"
    }

    for (let index = 0; index < cursorCount; index++) {
      let char = Math.floor(Math.random() * string.length + 1)
      generatedPassword += string.charAt(char) 
    }

    setPassword(generatedPassword);

  })

  useEffect(() => {
    handleGeneratePassword()
  },[numberCheck,specialCharCheck,cursorCount])

  return (
    <>
    
      <div className="container main-container">
        <div className="calculator-block">
          <div className="elements">
            <h2>Password Generator</h2>
            <input
              value={password}
              type="text"
              disabled
              className='password-input'
            />
            <div className='changes'>
              <div className="cursor">
                <input
                  type="range"
                  min={8}
                  max={64}
                  className='range-slider'
                  value={cursorCount}
                  onChange={handleCursor}
                />
                <label
                  htmlFor="cursor-slider"
                  className='cursor-label'
                >{cursorCount}</label>
              </div>
              <div className="check">
                <input
                  type="checkbox"
                  defaultChecked={numberCheck}
                  onChange={() => {
                    setNumberCheck((prev) => !prev)
                  }}
                />
                <label htmlFor="number check" className='cursor-label'>Numberic Check</label>
                <br />
                <input
                  type="checkbox"
                  defaultChecked={specialCharCheck}
                  onChange={() => {
                    setSpecialCharCheck((prev) => !prev)
                  }}
                />
                <label htmlFor="number check" className='cursor-label'>Special Character Check</label>
                  <br />
                <button
                  onClick={handleGeneratePassword}
                >Generate Password</button>

              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
