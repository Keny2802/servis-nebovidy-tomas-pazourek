import {
  ReactNode,
  Fragment
} from "react";
import clsx from "clsx";

const HeaderItem = ({
    className,
    children
} : {
    className?: string;
    children?: ReactNode
}) => {
    return (
        <Fragment>
            <li className={clsx(className, "header-item-component")}>
                {children}
            </li>
        </Fragment>
    );
};

export default HeaderItem;