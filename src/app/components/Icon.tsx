import {
  ReactNode,
  Fragment,
  ReactElement
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type props = {
    className?: string;
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    children: ReactElement<SVGElement>;
};

const Icon = ({
    className,
    size = "md",
    onClick,
    children
}: props) => {
    const sizes = {
        sm: "w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer",
        md: "w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer",
        lg: "w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 cursor-pointer"
    };

    return (
        <Fragment>
            <Wrapper
            onClick={onClick}
            className={clsx(className, `${sizes[size]} icon-component`)}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Icon;