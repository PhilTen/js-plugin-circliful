import {IAvailableOptions} from "./interfaces/iavailable-options";

class Options {
    /**
     * @description Default options if option is not set on initialisation
     */
    public defaultOptions: IAvailableOptions = {
        point: false,
        pointSize: 60,
        percent: 75,
        foregroundCircleWidth: 5,
        backgroundCircleWidth: 15,
        animation: 1,
        animationStep: 1,
        noPercentageSign: false,
        animateInView: false,
        strokeLinecap: "butt",
        type: "SimpleCircle",
        textReplacesPercentage: false,
    };

    /**
     * @description Merge default options and custom option on initialisation
     * @param options
     * @returns Options['defaultOptions']
     */
    public mergeOptions = (options: IAvailableOptions) => {
        return {...this.defaultOptions, ...options};
    }
}

export default Options;
