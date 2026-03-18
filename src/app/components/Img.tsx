import {
    Fragment
} from "react";
import Image from "next/image";
import clsx from "clsx";

type fillType = {
    fill?: boolean;
};

type ImgType = {
    width?: number;
    height?: number;
    src: string;
    alt?: string;
    type?: "standard" | "hero",
    draggable?: boolean;
    className?: string;
} & fillType;

const Img = (props: ImgType) => {
    return (
        <Fragment>
            <Image
            {
                ...(props.fill ? {
                    fill: true
                } : {
                    width: props.width,
                    height: props.height,
                })
            }
            {
                ...(
                    props.type === "hero" ? (
                        {
                            priority: true
                        }
                    ) : (
                        {
                            priority: false
                        }
                    )
                )
            }
            src={props.src}
            alt={props.alt || "Foto Servis Nebovidy - Tomáš Pazourek"}
            draggable={props.draggable}
            className={clsx(props.className, "img-component")}
            />
        </Fragment>
    );
};

export default Img;