import Image from "next/image"
import img1 from "@/app/public/Rectangle 22.png"
import img2 from "@/app/public/Rectangle 23.png"
import img3 from "@/app/public/Rectangle 24.png"
import img4 from "@/app/public/Rectangle 25.png"
import img5 from "@/app/public/Rectangle 26.png"
import img6 from "@/app/public/Rectangle 27.png"
import img7 from "@/app/public/Rectangle 28.png"
import img8 from "@/app/public/Rectangle 29.png"
import img9 from "@/app/public/Rectangle 30.png"
import img10 from "@/app/public/Rectangle 31.png"
import slideNumbers from "@/app/public/slide-numbers (1).png"
import leftB from "@/app/public/Frame 8.png"
import rightB from "@/app/public/Frame 9.png"


export default function Gallery() {
    return (

        <div>
            <div className="h-vh bg-white " id="two">

                <div className="flex flex-col  h-[128px] w-[277px] justify-center items-start pl-36 pt-28 ">
                    <h1 className="styles text-gray-300 text-[64px]  font-sans text-start font-light flex flex-col" >PHOTO <span className="font-bold text-black" >Gallery</span> </h1>
                </div>
            </div>


            <div className=" flex justify-center items-center mt-32 mb-14">
                <div className="h-[1px] w-[1170px] bg-black bg-opacity-25"></div>
            </div>

            <div className="flex flex-col gap-10 mx-20 items-center">
                <div className="flex gap-10 ">
                    <Image src={img1} alt="image" />
                    <Image src={img2} alt="image" />
                    <Image src={img3} alt="image" />
                    <Image src={img4} alt="image" />
                    <Image src={img5} alt="image" />
                </div>
                <div className="flex gap-10 ">
                    <Image src={img6} alt="image" />
                    <Image src={img7} alt="image" />
                    <Image src={img8} alt="image" />
                    <Image src={img9} alt="image" />
                    <Image src={img10} alt="image" />
                </div>
            </div>

            <div className="flex m-20 gap-16 items-start ml-32">
                <div><Image src={slideNumbers} alt="slide numbers" /></div>

                <div className="flex ">
                    <button className="h-[100px] w-[100px]"><Image className="border-2 border-gray-300" src={leftB} alt="left side arrow"></Image></button>
                    <button className="h-[100px] w-[100px]"><Image className="border-2 border-gray-300" src={rightB} alt="left side arrow"></Image></button></div>
                <div>
                    {/* </div> */}

                </div>
            </div>
        </div>
    )
}