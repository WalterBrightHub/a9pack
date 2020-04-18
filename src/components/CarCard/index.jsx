import {Flex} from "antd-mobile";
import React from "react";

import './index.css'

const CarCard =
  ({
     firstName = '五菱',
     lastName = '宏光',
     starArray = [0, 1, 2, 3, 4, 5, 6],
     cardNum = 100
   }) => {
    let son = cardNum                     //当前星级有多少图纸
    let far                               //当前星级一共多少张图纸
    let starNum = starArray.length - 1    //车辆星级
    for (let i = 1; i < starArray.length; i++) {
      if (son < starArray[i]) {
        far = starArray[i]
        starNum = i - 1
        break
      } else {
        son -= starArray[i]
      }
    }
    let greyNum = starArray.length - starNum - 1
    return (
      <Flex className='car-card'>
        <Flex direction='column' align='start'>
          <div className='first-name'>{firstName}</div>
          <div className='last-name'>{lastName}</div>
        </Flex>
        <div style={{marginLeft: 'auto'}}>
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
              <span className='son'>最高</span>
              <span> / 最高</span>
            </span>
            :
            <span>

              <span className='son'>{son}</span>
              <span> / {far}</span>
            </span>
          }
        </span>
        </div>
      </Flex>
    )
  }

export default CarCard
