import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface TagProps extends HTMLAttributes<HTMLDivElement> {
    section?: "faq" | "features" | "integration" | "introducing"; 
}

const pageStyles: Record<NonNullable<TagProps["section"]>, string> = {
    faq: "tracking-wider text-lime-400",
    features: "tracking-normal text-lime-400",
    integration: "tracking-normal text-lime-400",
    introducing: "tracking-normal text-lime-400",
};

const Tag = ({ section, className, children, ...otherProps }: TagProps) => {
    return (
        <div
            className={twMerge(
                clsx(
                    "inline-flex border gap-2 px-3 py-1 rounded-full uppercase items-center",
                    "border-lime-400", 
                    section ? pageStyles[section] : "text-lime-400" 
                ),
                className
            )}
            {...otherProps}
        >
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
};

Tag.displayName = "Tag";
export default Tag;
