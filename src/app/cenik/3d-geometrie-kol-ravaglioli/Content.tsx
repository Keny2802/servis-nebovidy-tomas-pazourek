"use client";

import {
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import PricingPageSet from "@/app/components/PricingPageSet";

import Header from "@/app/components/Header";
import Wrapper from "@/app/components/Wrapper";
import Flex from "@/app/components/Flex";
import Text from "@/app/components/Text";
import Img from "@/app/components/Img";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

const Content = () => {
    const pathname = usePathname();
    const currentPage = PricingPageSet.find((page) => pathname === page.url);

    return (
        <Fragment>
            <Header />
            <Wrapper className="p-4 md:p-5 lg:p-6 bg-white shadow-lg">
                <Flex
                type="flexCol"
                className="justify-center items-center text-center">
                    <Text type="heroHeading">
                        {currentPage?.heading}
                    </Text>
                    <Img
                    width={500}
                    height={500}
                    src={currentPage?.src || `${currentPage?.src}`}
                    alt={currentPage?.alt}
                    className="mt-2.5 md:mt-3 lg:mt-4"
                    />
                    <Text>
                        {currentPage?.bodyText}
                    </Text>
                </Flex>
            </Wrapper>
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;