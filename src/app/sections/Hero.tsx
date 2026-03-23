import {
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import Img from "../components/Img";
import Text from "../components/Text";
import Cta from "../components/Cta";

const Hero = ({
    className,
    id
} : {
    className?: string;
    id?: string;
}) => {
    return (
        <Fragment>
            <Wrapper
            className={clsx(className, "relative min-h-screen bg-[#cdcdcd] text-white")}
            id={id}>
                <Img
                fill={true}
                type="hero"
                src="/hero.avif"
                alt="Servis nebovidy úvodní foto - servis se zaměřením na Japonské vozy"
                className="md:p-4 md:rounded-[100px] aspect-square object-cover"
                />
                <Wrapper className="absolute inset-0 p-2 md:p-2.5 lg:p-4 bg-black/40 flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4 text-center">
                    <Text
                    type="heroHeading"
                    className="uppercase max-w-[400px] md:max-w-[700px] lg:max-w-[900px]">
                        Servis se
                        {" "}
                        <span className="text-[#fb0404]">
                            zaměřením
                        </span>
                        {" "}
                        na
                        {" "}
                        <span className="text-[#fb0404]">
                            Japonské
                        </span>
                        {" "}
                        vozy
                    </Text>
                    <Text type="bodyText">
                        Přijeďte nás poctít Vaší návštěvou! Sídlím na adrese Nebovidy 247, 664 48 Nebovidy u Brna.
                    </Text>
                    <Wrapper className="mt-2 md:mt-3 lg:mt-4 flex justify-center items-center flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
                        {
                            [
                                {
                                    href: "#kontakt",
                                    text: "Kontaktujte mě"
                                },
                                {
                                    href: "#cenik",
                                    text: "Zjistit cenu"
                                }
                            ].map((link, idx) => {
                                return (
                                    <Cta
                                    key={idx}
                                    type={idx === 0 ? "secondary" : "primary"}
                                    size="lg"
                                    href={link.href}>
                                        {link.text}
                                    </Cta>
                                );
                            })
                        }
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Hero;