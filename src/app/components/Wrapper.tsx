import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

const Wrapper = ({
    className,
    id,
    onClick,
    children
} : {
    className?: string;
    id?: string;
    onClick?: () => void;
    children?: ReactNode
}) => {
    return (
        <Fragment>
            <div
            onClick={onClick}
            className={clsx(className, "wrapper-component")}
            id={id}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;