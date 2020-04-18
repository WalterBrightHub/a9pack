import React from "react";
import {Card, Flex, Modal,} from "antd-mobile";
import CopperPack from "../CopperPack";
import CarCard from "../../../../components/CarCard";
import carInfo from "../../../../model/carInfo";

import '../../../../style/common.css'
import RewordCard from "../../../../components/RewordModal/components/RewordCard";
import RewordModal from "../../../../components/RewordModal";

class PackSimulator extends React.Component {
  constructor(props) {
    super(props);

    const cars = [
      'Jesko',
      '488 GTB',
      'Artega',
      'G60',
      'Centenario',
      'P1',
      '003 S',
      'H2',
      'M4 GTS',
      'Sprint 220',
      'DB11',
      'DS E-Tense',
      '50th'
    ]

    //除了这些车，其余默认满星
    const notMaxCars = ['Jesko', '488 GTB', 'Artega', 'G60']

    const garage = cars.reduce((garage, carName) => ({
      ...garage,
      [carName]: notMaxCars.indexOf(carName) === -1
        ? carInfo[carName].starArray.reduce((sum, star) => sum + star, 0)
        : 0
    }), {})


    this.state = {
      showReword: false,
      countCopperPack: 0,
      cars,
      count648: 0,
      token: 0,
      copper: 0,
      credit: 0,
      garage,
      show_reword_modal: false,
      last_reword: ['水明的360']
    }

    this.onShowRewordModal = this.onShowRewordModal.bind(this)

    this.onAddToken = this.onAddToken.bind(this)
    this.onAddCopper = this.onAddCopper.bind(this)
    this.onAddCredit = this.onAddCredit.bind(this)

    this.onAddCount648 = this.onAddCount648.bind(this)
    this.onAddCarCard = this.onAddCarCard.bind(this)
    this.onAddCountCopperPack = this.onAddCountCopperPack.bind(this)

    this.showModal = this.showModal.bind(this)
    this.onWrapTouchStart = this.onWrapTouchStart.bind(this)
    this.onCloseRewordModal = this.onCloseRewordModal.bind(this)


  }


  onAddCount648(n) {
    this.setState(prevState => ({
      count648: prevState.count648 + n
    }))
  }

  onAddCredit(n) {
    this.setState(prevState => ({
      credit: prevState.credit + n
    }))
  }

  onAddToken(n) {
    this.setState(prevState => ({
      token: prevState.token + n
    }))
  }

  onAddCopper(n) {
    this.setState(prevState => ({
      copper: prevState.copper + n
    }))
  }

  onAddCountCopperPack(n) {
    this.setState(prevState => ({
      countCopperPack: prevState.countCopperPack + n
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
    this.setState({
      last_reword: infos,
      showRewordModal: true
    })
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

  onCloseRewordModal() {
    this.setState({
      showRewordModal: false
    })
  }

  render() {

    let {showRewordModal, last_reword} = this.state

    return (<>
        {showRewordModal
          ? <RewordModal
            onClose={this.onCloseRewordModal}
            rewords={last_reword}
          />
          : <div className='simulator'>
            <Modal
              visible={false && this.state.show_reword_modal}
              transparent
              onClose={this.onClose('show_reword_modal')}
              title="恭喜！你获得了这些奖励!"
              footer={[{
                text: '继续', onPress: () => {
                  this.onClose('show_reword_modal')();
                }
              }]}
              wrapProps={{onTouchStart: this.onWrapTouchStart}}
            >
              <div style={{height: `${1.2 + 2.1 * this.state.last_reword.length}em`, overflow: 'scroll'}}>
                {this.state.last_reword.map((info, index) => (
                  <RewordCard key={index} info={info}></RewordCard>
                ))}
              </div>
            </Modal>

            <div className='sub-title'>卡牌包</div>

            <Card full className='content-body' style={{borderRadius: '10px', color: '#303030'}}>
              <Card.Header
                title="Koenigsegg Jesko"/>
              <Card.Body>
                <CopperPack
                  countCopperPack={this.state.countCopperPack}
                  pack_content={this.props.copperPackInfo}
                  onAddCarCard={this.onAddCarCard}
                  onAddCountCopperPack={this.onAddCountCopperPack}
                  onAddCopper={this.onAddCopper}
                  onAddCredit={this.onAddCredit}
                  copper={this.state.copper}
                  onAddCount648={this.onAddCount648}
                  onShowRewordModal={this.onShowRewordModal}
                />
              </Card.Body>
            </Card>


            <div className='sub-title'>我的物品</div>
            <Flex wrap='wrap' className='content-body'>
              <Flex.Item className='coin-item'>
                <Flex>
                  <Flex.Item>点券</Flex.Item>
                  <div className='coin-value'>{this.state.copper}</div>
                </Flex>
              </Flex.Item>
              {/*<Flex.Item className='coin-item'>*/}
              {/*  <Flex>*/}
              {/*    <Flex.Item>金币</Flex.Item>*/}
              {/*    <div className='coin-value'>{this.state.credit}</div>*/}
              {/*  </Flex>*/}
              {/*</Flex.Item>*/}

            </Flex>

            {/*<div className='sub-title'>充值记录</div>*/}
            <div className='content-body total-kejin'>累计充值 <span
              style={{color: '#ff0054', fontWeight: 'bold'}}>{this.state.count648}</span> 次 648 ，花费 <span
              style={{color: '#ff0054', fontWeight: 'bold'}}>{this.state.count648 * 648}</span> 元
            </div>

            <div className='sub-title'>我的车库</div>
            <div className='content-body garage'>
              {this.state.cars.map(carCode => {
                let car = carInfo[carCode]
                return <CarCard
                  firstName={car.firstName}
                  lastName={car.lastName}
                  starArray={car.starArray}
                  cardNum={this.state.garage[carCode]}
                  key={carCode}
                />
              })}
            </div>

          </div>
        }</>
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
