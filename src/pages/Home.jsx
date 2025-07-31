import homeImage from "../assets/images/home.jpg";
const Home = ()=>{
    return (
      <>
        <div className="signin  fex justify-between  w-full h-screen ">
          <div className="space-y-8 p-6">
            <h1 className="text-6xl font-bold text-white">
              Welcome to Our World
            </h1>
            <p className="text-2xl font-semibold ">
              Discover innovative solutions designed to elevate your experience.
            </p>
            <span className="text-4xl font-bold text-white">
              Your Partner in Digital Transformation
            </span>
            <p className="text-xl mt-6 font-medium">
              Empowering businesses with cutting-edge IT solutions and services.
            </p>
            <div>
              <button className="border-2 p-3 rounded-md m-3 w-40 text-white  text-lg font-semibold bg-[#850aa1] border-purple-600 hover:bg-transparent cursor-pointer">
                Learn More
              </button>
              <button className="border-2 p-3 rounded-md w-40 text-white bg-transparent font-semibold text-lg  border-purple-600 hover:bg-[#850aa1]">
                Contact Us
              </button>
            </div>
          </div>
          <div className="size-100 ml-50 mb-10 ">
            <img src={homeImage} className="" />
          </div>
        </div>
        <div></div>
        <div className="vision-section signin">
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
      </>
    );
}

export default Home;