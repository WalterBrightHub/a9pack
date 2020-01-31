import React from "react";
import {Card, Flex, Modal, WhiteSpace} from "antd-mobile";
import CopperPack from "../CopperPack";
import CarCard from "../../../../conponents/CarCard";

import '../../../../conponents/PackSimulator.css'

class PackSimulator extends React.Component{
  constructor(props) {
    super(props);

    const {copperPackInfo}=props

    //除了这些车，其余默认满星
    const notMaxCars=['Chiron',
      'Grand Sport',
      'Aventador SV Coupe',
      'Centenario',
      'GT-R Nismo',
      'Alfieri',
    ]

    const garage=copperPackInfo.cars.reduce((garage,car)=>({
      ...garage,
      [car.lastName]:notMaxCars.indexOf(car.lastName)===-1
        ?car.starArray.reduce((sum,star)=>sum+star,0)
        :0
    }),{})


    this.state={
      count648:0,
      useDoubleCopper:false,
      token:0,
      copper:0,
      credit:0,
      countCopperPack:0,
      garage,
      show_reword_modal:false,
      last_reword:['水明的360']
    }

    this.onShowRewordModal = this.onShowRewordModal.bind(this)

    this.onAddToken = this.onAddToken.bind(this)
    this.onAddCopper = this.onAddCopper.bind(this)
    this.onAddCredit = this.onAddCredit.bind(this)
    this.showModal = this.showModal.bind(this)
    this.onWrapTouchStart = this.onWrapTouchStart.bind(this)
    this.onAddCount648 = this.onAddCount648.bind(this)

    this.onAddCarCard = this.onAddCarCard.bind(this)


    this.onAddCountCopperPack=this.onAddCountCopperPack.bind(this)

    this.setUseDoubleCopper=this.setUseDoubleCopper.bind(this)

  }

  setUseDoubleCopper(use){
    this.setState(prevState=>({
      useDoubleCopper:use
    }))}

  onAddCount648(n) {
    this.setState(prevState=>({
      count648:prevState.count648+n
    }))
  }

  onAddCredit(n){
    this.setState(prevState=>({
      credit:prevState.credit+n
    }))
  }

  onAddToken(n) {
    this.setState(prevState=>({
      token:prevState.token+n
    }))
  }

  onAddCopper(n) {
    this.setState(prevState=>({
      copper:prevState.copper+n
    }))
  }

  onAddCountCopperPack(n){
    this.setState(prevState=>({
      countCopperPack:prevState.countCopperPack+n
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

  onShowRewordModal(infos) {
    this.setState({ last_reword: infos })
    this.showModal('show_reword_modal')()
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
    const {copperPackInfo}=this.props
    const {garage}=this.state
    const redRate={
      uncommon:10,
      rare:20,
      epic:40
    }
    const redCoin=copperPackInfo.cars.reduce((res,car)=>{
      // console.log(`${car.lastName} ${car.quality} ${garage[car.lastName]}`)
      return res+redRate[car.quality]*garage[car.lastName]
    },-19910) //19910是hack写法，是所有满星车红币之和

    return (
      <div className='simulator'>
        <Modal
          visible={this.state.show_reword_modal}
          transparent
          onClose={this.onClose('show_reword_modal')}
          title="恭喜！你获得了这些奖励!"
          footer={[{ text: '继续', onPress: () => { this.onClose('show_reword_modal')(); } }]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <div style={{ height: `${1.2+1.5*this.state.last_reword.length}em`, overflow: 'scroll' }}>
            {this.state.last_reword.map((info, index) => (
              <div key={index}>{info}</div>
            ))}
          </div>
        </Modal>

        <div className='sub-title'>卡牌包</div>

        <WhiteSpace size="lg" />
        <Card full>
          <Card.Header
            title="鼠年限定卡包" />
          <Card.Body>
            <CopperPack
              countCopperPack={this.state.countCopperPack}
              pack_content={this.props.copperPackInfo.content}
              onAddCarCard={this.onAddCarCard}
              onAddCountCopperPack={this.onAddCountCopperPack}
              onAddCopper={this.onAddCopper}
              onAddCredit={this.onAddCredit}
              copper={this.state.copper}
              onAddCount648={this.onAddCount648}
              onShowRewordModal={this.onShowRewordModal}
              setUseDoubleCopper={this.setUseDoubleCopper}
              useDoubleCopper={this.state.useDoubleCopper}
            />
          </Card.Body>
        </Card>



        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <div className='sub-title'>我的物品</div>
        <WhiteSpace size="lg" />
        <Flex wrap='wrap'>
          <Flex.Item>点券：{this.state.copper}</Flex.Item>
          <Flex.Item>金币：{this.state.credit}</Flex.Item>

           <Flex.Item>红币：{redCoin}</Flex.Item>
        </Flex>

        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <div className='sub-title'>充值记录</div>
        <WhiteSpace size="lg" />
        <div>累计充值 <span style={{color:'#ff0054',fontWeight:'bold'}}>{this.state.count648}</span> 次 648 ，花费 <span style={{color:'#ff0054',fontWeight:'bold'}}>{this.state.count648*648}</span> 元
        </div>

        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <div className='sub-title'>我的车库</div>
        <WhiteSpace size="lg" />
        {this.props.copperPackInfo.cars.map(car=>(<CarCard
          firstName={car.firstName}
          lastName={car.lastName}
          starArray={car.starArray}
          cardNum={this.state.garage[car.lastName]}
          key={car.lastName}
        />))}





      </div>
    )
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



export default PackSimulator
