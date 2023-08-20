import {MouseEventHandler} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type Props = {
    title: string;
    leftIcon?: IconProp | null;
    rightIcon?: IconProp | null;
    handleClick?: MouseEventHandler;
    isSubmitting?: boolean;
    type?: "button" | "submit";
    bgColor?: string;
    textColor?: string;
}

const Button = ({title, leftIcon, rightIcon, handleClick, isSubmitting: isSubmitting, type, bgColor, textColor}: Props) => {

    return(
        <button
            type={type || "button"}
            disabled={isSubmitting}
            className={`flexCenter gap-3 px-4 py-3 rounded-lg
            ${textColor ||"text-white"}
            ${isSubmitting ? "bg-black/50": bgColor || "bg-primary-purple"}
             rounded=xl text-sm font-medium max-md:w-full`}
            onClick={handleClick}
        >
            {leftIcon && <FontAwesomeIcon icon={leftIcon}/>}
            {title}
            {rightIcon && <FontAwesomeIcon icon={rightIcon}/>}
        </button>
    )
};

export default Button;
