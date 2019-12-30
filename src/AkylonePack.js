import React from 'react'

import { luckyWithShuffle } from './lucky'


import { Button,  Badge} from 'antd-mobile'

const AkylonePack = ({ onAddToken, onAddCredit, onAddTotalKejin, onAddCountKejin, onAddCarCard, onAddImportPart, onShowRewordModal }) => {
  const pack_content = [
    { type: 'car_card', car_code: 'DS', title: 'DS图纸', num: 3, drop_rate: 75 },
    { type: 'car_card', car_code: 'DS', title: 'DS图纸', num: 5, drop_rate: 40 },

    { type: 'car_card', car_code: '350R', title: '350R图纸', num: 3, drop_rate: 75 },
    { type: 'car_card', car_code: '350R', title: '350R图纸', num: 5, drop_rate: 35 },

    { type: 'car_card', car_code: 'Alfieri', title: 'Alfieri图纸', num: 3, drop_rate: 70 },
    { type: 'car_card', car_code: 'Alfieri', title: 'Alfieri图纸', num: 5, drop_rate: 30 },

    { type: 'car_card', car_code: 'P1', title: 'P1图纸', num: 3, drop_rate: 65 },
    { type: 'car_card', car_code: 'P1', title: 'P1图纸', num: 5, drop_rate: 25 },

    { type: 'car_card', car_code: 'Akylone', title: 'Akylone图纸', num: 3, drop_rate: 90 },
    { type: 'car_card', car_code: 'Akylone', title: 'Akylone图纸', num: 5, drop_rate: 6 },
    { type: 'car_card', car_code: 'Akylone', title: 'Akylone图纸', num: 15, drop_rate: 3 },
    { type: 'car_card', car_code: 'Akylone', title: 'Akylone图纸', num: 60, drop_rate: 1 },

    { type: 'import_part', car_code: 'Akylone', title: 'Akylone传奇零件', num: 1, drop_rate: 5 },

    { type: 'credit', title: '积分', num: 100000, drop_rate: 140 },
    { type: 'credit', title: '积分', num: 200000, drop_rate: 100 },

    { type: 'token', title: '蓝币', num: 88, drop_rate: 140 },
    { type: 'token', title: '蓝币', num: 188, drop_rate: 100 },

  ]
  const onHandle = () => {
    onAddTotalKejin(98)
    onAddToken(98)
    onAddCredit(100000)
    onAddCountKejin(1)
    const dropRates = pack_content.map(item => item.drop_rate)
    let infos = []
    for (let i = 0; i < 6; i++) {
      //const item_index=lucky(dropRates)
      const item_index = luckyWithShuffle(dropRates)
      // console.log(`获得物品${item_index}`)
      const item = pack_content[item_index]
      const { title, num, type } = item
      infos.push(`${title} ${num}`)
      if (type === 'car_card') {
        onAddCarCard(item.car_code, item.num)
      }
      else if (type === 'token') {
        onAddToken(item.num)
      }
      else if (type === 'credit') {
        onAddCredit(num)
      }
      else if (type === 'import_part') {
        onAddImportPart(item.car_code, item.num)
      }
    }

    //console.log(infos)
    onShowRewordModal(infos)
  }
  return <div>
    <div className='pack-description'>购买礼包，有概率获取S级车辆AKYLONE图纸60张</div>
    <div className='pack-content'><Badge text={'蓝币'} style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#0e90f2', borderRadius: 2 }} /> 98 <Badge text={'金币'} style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#ffc414', borderRadius: 2 }} /> 100000 <Badge text={'礼包'} style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#dd0b3c', borderRadius: 2 }} /> 6</div>
    <Button className='buy'
      activeStyle={{ backgroundColor: '#040f25', color: '#c3fb12' }}
      onClick={onHandle}>购买商品包 ￥98.00</Button>
  </div>
}

export default AkylonePack