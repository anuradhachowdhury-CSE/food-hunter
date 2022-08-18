import React,{ useState } from 'react'
import Calendar from 'react-calendar';


const DateDay = () => {
  return (
    <div>
<div>
      <Calendar onChange={onChange} value={value} />
    </div>

    </div>
  )
}

export default DateDay