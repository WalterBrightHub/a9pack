import React from "react";
import {withRouter} from 'react-router-dom'
import {Button} from "antd-mobile";

class Index extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      packs: [
        {
          name: 'McLaren Senna 限时卡包',
          url: '/senna',
        },
        {
          name: 'Lamborghini Egoista 限时卡包',
          url: '/egoista',
        },
        {
          name: 'Bugatti Chiron 限时卡包',
          url: '/chiron',
        },
        {
          name: 'McLaren 570S 限时卡包',
          url: '/m570s',
        },
        {
          name: 'Gently Akylone 限时卡包',
          url: '/akylone'
        },
      ]
    }

    this.jumpTo=this.jumpTo.bind(this)
  }
  jumpTo(url){
    return()=>{
      const {history}=this.props
      history.push(url)
    }
  }
  render(){
    return <div>
      <div
        style={{
          fontSize:'2em',
          textAlign:'center',
          margin:'1em 0'
        }}
      >礼包模拟器</div>
      {this.state.packs.map((pack,index)=>(
        <div key={index} style={{paddingTop:'1em'}}>
          <Button onClick={this.jumpTo(pack.url)}>{pack.name}</Button>
        </div>
      ))}
    </div>
  }
}

export default withRouter(Index)
