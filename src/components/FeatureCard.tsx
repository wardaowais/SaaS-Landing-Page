import clsx from "clsx";
import React from "react";

const FeatureCard = React.memo((props: { title: string; description: string; children?: React.ReactNode; className?: string; highlighted?: boolean }) => {
    
    const { title, description, children, className, highlighted } = props;

    return (
        <div
            className={clsx(
                "bg-neutral-900 border border-white/10 p-6 rounded-3xl",
                highlighted && "shadow-md shadow-lime-400",
                className 
            )}
        >
            <div className="aspect-video">{children}</div>
            <div>
                <h3 className="text-3xl font-medium mt-6">{title}</h3>
                <p className="text-white/50 mt-2">{description}</p>
            </div>
        </div>
    );
})

FeatureCard.displayName = "Featured Card"
export default FeatureCard;