import {
    Fragment
} from "react";
import type {
    Metadata
} from "next";

import Content from "./Content";
import PricingPageSet from "@/app/components/PricingPageSet";

type Props = {
    params: Promise<{ pathName: string }>;
};

export const generateMetadata = async ({ params } : Props) : Promise<Metadata> => {
    const pathName = ( await params ).pathName;

    const currentMetadata = PricingPageSet.find((page) => {
        const pagePathName = page.url;

        return pagePathName === "/cenik/pneuservis";
    });

    return {
        title: currentMetadata?.title,
        description: currentMetadata?.description,
        openGraph: {
            title: currentMetadata?.openGraph?.title,
            description: currentMetadata?.openGraph?.description,
            images: currentMetadata?.openGraph?.images
        }
    };
};

const Page = () => {
    return (
        <Fragment>
            <Content />
        </Fragment>
    );
};

export default Page;