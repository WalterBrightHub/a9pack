import React from "react";

import PackSimulator from "./conponents/PackSimulator";
import {copperPackInfo, tokenPackInfo} from "./m570sPackInfo";

const Mclaren570s=()=>(
  <PackSimulator
    copperPackInfo={copperPackInfo}
    tokenPackInfo={tokenPackInfo}
  ></PackSimulator>
)

export default Mclaren570s
