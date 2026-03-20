"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    BiX,
    BiChevronRight
} from "react-icons/bi";
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

    // useEffect(() => {
    //     // resizing a změna pozice tlačítka
    //     const scrolling = () => {
    //         if (window.scrollY > 0) {
    //             setToDisplay(true);
    //         } else {
    //             // setToScrolling(false);
    //             setToDisplay(false);
    //         };
    //     };

    //     const timeout = setTimeout(() => {
    //         if (!display) {
    //             setToDisplay(true);
    //         };
    //     }, DURATION);

    //     window.addEventListener("scroll", scrolling);

    //     return () => {
    //         window.removeEventListener("scroll", scrolling);
    //         clearTimeout(timeout);
    //     };
    // }, []);

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
                                bodyText: "V roce 2023 jsme dostali dotaci na nákup Geometrie."
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