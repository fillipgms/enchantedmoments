"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 70) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={cn(
                "md:px-10 px-5 py-3 sticky top-0 flex items-center justify-between z-50 bg-background duration-200 transition-all border-b",
                isVisible ? "translate-y-0" : "-translate-y-full"
            )}
        >
            <Link href="/" className="text-primary font-bold text-lg">
                Enchanted Moments
            </Link>

            <div className="flex items-center gap-3">
                <Link
                    href="/login"
                    className="py-1 px-3 font-medium text-gray-900 rounded-lg border-2 border-gray-200"
                >
                    <p className=" text-sm">Olá, faça seu login p/</p>
                    <h5 className="font-semibold">Ver Seus pedidos</h5>
                </Link>
            </div>
        </header>
    );
};

export default Header;
