import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

const List = ({
    className,
    children
} : {
    className?: string;
    children?: ReactNode
}) => {
    return (
        <Fragment>
            <ul className={clsx(className, "list-component")}>
                {children}
            </ul>
        </Fragment>
    );
};

export default List;