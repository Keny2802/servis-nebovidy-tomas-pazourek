import {
    Fragment
} from "react";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Img from "../components/Img";
import Text from "../components/Text";

const Pricing = ({
    className,
    id,
} : {
    className?: string
    id?: string;
}) => {
    return (
        <Fragment>
            <Wrapper
            className={clsx(className, "bg-[#cdcdcd] p-4 md:p-5 lg:p-6 pricing-section-component")}
            id={id}>
                <Wrapper className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4 flex-col text-center bg-[#282828] text-white rounded-3xl p-3 md:p-4 lg:p-4.5">
                    <Text
                    type="sectionHeading"
                    className="uppercase text-center">
                        Ceník našich služeb
                    </Text>
                    <Wrapper className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-2 md:mt-3 lg:mt-4">
                        {
                            [
                                {
                                    href: "/cenik/3d-geometrie-kol-ravaglioli",
                                    src: "/3d-geometrie-kol-ravaglioli.avif",
                                    alt: "3d geometrie kol Ravaglioli - Servis Nebovidy Tomáš Pazourek",
                                    heading: "Seřízení geometrie kol",
                                    subheading: "Pokud má vůz stavitelné odklony nebo jde o sportovně upravený vůz, je cena vždy na dotaz po prohlídce vozu.",
                                    price: "1.400 Kč",
                                    vatText: "Uvedené ceny jsou bez DPH."
                                },
                                {
                                    href: "/cenik/mechanicke-prace",
                                    src: "/mechanic-work.avif",
                                    alt: "Mechanické práce - Servis Nebovidy Tomáš Pazourek",
                                    heading: "Mechanické práce",
                                    subheading: "Neplatí při dodání vlastního materiálu.",
                                    price: "661 Kč / hodinová sazba",
                                    vatText: "Uvedené ceny jsou bez DPH."
                                },
                                {
                                    href: "/cenik/elektroinstalacni-prace",
                                    src: "/electrician-work.avif",
                                    alt: "Elektroinstalační práce - Servis Nebovidy Tomáš Pazourek",
                                    heading: "Elektroinstalační práce",
                                    subheading: "Pro více informací u technika.",
                                    price: "661 Kč / hodinová sazba",
                                    vatText: "Uvedené ceny jsou bez DPH."
                                },
                                {
                                    href: "/cenik/klimatizace",
                                    src: "/air-condition.avif",
                                    alt: "Klimatizace - Servis Nebovidy Tomáš Pazourek",
                                    heading: "Klimatizace",
                                    subheading: "Pro více informací u technika.",
                                    price: "Od 2.090 Kč",
                                    vatText: "Uvedené ceny jsou bez DPH."
                                },
                                {
                                    href: "/cenik/pneuservis",
                                    src: "/pneuservis.avif",
                                    alt: "Pneuservis - Servis Nebovidy Tomáš Pazourek",
                                    heading: "Přezutí kol",
                                    price: "Od 500 Kč",
                                    vatText: "Uvedené ceny jsou bez DPH."
                                },
                                {
                                    href: "/cenik/vymena-brzdove-a-spojkove-kapaliny",
                                    src: "/brake-and-clutch-fluid-replacement.avif",
                                    alt: "Výměna brzdové a spojkové kapaliny - Servis Nebovidy Tomáš Pazourek",
                                    heading: "Výměna brzdové a spojkové kapaliny",
                                    subheading: "Pro více informací u technika.",
                                    price: "805 Kč / litr",
                                    vatText: "Uvedené ceny jsou bez DPH."
                                },
                                {
                                    href: "/cenik/chladici-kapalina-g11",
                                    src: "/coolant-fluid-replacement-1.avif",
                                    alt: "Chladící kapalina G11 - Servis Nebovidy Tomáš Pazourek",
                                    heading: "Chladící kapalina G11",
                                    subheading: "Pro více informací u technika.",
                                    price: "190 Kč / litr",
                                    vatText: "Uvedené ceny jsou bez DPH."
                                },
                                {
                                    href: "/cenik/chladici-kapalina-g12",
                                    src: "/coolant-fluid-replacement-2.avif",
                                    alt: "Chladící kapalina G12 - Servis Nebovidy Tomáš Pazourek",
                                    heading: "Chladící kapalina G12",
                                    subheading: "Pro více informací u technika.",
                                    price: "190 Kč / litr",
                                    vatText: "Uvedené ceny jsou bez DPH"
                                },
                                {
                                    href: "/cenik/cisteni-a-kontrola-brzd",
                                    src: "/cleaning-and-checking-brakes.avif",
                                    alt: "Čištění a kontrola brzd - Servis Nebovidy Tomáš Pazourek",
                                    heading: "Čištění a kontrola brzd",
                                    subheading: "Pro více informací u technika.",
                                    price: "975 Kč / hodinová sazba",
                                    vatText: "Uvedené ceny jsou bez DPH"
                                }
                            ].map((card, idx) => {
                                return (
                                    <Fragment key={idx}>
                                        <Link
                                        href={card.href}
                                        target="_blank">
                                            <Wrapper
                                            className="relative cursor-pointer">
                                                <Img
                                                width={500}
                                                height={500}
                                                src={card.src}
                                                alt={card.alt}
                                                className="max-h-[350px] md:max-w-[500px] md:min-h-[490px] md:max-h-[500px] rounded-md object-cover"
                                                />
                                                <Wrapper className="absolute inset-0 bg-black/40 w-full h-full rounded-md" />
                                                    <Wrapper className="p-2.5 absolute bottom-5 left-5 flex justify-start items-start flex-col gap-1.5 text-start">
                                                        <Text type="cardHeading">
                                                            {card.heading}
                                                        </Text>
                                                        <Text type="bodyText">
                                                            {card.subheading}
                                                        </Text>
                                                        <Text type="boldText">
                                                            {card.price}
                                                        </Text>
                                                        <Text type="bodyText">
                                                            {card.vatText}
                                                        </Text>
                                                    </Wrapper>
                                            </Wrapper>
                                        </Link>
                                    </Fragment>
                                );
                            })
                        }
                    </Wrapper>
                    <Text
                    type="bodyText"
                    className="my-2 md:my-4 lg:my-6">
                        {/* Potřebujete vědět více informací nebo máte jakýkoliv dotaz? Napište nebo zavolejte nám. */}
                        Dne 10.08.2023 jsem úspěšně absolvoval závěrečnou zkoušku a získal jsem tak profesní kvalifikaci: Mechanik silničních vozidel s elektrickým a hybridním pohonem. Rozšířil jsem tak svoji kvalifikaci o obor autotronik. Od roku 2023 také spolupracuji s firmou elBlesk.
                    </Text>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Pricing;