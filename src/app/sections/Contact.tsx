import {
    Fragment
} from "react";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Text from "../components/Text";
import Button from "../components/Button";
import Img from "../components/Img";

const Contact = ({
    className,
    id,
} : {
    className?: string
    id?: string;
}) => {
    return (
        <Fragment>
            <Wrapper
            className={clsx(className, "border-b border-[#6a6a6a] contact-section-component")}
            id={id}
            />
            <Wrapper className="bg-[#cdcdcd] p-4 md:p-5 lg:p-6">
                <Wrapper className="flex justify-center flex-col gap-2 md:gap-3 lg:gap-4 text-center bg-[#282828] text-white rounded-3xl p-3 md:p-4 lg:p-4.5">
                    <Text
                    type="sectionHeading"
                    className="uppercase text-center">
                        Váš zodpovězený dotaz je pro nás prioritou.
                    </Text>
                    <Wrapper className="flex justify-center items-center flex-col lg:flex-row gap-2 md:gap-2.5 lg:gap-4 mt-2 md:mt-4 lg:mt-6 w-full">
                        {/* <form
                        className="p-2.5 md:p-3 lg:p-4 w-full md:w-[70vw] rounded-md bg-[#edecec] text-black">
                            <Text type="cardHeading">
                                Vyplňte náš krátký formulář
                            </Text>
                            <Wrapper className="mt-2 md:mt-4 flex flex-col gap-2 md:gap-2.5 lg:gap-4">
                                {
                                    [
                                        {
                                            key: "name",
                                            type: "text",
                                            placeholder: "Radek Nováček"
                                        },
                                        {
                                            key: "email",
                                            type: "email",
                                            placeholder: "rada.novacek@novacek.cz"
                                        },
                                        {
                                            key: "phone",
                                            type: "tel",
                                            placeholder: "+420 601 123 456"
                                        },
                                        {
                                            key: "message",
                                            type: "message",
                                            placeholder: "Sdělte nám, co máte na srdci."
                                        },
                                    ].map((input, idx) => {
                                        return (
                                            <Fragment key={idx}>
                                                {
                                                    input.key !== "message" ? (
                                                        <input
                                                        type={input.type}
                                                        name={input.key}
                                                        placeholder={input.placeholder}
                                                        className="p-2.5 md:p-3 border border-gray-300 rounded-md focus:outline-none"
                                                        />
                                                    ) : (
                                                        <textarea
                                                        name={input.key as "message"}
                                                        placeholder={input.placeholder}
                                                        className="p-2.5 md:p-3 border border-gray-300 rounded-md min-h-[150px] resize-none focus:outline-none"
                                                        />
                                                    )
                                                }
                                            </Fragment>
                                        );
                                    })
                                }
                                <Button
                                buttonType="submit"
                                className="mt-2">
                                    Odeslat formulář
                                </Button>
                            </Wrapper>
                        </form> */}
                        <Wrapper className="flex flex-col gap-2 w-full md:w-[30vw]">
                            {/* <Img
                            width={400}
                            height={400}
                            src="/me.avif"
                            alt="Tomáš Pazourek majitel Servis Nebovidy - Tomáš Pazourek | servis-nebovidy.cz"
                            className="max-h-[400px] w-full object-cover rounded-md"
                            /> */}
                            <Wrapper className="p-2.5 md:p-3 lg:p-4 bg-white text-black rounded-md">
                                <Wrapper className="flex justify-center items-center flex-col gap-2 text-center">
                                    <Text type="cardHeading">
                                        Kontaktní informace
                                    </Text>
                                    <Text type="bodyText">
                                        Kontaktujte nás pomocí níže uvedených kontaktních informací.
                                    </Text>
                                </Wrapper>
                                <Wrapper className="mt-2 md:mt-3 lg:mt-4">
                                    <Text type="boldText"
                                    className="text-start">
                                        Odpovědná osoba
                                    </Text>
                                    <Wrapper className="mt-2 flex flex-col items-start gap-2">
                                        <Text type="bodyText">
                                            Tomáš Pazourek
                                        </Text>
                                        {
                                            [
                                                {
                                                    href: "tel:+420773886055",
                                                    text: "+420 773 886 055"
                                                },
                                                {
                                                    href: "mailto:servis-nebovidy@email.cz",
                                                    text: "servis-nebovidy@email.cz"
                                                },
                                            ].map((link, idx) => {
                                                return (
                                                    <Link
                                                    key={idx}
                                                    href={link.href}>
                                                        <Text
                                                        type="boldText"
                                                        className="border-b-2">
                                                            {link.text}
                                                        </Text>
                                                    </Link>
                                                );
                                            })
                                        }
                                        {
                                            [
                                                { text: "IČO: 01333437" },
                                                { text: "DIČ: CZ8808304296" },
                                                { text: "Jsem plátce DPH." }
                                            ].map((info, idx) => {
                                                return (
                                                    <Text
                                                    key={idx}
                                                    type="bodyText">
                                                        {info.text}
                                                    </Text>
                                                );
                                            })
                                        }
                                    </Wrapper>
                                </Wrapper>
                                <Wrapper className="mt-2 md:mt-3 lg:mt-4">
                                    <Text type="boldText"
                                    className="text-start">
                                        Provozovna a fakturační adresa
                                    </Text>
                                    <Wrapper className="mt-2 flex flex-col items-start gap-2">
                                        {
                                            [
                                                { text: "Tomáš Pazourek" },
                                                { text: "Japanese Cars" },
                                                { text: "Nebovidy 247, 664 48 Nebovidy u Brna." }
                                            ].map((info, idx) => {
                                                return (
                                                    <Text
                                                    key={idx}
                                                    type="bodyText"
                                                    className="text-start">
                                                        {info.text}
                                                    </Text>
                                                );
                                            })
                                        }
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Contact;