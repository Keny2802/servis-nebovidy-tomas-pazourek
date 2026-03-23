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
            <Wrapper className={clsx(className, display ? "opacity-100" : "opacity-0", "min-w-[200px] max-w-[250px] fixed bottom-5 left-8 p-2.5 md:p-3 lg:p-4 bg-white text-black rounded-md news-component")}>
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
                                bodyText: "V roce 2025 získal dotaci na nákup Geometrie."
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
                                        href="/servis-nebovidy-tomas-pazourek-tiskova-zprava.docx"
                                        download="Servis Nebovidy Tomáš Pazourek tisková zpráva.docx"
                                        className="border-b-2 border-[#fb0404] w-max">
                                            Stáhnout tiskovou zprávu
                                        </Link>
                                    </Flex>
                                </Fragment>
                            );
                        })
                    }
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default News;