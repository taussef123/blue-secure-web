
import simg from "../assets/images/hero.jpg"
import designs from "../assets/images/designs.png"
import web from "../assets/images/web.jpg"
import It from "../assets/images/it cons.webp"
import mobile from "../assets/images/mobile.png"
const Service = () => {
  return (
    <>
      <div className="bg-slate-950">
        <div className="max-w-7xl w-full mx-auto px-6 py-6 ">
          <div className=" flex flex-col sm:flex-row  justify-center items-center">
            <div className="space-y-7 px-7 ">
              <h2 className=" text-xl sm:text-2xl md :text-xl lg:text-4xl font-serif  text-blue-700 leading-[1.3]">
                Empowering Your Digital Future
              </h2>
              <p className="text-base sm:text-sm md:text-lg text-white font-serif leading-[1.7] max-w-xl ">
                In today's fast-paced digital world, leveraging the right
                technology is not just an advantage—it's a necessity. We partner
                with small to medium-sized businesses to provide tailored IT
                services that drive efficiency, foster innovation, and secure
                your future.
              </p>
            </div>
            <div className="max-w-md">
              <img
                src={simg}
                className="w-xl rounded-md   hover:drop-shadow-xl hover:drop-shadow-[#0e5f8a] cursor-pointer hover:transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 border-8 border-pink-800 py-6">
        <div className="max-w-7xl w-full mx-auto px-8 py-8 space-y-6 border-4 border-amber-500  ">
          <h2 className="text-xl sm:text-2xl md :text-xl lg:text-4xl font-serif  text-blue-700 leading-[1.3]">
            Our Comprehensive IT Services
          </h2>
          <p className="text-base sm:text-sm md:text-lg text-white font-serif leading-[1.6] ">
            We offer a full spectrum of digital services tailored to meet your
            unique business needs. From initial concept to ongoing support, we
            provide end-to-end solutions that ensure your digital presence is
            robust, engaging, and effective.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-4 border-green-700 mx-auto px-8 py-9 gap-6 ">
            <div className="border-2 border-blue-600 space-y-4 px-4 py-7">
              <img src={designs} className="size-16 rounded-ful" />
              <h3 className=" text-center text-white">Web Designing </h3>
              <p className=" text-center text-white">
                Creative, Modern, User-Centric
              </p>
            </div>
            <div className="border-2 border-amber-500 space-y-5 px-4 py-5">
              <img src={web} className="size-16  rounded-full" />
              <h3 className=" text-center text-white">Web Development</h3>
              <p className=" text-center text-white">
                Scalable & Robust Solutions
              </p>
            </div>
            <div className="border-2 border-amber-600 space-y-5 px-4 py-5">
              <img src={It} className="size-16  rounded-full" />
              <h3 className=" text-center text-white">IT Consulting </h3>
              <p className=" text-center text-white">
                Smarter IT, Smarter Business
              </p>
            </div>
            <div className="border-2 border-amber-600 space-y-5 px-4 py-5">
              <img src={mobile} className="size-16  rounded-full" />
              <h3 className=" text-center text-white">
                Mobile App Development
              </h3>
              <p className=" text-center text-white">
                Apps That Engage & Perform.
              </p>
            </div>
            <div className="border-2 border-amber-600 space-y-5 px-4 py-5">
              <h3 className=" text-center text-white">
                Digital Marketing Solutions
              </h3>
              <p className=" text-center text-white">
                Turning Clicks into Customers, and Ideas into Impact
              </p>
            </div>
            <div className="border-2 border-amber-600 space-y-5 px-4 py-5">
              <h3 className=" text-center text-white">UI/UX Design</h3>
              <p className=" text-center text-white">
                Apps That Engage & Perform.
              </p>
            </div>
            <div className="border-2 border-amber-600 space-y-5 px-4 py-5">
              <h3 className=" text-center text-white">Software Development</h3>
              <p className=" text-center text-white">
                Custom Software for Every Business
              </p>
            </div>
            <div className="border-2 border-amber-600 space-y-5 px-4 py-5">
              <h3 className=" text-center text-white">
                Cybersecurity Solutions
              </h3>
              <p className=" text-center text-white">
                Protecting Your Digital World
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;