import { ReactNode } from "react";

type DiagonalSectionProps = {
    text?: ReactNode;
    subtext?: string;
}

export const DiagonalSection = ({ text, subtext }: DiagonalSectionProps) => {
    return (
        <div className="relative h-28 lg:h-52 w-full m-0 p-0 bg-gradient-to-l from-colorMenuPrimary to-colorMenuSecondary clip-path-inverted z-10">
            <div
                className="w-full h-full flex justify-end items-center pr-2 lg:pr-14 mb-2"
            >
                <div className="flex flex-col">
                    <div className="flex flex-col items-end">
                        <h1 className="text-3xl lg:text-5xl text-white font-bold">{text}</h1>
                        <p className="text-xs lg:text-lg text-white font-medium mr-1">{subtext}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

