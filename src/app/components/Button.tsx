import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

type props = {
    type?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    buttonType?: "button" | "submit";
    className?: string;
    children: ReactNode;
};

const Button = ({
    type = "primary",
    size = "md",
    buttonType = "button",
    className,
    children
}: props) => {
    const types = {
        primary: "bg-[#fb0404] text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black",
        secondary: "bg-white text-black transition-colors duration-300 ease-in-out hover:bg-[#fb0404] hover:text-white"
    };

    const sizes = {
        sm: "p-2 md:p-3 lg:p-4 min-w-[180px] md:min-w-[200px] text-center rounded-full cursor-pointer text-base md:text-[17px] lg:text-[17.5px]",
        md: "p-3 md:p-3.5 lg:p-4 min-w-[180px] md:min-w-[200px] text-center rounded-full cursor-pointer text-base md:text-[17px] lg:text-[17.5px]",
        lg: "p-4 md:p-6 min-w-[180px] md:min-w-[200px] text-center rounded-full cursor-pointer text-base md:text-[17px] lg:text-[17.5px]"
    };

    return (
        <Fragment>
            <button
            type={buttonType}
            className={clsx(
            className,
            `${types[type]} ${sizes[size]} cta-component`
            )}>
                {children}
            </button>
        </Fragment>
    );
};

export default Button;