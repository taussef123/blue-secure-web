import AboutImg from "../assets/images/about-banner.jpg"
const AboutUs = () => {

  return (
    <>
      <div className="min-h-screen w-full bg-slate-700 flex justify-center ">
        <div className="px-5 py-10 w-full max-w-5xl grid   grid-cols-1 items-center">
          <div className="space-y-6 ">
            <h2 className="text-blue-700 font-semibold  ml-2 font-serif text-2xl">
              Who We Are
            </h2>
            <p className="text-white text-md leading-8 ">
              We are a dynamic team of tech enthusiasts and creative minds
              dedicated to empowering businesses through innovative digital
              solutions. Our passion lies in transforming complex challenges
              into seamless, user-friendly experiences that drive growth and
              efficiency.
            </p>
          </div>
          <div>
            <div className="w-full mt-6">
              <img
                src={AboutImg}
                className="hover:transition-shadow duration-200"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="min-h-screen bg-slate-700   ">
        <div className="grid w-full items-center border-2 border-amber-200 py-30">
          <h2 className="text-blue-700 font-semibold font-serif text-lg ml-5">
            About Blue Web Secure IT Solutions
          </h2>
          <div className="flex flex-col  sm:flex-row w-full px-15 py-10  justify-around border-4 border-red-600">
            <div className="w-1/2 flex-col py-10 px-20 border-4 border-green-600">
              <p className="text-white leading-7 text-lg">
                Blue Secure Web IT Solutions are dedicated to empowering
                businesses with cutting-edge technology. Our mission is to
                provide innovative, reliable, and customer-focused IT services
                that drive growth and efficiency.
              </p>
              <p className="text-white leading-8 text-lg">
                We believe in building lasting partnerships, understanding your
                unique challenges, and delivering solutions that exceed
                expectations.
              </p>
            </div>

            <div className="flex flex-col gap-y-6 mt-2">
              <div className="border-2 border-amber-400 px-4 py-8 ">
                <h3 className="text-lg text-white font-semibold ">Innovation</h3>
                <p className="text-white mt-3">Continuously evolving with the latest tech trends.</p>
              </div>
              <div className="border-2 border-amber-400 px-4 py-8">
                <h3>Reliability</h3>
                <p>Delivering consistent and dependable IT services.</p>
              </div>
              <div className="border-2 border-amber-400 px-4 py-8">
                <h3>Customer Focus</h3>
                <p>Prioritizing your needs and success above all else.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AboutUs;