import homeImage from "../assets/images/home.jpg";
// import bulb from "../assets/images/bulb.png"
import Client1 from "../assets/images/client-1.avif";
import Client2 from "../assets/images/client-2.jpg"
import Client3 from "../assets/images/client-3.jpg"
const Home = ()=>{
    return (
      <>
        <div className="signin flex flex-col sm:flex-row justify-between items-center  w-full h-screen px-0.5 sm:px-16 ">
          <div className=" space-y-5 px-4 sm:px-10 sm:pl-20 sm:pr-10 w-full sm:w-1/2">
            <h1 className="text-3xl sm:text-6xl font-bold text-white ">
              Welcome to Our World
            </h1>
            <p className=" text-md sm:text-lg font-semibold ">
              Discover innovative solutions designed to elevate your experience.
            </p>
            <span className="text-2xl sm:text-4xl font-bold text-white">
              Your Partner in Digital Transformation
            </span>
            <p className="text-sm sm:text-lg mt-6 font-medium">
              Empowering businesses with cutting-edge IT solutions and services.
            </p>
            <div>
              <button className="border-2 p-3 rounded-md m-3 w-35 sm:w-40 text-white  text-lg font-semibold bg-[#850aa1] border-purple-600 hover:bg-transparent cursor-pointer">
                Learn More
              </button>

              <button className="border-2 p-3 rounded-md w-30  sm:w-40 text-white bg-transparent font-semibold text-lg  border-purple-600 hover:bg-[#850aa1]">
                Contact Us
              </button>
            </div>
          </div>
          <div className="  mr-6 sm:ml-50 mb-10 w-1/2 sm:size-80">
            <img
              src={homeImage}
              className="rounded-lg shadow-blue-500 shadow-2xl"
            />
          </div>
        </div>

        <div className="vision-section w-full min-h-screen px-4 py-16 ">
          <div className="vision-container bg-cyan-200 w-6xl p-40 rounded-4xl hover:bg-cyan-400">
            <div className="space-y-10">
              <h1 className=" text-cyan-700  text-5xl font-semibold">
                Our Vision
              </h1>
              <p className="text-lg tracking-wider leading-normal">
                We envision a future where technology seamlessly integrates with
                daily life, simplifying complex tasks and fostering greater
                connection. Our commitment is to build intuitive and powerful
                tools that empower individuals and businesses alike.
              </p>
            </div>
          </div>
        </div>
        <div className="offer-section w-full min-h-screen bg-pink-50 py-30 ">
          <div className="space-y-14">
            <h1 className="ml-20 mt-14 text-[#ff33be] text-3xl ">
              What We Offer
            </h1>

            <div className="flex ml-[80px]">
              <div className="flex border-none w-1/4  h-1/5 rounded-lg p-10 ml-10 hover:border-pink-300 hover:shadow-pink-300 hover:border-4 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div>
                  <i className="bx bx-bulb text-2xl text-pink-400"></i>
                </div>

                <div className="ml-6 py-5">
                  <h1 className="text-pink-400 text-2xl font-semibold mt-4">
                    Innovative Solutions
                  </h1>
                  <p className="mt-6 text-xl leading-6 font-serif">
                    Innovative Solutions Cutting-edge products designed to meet
                    your evolving needs and challenges.
                  </p>
                </div>
              </div>
              <div className="flex border-none w-1/4  h-1/5 rounded-lg p-10 ml-10 hover:border-pink-300 hover:shadow-pink-300 hover:border-4 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105">
                <div>
                  <i className="bx bxs-user text-2xl text-pink-400"></i>
                </div>

                <div className="ml-6">
                  <h1 className="text-pink-400 text-2xl font-semibold mt-4">
                    Reliable Performance
                  </h1>
                  <p className="mt-6 text-xl leading-6 font-serif">
                    Built for enduring stability and smart security, our systems
                    guarantee reliable performance across any scale.
                  </p>
                </div>
              </div>
              <div className="flex border-none w-1/4  h-1/5 rounded-lg p-10 ml-10 hover:border-pink-300 hover:shadow-pink-300 hover:border-4 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div>
                  <i className="bx bx-shield text-2xl text-pink-400"></i>
                </div>

                <div className="ml-6 py-5">
                  <h1 className="text-pink-400 text-2xl font-semibold mt-8">
                    User-Centric Design
                  </h1>
                  <p className="mt-6 text-xl leading-6 font-serif">
                    User-centric design experiences thoughtfully crafted to
                    prioritize your comfort, simplify your interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="process-section w-full min-h-screen bg-[#e16fd2]">
          <h1 className="text-4xl font-semibold py-20 ml-20 ">Our Process</h1>
          <div className="grid grid-cols-2 justify-items-center gap-6">
            <div className="w-full max-w-md px-10 py-12   rounded hover:border border-slate-400 hover:shadow-xl hover: shadow-cyan-950 hover:scale-105 transition-all 0.5s ease-in-out">
              <span className="w-full h-7 bg-[#f9cdf3]    block mb-4 rounded-full"></span>
              <h3 className="text-xl font-semibold mt-6">Discovery</h3>
              <p className="text-md mt-4">
                Understanding your unique requirements and objectives.
              </p>
            </div>
            <div className="w-full max-w-md px-10 py-10 hover:border border-slate-400 hover:shadow-xl hover: shadow-cyan-950 hover:scale-105 transition-all 0.5s ease-in-out ">
              <span className="w-full h-7 bg-[#f9cdf3]    block mb-4 rounded-full"></span>
              <h3 className="text-xl font-semibold mt-4">Development</h3>
              <p className="text-md mt-4">
                Bringing concepts to life with precision and expertise.
              </p>
            </div>
            <div className="w-full max-w-md px-10 py-10 hover:border border-slate-400 hover:shadow-xl hover: shadow-cyan-950 hover:scale-105 transition-all 0.5s ease-in-out ">
              <span className="w-full h-7 bg-[#f9cdf3]    block mb-4 rounded-full"></span>
              <h3 className="text-xl font-semibold mt-4">Design</h3>
              <p className="text-md mt-4">
                Crafting intuitive and effective solutions tailored for you.
              </p>
            </div>
            <div className="w-full max-w-md px-10 py-10 hover:border border-slate-400 hover:shadow-xl hover: shadow-cyan-950 hover:scale-105 transition-all 0.5s ease-in-out ">
              <span className="w-full h-7 bg-[#f9cdf3]    block mb-4 rounded-full"></span>
              <h3 className="text-xl font-semibold mt-4">Deployment</h3>
              <p className="text-md mt-4">
                Seamless integration and launch of your new solution.
              </p>
            </div>
          </div>
        </div>
        <div className="choose-section signin ">
          <div className="choose-container bg-cyan-200 w-5xl p-20 rounded-4xl hover:bg-cyan-400">
            <div className="space-y-10">
              <h1 className=" text-cyan-700  text-5xl font-semibold">
                Why Choose Us?
              </h1>
              <div className="grid grid-cols-2 grid-place-items-center ">
                <div>
                  <p className="text-lg tracking-wider leading-normal">
                    We envision a future where technology seamlessly integrates
                    with daily life, simplifying complex tasks and fostering
                    greater connection. Our commitment is to build intuitive and
                    powerful tools that empower individuals and businesses
                    alike.
                  </p>
                </div>
                <div className="space-y-5 ml-20">
                  <li className="text-lg font-serif font-semibold">
                    Expert Team
                  </li>
                  <li className="text-lg font-serif font-semibold">
                    Proven Track Record
                  </li>
                  <li className="text-lg font-serif font-semibold">
                    Customer Satisfaction
                  </li>
                  <li className="text-lg font-serif font-semibold">
                    Continuous Innovation
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="client-section w-full min-h-screen bg-[#ffece7] py-20">
          <div className="space-y-5">
            <h1 className="text-4xl ml-10 text-[#fb33c0] font-serif">
              Client Success Stories
            </h1>
          </div>
          <div className="flex justify-center items-center gap-x-10 p-10">
            <div>
              <img
                src={Client1}
                className="w-full max-w-md rounded-2x cursor-pointer hover:rounded-full "
              />
            </div>
            <div>
              <img
                src={Client2}
                className="w-full max-w-md rounded-2xl hover:rounded-full "
              />
            </div>
          </div>
          <div>
            <img
              src={Client3}
              className="w-[59rem] h-60 rounded-2xl hover:rounded-full ml-70"
            />
          </div>
          <p className="text-md font-sans mt-10 text-center tracking-wider [word-spacing:0.1em]">
            Our clients consistently achieve their goals with our support. We
            pride ourselves on building strong, lasting partnerships that drive
            mutual success and growth.
          </p>
        </div>
        <div className="w-full bg-[#f6a1e4] h-screen mt-5 p-20 grid place-items-center place-content-center">
          <div
            className="bg-pink-500 
          w-[50rem] h-[30rem] p-30 space-y-20 rounded-3xl ml-7 grid place-content-center place-items-center shadow-2xl shadow-pink-800"
          >
            <h1 className="text-4xl font-semibold">Our Commitment to Quality</h1>
            <div className="flex space-x-12">
              <span className="w-0.5 bg-black block h-20 "></span>

              <h3 className="mt-6 text-2xl">"Quality is not an act, it is a habit."</h3>
            </div>

            <p className="text-md space-x-3 tracking-wide leading-5">
              We adhere to the highest standards in every aspect of our work,
              from initial concept to final delivery. Our rigorous quality
              assurance processes ensure that every solution we provide is
              reliable, efficient, and exceeds expectations.
            </p>
          </div>
        </div>
      </>
    );
}

export default Home;