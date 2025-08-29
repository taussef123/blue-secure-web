import homeImage from "../assets/images/recenthome.jpg";
// import bulb from "../assets/images/bulb.png"
import Client1 from "../assets/images/client-1.avif";import Client2 from "../assets/images/client-2.jpg";
import Client3 from "../assets/images/client-3.jpg";
import Client4 from "../assets/images/client4.avif"
import ItPic from "../assets/images/blue.jpg";
const Home = ()=>{
    return (
      <>
        <div className="bg-slate-950">
          <div className="w-full  max-w-7xl mx-auto py-15 px-20   flex flex-col  lg:flex-row justify-between items-center ">
            <div className="left  py-12 px-10  flex flex-col  space-y-10">
              <h2 className=" text-xl sm:text-2xl md :text-xl lg:text-4xl font-serif leading-12 text-blue-700">
                Power Your Business with Cutting-Edge IT Solutions.
              </h2>
              <p className=" text-base sm:text-sm md:text-lg text-white font-serif leading-8 tracking-widest w-tight">
                Cloud, Websites, Software, and Security — All Under One Roof.
              </p>
              <div className="space-x-4 flex p-2">
                <button className="text-black px-6 py-3 bg-amber-100 rounded-xl  text-base sm:text-lg md:text-xl whitespace-nowrap  font-semibold font-serif hover:bg-white transition duration-300 ">
                  Learn More
                </button>

                <button className="text-white  px-6 py-3 bg-blue-700 rounded-xl text-base sm:text-lg md:text-xl whitespace-nowrap font-semibold font-serif hover:bg-blue-800 hover:cursor-pointer transition duration-200">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="right  py-10 px-6">
              <div className="img w-xs">
                <img
                  src={homeImage}
                  className="rounded-lg w-2xs sm:w-full  hover:drop-shadow-xl hover:drop-shadow-red-500 cursor-pointer hover:transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-950">
          <div className=" w-full max-w-7xl mx-auto px-20 py-20 ">
            <h2 className=" text-xl sm:text-2xl md :text-xl lg:text-4xl font-serif leading-5 text-blue-700">
              Our Process
            </h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   justify-center items-center px-14 py-12 gap-10">
              <div
                className="rounded-xl 
               px-4 py-14 space-y-8  hover:shadow-2xl hover: shadow-blue-600  
              hover:scale-110 
              transition-all duration-500 cursor-pointer hover: inset-shadow-blue-600"
              >
                <span className="w-full h-3 bg-blue-700    block  rounded-full"></span>
                <h2 className="  font-semibold mt-6 text-white font-serif">
                  Discovery
                </h2>
                <p className=" text-sm  mt-1 text-white font-serif">
                  Understanding your unique requirements and objectives.
                </p>
              </div>
              <div
                className="rounded-xl 
               px-4 py-14 space-y-8  hover:shadow-2xl hover: shadow-blue-600  
              hover:scale-110 
              transition-all duration-500 cursor-pointer "
              >
                <span className="w-full h-3 bg-blue-700    block  rounded-full"></span>
                <h2 className=" text-lg font-semibold mt-6 text-white font-serif">
                  Development
                </h2>
                <p className=" text-sm  mt-1 text-white font-serif">
                  Bringing concepts to life with precision and expertise.
                </p>
              </div>
              <div
                className="rounded-xl 
               px-4 py-14 space-y-8  hover:shadow-2xl hover: shadow-blue-600  
              hover:scale-110 
              transition-all duration-500 cursor-pointer "
              >
                <span className="w-full h-3 bg-blue-700    block  rounded-full"></span>
                <h2 className=" text-lg font-semibold mt-6 text-white font-serif">
                  Design
                </h2>
                <p className="text-sm  mt-1 text-white font-serif leading-6">
                  Crafting intuitive and effective solutions tailored.
                </p>
              </div>
              <div
                className="rounded-xl 
               px-4 py-14 space-y-8  hover:shadow-2xl hover: shadow-blue-600  
              hover:scale-105 
              transition-all duration-500 cursor-pointer "
              >
                <span className="w-full h-3 bg-blue-700    block  rounded-full"></span>
                <h2 className=" text-lg font-semibold font-serif mt-6 text-white">
                  Deployment
                </h2>
                <p className=" text-sm  mt-1 text-white">
                  Seamless integration and launch of your new solution.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-950 px-10">
          <div className="w-full max-w-7xl mx-auto  px-12 py-10">
            <h2 className="text-xl sm:text-2xl md :text-xl lg:text-4xl font-serif leading-5 text-blue-700">
              What We Offer
            </h2>
            <div className="  grid grid-cols-1 md:grid-cols-3  justify-center items-center px-8 py-12 gap-6 ">
              <div className="  px-12 py-13 rounded-3xl space-y-10 hover:shadow-lg hover:shadow-red-600 cursor-pointer transition-shadow duration-300 ease-in-out">
                <i className="bx bx-bulb text-2xl  text-blue-800"></i>
                <h2 className="text-xl sm:text-2xl md :text-xl font-serif leading-8 text-blue-700 ">
                  Innovative Solutions
                </h2>
                <p className="text-base sm:text-sm md:text-lg text-white font-serif leading-6">
                  Innovative Solutions Cutting-edge products designed to meet
                  your evolving needs and challenges.
                </p>
              </div>
              <div className="  px-12 py-10 rounded-3xl space-y-10 hover:shadow-lg hover:shadow-red-600 cursor-pointer transition-shadow duration-300 ease-in-out">
                <i className="bx bxs-user text-2xl text-blue-800"></i>
                <h2 className="text-xl sm:text-2xl md :text-xl font-serif leading-8 text-blue-700 ">
                  Reliable Performance
                </h2>
                <p className="text-base sm:text-sm md:text-lg text-white font-serif leading-6">
                  Built for enduring stability and smart security, our systems
                  guarantee reliable performance across any scale.
                </p>
              </div>
              <div className="  px-12 py-10 rounded-3xl space-y-10 hover:shadow-lg hover:shadow-red-600 cursor-pointer transition-shadow duration-300 ease-in-out">
                <i className="bx bx-shield text-2xl  text-blue-800"></i>
                <h2 className="text-xl sm:text-2xl md :text-xl font-serif leading-8 text-blue-700 ">
                  User-Centric Design
                </h2>
                <p className="text-base sm:text-sm md:text-lg text-white font-serif leading-6">
                  User-centric design experiences thoughtfully crafted to
                  prioritize your comfort, simplify your interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-950">
          <div className="w-full max-w-7xl mx-auto  px-14 py-20">
            <h2 className="text-xl sm:text-2xl md:text-xl lg:text-4xl font-serif leading-12 text-blue-700">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6 px-4 sm:px-6 md:px-10">
              <div
                className="left w-full  px-7 py-10
               rounded-2xl "
              >
                <p className="text-base sm:text-sm md:text-md  lg:text-lg text-white font-serif leading-10 tracking-wider  ">
                  We envision a future where technology seamlessly integrates
                  with daily life, simplifying complex tasks and fostering
                  greater connection. Our commitment is to build intuitive and
                  powerful tools that empower individuals and businesses alike.
                  <br></br>
                  We believe that technology should feel like second nature —
                  quietly powerful, effortlessly helpful. By designing
                  experiences that anticipate real-world needs, we aim to bridge
                  the gap between complexity and clarity, making every
                  interaction feel intuitive and meaningful.
                </p>
              </div>
              <div className="right text-white  space-y-5 flex flex-col items-center">
                <div className="w-full max-w-md mx-auto px-4 py-6 sm:px-6 sm:py-10 border-2 border-blue-700 rounded-2xl  hover:shadow-lg hover:shadow-blue-600 cursor-pointer transition-shadow duration-300 ease-in-out">
                  <p className=" text-md sm:text-lg font-serif font-semibold text-center ">
                    Expert Team
                  </p>
                </div>
                <div className="w-full max-w-md mx-auto px-4 py-6 sm:px-6 sm:py-10 border-2  hover:shadow-lg hover:shadow-blue-600 cursor-pointer transition-shadow duration-300 ease-in-out border-blue-700 rounded-2xl">
                  <p className=" text-md sm:text-lg font-serif font-semibold  text-center">
                    Proven Track Record
                  </p>
                </div>
                <div className="w-full max-w-md mx-auto px-4 py-6 sm:px-6 sm:py-10 border-2  hover:shadow-lg hover:shadow-blue-600 cursor-pointer transition-shadow duration-300 ease-in-out border-blue-700 rounded-2xl">
                  <p className=" text-md sm:text-lg font-serif font-semibold text-center">
                    Customer Satisfaction
                  </p>
                </div>
                <div className="w-full max-w-md mx-auto px-4 py-6 sm:px-6 sm:py-10 border-2 hover:shadow-lg hover:shadow-blue-600 cursor-pointer transition-shadow duration-300 ease-in-out border-blue-700 rounded-2xl">
                  <p className=" text-md sm:text-lg font-serif font-semibold text-center">
                    Continuous Innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-950">
          <div className="max-w-7xl mx-auto px-10 py-10">
            <h2 className=" text-xl sm:text-2xl md :text-xl lg:text-4xl font-serif leading-12 text-blue-700">
              Client Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-3 space-y-3   lg:grid-cols-4 mt-6">
              <div className="w-full max-w-xs mx-auto">
                <img
                  src={Client1}
                  className=" w-full rounded-2xl   hover:drop-shadow-xl hover:drop-shadow-red-600 cursor-pointer hover:transition duration-300"
                />
              </div>
              <div className="w-full max-w-xs mx-auto">
                <img
                  src={Client2}
                  className=" w-full rounded-2xl   hover:drop-shadow-xl hover:drop-shadow-red-600 cursor-pointer hover:transition duration-300"
                />
              </div>
              <div className="w-full max-w-xs mx-auto">
                <img
                  src={Client3}
                  className=" w-full rounded-2xl   hover:drop-shadow-xl hover:drop-shadow-red-600 cursor-pointer hover:transition duration-300"
                />
              </div>
              <div className="w-full max-w-xs mx-auto">
                <img
                  src={Client4}
                  className=" w-full rounded-2xl   hover:drop-shadow-xl hover:drop-shadow-red-600 cursor-pointer hover:transition duration-300"
                />
              </div>
            </div>
            <div className="w-full  px-6 py-6">
              <p className="text-base sm:text-sm md:text-lg text-white font-serif leading-7 sm:leading-8 tracking-widest w-tight  mx-auto">
                Our clients consistently achieve their goals with our support.
                We pride ourselves on building strong, lasting partnerships that
                drive mutual success and growth.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-950">
          <div className=" w-full max-w-7xl mx-auto px-8 py-8 ">
            <h2 className=" text-xl sm:text-2xl md :text-xl lg:text-4xl font-serif leading-12 text-blue-700 mb-6">
              Our Commitment to Quality
            </h2>
            <div className="flex w-full max-w-3xl  items-center hover:shadow-md hover shadow-blue-600 border-t-2 border-blue-700 border-b-2 px-6 py-10 gap-x-8 mb-6 md:justify-center lg:justify-normal mx-auto rounded-2xl transition-all duration-300 ease-in-out">
              <span className="w-2 rounded-xl bg-blue-700 block h-30 mt-4"></span>

              <h3 className=" text-xl sm:text-2xl md :text-xl lg:text-3xl font-serif leading-12 text-white">
                Quality is not an act, it is a habit.
              </h3>
            </div>
            <div className="w-full max-w-3xl mx-auto  px-6 py-6">
              <p className=" text-base sm:text-sm md:text-lg text-white font-serif leading-7 tracking-widest w-tight">
                We adhere to the highest standards in every aspect of our work,
                from initial concept to final delivery. Our rigorous quality
                assurance processes ensure that every solution we provide is
                reliable, efficient, and exceeds expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-slate-950">
          <div className=" w-full max-w-7xl mx-auto  px-6 py-12  ">
            <h2 className=" text-xl sm:text-2xl md :text-xl lg:text-4xl font-serif leading-12 text-blue-700 mb-6">
              Stay Connected
            </h2>
            <p className=" text-base sm:text-sm md:text-lg text-white font-serif leading-7 tracking-widest w-tight px-6 py-6">
              Follow us on social media to get the latest updates, insights, and
              news from our team. Join our community and be part of the
              conversation.
            </p>
            <div className="flex flex-wrap gap-5 p-4 mt-10 ml-5 sm:ml-0  px-2 py-4 ">
              <button className="btn ">
                <i className="bx bxl-twitter text-3xl sm:text-4xl md:text-5xl "></i>
              </button>
              <button className="btn ">
                <i className="bx bxl-linkedin text-3xl sm:text-4xl md:text-5xl "></i>
              </button>
              <button className="btn ">
                <i className="bx bxl-facebook-circle  text-3xl sm:text-4xl  md:text-5xl "></i>
              </button>
              <button className="btn">
                <i className="bx bxl-instagram   text-3xl sm:text-4xl md:text-5xl"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-slate-950">
          <div className=" w-full max-w-7xl mx-auto  px-5 py-5">
            <h2 className=" text-xl sm:text-2xl md :text-xl lg:text-4xl font-serif leading-12 text-blue-700 mb-2">
              Frequently Asked Question
            </h2>
            <div className=" w-full max-w-4xl px-4 py-9 mx-auto ">
              <div className="border-r-4 border-l-4 border-blue-700 px-7 py-7  rounded-xl flex flex-col  space-y-4 m-5  hover:shadow-lg hover:shadow-blue-600 cursor-pointer transition-shadow duration-300 ease-in-out hover:border-t-2">
                <h3 className="text-xl text-white font-bold">
                  How can I get started?
                </h3>
                <p className=" sm:text-sm md:text-md   text-white font-serif leading-6 tracking-wider">
                  Simply reach out to our team through the contact form or give
                  us a call. We'll guide you through the initial consultation
                  and planning stages.
                </p>
              </div>
              <div className=" px-7 py-7  rounded-xl flex flex-col border-l-4 border-r-4 border-blue-700  m-5 space-y-4 hover:shadow-lg hover:shadow-blue-600 cursor-pointer transition-shadow duration-300 ease-in-out hover:border-t-2 ">
                <h3 className="text-xl text-white font-bold">
                  What is your support policy?
                </h3>
                <p className=" sm:text-sm md:text-md   text-white font-serif leading-6 tracking-wider">
                  We offer comprehensive support packages tailored to your
                  needs, ensuring you always have assistance whenever you need
                  it—whether you're launching a new project.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-950  px-7 py-8 ">
          <div className="max-w-7xl mx-auto  ">
            <div className="left flex flex-col sm:flex-row">
              <div className="max-w-xl w-full   px-6 py-6">
                <img src={ItPic} className="w-xs" />
              </div>
              <div className="right space-y-8  px-7 py-4">
                <h2 className=" text-xl sm:text-2xl md :text-xl lg:text-4xl font-serif leading-12 text-blue-700">
                  Ready to Transform?
                </h2>
                <p className=" text-base sm:text-sm md:text-lg text-white font-serif leading-6 tracking-wider w-tight">
                  Take the first step towards achieving your goals. Contact us
                  today to discuss your project and discover how we can help you
                  succeed.
                </p>
                <button className=" bg-blue-600 px-8 py-5 rounded-xl font-semibold text-white text-lg">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="last-section w-full bg-slate-400 ">
          <div className="w-full  min-h-[40rem]  bg-slate-600 flex items-center ">
            <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center bg-slate-800 py-30 px-25 ">
              <div className="left ">
                <img
                  src={ItPic}
                  className="w-xs
                sm:max-w-xl ml-2 sm:ml-0 "
                />
              </div>
              <div className="right space-y-8">
                <h1 className="ml-1 mt-6  text-xl sm:text-2xl text-blue-700 font-bold tracking-wider">
                  Ready to Transform?
                </h1>
                <p className=" text-md text-white leading-6">
                  Take the first step towards achieving your goals. Contact us
                  today to discuss your project and discover how we can help you
                  succeed.
                </p>
                <button className="bg-blue-600 px-6 py-6 text-white font-semibold rounded hover:bg-blue-700 transition all duration-500 ease-in-out">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
}

export default Home;















  {
    /* <div className="w-full min-h-screen">
          <div className="flex w-full flex-col justify-center items-center space-y-12 min-h-screen bg-slate-400 h-full p-10 sm:p-20">
            <div className=" w-full max-w-screen px-4 py-6 sm:pt-[116px] sm:pb-[90px] overflow-hidden ">
              <h1 className="   text-xl sm:text-4xl font-bold font-serif text-pink-300">
                Stay Connected
              </h1>
              <p className=" text-lg sm:text-2xl leading-relaxed tracking-tight text-white pt-10">
                Follow us on social media to get the latest updates, insights,
                and news from our team. Join our community and be part of the
                conversation.
              </p>
              <div className="flex flex-wrap gap-4 p-4  ">
                <button className="btn ">
                  <i className="bx bxl-twitter text-3xl sm:text-4xl md:text-5xl "></i>
                </button>
                <button className="btn ">
                  <i className="bx bxl-linkedin text-3xl sm:text-4xl md:text-5xl "></i>
                </button>
                <button className="btn ">
                  <i className="bx bxl-facebook-circle  text-3xl sm:text-4xl  md:text-5xl "></i>
                </button>
                <button className="btn">
                  <i className="bx bxl-instagram   text-3xl sm:text-4xl md:text-5xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div> */
  }






  {
    /* <div className="  w-full bg-[#f6a1e4] h-screen mt-5 p-20 grid place-items-center place-content-center">
          <div
            className="bg-pink-500 
        w-[25rem] sm:w-[50rem] sm: h-[30rem] p-10 sm:p-30 space-y-20 rounded-3xl sm:ml-7 ml-2 grid pt-4 place-content-center place-items-center shadow-2xl shadow-pink-800"
          >
            <h1 className="text-4xl font-semibold">
              Our Commitment to Quality
            </h1>
            <div className="flex space-x-12">
              <span className="w-0.5 bg-black block h-20 "></span>

              <h3 className="mt-6 text-2xl">
                "Quality is not an act, it is a habit."
              </h3>
            </div>

            <p className="text-md space-x-3 tracking-wide leading-5 ">
              We adhere to the highest standards in every aspect of our work,
              from initial concept to final delivery. Our rigorous quality
              assurance processes ensure that every solution we provide is
              reliable, efficient, and exceeds expectations.
            </p>
          </div>
        </div> */
  }



    {
      /* <div className="client-section w-full min-h-screen bg-[#ffece7] py-10 ">
          <div className=" space-y-2 sm:space-y-5 w-sm sm:w-6xl p-20 sm:p-40 rounded-4xl">
            <h1 className=" text-xl sm:text-4xl ml-10 text-[#fb33c0] font-serif">
              Client Success Stories
            </h1>
          </div>
          <div className="flex justify-center items-center gap-x-5 sm:gap-x-12 p-9 sm:p-10 ">
            <div className="images flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
              <div>
                <img
                  src={Client1}
                  className=" w-full max-w-md rounded-2xl cursor-pointer hover:rounded-full  "
                />
              </div>
              <div>
                <img
                  src={Client2}
                  className="w-full max-w-md rounded-2xl hover:rounded-full  "
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:max-w-3xl mx-auto px-4">
            <p className=" text-md sm:text-lg font-sans mt-10 text-center  tracking-wide sm:tracking-wider leading-relaxed  mr-5 ">
              Our clients consistently achieve their goals with our support. We
              pride ourselves on building strong, lasting partnerships that
              drive mutual success and growth.
            </p>
          </div>
        </div> */
    }



        //  <div className="process-section w-full min-h-screen bg-slate-400">
        //    <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-semibold   p-20 text-white">
        //      Our Process
        //    </h1>
        //    <div className=" sm: flex flex-col md:grid grid-cols-2 justify-items-center gap-6 p-10 ">
        //      <div className="w-full max-w-md px-10 py-12   rounded hover:border border-slate-400 hover:shadow-xl hover: shadow-cyan-950 hover:scale-105 transition-all 0.5s ease-in-out ">
        //        <span className="w-full h-7 bg-[#e9bae3]    block mb-4 rounded-full"></span>
        //        <h3 className=" sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6">
        //          Discovery
        //        </h3>
        //        <p className=" sm:text-md  md:text-lg lg:text-xl mt-4">
        //          Understanding your unique requirements and objectives.
        //        </p>
        //      </div>
        //      <div className="w-full max-w-md px-10 py-10 hover:border hover:shadow-xl hover: shadow-cyan-950 hover:scale-105 transition-all 0.5s ease-in-out  ">
        //        <span className="w-full h-7  bg-[#e9bae3]     block mb-4 rounded-full"></span>
        //        <h3 className="sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-4">
        //          Development
        //        </h3>
        //        <p className="sm:text-md  md:text-lg lg:text-xl mt-4">
        //          Bringing concepts to life with precision and expertise.
        //        </p>
        //      </div>
        //      <div className="w-full max-w-md px-10 py-10 hover:border hover:shadow-xl hover: shadow-cyan-950 hover:scale-105 transition-all 0.5s ease-in-out  ">
        //        <span className="w-full h-7  bg-[#e9bae3]     block mb-4 rounded-full"></span>
        //        <h3 className="sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-4">
        //          Design
        //        </h3>
        //        <p className="sm:text-md  md:text-lg lg:text-xl mt-4">
        //          Crafting intuitive and effective solutions tailored for you.
        //        </p>
        //      </div>
        //      <div className="w-full max-w-md px-10 py-10 hover:border hover:shadow-xl hover: shadow-cyan-950 hover:scale-105 transition-all 0.5s ease-in-out ">
        //        <span className="w-full h-7 bg-[#e9bae3]    block mb-4 rounded-full"></span>
        //        <h3 className="sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-4">
        //          Deployment
        //        </h3>
        //        <p className="sm:text-md  md:text-lg lg:text-xl mt-4 ">
        //          Seamless integration and launch of your new solution.
        //        </p>
        //      </div>
        //    </div>
        //  </div>; 




        {
          /* <div className="offer-section w-full min-h-screen bg-slate-400 py-30   ">
          <div className="space-y-14">
            <h1 className="ml-20 mt-14 text-[#ff33be] text-3xl ">
              What We Offer
            </h1>

            <div className="  flex flex-col sm:flex-row  sm:space-x-10 space-y-10 sm:space-y-0  mr-10 p-20 ">
              <div className="flex  flex-col items-starts  sm:w-1/3 rounded-lg p-6 hover:border-pink-300 hover:shadow-pink-400 hover:border-4 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
                <div className=" p-2">
                  <i className="bx bx-bulb text-2xl text-pink-400"></i>
                </div>

                <div className="ml-10 py-6  pr-2">
                  <h2 className="text-pink-400 text-xl md:text-2xl font-semibold mt-20">
                    Innovative Solutions
                  </h2>
                  <p className="mt-6 text-sm md:text-md lg:text-lg leading-6 font-serif">
                    Innovative Solutions Cutting-edge products designed to meet
                    your evolving needs and challenges.
                  </p>
                </div>
              </div>
              <div className="flex  flex-col items-start   sm:w-1/3 rounded-lg p-6 hover:border-pink-300 hover:shadow-pink-400 hover:border-4 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
                <div className="py-10  p-4 mr-[5px]">
                  <i className="bx bxs-user text-2xl text-pink-400"></i>
                </div>

                <div className="ml-6 py-10  ">
                  <h2 className="text-pink-400 text-xl sm:text-2xl  font-semibold mt-4">
                    Reliable Performance
                  </h2>
                  <p className="mt-6 text-sm md:text-md lg:text-lg leading-6 font-serif">
                    Built for enduring stability and smart security, our systems
                    guarantee reliable performance across any scale.
                  </p>
                </div>
              </div>
              <div className="flex  flex-col items-start   sm:w-1/3 leading-6 sm:leading-5">
                <div className=" mb-20">
                  <i className="bx bx-shield text-2xl p-2 text-pink-400"></i>
                </div>

                <div className="ml-6  py-10 pr-6">
                  <h2 className="text-pink-400 text-xl sm:text-2xl  lg:text-lg  font-semibold ">
                    User-Centric Design
                  </h2>
                  <p className="mt-6 text-lg sm:text-xl leading-6 font-serif">
                    User-centric design experiences thoughtfully crafted to
                    prioritize your comfort, simplify your interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */
        }


           {
             /* <div className=" w-full h-screen flex items-center justify-center bg-slate-600 mt-2 ">
          <div className="w-5xl  p-9 sm:p-10 bg-slate-700  rounded-xl sm:rounded-3xl hover:shadow-2xl hover shadow-blue-600 border-t-4 border-blue-700 border-b-4 ">
            <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-serif  mb-1 sm:mb-5   text-white">
              Our Process
            </h1>
            <div className=" sm: flex flex-col md:grid grid-cols-2 justify-items-center gap-6  ">
              <div className="w-sm  px-10 py-10   rounded hover:shadow-2xl hover: shadow-blue-600  hover:scale-105 transition-all 0.5s ease-in-out  ">
                <span className="w-full h-4 bg-blue-700    block  rounded-full"></span>
                <h3 className=" sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 text-white">
                  Discovery
                </h3>
                <p className=" sm:text-md  md:text-lg lg:text-xl  mt-1 text-white">
                  Understanding your unique requirements and objectives.
                </p>
              </div>
              <div className="w-sm  px-10 py-10    hover:border hover:shadow-2xl hover: shadow-blue-600  hover:scale-105 transition-all 0.5s ease-in-out  ">
                <span className="w-sm h-4  bg-blue-700    block mb-2 rounded-full"></span>
                <h3 className="sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-4 text-white">
                  Development
                </h3>
                <p className="sm:text-md  md:text-lg lg:text-xl mt-2 text-white">
                  Bringing concepts to life with precision and expertise.
                </p>
              </div>
              <div className="w-sm  px-10 py-10    hover:border hover:shadow-2xl hover: shadow-blue-600  hover:scale-105 transition-all 0.5s ease-in-out  ">
                <span className="w-sm h-4  bg-blue-700  block mb-2 rounded-full"></span>
                <h3 className="sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2 text-white">
                  Design
                </h3>
                <p className="sm:text-md  md:text-lg lg:text-xl mt-2 text-white">
                  Crafting intuitive and effective solutions tailored for you.
                </p>
              </div>
              <div className="w-sm  px-10 py-10    hover:border hover:shadow-2xl hover: shadow-blue-600  hover:scale-105 transition-all 0.5s ease-in-out ">
                <span className="w-full h-7 bg-blue-700    block mb-2 rounded-full"></span>
                <h3 className="sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2 text-white">
                  Deployment
                </h3>
                <p className="sm:text-md  md:text-lg lg:text-xl mt-2 text-white ">
                  Seamless integration and launch of your new solution.
                </p>
              </div>
            </div>
          </div>
        </div> */
           }




            {
              /* <div className=" flex flex-col  md:grid md:grid-cols-1 lg:grid-cols-2 place-content-center place-items-center relative  w-full min-h-screen   bg-slate-400 ">
          <div className="   w-full max-w-xl p-5 ">
            <h1 className="text-lg  mr-2 mt-4 md:text-3xl lg:text-4xl font-bold text-white p-10">
              Power Your Business with Cutting-Edge IT Solutions
            </h1>
            <p className=" text-sm  md:text-md lg:text-lg font-semibold   my-2">
              Cloud, Websites, Software, and Security — All Under One Roof.
            </p>

            <div className="flex flex-wrap justify-center w-full  p-4 gap-4">
              <button className="border-2 border-blue-700 px-6 py-3  text-blue-700  text-md  md:text-lg font-semibold bg-transparent cursor-pointer p-4 rounded-2xl hover:bg-blue-700 hover:text-white transition duration-200">
                Learn More
              </button>

              <button className="border-2   text-white  font-semibold text-lg  px-6 py-3 bg-blue-600 rounded-2xl border-blue-700 hover:bg-transparent hover:text-amber-100 transition duration-200">
                Contact Us
              </button>
            </div>
          </div>
          <div className="  md:w-md ">
            <img
              src={homeImage}
              className="rounded-lg p-10 shadow-blue-500 shadow-4xl w-2xl"
            />
          </div>
        </div> */
            }



              // <div className="w-full h-screen flex items-center justify-center bg-slate-600 ">
              //   <div className="  w-3xl bg-slate-800 py-30 px-5 sm:px-10 rounded-xl sm:rounded-3xl hover:shadow-2xl hover shadow-blue-700 border-t-4 border-blue-700 border-b-4">
              //     <h2 className=" text-blue-700 text-xl font-semibold  font-serif px-5 sm:px-0">
              //       Our Vision
              //     </h2>
              //     <p className="text-sm sm:text-md px-5 sm:px-0 sm:text-md text-white mt-6 leading-8">
              //       We envision a future where technology seamlessly integrates
              //       with daily life, simplifying complex tasks and fostering
              //       greater connection. Our commitment is to build intuitive and
              //       powerful tools that empower individuals and businesses
              //       alike.
              //     </p>
              //   </div>
              // </div>;



              {
                /* <div className="w-full h-screen flex items-center justify-center bg-slate-600 ">
          <div className="w-xl sm:w-4xl  py-0 sm:py-25 bg-slate-800  rounded-xl sm:rounded-3xl hover:shadow-2xl hover shadow-blue-600 border-t-4 border-blue-700 border-b-4 mt-10 sm:mt-0 px-7 ">
            <h2 className="text-lg font-serif text-blue-700 font-bold ml-10 sm:ml-7">
              Our Process
            </h2>
            <div className=" flex flex-col sm:flex-row  w-full  justify-center items-center gap-10">
              <div
                className="w-sm  px-10 py-7   rounded 
              hover:shadow-2xl hover: shadow-blue-600  
              hover:scale-115 
              transition-all duration-500 hover:border-2 hover:border-blue-600 "
              >
                <span className="w-full h-3 bg-blue-700    block  rounded-full"></span>
                <h2 className="  font-semibold mt-6 text-white">Discovery</h2>
                <p className=" text-sm  mt-1 text-white">
                  Understanding your unique requirements and objectives.
                </p>
              </div>
              <div className="w-sm  px-10 py-10   rounded hover:shadow-2xl hover: shadow-blue-600  hover:scale-115 transition-all duration-500   hover:border-2 hover:border-blue-600 ">
                <span className="w-full h-3 bg-blue-700    block  rounded-full"></span>
                <h2 className=" text-lg font-semibold mt-6 text-white">
                  Development
                </h2>
                <p className=" text-sm  mt-1 text-white">
                  Bringing concepts to life with precision and expertise.
                </p>
              </div>
              <div className="w-sm  px-10 py-10   rounded hover:shadow-2xl hover: shadow-blue-600  hover:scale-115 transition-all duration-500 hover:border-2 hover:border-blue-700  ">
                <span className="w-full h-3 bg-blue-700    block  rounded-full"></span>
                <h2 className=" text-lg font-semibold mt-6 text-white">
                  Design
                </h2>
                <p className="text-sm  mt-1 text-white">
                  Crafting intuitive and effective solutions tailored for you.
                </p>
              </div>
              <div className="w-sm  px-10 py-10   rounded hover:shadow-2xl hover: shadow-blue-600  hover:scale-115 transition-all duration-500 hover:border-2 hover:border-blue-600   ">
                <span className="w-full h-3 bg-blue-700    block  rounded-full"></span>
                <h2 className=" text-lg font-semibold mt-6 text-white">
                  Deployment
                </h2>
                <p className=" text-sm  mt-1 text-white">
                  Seamless integration and launch of your new solution.
                </p>
              </div>
            </div>
          </div>
        </div> */
              }


               {
                 /* <div
          className="rounded-xl 
                border-2 border-blue-600 px-4 py-10 space-y-8 "
        >
          <div className="max-w-xl mb-60 sm:mb-0 sm:max-w-2xl bg-slate-800 py-10 sm:py-20 px-10 rounded-xl sm:rounded-3xl hover:shadow-2xl hover shadow-blue-600 border-t-4 border-blue-700 border-b-4 mt-4">
            <h1 className="text-blue-800 font-serif font-bold text-lg mb-6">
              What We Offer
            </h1>
            <div className=" flex flex-col sm:flex-row  w-full  justify-center items-center gap-10">
              <div className=" w-xs sm:w-1/4  space-y-6 sm:space-y-2 px-6 py-4 rounded-lg p-6 hover:border-blue-700 hover:shadow-blue-600 hover:border-2 hover:shadow-2xl transition-all duration-400 hover:scale-110 cursor-pointer">
                <i className="bx bx-bulb text-2xl  text-blue-800"></i>
                <h2 className="text-blue-700 text-lg mt-4 font-semibold ">
                  Innovative Solutions
                </h2>
                <p className="mt-2 sm:mt-6  text-sm sm:text-md text-white font-serif leading-6 sm:leading-5">
                  Innovative Solutions Cutting-edge products designed to meet
                  your evolving needs and challenges.
                </p>
              </div>
              <div className=" w-xs sm:w-1/4 space-y-6 sm:space-y-2 px-6 py-4 rounded-lg p-6 hover:border-blue-700 hover:shadow-blue-600 hover:border-2 hover:shadow-2xl transition-all duration-400 hover:scale-110">
                <i className="bx bxs-user text-2xl text-blue-800"></i>
                <h2 className="text-blue-700 text-lg   font-semibold mt-4">
                  Reliable Performance
                </h2>
                <p className="  mt-2 sm:mt-6 text-white   text-sm sm:text-md  leading-6 sm:leading-5 font-serif">
                  Built for enduring stability and smart security, our systems
                  guarantee reliable performance across any scale.
                </p>
              </div>
              <div className=" w-xs sm:w-1/4 space-y-6 sm:space-y-2 px-6 py-2 rounded-lg p-6 hover:border-blue-700 hover:shadow-blue-600 hover:border-2 hover:shadow-2xl transition-all duration-400 hover:scale-110 cursor-pointer">
                <i className="bx bx-shield text-2xl  text-blue-800"></i>
                <h2 className="text-blue-700 text-lg mt-4 font-semibold ">
                  User-Centric Design
                </h2>
                <p className="mt-6 text-sm sm:text-md  text-white  font-serif leading-6 sm:leading-5">
                  User-centric design experiences thoughtfully crafted to
                  prioritize your comfort, simplify your interactions.
                </p>
              </div>
            </div>
          </div>
        </div> */
               }



                {
                  /* <div className=" w-full h-screen flex items-center justify-center bg-slate-600 overflow-y-auto ">
          <div className="max-w-4xl  sm:w-full h-[80vh] overflow-y-auto scrollbar-hide   p-4 sm:p-18 mt-6 bg-slate-800  rounded-xl sm:rounded-3xl hover:shadow-2xl hover shadow-blue-600 border-t-4 border-blue-700 border-b-4  ">
            <h1 className="  sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold p-4 font-serif">
              Why Choose Us?
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2  p-10 gap-10 w-full">
              <div className=" mx-auto px-6 box-border">
                <p className="  text-sm sm:text-md tracking-wide  leading-6 text-white  p-4 ">
                  We envision a future where technology seamlessly integrates
                  with daily life, simplifying complex tasks and fostering
                  greater connection. Our commitment is to build intuitive and
                  powerful tools that empower individuals and businesses alike.
                </p>
              </div>
              <ul className="space-y-8  sm:ml-10 ml-2 list-disc pl-5 text-white">
                <li className=" text-md sm:text-lg font-serif font-semibold">
                  Expert Team
                </li>
                <li className=" text-md sm:text-lg font-serif font-semibold">
                  Proven Track Record
                </li>
                <li className=" text-md sm:text-lg font-serif font-semibold">
                  Customer Satisfaction
                </li>
                <li className=" text-md sm:text-lg font-serif font-semibold">
                  Continuous Innovation
                </li>
              </ul>
            </div>
          </div>
        </div> */
                }


                {
                  /* <div className=" w-full h-screen flex items-center justify-center bg-slate-600 ">
          <div className="max-w-4xl  sm:w-full  p-7 sm:p-22 mt-6 bg-slate-800  rounded-xl sm:rounded-3xl hover:shadow-2xl hover shadow-blue-600 border-t-4 border-blue-700 border-b-4 ">
            <h1 className=" text-xl sm:text-4xl ml-10 text-blue-700 font-serif">
              Client Success Stories
            </h1>
            <div className="flex justify-center items-center gap-x-5 sm:gap-x-12 p-9 sm:p-10 ">
              <div className="images flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
                <div>
                  <img
                    src={Client1}
                    className="w-4xl  sm:w-7xl rounded-2xl cursor-pointer hover:rounded-full "
                  />
                </div>
                <div>
                  <img
                    src={Client2}
                    className="w-4xl sm:w-7xl rounded-2xl hover:rounded-full"
                  />
                </div>
                <div>
                  <img
                    src={Client3}
                    className=" w-4xl sm:w-7xl rounded-2xl hover:rounded-full  "
                  />
                </div>
              </div>
            </div>
            <div className="w-full sm:max-w-3xl mx-auto px-4">
              <p className=" text-sm sm:text-lg font-sans mt-3 sm:mt-10 text-center  tracking-wide sm:tracking-wider leading-5 sm:leading-7 text-white  mr-5 ">
                Our clients consistently achieve their goals with our support.
                We pride ourselves on building strong, lasting partnerships that
                drive mutual success and growth.
              </p>
            </div>
          </div>
        </div> */
                }


                {
                  /* <div className=" w-full h-screen flex items-center justify-center bg-slate-600 ">
          <div className="max-w-4xl w-full  p-6 sm:p-22 bg-slate-800  rounded-xl sm:rounded-3xl hover:shadow-2xl hover: shadow-blue-600 border-t-4 border-blue-700 border-b-4 mt-16">
            <h1 className=" text-2xl sm:text-4xl font-semibold text-white font-serif ml-5 sm:ml-0">
              Our Commitment to Quality
            </h1>
            <div className="flex space-x-12 space-y-10">
              <span className="w-1 rounded-b-xl bg-blue-700 block h-22 mt-4"></span>

              <h3 className="mt-10 text-xl sm:text-2xl text-white ">
                "Quality is not an act, it is a habit."
              </h3>
            </div>
            <p className=" text-sm sm:text-md space-x-3 text-white tracking-wider leading-7 ">
              We adhere to the highest standards in every aspect of our work,
              from initial concept to final delivery. Our rigorous quality
              assurance processes ensure that every solution we provide is
              reliable, efficient, and exceeds expectations.
            </p>
          </div>
        </div> */
                }


                 {
                   /* <div className=" w-full h-dvh flex items-center justify-center bg-slate-600 ">
          <div className="max-w-4xl w-full mx-auto p-6 sm:p-22 bg-slate-800  rounded-xl sm:rounded-3xl hover:shadow-2xl hover shadow-blue-600 border-t-4 border-blue-700 border-b-4 ">
            <h1
              className="   text-xl sm:text-4xl font-bold font-serif text-blue-700 p-2
            ml-10 sm:ml-0"
            >
              Stay Connected
            </h1>
            <p className=" text-md sm:text-2xl leading-7 tracking-normal text-white pt-7 ml-10">
              Follow us on social media to get the latest updates, insights, and
              news from our team. Join our community and be part of the
              conversation.
            </p>
            <div className="flex flex-wrap gap-5 p-4 mt-10 ml-5 sm:ml-0 ">
              <button className="btn ">
                <i className="bx bxl-twitter text-3xl sm:text-4xl md:text-5xl "></i>
              </button>
              <button className="btn ">
                <i className="bx bxl-linkedin text-3xl sm:text-4xl md:text-5xl "></i>
              </button>
              <button className="btn ">
                <i className="bx bxl-facebook-circle  text-3xl sm:text-4xl  md:text-5xl "></i>
              </button>
              <button className="btn">
                <i className="bx bxl-instagram   text-3xl sm:text-4xl md:text-5xl"></i>
              </button>
            </div>
          </div>
        </div>  */
                 }


                 {
                   /* <div className=" question-section w-full h-screen flex items-center justify-center bg-slate-600 ">
          <div className="max-w-4xl w-full mx-auto p-6 sm:p-10 rounded-2xl bg-slate-800 hover:shadow-2xl hover shadow-blue-600 border-t-4 border-blue-700 border-b-4">
            <h1 className=" text-blue-700 text-2xl font-semibold p-5">
              Frequently Asked Question
            </h1>
            <div className="bg-pink-200 py-6 px-6 sm:py-8 sm:px-14 rounded-xl m-5 flex flex-col ">
              <h2 className="text-xl font-bold">How can I get started?</h2>
              <p className="text-sm mt-2 leading-relaxed">
                Simply reach out to our team through the contact form or give us
                a call. We'll guide you through the initial consultation and
                planning stages.
              </p>
            </div>
            <div className="bg-pink-200 py-8 rounded-xl px-14 m-5 flex flex-col">
              <h2 className="text-xl font-bold">
                What is your support policy?
              </h2>
              <p className="text-sm mt-2 leading-relaxed">
                We offer comprehensive support packages tailored to your needs,
                ensuring you always have assistance when you need it.
              </p>
            </div>
          </div>
        </div> */
                 }