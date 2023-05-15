import {useRef, useState} from "react";
import {generatePerson} from "../blogic/generator/generate";
import {executeTx} from "../blogic/api/execute";
import {getTxResult} from "../blogic/api/getTx";
import Flow from "./components/bg";
import ToyIDDocument from "./components/id";
import Table from "./components/table";
import RoundLoader from "./components/RoundLoader";


export default function LandingPage() {

    let [isLoading, setIsLoading] = useState(false)
    let [isFinish, setIsFinish] = useState(false)
    let [passKyc, setPassKyc] = useState(null)
    let [info, setInfo] = useState(generatePerson(true))

    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        console.log("Open KYC")
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
        setPassKyc(null);
        setIsFinish(false);
    };

    function generateInfo(passKyc) {
        setInfo(generatePerson(passKyc))
    }

    function submitKYC() {
        if (info === null) {
            console.log("Generate person first")
            return
        }
        setIsLoading(true)
        executeTx(info.features).then(x => {
            console.log("Tx Id:", x)
            let txId = x.replaceAll("\"", "")
            if (txId.length !== 61) {
                throw Error(`Invalid length ${txId.length}for tx: ${txId}`)
            }
            getTxResult(txId).then(r => {
                if (r === null) {
                    throw Error("fail to get tx by id")
                }
                console.log(r)
                setPassKyc(r)
            }).catch(err => {
                console.log("Get Tx error:", err)
            }).finally(() => {
                setIsLoading(false)
                setIsFinish(true)
            })
        }).catch((e) => {
            console.log("Execute Tx error:", e)
            setIsLoading(false)
            setIsFinish(true)
        })
    }

    return (
        <div className="bg-gradient-to-b from-main-or to-main-orlll min-h-screen">
            <div className={"pointer-events-none"}>
                <Flow/>
            </div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    <>
                        {isLoading || isFinish ? (
                            <div className="bg-white justify-center flex rounded shadow p-6 z-20 w-64 h-32 relative">
                                {isLoading ? (
                                    <RoundLoader/>
                                ) : (
                                    <>
                                        <button
                                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                                            onClick={closePopup}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </button>
                                        {passKyc ? (
                                            <span className={"text-4xl text-green-400 mt-5"}>
                                                 Success!
                                            </span>
                                        ) : (
                                            <span className={"text-5xl text-red-400 mt-5"}>
                                                Fail!
                                            </span>
                                        )}
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="bg-white rounded shadow p-6 z-20 w-2/3 h-3/4 relative">
                                <button
                                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                                    onClick={closePopup}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                                <div className="flex items-center justify-center h-3/5">
                                    <ToyIDDocument
                                        firstName={info.person.firstName}
                                        lastName={info.person.lastName}
                                        country={info.person.country}
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Table data={info.features} emojiData={info.estimate}/>
                                </div>
                                <div className="flex justify-center mt-5 gap-10">
                                    <button
                                        className="px-4 py-2 text-black font-bold rounded-lg border-2 border-green-400 hover:text-green-400"
                                        onClick={() => generateInfo(true)}
                                    >
                                        Generate normal ID
                                    </button>
                                    <button
                                        className="px-4 py-2 text-black font-bold rounded-lg border-2 border-red-400 hover:text-red-400"
                                        onClick={() => generateInfo(false)}
                                    >
                                        Generate fake ID
                                    </button>
                                </div>
                                <div className="flex justify-center mt-10">
                                    <button
                                        className="px-4 py-2 text-black font-bold rounded-lg border-2 border-black hover:text-gray-400"
                                        onClick={submitKYC}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        )}</>
                </div>
            )}
            <div className="max-w-screen-2xl mx-auto">
                <div className="max-w-7xl mx-auto py-8 px-8">
                    <div className={"font-['Open_Sans'] text-8xl text-white text-center font-light"}>
                        zk-KYC
                    </div>
                    <div className={"flex justify-center mt-64"}>
                        <button
                            className={"w-52 h-16 text-white text-2xl border-2 border-white rounded-lg bg-gradient-to-br from-main-or to-main-orlll cursor-pointer"}
                            onClick={openPopup}
                        >
                            Start Now
                        </button>
                    </div>
                    <div className={"flex justify-center mt-3"}>
                        <div className={"font-thin text-gray-400 text-sm"}>
                            * using auto generated document
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}