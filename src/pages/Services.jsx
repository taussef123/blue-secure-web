
import simg from "../assets/images/hero.jpg"
import designs from "../assets/images/designs.png"
import web from "../assets/images/web.jpg"
import It from "../assets/images/it cons.webp"
import mobile from "../assets/images/mobile.png"
import dig from "../assets/images/dig1.png"
import UI from "../assets/images/ui.avif"
import software from "../assets/images/soft1.png"
import cloud from "../assets/images/cloudicon.png"
import UID from "../assets/images/ui.jpg"
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
                className="w-xl rounded-2xl  hover:drop-shadow-xl hover:drop-shadow-[#0e5f8a] cursor-pointer hover:transition duration-300
                mt-4 sm:mt-0
                "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 py-6">
        <div className="max-w-7xl w-full mx-auto px-8 py-8 space-y-6  ">
          <h2 className="text-xl sm:text-2xl md :text-xl lg:text-4xl font-serif  text-blue-700 leading-[1.3]">
            Our Comprehensive IT Services
          </h2>
          <p className="text-base sm:text-sm md:text-lg text-white font-serif leading-[1.6] ">
            We offer a full spectrum of digital services tailored to meet your
            unique business needs. From initial concept to ongoing support, we
            provide end-to-end solutions that ensure your digital presence is
            robust, engaging, and effective.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto px-8 py-9 gap-4 ">
            <div className="border-2 border-blue-600 space-y-6 rounded-t-xl rounded-b-xl  px-6 py-9">
              <img src={designs} className="size-11 rounded-ful" />
              <h3 className="  font-semibold mt-6 text-white font-serif text-center">
                Web Designing
              </h3>
              <p className=" text-[15px]  mt-1 text-white text-center font-serif leading-[1.6]">
                Creative, Modern, User-Centric
              </p>
            </div>
            <div className="border-2 border-blue-600 space-y-6 rounded-t-xl rounded-b-xl  px-6 py-9">
              <img src={web} className="size-11  rounded-full" />
              <h3 className="  font-semibold mt-6 text-white font-serif text-center">
                Web Development
              </h3>
              <p className=" text-center text-white">
                Scalable & Robust Solutions
              </p>
            </div>
            <div className="border-2 border-blue-600 space-y-6 rounded-t-xl rounded-b-xl  px-6 py-9">
              <img src={It} className="size-11  rounded-full" />
              <h3 className="  font-semibold mt-6 text-white font-serif text-center">
                IT Consulting{" "}
              </h3>
              <p className=" text-[15px]  mt-1 text-white text-center font-serif leading-[1.6]">
                Smarter IT, Smarter Business
              </p>
            </div>
            <div className="border-2 border-blue-600 space-y-6 rounded-t-xl rounded-b-xl  px-6 py-9">
              <img src={mobile} className="size-11  rounded-full" />
              <h3 className="  font-semibold mt-6 text-white font-serif text-center">
                Mobile App Development
              </h3>
              <p className=" text-[15px]  mt-1 text-white text-center font-serif leading-[1.6]">
                Apps That Engage & Perform.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl md :text-xl lg:text-4xl font-serif  text-blue-700 leading-[1.3]">
              Expanding Our Offerings
            </h2>
            <p className="text-base sm:text-sm md:text-lg text-white font-serif leading-[1.6]">
              Beyond our core services, we continuously expand our capabilities
              to provide even more value. Our goal is to be your single partner
              for all digital transformation needs, offering specialized
              expertise in emerging technologies and strategic digital
              initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto px-8 py-9 gap-4 ">
            <div className="border-2 border-blue-600 space-y-5 rounded-t-xl rounded-b-xl  px-6 py-9">
              <img src={dig} className="size-16  " />
              <h3 className="  font-semibold mt-6 text-white font-serif text-center">
                Digital Marketing Solutions
              </h3>
              <p className=" text-[15px]  mt-1 text-white text-center font-serif leading-[1.6]">
                Turning Clicks into Customers, and Ideas into Impact
              </p>
            </div>
            <div className="border-2 border-blue-600 space-y-6 rounded-t-xl rounded-b-xl  px-6 py-9">
              <img src={UI} className="size-9  rounded-full" />
              <h3 className="  font-semibold mt-6 text-white font-serif text-center">
                UI/UX Design
              </h3>
              <p className=" text-[15px]  mt-1 text-white text-center font-serif leading-[1.6]">
                Apps That Engage & Perform.
              </p>
            </div>
            <div className="border-2 border-blue-600 space-y-6 rounded-t-xl rounded-b-xl  px-6 py-9">
              <img src={software} className="size-9  rounded-full" />
              <h3 className="  font-semibold mt-6 text-white font-serif text-center">
                Software Development
              </h3>
              <p className=" text-[15px]  mt-1 text-white text-center font-serif leading-[1.6]">
                Custom Software for Every Business
              </p>
            </div>
            <div className="border-2 border-blue-600 space-y-6 rounded-t-xl rounded-b-xl  px-6 py-9">
              <img src={cloud} className="size-11  rounded-full" />
              <h3 className="  font-semibold mt-6 text-white font-serif text-center">
                Cloud Services Solutions
              </h3>
              <p className=" text-[15px]  mt-1 text-white text-center font-serif leading-[1.6]">
                Custom Cloud Architectures That Scale With Your Business
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 p-6">
        <div className="max-w-7xl w-full mx-auto   flex flex-col sm:flex-row  justify-between items-center px-7 py-5 space-y-6">
          <div className="max-w-md">
            <img
              src={UID}
              className="w-lg 
              rounded-2xl
              hover:drop-shadow-xl hover:drop-shadow-[#e86170] cursor-pointer hover:transition duration-200"
            />
          </div>
          <div className="flex flex-col justify-center items-center  rounded-2xl  space-y-10 px-7 py-6  ">
            <h2 className="text-xl sm:text-2xl md :text-xl lg:text-4xl font-serif  text-blue-700 leading-[1.3]">
              Beautiful UI: The User Experience
            </h2>
            <p className="text-base sm:text-sm md:text-lg text-white font-serif max-w-xl leading-[1.5]">
              Beautiful UI: The User Experience A beautiful user interface is
              more than just aesthetics; it's about creating an intuitive and
              enjoyable experience. We prioritize clean design, seamless
              navigation, and engaging visuals to ensure your users love
              interacting with your digital products. Our designs are not only
              visually appealing but also highly functional.
            </p>
            <ul className="text-white space-y-4">
              <li className=" text-lg font-semibold  text-white font-serif list-disc">
                Intuitive navigation
              </li>
              <li className=" text-lg font-semibold text-white font-serif list-disc">
                Visually appealing layouts
              </li>
              <li className=" text-lg font-semibold  text-white font-serif list-disc">
                Engaging interactive elements
              </li>
              <li className=" text-lg font-semibold  text-white font-serif list-disc">
                Consistent branding
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;


// webdesigning



// Creative, Modern, User-Centric
    // this two are in box
// We design visually stunning, responsive websites with seamless navigation and intuitive UI/UX to give your brand a digital edge.

// Our approach focuses on creating an engaging online presence that reflects your brand's unique identity and ensures an exceptional user experience on any device.



// Web Development

// Scalable & Robust Solutions
// this two are in box

// From static sites to dynamic web apps, we build secure, scalable, and high-performance websites tailored to your business needs.

// We specialize in full-stack development, ensuring that both the front-end (what users see) and back-end (server, database, applications) are seamlessly integrated and optimized for performance.



// Cloud Services

// Power of Cloud at Your Fingertips

// We offer comprehensive cloud hosting, migration, and management services that ensure flexibility, speed, and cost efficiency for your operations.

// Migrating to the cloud can significantly reduce IT overheads and increase operational agility. We manage your cloud infrastructure so you can focus on core business activities.





// Cloud Services

// Power of Cloud at Your Fingertips

// We offer comprehensive cloud hosting, migration, and management services that ensure flexibility, speed, and cost efficiency for your operations.

// Migrating to the cloud can significantly reduce IT overheads and increase operational agility. We manage your cloud infrastructure so you can focus on core business activities.

// Software Development

// Custom Software for Every Business

// Our expert team develops tailored software solutions that optimize processes, automate tasks, and drive significant business growth.

// Whether you need a new enterprise resource planning (ERP) system or a custom customer relationship management (CRM) tool, we build software that fits your unique operational requirements.






// Mobile App Development

// Apps That Engage & Perform

// We craft powerful Android and iOS applications with sleek design, smooth performance, and advanced features to keep your users engaged.

// From concept to deployment, our mobile app development services cover the entire lifecycle, ensuring your app stands out in a crowded marketplace and delivers exceptional user experiences.



// Cybersecurity Solutions

// Protecting Your Digital World

// Secure your business with our end-to-end IT security solutions, including robust data protection, advanced firewalls, and continuous vulnerability monitoring.

// In an age of increasing cyber threats, proactive security measures are paramount. We provide comprehensive strategies to safeguard your valuable 
// data and maintain business continuity.



// IT Consulting

// Smarter IT, Smarter Business

// We provide expert IT strategy and consulting services to help businesses embrace innovation and achieve technology-driven growth.

// Our consultants work closely with you to develop a strategic IT roadmap aligned with your business objectives, ensuring your technology investments yield maximum returns.




// Ready to Transform Your IT?

// Partner with us to unlock your business's full potential through innovative and reliable IT solutions. Let's build a future where technology works for you.

// Get Started Today

// Learn More
