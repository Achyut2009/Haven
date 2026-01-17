'use client'
import { ModeToggle } from "./ui/Theme-Toggle";
import Link from "next/link";

export default function Navbar() {
    return(
        <div className="flex p-3 bg-white/30 dark:bg-black/30 backdrop-blur-md sticky top-0 z-50 w-full">
            <div className="flex flex-row justify-evenly w-full items-center">
                <div className="flex font-bold text-3xl text-pink-500 fill-cyan-500 drop-shadow-lg drop-shadow-pink-500">Haven</div>
                <div className="flex flex-row justify-center space-x-3 place-items-center">
                    <Link href="/" className="">Home</Link>
                    <Link href="/about" className="">About</Link>
                    <Link href="/contact" className="">Contact</Link>
                    <Link href="https://buy.stripe.com/test_8x214meLbd1icAe53c1Fe00" target="_blank">Give</Link>
                </div>
                <ModeToggle />
            </div>
        </div>
    );
}