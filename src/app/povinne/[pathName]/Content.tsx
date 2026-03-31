"use client";

import {
    Fragment
} from "react";
import {
    usePathname,
} from "next/navigation";

import obligatedPageSet from "@/app/sets/obligatedPagesSet";
import Header from "@/app/components/Header";
import Wrapper from "@/app/components/Wrapper";
import Flex from "@/app/components/Flex";
import Text from "@/app/components/Text";
import List from "@/app/components/List";
import ListItem from "@/app/components/ListItem";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

const Content = () => {
    const pathName = usePathname();

    const currentPage = obligatedPageSet.find((page) => {
        const pageURL = page.url;

        return pageURL === pathName;
    });

    return (
        <Fragment>
            <Header />
            <Wrapper className="p-6 md:p-8 lg:p-10 border-y border-gray-200 bg-white shadow-lg">
                <Flex
                type="flexCol"
                className="justify-center items-center text-center">
                    <Text type="sectionHeading">
                        {currentPage?.heading}
                    </Text>
                </Flex>
                <List>
                    <Flex
                    type="flexCol"
                    className="w-full justify-center items-center text-start mt-2.5 md:mt-3 lg:mt-4">
                        {
                            currentPage?.text.map((text, idx) => {
                                return (
                                    <ListItem key={idx}>
                                        {text}
                                    </ListItem>
                                );
                            })
                        }
                    </Flex>
                </List>
            </Wrapper>
            <Contact id="kontakt" />
            <Footer id="footer" />
        </Fragment>
    );
};

export default Content;