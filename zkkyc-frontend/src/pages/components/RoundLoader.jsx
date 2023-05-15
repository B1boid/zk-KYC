import Lottie from "react-lottie-player";
import lottieJson from "../../resources/111774-blue-loading-yodawy.json";
import React from "react";

const RoundLoader = () => {
    return (
        <div className="flex bg-light_white justify-center">
            <div className="my-auto">
                <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    style={{width: 100, height: 100}}
                />
            </div>
        </div>
    )
}

export default RoundLoader;