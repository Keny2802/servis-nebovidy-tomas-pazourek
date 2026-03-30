import {
  ReactNode,
  Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

const HeaderLink = ({
    href,
    className,
    onClick,
    children
} : {
    href: string;
    className?: string;
    onClick?: (e?: any) => void;
    children?: ReactNode
}) => {
    return (
        <Fragment>
            <Link
            href={href}
            className={clsx(className, "header-link-component")}
            onClick={onClick}>
                {children}
            </Link>
        </Fragment>
    );
};

export default HeaderLink;