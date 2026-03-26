import {
    ReactNode,
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import Flex from "./Flex";
import Text from "./Text";
import HeaderItem from "./HeaderItem";
import HeaderLink from "./HeaderLink";

type props = {
    className?: string;
    displayMenu: boolean;
    setToDisplayMenu: (bool: boolean) => void;
    children?: ReactNode;
};

const MobileMenu = ({
    className,
    displayMenu,
    children
}: props) => {
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <Wrapper className="relative z-20">
                {/* <Wrapper
                onClick={() => setToDisplayMenu(false)}
                className="absolute inset-0 bg-black/40 -z-10" /> */}
                <Wrapper className={clsx(className, `${displayMenu ? "translate-x-0 md:-translate-x-full" : "-translate-x-full"} fixed inset-0 max-w-[320px] h-screen z-[50] p-2.5 md:p-3 lg:p-4 bg-[#282828] shadow-lg transition-transform duration-300 ease-in-out mobile-menu-component`)}>
                    <Flex
                    type="flexCol"
                    className="justify-between h-full p-2.5 md:p-3 lg:p-4">
                        <Logo />
                        <Flex type="flexCol">
                            <Text
                            type="boldText"
                            className="border-b border-gray-200 max-w-max text-white">
                                Navigace
                            </Text>
                            <ul className="mt-2.5 md:mt-3 lg:mt-4 mobile-menu-list">
                                <Flex
                                type="flexCol"
                                className="text-white">
                                    {
                                        [
                                            {
                                                href: "/#uvod",
                                                text: "Úvod"
                                            },
                                            {
                                                href: "/#cenik",
                                                text: "Ceník"
                                            },
                                            {
                                                href: "/#kontakt",
                                                text: "Kontakt"
                                            }
                                        ].map((link, idx) => {
                                            return (
                                                <HeaderItem
                                                key={idx}
                                                className="">
                                                    <HeaderLink
                                                    href={link.href}>
                                                        {link.text}
                                                    </HeaderLink>
                                                </HeaderItem>
                                            );
                                        })
                                    }
                                </Flex>
                            </ul>
                        </Flex>
                        <Flex type="flexCol">
                            <Text
                            type="boldText"
                            className="border-b border-gray-200 max-w-max text-white">
                                Ostatní odkazy
                            </Text>
                            <ul className="mt-2.5 md:mt-3 lg:mt-4 mobile-menu-list">
                                <Flex
                                type="flexCol"
                                className="text-white">
                                    {
                                        [
                                            {
                                                href: "/obchodni-podminky",
                                                text: "Obchodní podmínky"
                                            },
                                            {
                                                href: "/ochrana-osobnich-udaju",
                                                text: "Ochrana osobních údajů"
                                            },
                                            {
                                                href: "/nastaveni-cookies",
                                                text: "Nastavení cookies"
                                            }
                                        ].map((link, idx) => {
                                            return (
                                                <Link
                                                key={idx}
                                                href={link.href}>
                                                    {link.text}
                                                </Link>
                                            );
                                        })
                                    }
                                </Flex>
                            </ul>
                        </Flex>
                        <Text className="text-center text-white">
                            &copy; {year} Servis Nebovidy, všechna práva vyhrazena.
                        </Text>
                    </Flex>
                </Wrapper>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default MobileMenu;