import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

const Wrapper = ({
    className,
    onClick,
    children
} : {
    className?: string;
    onClick?: () => void;
    children?: ReactNode
}) => {
    return (
        <Fragment>
            <div
            onClick={onClick}
            className={clsx(className, "wrapper-component")}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;