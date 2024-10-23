import Image from "next/image"
import facebook from "@/app/public/facebook.png"
import twitter from "@/app/public/twitter.png"
import linkedin from "@/app/public/Linked In.png"
import pinterest from "@/app/public/pininterest.png"

import logoFooter from "@/app/public/Group 11 1.png"

export default function Footer() {
    return(
        // <div>
        //     <div className="h-[717px] sticky bottom-0 w-fill bg-neutral-800 t flex flex-col items-center justify-center">
               
        //         <div className="flex gap-10 justify-around items-center">

                   
        //             </div>

                  
        //         </div>

        //         
        //     </div>
        // </div>

        <div>
            <div className="bg-neutral-800 h-[417px] w-fill text-white flex flex-col">

<div className="flex justify-between mx-20 p-14 ">
            <div><Image src={logoFooter} alt="logo in footer"></Image></div>


            <div className="h-[229px] w-[605px] font-semibold text-[14px] flex gap-52 ">
                        <div className="flex flex-col gap-5 ">
                        <h2 className="h-[20px] w-[75px] text-[16px] font-bold ">Information</h2>
                        <h3 className="h-[24px] w-[82px]">Main</h3>
                        <h3 className="h-[24px] w-[56px]">Gallery</h3>
                        <h3 className="h-[24px] w-[61px]">Projects</h3>
                        <h3 className="h-[24px] w-[94px]">Certifications</h3>
                        <h3 className="h-[24px] w-[64px]">Contacts</h3>
                        </div>
                        <div className="flex flex-col gap-8">
                        <h2 className="h-[20px] w-[75px] text-[16px] font-bold">Contacts</h2>
                        <h3 className="h-[72px] w-[314px]">1234 Sample Street <br /> Austin Texas 78704</h3>
                        <h3 className="h-[24px] w-[117px]">512.333.2222</h3>
                        <h3 className="h-[24px] w-[181px]">sampleemail@gmail.com</h3>
                        </div>
                        </div>

            <div className="h-[64px] w-[193px] flex flex-col gap-10">
                    <h2 className="h-[19px] w-[100px] text-[16px] font-bold ">Social Media</h2>
                    {/* icons */}
                    <div className="flex gap-10">
                        <Image src={facebook} alt="facebook icon" />
                        <Image src={twitter} alt="facebook icon" />
                        <Image src={linkedin} alt="facebook icon" />
                        <Image src={pinterest} alt="facebook icon" />

                    </div>
                    </div>
</div>
        <div className="h-[0.5px] w-fill bg-white"></div>
        <div className="text-white text-center mt-6"> &copy; 2021 All Rights Reserved</div>
            </div>
        </div>
    )
}