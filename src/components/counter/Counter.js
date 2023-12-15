import React from 'react'

export default function Counter(props) {
    const handleClick = () => {
        console.log("clicked")
    };
  return (
    <div>
        <button onClick={handleClick}>Click Me!</button>
        {props.children} //childer là những thành phần con trong counter
        {props.name} - {props.age}
    </div>
  )
}
