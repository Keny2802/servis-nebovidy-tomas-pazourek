"use client";

import {
  useState,
  useEffect,
  Fragment
} from "react";
import {
    FaMinus,
    FaBars
} from "react-icons/fa";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import List from "./List";
import HeaderItem from "./HeaderItem";
import HeaderLink from "./HeaderLink";
import Icon from "./Icon";
import MobileMenu from "./MobileMenu";

const Header = ({
    className,
    id,
} : {
    className?: string
    id?: string;
}) => {
    const [displayMenu, setToDisplayMenu] = useState<boolean>(false);
    const [isScrolledHeader, setToScrolledHeader] = useState<boolean>(false);

    useEffect(() => {
        const setScrolledHeader = () => {
            if (window.scrollY) {
                setToScrolledHeader(true);
            } else {
                setToScrolledHeader(false);
            };
        };

        window.addEventListener("scroll", setScrolledHeader);

        return () => {
            window.removeEventListener("scroll", setScrolledHeader);
        };
    }, []);

    return (
        <Fragment>
            <Wrapper className={clsx(
                className,
                displayMenu ? "z-20" : "z-50",
                isScrolledHeader ? "fixed" : "static",
                `w-full p-4 bg-[#282828] text-white flex justify-between items-center gap-4 md:gap-6 lg:gap-8`
                )}
                id={id}>
                <Logo />
                <List className="hidden lg:flex justify-center items-center gap-8 md:gap-10 lg:gap-16 text-base md:text-[17px] lg:text-[17.5px]">
                    {
                        [
                            {
                                href: "#uvod",
                                text: "Úvod"
                            },
                            // {
                            //     href: "/sluzby",
                            //     text: "Služby"
                            // },
                            {
                                href: "#cenik",
                                text: "Ceník"
                            },
                            {
                                href: "#kontakt",
                                text: "Kontakt"
                            }
                        ].map((link, idx) => {
                            return (
                                <HeaderItem key={idx}>
                                    <HeaderLink
                                    href={link.href}>
                                        {link.text}
                                    </HeaderLink>
                                </HeaderItem>
                            );
                        })
                    }
                </List>
                <HeaderLink
                href="#kontakt"
                className="hidden md:inline-block p-4 md:p-6 max-w-[180px] md:max-w-[200px] text-center rounded-full cursor-pointer bg-[#fb0404] text-base md:text-[17px] lg:text-[17.5px]">
                    Kde nás najdete
                </HeaderLink>
                {
                    displayMenu ? (
                        <Icon
                        onClick={() => setToDisplayMenu(false)}
                        className="inline-block md:hidden">
                            <FaMinus /> 
                        </Icon>
                    ) : (
                        <Icon
                        onClick={() => setToDisplayMenu(true)}
                        className="inline-block md:hidden">
                            <FaBars /> 
                        </Icon>
                    )
                }
            </Wrapper>
            <MobileMenu
            displayMenu={displayMenu}
            setToDisplayMenu={setToDisplayMenu}
            />
        </Fragment>
    );
};

export default Header;