import React from "react";
import {withRouter} from 'react-router-dom'
import {Button} from "antd-mobile";

class Index extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      packs: [

        {
          name: 'Ferrari LaFerrari Aperta',
          url: '/aperta'
        },
        {
          name: 'SIN R1 550',
          url: '/sin'
        },
        {
          name: 'McLaren Senna',
          url: '/senna',
        },
        {
          name: 'Lamborghini Egoista',
          url: '/egoista',
        },
        {
          name: 'Bugatti Chiron',
          url: '/chiron',
        },
        {
          name: 'McLaren 570S',
          url: '/m570s',
        },
        {
          name: 'Gently Akylone',
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
          fontSize: '2em',
          textAlign: 'center',
          margin: '1em 0',
        }}
      >礼包模拟器
      </div>
      <div
        style={{
          maxWidth: '480px',
          margin: '0 auto'
        }}
      >
        {this.state.packs.map((pack, index) => (
          <div key={index} style={{paddingTop: '1em'}}>
            <Button onClick={this.jumpTo(pack.url)}>{pack.name}</Button>
          </div>
        ))}

      </div>
    </div>
  }
}

export default withRouter(Index)
