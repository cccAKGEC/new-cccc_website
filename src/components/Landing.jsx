import React from "react";
import OrbitingCircles from "./ui/orbiting-circles";
import logo from "../images/logo.svg";
import TypingAnimation from "./ui/typing-animation";
import A from "../images/A.png";
import B from "../images/B.png";
import C from "../images/C.png";
import D from "../images/D.png";
import black from "../images/black.jpeg";
import orbitbg from "../images/orbitbg.jpeg";
import { motion } from "framer-motion";
import ui from "../images/ui.png";
import Particles from "./ui/particles";
import Meteors from "./ui/meteors";
import ShimmerButton from "./ui/shimmer-button";
import ShineBorder from "./ui/shine-border";
import { BorderBeam } from "./ui/border-beam";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();
  function register() {
    navigate("/Register");
  }

  return (
    <>
      <div className="">
        <div className="h-screen w-screen bg-black z-40 relative  overflow-hidden">
          <Particles />
          <Meteors />
          <OrbitingCircles className="">
            <Particles />
          </OrbitingCircles>

          <div className="absolute inset-0 flex flex-col mt-20 sm:mt-0 mb-96 justify-center items-center text-white text-center px-4">
            <TypingAnimation
              duration={60}
              delay={0}
              startOnView={true}
              className="text-white z-10 text-2xl md:text-3xl lg:text-5xl font-jetbrains font-bold"
            >
              {"Join the Future of Cloud Computing"}
            </TypingAnimation>
            {/* <TypingAnimation
              duration={100}
              delay={200}
              startOnView={true}
              className="text-white text-md z-10 md:text-2xl  lg:text-3xl mt-1 sm:mt-4 font-jetbrains font-bold"
            > */}
            {/* {"Innovating the World of Technology and Coding"} */}
            {/* </TypingAnimation> */}
            <motion.p className="text-white mt-2 sm:mt-4 z-10 text-xs md:text-xl font-jetbrains">
              Our society is a space for tech enthusiasts to learn, code, and
              grow together. <br className="sm:mt-3 mt-0" /> We explore cloud
              computing, programming, and modern technologies.{" "}
              {/*through <br className="sm:mt-3 mt-0"/> hands-on projects and teamwork. 
              <br className="sm:mt-3 mt-0"/>*/}
            </motion.p>
            {/* <motion.p  className="text-white mt-2 sm:mt-7 z-10 text-xs md:text-xl font-jetbrains">
               our society empowers tech enthusiasts and professionals to explore coding   and 
              <br className="sm:mt-3 mt-0"/>innovative technologies,  shaping the future with passion and expertise
            </motion.p> */}

            <div className="text-white z-40 text-xl hidden  sm:flex md:text-xl mt-4 font-bold right-10 absolute top-0  sm:top-5 sm:right-36">
              <ShimmerButton
                onClick={register}
                shimmerSize = "4px"
                  background = "rgba(36, 36, 36, 1)"
                className="cursor-pointer   hover:scale-125 font-poppins transition-all ease-in-out duration-1000 delay-0"
              >
                {/* <div className="p h-[15px] w-[15px] mr-4 animate-pulse rounded-full bg-violet-700"></div>  */}
                <motion.div
                  className="h-[15px] w-[15px] mr-4 rounded-full bg-violet-700 border-4 border-violet-400"
                  initial={{ scale: 1, borderColor: "#7c3aed" }}
                  animate={{
                    scale: [1, 1.2, 1],
                    borderColor: ["#7c3aed", "#9b4de6", "#7c3aed"], 
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                Register
              </ShimmerButton>
            </div>
            <div className="text-white z-40 sm:hidden text-xl md:text-xl mt-4 font-bold">
              {/* <ShimmerButton
                onClick={register}
                className="cursor-pointer  hover:scale-125 font-rubik transition-all ease-in-out duration-1000 delay-0"
              >
                Register
              </ShimmerButton> */}
               <ShimmerButton
                shimmerSize = "4px"
                  background = "rgba(36, 36, 36, 1)"
                onClick={register}
                className="cursor-pointer   hover:scale-125 font-poppins transition-all ease-in-out duration-1000 delay-0"
              >
                {/* <div className="p h-[15px] w-[15px] mr-4 animate-pulse rounded-full bg-violet-700"></div>  */}
                <motion.div
                  className="h-[10px] w-[10px] mr-2 rounded-full bg-violet-700 border-4 border-white"
                  initial={{ scale: 1, borderColor: "#7c3aed" }}
                  animate={{
                    scale: [1, 1.2, 1],
                    borderColor: ["#7c3aed", "#9b4de6", "#7c3aed"], 
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                Register
              </ShimmerButton>
            </div>
          </div>

          <div className="absolute inset-0 flex sm:flex-col gap-10 justify-center items-center sm:max-w-[90vw] w-full  text-white text-center px-4">
            {/* <ShineBorder
              borderRadius={8}
              borderWidth={1}
              duration={2}
              color={["#ff00ff", "#00ff00"]}
              className="shadow-lg animate-bounce2 z-40 cursor-pointer hidden md:block  absolute left-36 bottom-40"
            >
              <h1 className="text-xl font-bold bg-transparent z-50 hover:scale-125 transition-all ease-in-out duration-1000 delay-0 font-poppins cursor-pointer  text-white text-center">
                Hello, World!
              </h1>
            </ShineBorder> */}

            {/* <ShineBorder
              borderRadius={8}
              borderWidth={1}
              duration={2}
              color={["#ff00ff", "#00ff00"]}
              className="shadow-lg animate-bounce2 hidden z-40   hover:scale-125 transition-all ease-in-out duration-1000 delay-0 cursor-pointer md:block justify-center  text-center  absolute ml-7 right-0 bottom-40"
            >
              <h1 className="text-2xl font-bold  hover:scale-110 transition-all ease-in-out duration-1000 delay-0 font-poppins cursor-pointer  bg-transparent text-white text-center">
                Hello, Coders!
              </h1>
            </ShineBorder>

            <ShineBorder
              borderRadius={5}
              borderWidth={1}
              duration={2}
              color={["#ff00ff", "#00ff00"]}
              className="shadow-lg animate-bounce2 md:hidden block  cursor-pointer  justify-center  text-center  absolute bottom-40"
            >
              <h1 className=" text-lg sm:text-xl font-bold cursor-pointer font-playwrite bg-transparent text-white text-center">
                Hello, Coders!
              </h1>
            </ShineBorder> */}
            <div className="absolute max-[950px]:hidden flex max-[650px]:flex right-10 gap-10 sm:right-16  max-[400px]:hidden">
              <img
                src={D}
                className="h-28 sm:h-40 z-50 max-[1000px]:h-24 animate-bounce"
                alt="D"
              />
            </div>
            <div className="absolute  left-10 max-[950px]:hidden flex max-[650px]:flex z-[2px] sm:left-60 max-[400px]:hidden">
              <img
                src={C}
                className="h-28 sm:h-40 z-50 max-[1000px]:h-24 animate-bounce"
                alt="C"
              />
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -z-10 mt-10 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ y: 600 }}
              animate={{ y: 450 }}
              transition={{ duration: 2, ease: "easeIn" }}
            >
              <img src={orbitbg} className="hidden lg:block" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
