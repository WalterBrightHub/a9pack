import React from "react";

import PackSimulator from "./conponents/PackSimulator";
import {copperPackInfo} from "./SennaPackInfo";

const Senna=()=>(
  <PackSimulator
    copperPackInfo={copperPackInfo}
  />
)

export default Senna
