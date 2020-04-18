import React from 'react'

import {luckyWithShuffle} from '../../../../utils/lucky'


import {Button, Flex} from 'antd-mobile'

const Pack = ({pack_content, onAddCredit, onAddCount648, onAddCarCard, onShowRewordModal, countCopperPack, onAddCountCopperPack, onAddCopper, copper}) => {


  const buy = n => () => {

    const cost = n * 75


    //充值648
    while (copper - cost < 0) {
      if (countCopperPack === 0) {
        //首冲翻倍
        onAddCopper(6176)
        countCopperPack = 1
        copper += 6176
      } else {
        onAddCopper(3088)
        copper += 3088
      }
      onAddCount648(1)
    }

    onAddCopper(-cost)
    onAddCountCopperPack(n)

    const dropRates = pack_content.map(item => item.drop_rate)
    // console.log(dropRates.reduce((sum, rate) => sum + rate))  //校验概率之和
    let infos = []
    for (let i = 0; i < n; i++) {
      const item_index = luckyWithShuffle(dropRates)
      const item = pack_content[item_index]
      const {num, type, car_code} = item
      // infos.push(`${title} ${num}`)
      if (type === 'car_card') {
        infos.push({type, car_code, num})
        onAddCarCard(car_code, num)
      } else if (type === 'credit') {
        infos.push({type, num})
        onAddCredit(num)
      }
    }

    onShowRewordModal(infos)
  }

  const buyWithBD = n => () => {

    const cost = n * 75


    //充值648
    while (copper - cost < 0) {
      if (countCopperPack === 0) {
        //首冲翻倍
        onAddCopper(6176)
        countCopperPack = 1
        copper += 6176

      } else {
        onAddCopper(3088)
        copper += 3088
      }
      onAddCount648(1)
    }

    onAddCopper(-cost)
    onAddCountCopperPack(n)

    const dropRates = pack_content.map(item => item.drop_rate)
    let infos = []
    let items = []

    let haveBD = false    //有保底
    while (!haveBD) {
      items = []
      for (let i = 0; i < n; i++) {
        const item_index = luckyWithShuffle(dropRates)
        const item = pack_content[item_index]
        if (item_index < 4) {
          haveBD = true
        }
        items.push(item)
      }
    }
    for (let item of items) {
      const {num, type, car_code} = item
      if (type === 'car_card') {
        infos.push({type, car_code, num})
        onAddCarCard(car_code, num)
      } else if (type === 'credit') {
        infos.push({type, num})
        onAddCredit(num)
      }

    }

    onShowRewordModal(infos)
  }

  return <div>

    <p>购买十连礼包，必定获得 Koenigsegg Jesko 图纸。</p>

    <Flex>
      <Flex.Item>
        <Button className='buy'
                activeClassName='buy'
                onClick={buy(1)}>购买1 点券75</Button>
      </Flex.Item>
      <Flex.Item>
        <Button className='buy'
                activeClassName='buy'
                onClick={buyWithBD(10)}>购买10 点券750</Button>
      </Flex.Item>
    </Flex>

  </div>
}

export default Pack
