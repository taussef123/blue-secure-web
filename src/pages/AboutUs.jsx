import AboutImg from "../assets/images/about-banner.jpg"
import Port1 from "../assets/images/port-1.jpg"
import Port2 from "../assets/images/port-2.jpg"
import Port3 from "../assets/images/port-3.jpg"
import Port4 from "../assets/images/port-4.jpg"
const AboutUs = () => {

  return (
    <>
      <div className="min-h-screen w-full bg-slate-950 flex justify-center ">
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
      <div className="min-h-screen bg-slate-950   ">
        <div className="grid w-full items-center  py-30">
          <h2 className="text-blue-700 font-semibold font-serif text-lg ml-4 sm:ml-10">
            About Blue Web Secure IT Solutions
          </h2>
          <div className="flex flex-col  sm:flex-row w-full px-12 py-10  justify-around ">
            <div className=" w-2xs sm:w-1/2 flex-col py-10 sm:py-15 px-20 sm:px-20 ">
              <p className="text-white leading-5 sm:leading-7 text-sm sm:text-lg">
                Blue Secure Web IT Solutions are dedicated to empowering
                businesses with cutting-edge technology. Our mission is to
                provide innovative, reliable, and customer-focused IT services
                that drive growth and efficiency.
              </p>
              <p className="text-white leading-6 sm:leading-8 text-sm sm:text-lg mt-6">
                We believe in building lasting partnerships, understanding your
                unique challenges, and delivering solutions that exceed
                expectations.
              </p>
            </div>

            <div className="flex flex-col gap-y-6 mt-6 sm:mt-2">
              <div className=" rounded-xl px-4 py-8 hover:border-0  hover:inset-shadow-sm hover:transition duration-400 ease-in inset-shadow-indigo-500 hover:cursor-pointer ">
                <h3 className="text-lg text-white font-semibold ">
                  Innovation
                </h3>
                <p className="text-white mt-3">
                  Continuously evolving with the latest tech trends.
                </p>
              </div>
              <div className=" rounded-xl px-4 py-8 hover:border-0  hover:inset-shadow-sm hover:transition duration-400 ease-in inset-shadow-indigo-500 hover:cursor-pointer ">
                <h3 className="text-lg text-white font-semibold ">
                  Reliability
                </h3>
                <p className="text-white mt-3">
                  Delivering consistent and dependable IT services.
                </p>
              </div>
              <div className=" rounded-xl px-4 py-8 hover:border-0  hover:inset-shadow-sm hover:transition duration-400 ease-in inset-shadow-indigo-400 hover:cursor-pointer ">
                <h3 className="text-lg text-white font-semibold ">
                  Customer Focus
                </h3>
                <p className="text-white mt-3">
                  Prioritizing your needs and success above all else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-slate-950">
        <div className="grid justify-center w-full max-w-6xl mx-auto py-30 space-y-12">
          <div className="w-full  px-10 py-10 ">
            <h2 className="  text-2xl font-serif font-semibold text-blue-700 mt-10">
              Our Portfolio: Visualizing Success
            </h2>
            <p className="text-white sm:text-md  md: text-md text-lg  mt-10">
              Explore a selection of our recent projects that showcase our
              diverse capabilities and commitment to design excellence. Each
              project reflects our dedication to creating impactful and visually
              stunning digital experiences for our clients.
            </p>
          </div>
          <div className="  max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center gap-4 ">
            <div className=" w-full max-w-md mx-auto">
              <img src={Port1} className="w-full   rounded-2xl" />
            </div>
            <div className=" max-w-md w-full mx-auto">
              <img className="rounded-2xl w-full" src={Port2} />
            </div>
            <div className=" max-w-md w-full mx-auto">
              <img className="  rounded-2xl w-full" src={Port3} />
            </div>
            <div className=" max-w-md w-full mx-auto">
              <img className="  rounded-2xl w-full" src={Port4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;





// Important links


// https://gamma.app/docs/cso1wcmxa0q575o

// https://gamma.app/docs/ev57iax75xutuzz

// https://gamma.app/docs/40ow2aku1fjdnjf



// - Primary: Deep Indigo #3F3D56
// - Accent: Electric Blue #00BFFF
// - Background: Soft Gray #F5F7FA
// - Text: Charcoal #2C2C2C
// 🖋️ Font Suggestions
// - Headings: Montserrat Bold
// - Body Text: Open Sans Regular
// - Callouts: Roboto Mono (for tech feel)
