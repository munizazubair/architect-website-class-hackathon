import Link from "next/link"
export default function Contact() {
    return (
        <div className="bg-white h-screen flex ml-12 gap-52 p-20" id="five">

            <div className="flex flex-col gap-16">
                <div className="flex flex-col  h-[128px] w-[338px] justify-center items-start ">
                    <h1 className="styles text-gray-300 text-[64px]  font-sans text-start font-light flex flex-col" >Contact <span className="font-bold text-black" >Information</span> </h1>
                </div>

                <div className="w-[280px] h-[46px] text-[16px]"><span className="font-bold text-[18px]">Company Name</span> <br />  1234 Sample Street Austin Texas 76401</div>

                <div className="h-[21px] w-[114px] font-bold text-[18px]">512.333.2222</div>

                <div className="h-[19px] w-[179px] text-[16px]">sampleemail@gmail.com</div>


                <div className="h-[71px] w-[222px] bg-neutral-800 hover:bg-neutral-700 flex justify-center items-center">
                    <Link href="/#contact" className="h-[24px] w-[121px] text-white">CONTACT US</Link>
                </div>
            </div>

            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440942.921372177!2d-98.09319601208723!3d30.29785984474131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b51b0fce85b3%3A0x7ee2d130cb0014de!2sButler%20Metro%20Park!5e0!3m2!1sen!2s!4v1729612932837!5m2!1sen!2s" width="825" height="530" className="border-2 border-black" loading="lazy" ></iframe>
            </div>
        </div>
    )
}