import React from "react";

import PackSimulator from "./conponents/PackSimulator";
import {copperPackInfo} from "./egoistaPackInfo";

const Egoista=()=>(
  <PackSimulator
    copperPackInfo={copperPackInfo}
  />
)

export default Egoista
