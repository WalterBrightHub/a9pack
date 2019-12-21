import React from 'react';

import { luckyWithShuffle, lucky } from './lucky'


import { Button, Card, WhiteSpace, Flex, Badge, Modal, } from 'antd-mobile'

import 'antd-mobile/dist/antd-mobile.css';

import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countKejin: 0,
      totalKejin: 0,
      token: 0,
      credit: 0,
      redCoin: 0,
      garage: {
        'DS': 0,
        '350R': 0,
        'Alfieri': 0,
        'P1': 0,
        'Akylone': 0
      },
      import_parts: {
        'Akylone': 0
      },
      show_reword_modal: false,
      last_reword: ['水明的360', '水明的360', '水明的360', '水明的360', '水明的360', '水明的360',]
    }
    this.onAddToken = this.onAddToken.bind(this)
    this.onAddCredit = this.onAddCredit.bind(this)
    this.onAddTotalKejin = this.onAddTotalKejin.bind(this)
    this.onAddCountKejin = this.onAddCountKejin.bind(this)
    this.onAddCarCard = this.onAddCarCard.bind(this)
    this.onAddImportPart = this.onAddImportPart.bind(this)
    this.onShowRewordModal = this.onShowRewordModal.bind(this)
    this.showModal = this.showModal.bind(this)
    this.onWrapTouchStart = this.onWrapTouchStart.bind(this)
  }

  onShowRewordModal(infos) {
    this.setState({ last_reword: infos })
    this.showModal('show_reword_modal')()
  }

  onAddToken(n) {
    this.setState(prevState=>({
      token:prevState.token+n
    }))
  }

  onAddCredit(n) {
    this.setState(prevState=>({
      credit:prevState.credit+n
    }))
  }

  onAddTotalKejin(n) {
    this.setState(prevState=>({
      totalKejin:prevState.totalKejin+n
    }))
  }

  onAddCountKejin(n) {
    this.setState(prevState=>({
      countKejin:prevState.countKejin+n
    }))
  }

  onAddCarCard(code, n) {
    this.setState(prevState => {
      const num = prevState.garage[code]
      return {
        garage: {
          ...prevState.garage,
          [code]: num + n
        }
      }
    })
  }

  onAddImportPart(code, n) {
    this.setState(prevState => {
      const num = prevState.import_parts[code]
      return {
        import_parts: {
          ...prevState.import_parts,
          [code]: num + n
        }
      }
    })
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }
  showModal = key => (e) => {
    // e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }

  render() {
    return <div>
      <Modal
        visible={this.state.show_reword_modal}
        transparent
        onClose={this.onClose('show_reword_modal')}
        title="恭喜！你获得了这些奖励!"
        footer={[{ text: '继续', onPress: () => { this.onClose('show_reword_modal')(); } }]}
        wrapProps={{ onTouchStart: this.onWrapTouchStart }}
      >
        <div style={{ height: '10.5em', overflow: 'scroll' }}>
          {this.state.last_reword.map((info, index) => (
            <div key={index}>{info}</div>
          ))}
        </div>
      </Modal>

      <div className='sub-title'>特惠礼包</div>

      <WhiteSpace size="lg" />
      <Card full>
        <Card.Header title="圣诞豪车礼包" />
        <Card.Body>
          <AkylonePack
            onAddToken={this.onAddToken}
            onAddCredit={this.onAddCredit}
            onAddTotalKejin={this.onAddTotalKejin}
            onAddCountKejin={this.onAddCountKejin}
            onAddCarCard={this.onAddCarCard}
            onAddImportPart={this.onAddImportPart}
            onShowRewordModal={this.onShowRewordModal}
          ></AkylonePack>
        </Card.Body>
      </Card>

      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <Flex wrap='wrap'>
        <Flex.Item>蓝币：{this.state.token}</Flex.Item>
        <Flex.Item>金币：{this.state.credit}</Flex.Item>
        {/* <Flex.Item>红币：{this.state.redCoin}</Flex.Item> */}
      </Flex>


      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <div className='sub-title'>我的车库</div>
      <WhiteSpace size="lg" />
      <CarCard
        firstName='GENTY'
        lastName='AKYLONE'
        starArray={[0, 60, 15, 18, 25, 38, 48]}
        cardNum={this.state.garage['Akylone']}
      ></CarCard>
      <CarCard
        firstName='McLAREN'
        lastName='P1'
        starArray={[0, 40, 18, 21, 25, 36]}
        cardNum={this.state.garage['P1']}
      ></CarCard>
      <CarCard
        firstName='MASERATI'
        lastName='ALFIERI'
        starArray={[0, 40, 18, 24, 36]}
        cardNum={this.state.garage['Alfieri']}
      ></CarCard>
      <CarCard
        firstName='FORD'
        lastName='SHELBY GT350R'
        starArray={[0, 30, 18, 24, 36]}
        cardNum={this.state.garage['350R']}
      ></CarCard>
      <CarCard
        firstName='DS AUTOMOBILES'
        lastName='DS E-TENSE'
        starArray={[0, 20, 12, 30]}
        cardNum={this.state.garage['DS']}
      ></CarCard>

      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <div className='sub-title'>我的仓库</div>
      <WhiteSpace size="lg" />
      <div>史诗零件 GENTY AKYLONE <span style={{ color: '#c6fb0f' }}>{this.state.import_parts['Akylone']}</span></div>

      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <div className='sub-title'>累计充值活动</div>
      <WhiteSpace size="lg" />
      <div> {this.state.countKejin} 次购买 | 花费 {this.state.totalKejin} 元</div>
    </div>
  }
}

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

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

export default App;
