import React from 'react'

import { luckyWithShuffle } from '../../../../utils/lucky'


import { Button,Flex} from 'antd-mobile'

const Pack = ({pack_content, onAddCredit,  onAddCount648, onAddCarCard, onShowRewordModal,countCopperPack,onAddCountCopperPack,onAddCopper,copper,onAddToken }) => {


  const onHandle=n=>()=>{

    const cost=n*75



    //充值648
    while(copper-cost<0){
      if(countCopperPack===0){
        //首冲翻倍
        onAddCopper(6176)
        countCopperPack=1
        copper+=6176


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
    for (let i = 0; i < n; i++) {
      //const item_index=lucky(dropRates)
      const item_index = luckyWithShuffle(dropRates)
      // console.log(`获得物品${item_index}`)
      const item = pack_content[item_index]
      const { title, num, type } = item
      infos.push(`${title} ${num}`)
      if (type === 'car_card') {
        onAddCarCard(item.car_code, item.num)
      }
      else if(type==='credit'){
        onAddCredit(item.num)
      }
    }

    onShowRewordModal(infos)
  }

  const onHandleMust=(n,bd)=>()=>{

    const cost=n*75



    //充值648
    while(copper-cost<0){
      if(countCopperPack===0){
        //首冲翻倍
        onAddCopper(6176)
        countCopperPack=1
        copper+=6176


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
    let items=[]

    let haveBD=false
    let star=0
    while(!haveBD){
      items=[]
      for(let i=0;i<n;i++){
        const item_index = luckyWithShuffle(dropRates)
        const item = pack_content[item_index]
        if(item_index<bd){
          haveBD=true
        }
        items.push(item)
      }
      if(!haveBD){
        star++
        onAddToken(-58*n)
      }
    }
    if(star>0){
      infos.push(`神秘组织收取蓝币 -${star} *${58*n}`)
    }
    items.map(item=>{
      const { title, num, type } = item
      if (type === 'car_card') {
        infos.push(`${title} ${num}`)
        onAddCarCard(item.car_code, item.num)
      }
      else if(type==='credit'){
        infos.push(`金币 ${num}`)
        onAddCredit(num)
      }

    })

    onShowRewordModal(infos)
  }

  return <div>
    <div className='pack-description'>有机会直接解锁 Bugatti Chiron。</div>
    <div className='pack-description'>购买十连礼包，必定获得稀有卡牌或更高品质。</div>


    <Flex>
      <Flex.Item>
        <Button className='buy'
                activeStyle={{ backgroundColor: '#040f25', color: '#c3fb12' }}
                onClick={onHandleMust(1,4)}>购买1  点券75</Button>
      </Flex.Item>
      <Flex.Item>
        <Button className='buy'
                activeStyle={{ backgroundColor: '#040f25', color: '#c3fb12' }}
                onClick={onHandleMust(10,3)}>购买10  点券750</Button>
      </Flex.Item>
    </Flex>

  </div>
}

export default Pack
