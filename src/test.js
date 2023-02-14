import React from 'react'

const Test = () => {

    fetch('https://dummyjson.com/test', {
  method: 'GET',
})
.then(res => res.json())
.then(data => console.log(data));
  return (
    <div>
        Hello
    </div>
  )
}

export default Test