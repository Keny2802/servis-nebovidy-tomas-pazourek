import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

const HeroHeading = ({
    className,
    children
} : {
    className?: string,
    children: ReactNode
}) => {
    return (
        <Fragment>
            <h1 className={clsx(className, "text-5xl md:text-6xl lg:text-7xl font-black max-w-4xl hero-heading-component")}>
                {children}
            </h1>
        </Fragment>
    );
};

export default HeroHeading;