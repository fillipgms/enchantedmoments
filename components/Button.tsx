import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
    children: React.ReactNode;
    link?: string;
    type?: "primary" | "secondary";
    className?: string;
};

const Button = ({
    children,
    link,
    type = "primary",
    className,
}: ButtonProps) => {
    const classes = cn("py-2 px-6 rounded-lg font-medium w-fit", {
        "bg-primary text-background": type === "primary",
        "text-gray-900 border-2 border-gray-200": type === "secondary",
        className,
    });

    return link ? (
        <Link href={link!} className={classes}>
            {children}
        </Link>
    ) : (
        <button className={classes}>{children}</button>
    );
};

export default Button;
