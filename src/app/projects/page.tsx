import Image from "next/image"
import image1 from "@/app/public/image 30.png"
import image2 from "@/app/public/image 33.png"
import image3 from "@/app/public/image 32.png"
import view from "@/app/public/arrow-2-right-long.png"
import slideNumbers from "@/app/public/slide-numbers (1).png"
import leftB from "@/app/public/Frame 8.png"
import rightB from "@/app/public/Frame 9.png"
import Link from "next/link"

export default function Projects() {
    return (
        <div className="h-vh bg-white" id="three">

            <div className="flex flex-col  h-[128px] w-[277px] justify-center items-start pl-36 pt-28 ">
                <h1 className="styles text-gray-300 text-[64px]  font-sans text-start font-light flex flex-col" >Our <span className="font-bold text-black" >Projects</span> </h1>
            </div>


            <div className=" flex justify-center items-center mt-32 mb-14">
                <div className="h-[1px] w-[1170px] bg-black bg-opacity-25"></div>
            </div>

            <div className="flex flex-col mx-32 my-10 gap-16">

                <div className="flex gap-10 bg-neutral-100 h-[435px] w-[1170px] ">
                    <Image src={image1} alt="project image" />
                    <div className="flex flex-col gap-16">
                        <h2 className="text-[40px] h-[47px] w-[440px] opacity-30">Sample Project</h2>

                        <p className="h-[120px] w-[400px] text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <div className="h-[71px] w-[221px] bg-white flex justify-center hover:bg-neutral-200 items-center">
                            <Link href="/project1" className="h-[24px] w-[152px] text-black text-center">VIEW PROJECT</Link> <div><Image src={view} alt="view projects arrow"></Image></div>
                        </div>

                    </div>
                </div>


                <div className="flex gap-10 bg-neutral-100 h-[435px] w-[1170px] ">
                    <Image src={image2} alt="project image" />
                    <div className="flex flex-col gap-16">
                        <h2 className="text-[40px] h-[47px] w-[440px] opacity-30">Sample Project 2</h2>

                        <p className="h-[120px] w-[400px] text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <div className="h-[71px] w-[221px] bg-white flex justify-center hover:bg-neutral-200 items-center">
                            <Link href="/project2" className="h-[24px] w-[152px] text-black text-center">VIEW PROJECT</Link> <div><Image src={view} alt="view projects arrow"></Image></div>
                        </div>

                    </div>
                </div>



                <div className="flex gap-10 bg-neutral-100 h-[435px] w-[1170px] ">
                    <Image src={image3} alt="project image" />
                    <div className="flex flex-col gap-16">
                        <h2 className="text-[40px] h-[47px] w-[440px] opacity-30">Sample Project 3</h2>

                        <p className="h-[120px] w-[400px] text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <div className="h-[71px] w-[221px] bg-white flex justify-center hover:bg-neutral-200 items-center">
                            <Link href="/project3" className="h-[24px] w-[152px] text-black text-center">VIEW PROJECT</Link> <div><Image src={view} alt="view projects arrow"></Image></div>
                        </div>

                    </div>
                </div>


                <div className="flex m-10 gap-16 items-start ">
                    <div><Image src={slideNumbers} alt="slide numbers" /></div>

                    <div className="flex ">
                        <button className="h-[100px] w-[100px]"><Image className="border-2 border-gray-300" src={leftB} alt="left side arrow"></Image></button>
                        <button className="h-[100px] w-[100px]"><Image className="border-2 border-gray-300" src={rightB} alt="left side arrow"></Image></button></div>
                    <div>
                        {/* </div> */}

                    </div>
                </div>

            </div>


        </div>
    )
}