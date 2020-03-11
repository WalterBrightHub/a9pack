import React from 'react'

import {luckyWithShuffle} from '../../../../utils/lucky'


import {Button, Flex} from 'antd-mobile'

const Pack = ({pack_content, onAddCredit, onAddCount648, onAddCarCard, onShowRewordModal, countCopperPack, onAddCountCopperPack, onAddCopper, copper, onAddImportPart}) => {


  const buy = n => () => {

    const cost = n * 135


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
    //console.log(dropRates.reduce((sum, rate) => sum + rate))  //校验概率之和
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
      } else if (type === 'import_part') {
        infos.push({type, num, car_code})
        onAddImportPart(car_code, num)
      }
    }

    onShowRewordModal(infos)
  }

  return <div>

    <p>购买五连礼包，必定获得史诗卡牌或更高品质。</p>

    <Flex>
      <Flex.Item>
        <Button className='buy'
                activeClassName='buy'
                onClick={buy(1)}>购买1 点券135</Button>
      </Flex.Item>
      <Flex.Item>
        <Button className='buy'
                activeClassName='buy'
                onClick={buy(5)}>购买5 点券675</Button>
      </Flex.Item>
    </Flex>

  </div>
}

export default Pack
