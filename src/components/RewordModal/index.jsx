import React from "react";

import './index.css'
import RewordCard from "./components/RewordCard";

const RewordModal = ({onClose, rewords}) => {
  return <div className='reword-modal'>
    <div className='reword-modal-title'>恭喜！你获得了这些奖励！</div>
    <div style={{marginTop: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {rewords.map((info, index) => (
        <RewordCard
          style={{
            // margin:'0 auto'
          }}
          key={index}
          info={info}
        />
      ))}
    </div>

    {/*bottom placeholder*/}
    <div style={{height: 80}}/>


    <div style={{
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      width: '100%',
      zIndex: '9999',
      right: 0,
      bottom: 0,
    }}>
      <div
        style={{
          maxWidth: 768,
          width: '100%',
          display: 'flex'
        }}
      >
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 50,
            marginBottom: 30,
            padding: '10px 25px',
            borderRadius: '20px',
            fontSize: '18px',
            fontWeight: 'bold',
            letterSpacing: 6,
            backgroundColor: '#30c12d',
            color: '#fff',
          }}
          onClick={onClose}>继续
        </div>
      </div>


    </div>
  </div>
}

export default RewordModal
