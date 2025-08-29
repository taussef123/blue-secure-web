import AboutImg from "../assets/images/about-banner.jpg"
import Port1 from "../assets/images/port-1.jpg"
import Port2 from "../assets/images/port-2.jpg"
import Port3 from "../assets/images/port-3.jpg"
import Port4 from "../assets/images/port-4.jpg"
const AboutUs = () => {

  return (
    <>
      <div className="bg-slate-950">
        <div className=" w-full max-w-7xl mx-auto grid grid-cols-1  px-6 py-8">
          <h2
            className=" text-xl
            sm:text-2xl
            md:text-xl
            lg:text-4xl
            font-serif
            leading-12
            text-blue-700
            "
          >
            Who We Are
          </h2>
          <p className=" text-base sm:text-sm md:text-lg lg:text-xl text-white font-serif leading-7 tracking-widest w-tight px-6 py-6  ">
            We are a dynamic team of tech enthusiasts and creative minds
            dedicated to empowering businesses through innovative digital
            solutions. Our passion lies in transforming complex challenges into
            seamless, user-friendly experiences that drive growth and
            efficiency.
          </p>
          <div className=" max-w-3xl w-full mx-auto">
            <img
              src={AboutImg}
              className="hover:transition-shadow duration-200"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-950">
        <div className="w-full max-w-7xl mx-auto  px-6 py-9 ">
          <h2
            className=" text-xl
            sm:text-2xl
            md:text-xl
            lg:text-4xl
            font-serif
            leading-12
            text-blue-700
            mb-6"
          >
            About Blue Web Secure IT Solutions
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  px-4 py-5 ">
            <div className="left">
              <p className=" text-base sm:text-sm md:text-lg lg:text-xl text-white font-serif leading-7 tracking-widest w-tight px-6 py-4  ">
                Blue Web Secure IT Solutions are dedicated to empowering
                businesses with cutting-edge technology. Our mission is to
                provide innovative, reliable, and customer-focused IT services
                that drive growth and efficiency.
              </p>

              <p className=" text-base sm:text-sm md:text-lg lg:text-xl text-white font-serif leading-7 tracking-widest w-tight px-6   ">
                We believe in building lasting partnerships, understanding your
                unique challenges, and delivering solutions that exceed
                expectations.
              </p>
              <p className=" text-base sm:text-sm md:text-lg lg:text-xl text-white font-serif leading-7 tracking-widest w-tight px-6   ">
                Blue Web Secure IT Solutions helps businesses grow with smart,
                reliable technology. We focus on delivering IT services that are
                innovative, easy to use, and built around your needs—so you can
                work better, faster, and safer.
              </p>
            </div>
            <div className="right max-w-md space-y-3 mx-auto sm:mx-auto md:mx-auto  py-3 px-4  mt-4  md:mt-6">
              <div className="flex flex-col ">
                <div
                  className="hover:border-0
            hover:inset-shadow-sm hover:transition duration-400 ease-in
            inset-shadow-red-600 hover:cursor-pointer flex flex-col items-center justify-center  px-4 py-4  rounded-xl w-full"
                >
                  <h3 className="text-lg text-white font-semibold font-serif ">
                    Innovation
                  </h3>
                  <p className=" text-base sm:text-sm md:text-md lg:text-lg text-white font-serif  tracking-wider mt-2 ">
                    Continuously evolving with the latest tech trends.
                  </p>
                </div>
                <div
                  className="hover:border-0
            hover:inset-shadow-sm hover:transition duration-400 ease-in
            inset-shadow-red-600 hover:cursor-pointer flex flex-col items-center justify-center  px-4 py-4  rounded-xl w-full"
                >
                  <h3 className="text-lg text-white font-semibold font-serif ">
                    Reliability
                  </h3>
                  <p className=" text-base sm:text-sm md:text-md lg:text-lg text-white font-serif  tracking-wider mt-2">
                    Delivering consistent and dependable IT services.
                  </p>
                </div>
                <div
                  className="hover:border-0
            hover:inset-shadow-sm hover:transition duration-400 ease-in
            inset-shadow-red-600 hover:cursor-pointer flex flex-col items-center justify-center  px-4 py-4  rounded-xl w-full"
                >
                  <h3 className="text-lg text-white font-semibold font-serif ">
                    Customer Focus
                  </h3>
                  <p className=" text-base sm:text-sm md:text-md lg:text-lg text-white font-serif  tracking-wider mt-2">
                    Prioritizing your needs and success above all else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-950">
        <div className="w-full max-w-7xl mx-auto px-4 py-5  ">
          <h2 className="  text-2xl font-serif font-semibold text-blue-700 mt-10">
            Our Portfolio: Visualizing Success
          </h2>
          <p className=" text-base sm:text-sm md:text-lg lg:text-xl text-white font-serif leading-7 tracking-widest w-tight px-6 py-4 ">
            Explore a selection of our recent projects that showcase our diverse
            capabilities and commitment to design excellence. Each project
            reflects our dedication to creating impactful and visually stunning
            digital experiences for our clients.
          </p>
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
      {/* <div className="bg-slate-950 p-10">
        <div className="w-full max-w-7xl mx-auto px-6 py-10">
          <div className="w-full  inline-block group">
            <h1 className="text-2xl sm:text-sl md:text-3xl text-blue-700 font-serif font-semibold">
              Our Mission: Your Success
            </h1>

            <p className="text-base sm:text-lg md:text-xl pt-6 text-white leading-6 sm:leading-7">
              Our core mission is to empower businesses through cutting-edge
              design and development. We believe in creating intuitive,
              impactful digital solutions that drive growth and enhance user
              engagement. Every project is a partnership, focused on achieving
              your strategic objectives with precision and creativity.
            </p>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-12 mb-5 gap-6">
            <div className=" hover:inset-shadow-sm hover:inset-shadow-blue-700  p-14 rounded cursor-pointer transition duration-400 ease-in hover:scale-100">
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl text-white font-semibold">
                  Partnership
                </h2>

                <p className="text-base sm:text-lg md:text-xl pt-6 text-white leading-6 sm:leading-7">
                  To build lasting partnerships by understanding client needs
                  and exceeding expectations.
                </p>
              </div>
            </div>
            <div className=" hover:inset-shadow-sm hover:inset-shadow-blue-700  p-14 rounded cursor-pointer transition duration-400 ease-in hover:scale-100">
              <div className="space-y-4">
                <h2 className="text-lg text-white font-semibold">Growth</h2>
                <p className="text-base sm:text-lg md:text-xl pt-6 text-white leading-6 sm:leading-7">
                  To foster growth for our clients, our team, and the digital
                  landscape as a whole.
                </p>
              </div>
            </div>
            <div className=" hover:inset-shadow-sm hover:inset-shadow-blue-700  p-14 rounded cursor-pointer transition duration-400 ease-in hover:scale-100 ">
              <div className="space-y-4">
                <h2 className="text-lg text-white font-semibold">Design</h2>
                <p className="text-base sm:text-lg md:text-xl pt-6 text-white leading-6 sm:leading-7">
                  Crafting beautiful interfaces that speak with clarity, move
                  with purpose, and feel like home.
                </p>
              </div>
            </div>
            <div className=" hover:inset-shadow-sm hover:inset-shadow-blue-700  p-14 rounded cursor-pointer transition duration-400 ease-in hover:scale-100  ">
              <div className="space-y-4">
                <h2 className="text-xl text-white font-semibold">Delivery</h2>
                <p className="text-base sm:text-lg md:text-xl pt-6 text-white leading-6 sm:leading-7">
                 Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-slate-950">
        <div className="w-full max-w-7xl mx-auto  px-6 py-10 ">
          <h2
            className=" text-xl
            sm:text-2xl
            md:text-xl
            lg:text-4xl
            font-serif
            leading-12
            text-blue-700
            "
          >
            Our Mission : Your Success
          </h2>
          <p className=" text-base sm:text-sm md:text-lg lg:text-xl text-white font-serif leading-7 tracking-widest w-tight px-6 py-6  ">
            Our core mission is to empower businesses through cutting-edge
            design and development. We believe in creating intuitive, impactful
            digital solutions that drive growth and enhance user engagement.
            Every project is a partnership, focused on achieving your strategic
            objectives with precision and creativity.
          </p>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center md:items-center gap-2 ">
            {/* hover:inset-shadow-sm hover:inset-shadow-blue-700 rounded
            cursor-pointer transition duration-400 ease-in hover:scale-100 */}
            {/* <div className="  flex  flex-col justify-center items-center w-full max-w-sm  px-5 space-y-4 ">
              <div className="w-full border-4 flex  flex-col justify-center items-center border-red-700  py-6 px-5 space-y-4">
                <h2 className=" text-lg font-semibold mt-6 text-white font-serif">
                  Partnership
                </h2>
                <p
                  className="text-base
                sm:text-sm
                md:text-lg
                border-4 px-6 py-5
                lg:text-xl
                text-white
                font-serif
                leading-7
                "
                >
                  To build lasting partnerships by understanding client needs
                  and exceeding expectations.
                </p>
              </div>
            </div>
            <div className="  flex  flex-col justify-center items-center  w-full max-w-sm py-6 px-5 space-y-4">
              <div className="w-full border-4 flex  flex-col justify-center items-center border-red-700  py-6 px-5 space-y-4">
                <h2 className=" text-lg font-semibold mt-6 text-white font-serif">
                  Growth
                </h2>
                <p
                  className="text-base
                sm:text-sm
                md:text-lg
                border-4 px-6 py-7
                lg:text-xl
                text-white
                font-serif
                leading-7
                "
                >
                  To foster growth for our clients, our team, and the digital
                  landscape as a whole.
                </p>
              </div>
            </div>
            <div className="  flex  flex-col justify-center items-center  w-full max-w-sm  px-5 space-y-4 py-6">
              <div className="w-full border-4 flex  flex-col justify-center items-center border-red-700  py-6 px-5 space-y-4">
                <h2 className=" text-lg font-semibold mt-6 text-white font-serif">
                  Design
                </h2>
                <p
                  className="text-base
                sm:text-sm
                md:text-lg
                border-4 px-6 py-5
                lg:text-xl
                text-white
                font-serif
                leading-7
                "
                >
                  Crafting beautiful interfaces that speak with clarity, move
                  with purpose, and feel like home.
                </p>
              </div>
            </div>
            <div className=" flex  flex-col justify-center items-center  w-full max-w-sm py-6 px-5 ">
              <div className="w-full border-4 flex  flex-col justify-center items-center border-red-700  py-6 px-5 space-y-4">
                <h2 className=" text-lg font-semibold mt-6 text-white font-serif">
                  Delivery
                </h2>
                <p
                  className="text-base
                sm:text-sm
                md:text-lg
                border-4 px-6 py-5
                lg:text-xl
                text-white
                font-serif
                leading-7
                "
                >
                  Bringing bold ideas and heartfelt visions to life—one pixel,
                  one paragraph, one emotion at a time
                </p>
              </div>
            </div> */}
            <div
              className=" w-full max-w-sm  mx-auto flex flex-col justify-center  hover:inset-shadow-sm hover:inset-shadow-red-500 rounded
            cursor-pointer transition duration-400 ease-in hover:scale-100 px-4 py-4
             
            "
            >
              <h2 className=" text-lg font-semibold mt-6 text-white font-serif text-center">
                Partnership
              </h2>
              <p
                className="text-base
                sm:text-sm
                md:text-lg
                 px-6 py-5
                lg:text-lg
                text-white
                font-serif
                leading-7
                text-center
                "
              >
                To build lasting partnerships by understanding client needs and
                exceeding expectations.
              </p>
            </div>
            <div
              className=" w-full max-w-sm  mx-auto flex flex-col justify-center  hover:inset-shadow-sm hover:inset-shadow-red-500 rounded
            cursor-pointer transition duration-400 ease-in hover:scale-100px-4 py-4
            
            "
            >
              <h2 className=" text-lg font-semibold mt-4 text-white font-serif text-center">
                Growth
              </h2>
              <p
                className="text-base
                sm:text-sm
                md:text-lg
                 px-6 py-5
                lg:text-lg
                text-white
                font-serif
                leading-7
                text-center
                "
              >
                To foster growth for our clients, our team, and the digital
                landscape as a whole. We believe in crafting solutions.
              </p>
            </div>
            <div
              className=" w-full max-w-sm  mx-auto flex flex-col justify-center  hover:inset-shadow-sm hover:inset-shadow-red-500 rounded
            cursor-pointer transition duration-400 ease-in hover:scale-100 px-4 py-4
           
            "
            >
              <h2 className=" text-lg font-semibold mt-6 text-white font-serif text-center">
                Design
              </h2>
              <p
                className="text-base
                sm:text-sm
                md:text-lg
                 px-6 py-5
                lg:text-lg
                text-white
                font-serif
                leading-7
                text-center
                "
              >
                Crafting beautiful interfaces that speak with clarity, move with
                purpose, and feel like home.
              </p>
            </div>
            <div
              className=" w-full max-w-sm  mx-auto flex flex-col justify-center  hover:inset-shadow-sm hover:inset-shadow-red-500 rounded
            cursor-pointer transition duration-400 ease-in hover:scale-100 px-4 py-4
           
            "
            >
              <h2 className=" text-lg font-semibold mt-6 text-white font-serif text-center">
                Delivery
              </h2>
              <p
                className="text-base
                sm:text-sm
                md:text-lg
                 px-6 py-5
                lg:text-lg
                text-white
                font-serif
                leading-7
                text-center
                "
              >
                Bringing bold ideas and heartfelt visions to life—one pixel, one
                paragraph, one emotion at a time
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-slate-950 p-12">
        <div className="w-full max-w-7xl mx-auto px-10 ">
          <h1 className="text-white mb-6">Our Core Values</h1>
          <div className="grid grid-cols-2 justify-center">
            <div className="px-8 py-9 rounded-xl space-y-4 hover:border-l-2 hover hover:border-blue-700">
              <h2 className="text-white">Client-Centric</h2>
              <p className="text-base sm:text-lg md:text-xl pt-6 text-white leading-6 sm:leading-7">
                Your success is our priority. We tailor solutions to your unique
                goals.
              </p>
            </div>
            <div className="px-8 py-9 rounded-xl space-y-4 hover:border-b-2 hover hover:border-blue-700">
              <h2 className="text-white">Excellence</h2>

              <p className="text-base sm:text-lg md:text-xl pt-6 text-white leading-6 sm:leading-7">
                We strive for perfection in every project, delivering top-tier
                quality.
              </p>
            </div>
            <div className="px-8 py-9 rounded-xl space-y-4 hover:border-t-2 hover hover:border-blue-700">
              <h2 className="text-white">Integrity</h2>
              <p className="text-base sm:text-lg md:text-xl pt-6 text-white leading-6 sm:leading-7">
                Honesty and transparency guide all our interactions and
                decisions.
              </p>
            </div>
            <div className="px-8 py-9 rounded-xl space-y-4 hover:border-r-2 hover hover:border-blue-700">
              <h2 className="text-white">Adaptability</h2>
              <p className="text-base sm:text-lg md:text-xl pt-6 text-white leading-6 sm:leading-7">
                We embrace change and continuously evolve with the digital
                world.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-slate-950">
        <div className="max-w-7xl w-full mx-auto  px-5 py-7 ">
          <h2
            className=" text-xl
            sm:text-2xl
            md:text-xl
            lg:text-4xl
            font-serif
            leading-12
            text-blue-700
            "
          >
            Our Core Values
          </h2>
          <div className="grid grid-cols-2 justify-center  px-4 py-6 gap-5">
            <div className=" border-t-2 border-b-2 hover border-blue-700 cursor-pointer rounded-xl space-y-4  px-4 py-4">
              <h2 className="text-white">Client-Centric</h2>
              <p className="text-base sm:text-lg md:text-xl  text-white leading-6 sm:leading-7">
                Your success is our priority. We tailor solutions to your unique
                goals.
              </p>
            </div>
            <div className=" border-t-2 border-b-2 border-blue-700 rounded-xl space-y-4  px-4 py-4">
              <h2 className="text-white">Client-Centric</h2>
              <p className="text-base sm:text-lg md:text-xl  text-white leading-6 sm:leading-7">
                Your success is our priority. We tailor solutions to your unique
                goals.
              </p>
            </div>
            <div className=" border-r-2  border-l-2 border-blue-700  hover hover:border-blue-700 rounded-xl space-y-4  px-4 py-4 cursor-pointer">
              <h2 className="text-white">Client-Centric</h2>
              <p className="text-base sm:text-lg md:text-xl  text-white leading-6 sm:leading-7">
                Your success is our priority. We tailor solutions to your unique
                goals.
              </p>
            </div>
            <div className=" border-r-2  border-l-2 border-blue-700 rounded-xl space-y-4  px-4 py-4">
              <h2 className="text-white">Client-Centric</h2>
              <p className="text-base sm:text-lg md:text-xl  text-white leading-6 sm:leading-7">
                Your success is our priority. We tailor solutions to your unique
                goals.
              </p>
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





 {
   /* <div className="min-h-screen bg-slate-950   ">
        <div className="grid w-full items-center  py-30">
          <h2 className="text-blue-700 font-semibold font-serif text-lg ml-4 sm:ml-10">
            About Blue Web Secure IT Solutions
          </h2>
          <div className="flex flex-col  sm:flex-row w-full px-12 py-10  justify-around ">
            <div className=" w-2xs sm:w-1/2 flex-col py-10 sm:py-15 px-20 sm:px-20 ">
              <p className="text-white leading-5 sm:leading-7 text-sm sm:text-lg">
                Blue Web Secure IT Solutions are dedicated to empowering
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
      </div> */
 }


     {
       /* <div className="min-h-screen bg-slate-950">
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
      </div> */
     }