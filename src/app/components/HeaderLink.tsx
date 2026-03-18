import {
  ReactNode,
  Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

const HeaderLink = ({
    href,
    className,
    children
} : {
    href: string;
    className?: string;
    children?: ReactNode
}) => {
    return (
        <Fragment>
            <Link
            href={href}
            className={clsx(className, "header-link-component")}>
                {children}
            </Link>
        </Fragment>
    );
};

export default HeaderLink;