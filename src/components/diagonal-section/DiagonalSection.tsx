import { ReactNode } from "react";

type DiagonalSectionProps = {
    text?: ReactNode;
    subtext?: string;
}

export const DiagonalSection = ({ text, subtext }: DiagonalSectionProps) => {
    return (
        <div className="relative h-64 w-full bg-gradient-to-l from-colorMenuPrimary to-colorMenuSecondary clip-path-inverted z-10">
            <div
                className="absolute bottom-0 left-0 w-full h-full flex justify-end items-center pr-14 mb-2"
            >
                <div className="flex flex-col">
                    <div className="flex flex-col items-end">
                        <h1 className="text-[72px] text-white font-bold">{text}</h1>
                        <p className="text-white font-medium mt-[-22px] mr-1">{subtext}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

