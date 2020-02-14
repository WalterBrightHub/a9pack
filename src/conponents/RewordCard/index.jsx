import React from "react";

import './index.css'
import carInfo from "../../model/carInfo";

const RewordCard = ({info}) => {
  const {type} = info
  if (type === 'car_card') {
    const {num, car_code} = info
    return <div className='reword-block'>
      <span className={`reword reword-${carInfo[car_code].quality}`}>{car_code} 图纸</span>
      <span className='reword-num'>x {num}</span>
    </div>
  } else if (type === 'credit') {
    return <div className='reword-block'><span className='reword reword-credit'>金币</span>
      <span className='reword-num'>x {info.num}</span>
    </div>
  } else {
    return <div className='reword-block'>
      {type}
    </div>
  }
}

export default RewordCard
