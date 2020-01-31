import React from 'react'

import { luckyWithShuffle } from '../../../../utils/lucky'


import { Button,Flex} from 'antd-mobile'

const Pack = ({pack_content, onAddCredit,  onAddCount648, onAddCarCard, onShowRewordModal,countCopperPack,onAddCountCopperPack,onAddCopper,copper }) => {


  const onHandle=n=>()=>{

    const cost=n*75

    let extra=0

    //充值648
    while(copper-cost<0){
      if(countCopperPack===0){
        //首冲翻倍
        onAddCopper(6176)
        countCopperPack=1
        copper+=6176

        //同时还有18个限时包
        extra=18
      }
      else{
        onAddCopper(3088)
        copper+=3088
      }
      onAddCount648(1)
    }

    onAddCopper(-cost)
    onAddCountCopperPack(n)

    const dropRates = pack_content.map(item => item.drop_rate)
    let infos = []
    for (let i = 0; i < n+extra; i++) {
      //const item_index=lucky(dropRates)
      const item_index = luckyWithShuffle(dropRates)
      // console.log(`获得物品${item_index}`)
      const item = pack_content[item_index]
      const { title, num, type } = item
      infos.push(i<n?`${title} ${num}`:`限充奖励 ${title} ${num}`)
      if (type === 'car_card') {
        onAddCarCard(item.car_code, item.num)
      }
      else if(type==='credit'){
        onAddCredit(item.num)
      }
    }

    onShowRewordModal(infos)
  }

  return <div>
    <div className='pack-description'>有机会直接解锁 Bugatti Chiron。</div>
    <div className='pack-description'>购买十连礼包，必定获得稀有卡牌或更高品质。</div>


    <Flex>
      <Flex.Item>
        <Button className='buy'
                activeStyle={{ backgroundColor: '#040f25', color: '#c3fb12' }}
                onClick={onHandle(1)}>购买1  点券75</Button>
      </Flex.Item>
      <Flex.Item>
        <Button className='buy'
                activeStyle={{ backgroundColor: '#040f25', color: '#c3fb12' }}
                onClick={onHandle(10)}>购买10  点券750</Button>
      </Flex.Item>
    </Flex>

  </div>
}

export default Pack
