import {DEFAULT_EXEC_FEE, DEFAULT_PASSWORD, EXEC_NODE_URL, PROGRAM_FUN, PROGRAM_ID} from "../../config";
import axios from "axios";

function toAleoArray(inputParams) {
    let aleoParams = []
    for (let [i, param] of Object.entries(inputParams)) {
        aleoParams.push(param.toString() + "u32")
    }
    return aleoParams

}

export async function executeTx(inputParams) {
    return (await axios.post(EXEC_NODE_URL + '/execute', {
        "program_id": PROGRAM_ID,
        "program_function": PROGRAM_FUN,
        "inputs": toAleoArray(inputParams),
        "password": DEFAULT_PASSWORD,
        "fee": DEFAULT_EXEC_FEE
    }, {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Referrer-Policy": "no-referrer"
        }
    })).data
}