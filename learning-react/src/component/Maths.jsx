import React from 'react'

const Maths = () => {
    const [count ,setCount] = React.useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Maths