import React from "react";

import PackSimulator from "./conponents/PackSimulator";
import {copperPackInfo} from "./chironPackInfo";

const Chiron=()=>(
  <PackSimulator
    copperPackInfo={copperPackInfo}
  />
)

export default Chiron
