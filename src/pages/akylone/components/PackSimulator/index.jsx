import React from 'react';
import {Card, Flex, Modal, WhiteSpace} from "antd-mobile";

import CarCard from "../../../../conponents/CarCard";

import Pack from "../Pack";

import '../../../../style/common.css'

const akylonePackInfo={
  cars:[
    {firstName:'Gently',
      lastName:'Akylone',
      quality:'epic',
      starArray:[0, 60, 15, 18, 25, 38, 48]
    },
    {firstName:'McLAREN',
      lastName:'P1',
      quality:'uncommon',
      starArray:[0, 40, 18, 21, 25, 36]
    },
    {firstName:'MASERATI',
      lastName:'Alfieri',
      quality:'uncommon',
      starArray:[0, 40, 18, 24, 36]
    },
    {firstName:'FORD',
      lastName:'SHELBY GT350R',
      quality:'rare',
      starArray:[0, 30, 18, 24, 36]
    },
    {firstName:'DS AUTOMOBILES',
      lastName:'DS E-TENSE',
      quality:'rare',
      starArray:[0, 20, 12, 30]
    },
  ],
  import_parts: [
    {car_code:'Akylone'}
  ],
  content:[
    { type: 'car_card', car_code: 'DS E-TENSE', title: 'DS图纸', num: 3, drop_rate: 75 },
    { type: 'car_card', car_code: 'DS E-TENSE', title: 'DS图纸', num: 5, drop_rate: 40 },

    { type: 'car_card', car_code: 'SHELBY GT350R', title: '350R图纸', num: 3, drop_rate: 75 },
    { type: 'car_card', car_code: 'SHELBY GT350R', title: '350R图纸', num: 5, drop_rate: 35 },

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
}

class PackSimulator extends React.Component {
  constructor(props) {
    super(props)
    const {packInfo=akylonePackInfo}=props
    const garage=packInfo.cars.reduce((garage,car)=>({
      ...garage,
      [car.lastName]:0
    }),{})
    const import_parts=packInfo.import_parts.reduce((import_parts,import_part)=>({
      ...import_parts,
      [import_part.car_code]:0
    }),{})
    console.log(import_parts)
    console.log(garage)
    this.state = {
      countKejin: 0,
      totalKejin: 0,
      token: 0,
      credit: 0,
      redCoin: 0,
      garage: garage,
      import_parts: import_parts,
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
          <Pack
              pack_content={this.props.packInfo.content}
              onAddToken={this.onAddToken}
              onAddCredit={this.onAddCredit}
              onAddTotalKejin={this.onAddTotalKejin}
              onAddCountKejin={this.onAddCountKejin}
              onAddCarCard={this.onAddCarCard}
              onAddImportPart={this.onAddImportPart}
              onShowRewordModal={this.onShowRewordModal}
          />
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
      {this.props.packInfo.cars.map(car=>(<CarCard
          firstName={car.firstName}
          lastName={car.lastName}
          starArray={car.starArray}
          cardNum={this.state.garage[car.lastName]}
          key={car.lastName}
      />))}


      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <div className='sub-title'>我的仓库</div>
      <WhiteSpace size="lg" />
      {
        this.props.packInfo.import_parts.map(importPart=>(
            <div key={importPart.car_code}>传奇零件 {importPart.car_code} <span style={{ color: '#c6fb0f' }}>{this.state.import_parts[importPart.car_code]}</span></div>
        ))
      }


      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <div className='sub-title'>累计充值活动</div>
      <WhiteSpace size="lg" />
      <div> {this.state.countKejin} 次购买 | 花费 {this.state.totalKejin} 元</div>
    </div>
  }
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


export  default PackSimulator
