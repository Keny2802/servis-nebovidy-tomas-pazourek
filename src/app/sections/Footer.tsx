import {
    Fragment
} from "react";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Text from "../components/Text";

const Footer = () => {
    return (
        <Fragment>
            <Wrapper className="p-2.5 md:p-3 lg:p-4 bg-[#282828] text-white">
                <Wrapper className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-12">
                    <Wrapper className="flex flex-col gap-1">
                        <Text type="boldText">
                            Navigace
                        </Text>
                        {
                            [
                                {
                                    href: "#uvod",
                                    text: "Úvod"
                                },
                                {
                                    href: "/sluzby",
                                    text: "Služby"
                                },
                                {
                                    href: "/cenik",
                                    text: "Ceník"
                                },
                                {
                                    href: "/kontakt",
                                    text: "Kontakt"
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
                    </Wrapper>
                    <Wrapper className="flex flex-col gap-1 pb-4 md:pb-0 border-b border-white md:border-none">
                        <Text type="boldText">
                            Ostatní odkazy
                        </Text>
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
                    </Wrapper>
                </Wrapper>
                <Wrapper className="mt-2 md:mt-2.5 lg:mt-4 flex justify-center items-center flex-col gap-2 text-center">
                    <Text type="bodyText">
                        2026, Servis Nebovidy Japanese Cars, všechna práva vyhrazena.
                    </Text>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;