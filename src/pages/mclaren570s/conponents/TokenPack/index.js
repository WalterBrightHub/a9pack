import React from 'react'

import { luckyWithShuffle } from '../../../../utils/lucky'


import { Button,Flex} from 'antd-mobile'

const Pack = ({pack_content, onAddToken, onAddCredit, onAddTotalKejin, onAddCountKejin, onAddCarCard, onAddCountTokenPack,onAddImportPart, onShowRewordModal,countTokenPack,tokenPackLimit,tokenPackLoop }) => {


  const onHandle=n=>()=>{
    onAddToken(-n*75)
    onAddCountTokenPack(n)


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
    if(n+countTokenPack>=tokenPackLoop){
      onAddCarCard('570S', 15)
      onAddCountTokenPack(-tokenPackLoop)
      infos.push(`通过累计开包获得 570S 图纸 15`)
    }
    onShowRewordModal(infos)
  }

  return <div>
    <div className='pack-description'>抽取卡包 200 次，可以领取 15 张 McLaren 570S 图纸</div>
    <div className='pack-description'>开包必奖 570S 图纸 15 张：<span style={{color:'#ff0054'}}>{countTokenPack}</span> / {tokenPackLoop}
    </div>

    <Flex>
      <Flex.Item>
        <Button className='buy'
                //disabled={countTokenPack+1>tokenPackLimit}  //超过两百包额度设定了
                activeStyle={{ backgroundColor: '#040f25', color: '#c3fb12' }}
                onClick={onHandle(1)}>购买1  蓝币75</Button>
      </Flex.Item>
      <Flex.Item>
        <Button className='buy'
                //disabled={countTokenPack+10>tokenPackLimit}
                activeStyle={{ backgroundColor: '#040f25', color: '#c3fb12' }}
                onClick={onHandle(10)}>购买10  蓝币750</Button>
      </Flex.Item>
    </Flex>


  </div>
}

export default Pack
