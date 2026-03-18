import {
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import Img from "./Img";

const Logo = ({
    className
} : {
    className?: string
}) => {
    const pathName = usePathname();
    const isHome = pathName === "/" ? "" : "/";

    return (
        <Fragment>
            <Link
            href={isHome}>
                <Img
                width={200}
                height={200}
                src="/logo.avif"
                alt="Servis Nebovidy Tomáš Pazourek Logo"
                draggable={true}
                className={clsx(className, "max-w-[150px] max-h-[150px] md:max-w-[200px] md:max-h-[200px]")}
                />
            </Link>
        </Fragment>
    );
};

export default Logo;