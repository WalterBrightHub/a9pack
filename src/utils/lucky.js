const _=require('lodash')
export const lucky=dropRates=>{
  const totalRates=dropRates.reduce((sum,rate)=>sum+rate)
  const sumRates=dropRates.slice()
  for(let i=1;i<sumRates.length;i++){
    sumRates[i]+=sumRates[i-1]
  }
  // console.log(sumRates)
  const pos=totalRates*Math.random()
  // console.log(pos)
  let ind=0
   while(sumRates[ind]<pos){
     ind++
   }
  return ind
}

//先洗牌，再按概率抽取
export const luckyWithShuffle=dropRates=>{
  const totalRates=dropRates.reduce((sum,rate)=>sum+rate)
  // console.log(totalRates)
  const dropRatesWithIndex=dropRates.map((rate,index)=>({rate,index}))
  const sumRatesWithShuffle=_.shuffle(dropRatesWithIndex)
  for(let i=1;i<sumRatesWithShuffle.length;i++){
    sumRatesWithShuffle[i].rate+=sumRatesWithShuffle[i-1].rate
  }
  const pos=totalRates*Math.random()
  let ind=0
   while(sumRatesWithShuffle[ind].rate<pos){
     ind++
   }
  return sumRatesWithShuffle[ind].index
}

//SBGL算法
export const shuffleBeforeGetLucky=luckyWithShuffle
