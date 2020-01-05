import {IAvailableOptions} from "../interfaces/iavailable-options";
import {ISize} from "../interfaces/isize";
import {ITag} from "../interfaces/itag";
import SvgTags from "../svg-tags";

/**
 * Base for circle type implementations
 */
export abstract class BaseCircle {
    /**
     * @description Options object second argument for initCircle method
     */
    public options: IAvailableOptions;
    /**
     * @description Size of surrounding tag for svg tag
     */
    public size: ISize;
    /**
     * @description Array of all tags that needs to be appended to the dom
     */
    public tags: ITag[] = [];

    /**
     * @description Initializes the options object and the size for the svg tag
     * @param options
     * @param size
     */
    protected constructor(options: IAvailableOptions, size: ISize) {
        this.options = options;
        this.size = size;
    }

    /**
     * @description Gets called in the circle class to draw the circle with all its child elements, the methods
     * drawContainer and append must be always called in own implementations if you dont implement own logic for them
     */
    public abstract drawCircle(): void;

    /**
     * @description Draws the svg tag
     * @param additionalAttributes
     */
    public drawContainer = (additionalAttributes?: object) => {
        const container = SvgTags.addSvg({
            width: this.size.width,
            height: this.size.height,
            id: `svg-${this.options.id}`,
            ...additionalAttributes,
        });

        this.tags.push({
            element: container,
            parentId: this.options.id,
        });
    }

    /**
     * @description Appends the tags to the dom
     */
    public append = () => {
        this.tags.forEach((tag) => {
            const parent = document.getElementById(tag.parentId);
            parent.appendChild(tag.element as Node);
        });
    }
}
