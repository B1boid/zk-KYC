import {DEFAULT_EXEC_FEE, DEFAULT_PASSWORD, PROGRAM_FUN, PROGRAM_ID, TESTNET_NODE_URL} from "../../config";
import axios from "axios";


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getTxResult(txId){
    await sleep(5000)
    for (let i=0; i < 5; i++) {
        try {
            let res = (await axios.get(TESTNET_NODE_URL + '/transaction/' + txId, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Referrer-Policy": "no-referrer"
                }
            })).data
            res = res.execution.transitions[0].outputs[0].value
            console.log(res)
            if (res === "1u32"){
                return true
            } else if (res === "0u32"){
               return false
            }
            return null
        } catch (e){
            console.log(`Retry${i+1}, err: ${e.toString()}`)
            await sleep(5000)
        }
    }
    return null


}