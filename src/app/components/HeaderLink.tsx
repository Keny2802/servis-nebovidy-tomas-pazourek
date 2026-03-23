import {
  ReactNode,
  Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

import Hashless from "./Hashless";

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
            className={clsx(className, "header-link-component")}
            onClick={(e) => Hashless(e, href)}>
                {children}
            </Link>
        </Fragment>
    );
};

export default HeaderLink;