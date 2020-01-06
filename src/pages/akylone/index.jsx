import React from "react";
import PackSimulator from "../../conponents/PackSimulator";

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

const Akylone=()=>(
  <PackSimulator packInfo={akylonePackInfo}></PackSimulator>
)

export default Akylone
