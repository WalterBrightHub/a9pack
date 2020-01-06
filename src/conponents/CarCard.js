import {Flex} from "antd-mobile";
import React from "react";

const CarCard = ({ firstName = '五菱', lastName = '宏光', starArray = [0, 1, 2, 3, 4, 5, 6], cardNum = 100 }) => {
  let son = cardNum, far, starNum = starArray.length - 1
  for (let i = 1; i < starArray.length; i++) {
    if (son < starArray[i]) {
      far = starArray[i]
      starNum = i - 1
      break
    }
    else {
      son -= starArray[i]
    }
  }
  let greyNum = starArray.length - starNum - 1
  // console.log(`${starNum},${greyNum}`)
  return (
      <Flex className='car-card'>
        <Flex direction='column' align='start'>
          <div className='first-name'>{firstName}</div>
          <div className='last-name'>{lastName}</div>
        </Flex>
        <div style={{ marginLeft: 'auto' }}>
        <span className='star-block'>
          {Array(starNum).fill(0).map((item, index) => (
              <span key={index} className='star-yellow car-star'>★</span>
          ))}
          {Array(greyNum).fill(0).map((item, index) => (
              <span key={index} className='star-grey car-star'>★</span>
          ))}
        </span>
          <span className='card-process'>
          {greyNum === 0 ?
              <span>
              <span style={{ color: '#c6fb0f' }}>最高</span>
              <span>/最高</span>
            </span>
              :
              <span>

              <span style={{ color: '#c6fb0f' }}>{son}</span>
              <span>/{far}</span>
            </span>
          }
        </span>
        </div>
      </Flex>
  )
}

export default CarCard
