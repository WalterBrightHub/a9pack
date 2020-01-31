import React from 'react'

import { luckyWithShuffle } from '../../../../utils/lucky'


import { Button,Flex} from 'antd-mobile'

const Pack = ({setUseDoubleCopper,useDoubleCopper,pack_content, onAddToken, onAddCredit, onAddTotalKejin, onAddCount648, onAddCarCard, onAddImportPart, onShowRewordModal,countCopperPack,copperPackLoop,onAddCountCopperPack,onAddCopper,copper }) => {


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
        onAddCopper(4632)
        copper+=4632
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
    }

    //超过两百包则去除200包，重新计算
    if(n+countCopperPack>=copperPackLoop){
      onAddCountCopperPack(-copperPackLoop)

      onAddCarCard('570S', 30)
      //和普通抽包区别开来
      infos.push(`通过累计开包获得 570S 图纸 30`)
    }

    onShowRewordModal(infos)
  }

//有保底
  const onHandleMust=n=>()=>{

    const cost=n*75

    //充值648
    while(copper-cost<0){
      if(useDoubleCopper===false){
        //首冲翻倍
        setUseDoubleCopper(true)
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
    while(!haveBD){
      items=[]
      for(let i=0;i<n;i++){
        const item_index = luckyWithShuffle(dropRates)
        const item = pack_content[item_index]
        if(item_index<4){
          haveBD=true
        }
        items.push(item)
      }
    }
    items.map(item=>{
      const { title, num, type } = item
      if (type === 'car_card') {
        infos.push(`${title} ${num}`)
        onAddCarCard(item.car_code, item.num)
      }

    })

    //超过两百包则去除200包，重新计算
    if(n+countCopperPack>=copperPackLoop){
      onAddCountCopperPack(-copperPackLoop)

      onAddCarCard('570S', 30)
      //和普通抽包区别开来
      infos.push(`通过累计开包获得 570S 图纸 30`)
    }

    onShowRewordModal(infos)
  }

  return <div>
    <div className='pack-description'>抽取卡包 200 次，可以领取 30 张 McLaren 570S 图纸。抽取750点券必得 570S 图纸。</div>
    <div className='pack-description'>开包必奖 570S 图纸 30 张：<span style={{color:'#ff0054'}}>{countCopperPack}</span> / {copperPackLoop}
    </div>

    <Flex>
      <Flex.Item>
        <Button className='buy'
                activeStyle={{ backgroundColor: '#040f25', color: '#c3fb12' }}
                onClick={onHandle(1)}>购买1  点券75</Button>
      </Flex.Item>
      <Flex.Item>
        <Button className='buy'
                activeStyle={{ backgroundColor: '#040f25', color: '#c3fb12' }}
                onClick={onHandleMust(10)}>购买10  点券750</Button>
      </Flex.Item>
    </Flex>


  </div>
}

export default Pack
