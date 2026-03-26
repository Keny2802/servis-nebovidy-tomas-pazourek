"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    BiX
} from "react-icons/bi";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Icon from "./Icon";
import Flex from "./Flex";
import Text from "./Text";
import Img from "./Img";

type props = {
    className?: string;
};

const News = ({
    className
}: props) => {
    const [
        display,
        setToDisplay
    ] = useState<boolean>(true);
    const [
        isScrolling,
        setToScrolling
    ] = useState<boolean>(false);

    const DURATION = 10000;

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!display) {
                setToDisplay(true)
            };
        }, DURATION);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Fragment>
            <Wrapper className={clsx(className, display ? "inline-block" : "hidden", "min-w-[200px] max-w-[250px] max-h-max fixed bottom-5 left-8 z-50 p-2.5 md:p-3 lg:p-4 bg-white text-black border border-gray-300 rounded-md news-component")}>
                <Flex
                type="flexRowOnly"
                className="justify-end">
                    <Icon
                    // size="lg"
                    >
                        <BiX
                        onClick={() => setToDisplay(false)}
                        className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer" />
                    </Icon>
                </Flex>
                <Flex type="flexCol">
                    <Text type="cardHeading">
                        Aktuality
                    </Text>
                    {
                        [
                            {
                                heading: "Nákup Geometrie",
                                bodyText: "V roce 2025 jsem získal dotaci na nákup Geometrie."
                            }
                        ].map((newThing, idx) => {
                            const {
                                heading,
                                bodyText
                            } = newThing;
                            return (
                                <Fragment key={idx}>
                                    <Flex type="flexCol">
                                        <Text type="boldText">
                                            {heading}
                                        </Text>
                                        <Text>
                                            {bodyText}
                                        </Text>
                                        <Link
                                        href="https://drive.google.com/file/d/1cIAgTVRGJVYSmxkwVtPYhz5e6ydXbliK/view?usp=sharing"
                                        rel="nofollow"
                                        // download="Servis Nebovidy Tomáš Pazourek tisková zpráva.docx"
                                        target="_blank"
                                        className="border-b-2 border-[#fb0404] w-max">
                                            Náhlednout k tiskové zprávě
                                        </Link>
                                    </Flex>
                                </Fragment>
                            );
                        })
                    }
                    <Link
                    href="https://www.zkontrolujsiauto.cz/?a_box=mczcp4qa"
                    target="_blank"
                    rel="sponsored">
                        <Img
                        width={150}
                        height={150}
                        src="/cebia.png"
                        alt="Cebia prověřte si auto ještě před koupí vozu."
                        className="w-full max-h-max object-cover"
                        />
                    </Link>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default News;