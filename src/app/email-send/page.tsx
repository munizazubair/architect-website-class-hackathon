import Image from "next/image"
import Link from "next/link"
import doneImage from "@/app/public/success.png"
import crossImage from "@/app/public/Group.png"

export default function EmailSend() {
    return (
        <div className="h-screen bg-neutral-300 flex justify-center items-center">
            <div className=" bg-white  w-[500px] p-5">
                <div className="flex justify-end"><Link href="/#contact" ><Image src={crossImage} alt="done" /></Link></div>
                <div className="flex flex-col justify-center items-center gap-8">
                    <div><Image src={doneImage} alt="done" /></div>
                    <h1 className="text-[24px] font-bold h-[26px] w-[150px] text-black">Email Sent!</h1>
                    <p className="h-[52px] w-[426px] text-black text-center text-[14px] font-semibold">Thank you for reaching out! <br /> We will get back to you shortly.</p>
                    <button className="h-[42px] w-[391px] bg-neutral-800 text-white font-semibold hover:bg-neutral-700"><Link href="/#contact" >Back To Contact</Link></button>
                </div>
            </div>
        </div>

    )
}