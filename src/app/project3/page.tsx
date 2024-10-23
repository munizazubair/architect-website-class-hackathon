import Image from "next/image"
import img1 from "@/app/public/image 33 (2).png"
import img2 from "@/app/public/image 34.png"
import img3 from "@/app/public/image 35.png"



export default function sample1() {
    return (

        <div>
            <div className="h-vh bg-white">
                <div className="flex flex-col  h-[128px] w-[387px] justify-center items-start pl-36 pt-20 ">
                    <h1 className="styles text-gray-300 text-[64px] w-[387px] font-sans text-start font-light flex flex-col" >Sample <span className="font-bold text-black" >Project 3</span> </h1>
                </div>
                <div className="flex flex-col gap-20 m-36">
                    <div><Image src={img1} alt="image" /></div>
                    <div className="flex gap-10">
                        <div><Image src={img2} alt="image 2" /></div>
                        <p className="h-[428px] w-[721px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.</p>
                    </div>
                    <div><Image src={img3} alt="image 3" /></div>
                </div>
            </div>


        </div>
    )
}