import Link from "next/link";
import Image from "next/image";
import frontImage from "@/app/public/Rectangle 6.png"
import leftB from "@/app/public/Frame 8.png"
import rightB from "@/app/public/Frame 9.png"
import view from "@/app/public/arrow-2-right-long.png"
import slideNumbers from "@/app/public/slide-numbers.png"
import image1 from "@/app/public/Rectangle 8.png"
import image2 from "@/app/public/Rectangle 9.png"
import image3 from "@/app/public/Rectangle 10.png"
import rightArr from "@/app/public/arrow-2-right-long (1).png"
import images2 from "@/app/public/image 15.png"
import images3 from "@/app/public/image 16.png"
import images4 from "@/app/public/image 17.png"
import images5 from "@/app/public/image 18.png"
import contactImage from "@/app/public/image 12.png"


export default function Home() {
  return (

    <div className="bg-white h-vh" id="one">
      <div className="flex justify-around">
        <section className="flex flex-col  justify-center items-center gap-20 ">
          <div>

            <div className="flex flex-col  justify-center items-center text-start ">
              <h1 className=" text-gray-300 text-[64px] font-sans text-start font-light flex flex-col" >PROJECT <span className="font-bold text-black" >Lorum</span> </h1>
            </div>

            <div className="flex justify-center items-center">
              <button className="h-[100px] w-[100px]"><Image className="border-2 border-gray-300" src={leftB} alt="left side arrow"></Image></button>
              <button className="h-[100px] w-[100px]"><Image className="border-2 border-gray-300" src={rightB} alt="left side arrow"></Image></button></div>
            <div>
              <Image src={slideNumbers} alt="slide numbers"></Image>
            </div>
          </div>
        </section>
        <section className="relative">
          <Image src={frontImage} alt="rectangle image"></Image>
          <div className="h-[71px] w-[221px] absolute left-2 bottom-0 bg-white hover:bg-neutral-200 flex justify-center items-center">
            <Link href="/projects" className=" h-[24px] w-[152px] text-black">VIEW PROJECT</Link> <div><Image src={view} alt="view projects arrow"></Image></div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section className="h-screen bg-white flex justify-center items-center">
        <div className="h-[465px] w-[1170px] bg-gray-100 flex justify-between px-20 ">
          <div className="flex p-10 gap-10">
            <div className="flex flex-col gap-10">
              <Image src={image1} alt="image"></Image>
              <Image src={image3} alt="image"></Image>
            </div>
            <div className="flex items-center">
              <Image src={image2} alt="image"></Image>
            </div>

          </div>
          <div className="flex flex-col text-black pt-10">
            <h1 className="w-[168px] text-[64px] text-neutral-400 font-light">About</h1>
            <p className="h-[200px] w-[400px] text-neutral-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <div className="h-[71px] w-[222px] bg-white hover:bg-neutral-200 flex justify-center items-center">
              <Link href="/projects" className="h-[24px] w-[123px] text-neutral-800">READ MORE</Link> <div><Image src={view} alt="view projects arrow"></Image></div>
            </div>
          </div>

        </div>
      </section>


      <section className=" bg-white flex justify-center mb-28">
        <div className="flex flex-col h-[268px] w-[1170px]">
          <h1 className="w-[881px] text-[64px] text-neutral-400 font-light">Main Focus/Mission Statement</h1>
          <div className="flex justify-start gap-32">

            <div className="w-[413px] h-[144px] flex items-center gap-10">
              <div className="text-neutral-300 w-[120px] text-[140px] font-bold">1</div>
              <div className="w-[279px] text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</div>
            </div>

            <div className="w-[413px] h-[144px] flex items-center gap-10 ">
              <div className="text-neutral-300 w-[120px] text-[140px] font-bold ">2</div>
              <div className="w-[420px] text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</div>
            </div>

          </div>

        </div>
      </section>

      <section className=" bg-white mx-20 flex justify-center items-center">
        <div className="h-[765px] w-[1170px] flex flex-col justify-between">
          <h1 className="w-[881px] text-[64px] text-neutral-400 font-light">OUR PROJECTS</h1>
          <div className="flex flex-col gap-8 ">
            <div className="flex justify-between ">
              {/* <Image src={images1} alt="imgage"></Image> */}
              <div className="h-[255px] w-[570px] bg-neutral-700 pt-6 pl-20">
                <div className="h-[160px] w-[233px]">
                  <h1 className="text-white font-bold h-[128px] h- text-[50px]">Sample Project</h1>
                </div>


                <div className="flex ">
                  <div className="h-[24px] w-[129px] flex justify-center  items-center">
                    <Link href="/projects" className="h-[24px] w-[121px] text-white hover:underline">VIEW MORE</Link> <div><Image src={rightArr} alt="view projects arrow"></Image></div>
                  </div>
                </div>
              </div>


              <Image src={images2} alt="imgage"></Image>
            </div>
            <div className="flex justify-between">
              <Image src={images3} alt="imgage"></Image>
              <Image src={images4} alt="imgage"></Image>
              <Image src={images5} alt="imgage"></Image>

            </div>
          </div>

          <div className="flex justify-end">
            <div className="h-[71px] w-[222px] bg-neutral-800 flex justify-center hover:bg-neutral-700  items-center">
              <Link href="/projects" className="h-[24px] w-[121px] text-white">ALL PROJECTS</Link> <div><Image src={rightArr} alt="view projects arrow"></Image></div>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="bg-white h-screen mx-20 flex justify-center items-center ">

        <div className="h-[603px] w-[1170px]">

          <h1 className="w-[881px] text-[64px] text-neutral-400 font-light">CONTACT US</h1>
          <div className="flex justify-between py-6">


            <form action="/email-send" className="flex flex-col gap-2">
              <input type="name" placeholder="Name" name="name" className="h-[46px] w-[391px] bg-neutral-200 text-customColor pl-5" />

              <div className="relative">
                <input type="number" placeholder=" " name="numbers" className="peer placeholder-transparent h-[46px] w-[391px] bg-neutral-200  pl-5" />
                <label htmlFor="number" className="absolute left-5 text-neutral-400 peer-placeholder-shown:top-3 peer-placeholder-shown:opacity-100 peer-focus:opacity-0 peer-focus:text-transparent text-customColor text-[16px]" > Phone Number<span className="text-red-600">*</span> </label>
              </div>

              <div className="relative">
                <input type="email" placeholder=" " name="email" className="peer placeholder-transparent h-[46px] w-[391px] bg-neutral-200  pl-5" />
                <label htmlFor="email" className="absolute left-5 text-neutral-400 peer-placeholder-shown:top-3 peer-placeholder-shown:opacity-100 peer-focus:opacity-0 peer-focus:text-transparent text-customColor text-[16px]" > E-mail<span className="text-red-600">*</span> </label>
              </div>

              <input type="text" placeholder="Interested In" name="text" className="h-[46px] w-[391px] text-customColor bg-neutral-200 pl-5" />

              <div className="relative">
                <textarea placeholder=" " id="message" name="text" className="peer placeholder-transparent h-[147px] w-[391px] bg-neutral-200  pl-5" ></textarea>
                <label htmlFor="email" className="absolute left-5 text-neutral-400 peer-placeholder-shown:top-3 peer-placeholder-shown:opacity-100 peer-focus:opacity-0 peer-focus:text-transparent text-customColor text-[16px]" > Message<span className="text-red-600">*</span> </label>
              </div>

              <div className="flex justify-start mt-10">
                <div className="h-[71px] w-[222px] bg-neutral-800 flex justify-center hover:bg-neutral-700  items-center">
                  <button className="h-[24px] w-[121px] text-white">SEND EMAIL</button> <div><Image src={rightArr} alt="view projects arrow"></Image></div>
                </div>
              </div>


            </form>



            <div><Image src={contactImage} alt="contact section image"></Image></div>
          </div>
        </div>
      </section>
    </div>
  );
}

