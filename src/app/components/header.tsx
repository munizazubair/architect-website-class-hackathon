import Image from "next/image"
import logo from "@/app/public/Group 11.png"
import Link from "next/link"

export default function Header() {
    return(
        <div>
            <div className="bg-white text-black flex h-[102px] justify-around items-center">

                <div className="flex flex-col justify-center text-center h-[41px] w-[68px] ">
                <div><Image src={logo} alt="logo"></Image></div>
                </div>

                <div className="flex justify-around gap-20 pr-20 text-[14px] ">

                    <Link href={"/"} className="h-[22px] text-center w-[68px] border-y-2 focus:border-y-2 hover:border-y-2 hover:border-black focus:border-black">MAIN </Link>
                    <Link href={"/gallery"} className="h-[22px] text-center w-[65px] border-y-2 border-transparent focus:border-y-2 hover:border-y-2 hover:border-black focus:border-black">GALLERY </Link>
                    <Link href="/projects" className="h-[22px] text-center w-[76px] border-y-2 border-transparent focus:border-y-2 hover:border-y-2 hover:border-black focus:border-black">PROJECTS</Link>
                    <Link href="/certifications" className="h-[22px] text-center w-[123px] border-y-2 border-transparent focus:border-y-2 hover:border-y-2 hover:border-black focus:border-black">CERTIFICATIONS</Link>
                    <Link href="/contact" className="h-[22px] text-center w-[79px] border-y-2 border-transparent focus:border-y-2 hover:border-black hover:border-y-2 focus:border-black">CONTACTS</Link>

                
                </div>

            </div>
        </div>
    )
} 