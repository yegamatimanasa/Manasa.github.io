"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";

const projects = [
  {
    title: "Weather Tracker",
    desc: "A real-time weather app built with React, Vite, and OpenWeather API, featuring dynamic video backgrounds, live forecasts, and air quality insights for an immersive and responsive user experience.",
    category: "Full Stack Application",
    image: "/weathertracker.jpg",
    stack: ["NextJS", "Redux", "Vite", "OpenWeather API"],
    url: "https://github.com/yegamatimanasa/Weather-Tracker",
    liveurl: "https://weather-tracker-rose.vercel.app/",
  },
  {
    title: "GeoCropAI",
    desc: "GeoCropAI is a web tool that analyzes geographical and environmental data to recommend optimal crops, helping farmers maximize yield and sustainability.",
    category: "Full Stack Application",
    image: "/crop.jpg",
    stack: ["Python", "Flask", "RESTAPIs", "OpenWeather API", "AI/ML"],
    url: "https://github.com/yegamatimanasa/GeoCropAI",
    liveurl: null,
  },
  {
    title: "Greenhouse Gas Emission Calculator",
    desc: "A web tool for estimating GHG emissions based on energy use, transport, and waste, helping users track and reduce their carbon footprint.",
    category: "Full Stack Application ",
    image: "/GGEC.jpg",
    stack: ["AngularJS", "MongoDB", "Routes"],
    url: "https://github.com/yegamatimanasa/Greenhouse-Gas-Emission_Calculator",
    liveurl: null,
  },
  {
    title: "Online Book Store",
    desc: "A seamless online bookstore where users can search, buy, and access books with detailed information and secure transactions.",
    category: "Full Stack Application ",
    image: "/bookstore.jpg",
    stack: ["React", "RESTAPIs"],
    url: "https://github.com/yegamatimanasa/OnlineBookStore",
    liveurl: null,
  },
  {
    title: "Travel Agency",
    desc: "A real-time ticket reservation platform with secure payments and instant booking confirmations via email and SMS. Admins manage bus details and schedules, ensuring a seamless travel experience.",
    category: "Full Stack Application ",
    image: "/Bus.jpg",
    stack: ["HTML", "CSS", "JavaScript", "MSQL", "AWS"],
    url: "https://github.com/yegamatimanasa/ColdStorageManagementSystem",
    liveurl: null,
  },
  {
    title: "Cold Storage Management System",
    desc: "A Smart Cold Storage rental platform with multiple temperature zones for optimal preservation. Users reserve units as needed, while admins manage and update storage seamlessly.",
    category: "Full Stack Application ",
    image: "/coldS.jpg",
    stack: ["PHP", "MSQL"],
    url: "https://github.com/yegamatimanasa/ColdStorageManagementSystem",
    liveurl: null,
  },
  {
    title: "Scientific Calculator",
    desc: "A powerful web-based calculator for arithmetic, trigonometry, logarithms, and advanced functions. Designed for accuracy and efficiency, it provides a seamless and intuitive math-solving experience.",
    category: "Web App ",
    image: "/coldS.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/yegamatimanasa/Scientific-Calculator",
  },
  {
    title: "Rice Image Classification",
    desc: "This project utilizes CNNs, ANNs, and DNNs to classify five rice varieties with 100% accuracy, analyzing morphological, shape, and color features from 75,000 images.",
    category: "Machine Learning Model ",
    image: "/rice.jpg",
    stack: ["Flask", "Python", "AI/ML"],
    url: "https://github.com/yegamatimanasa/Rice-Image-Classification-CNN",
    liveurl: null,
  },
  {
    title: "Smart Eye Movement Detection",
    desc: "This project utilizes CNN to accurately classify different mosquito species based on images captured on human skin. By leveraging deep learning, it enhances vector surveillance, aiding in disease prevention and ecological studies.",
    category: "Machine Learning Model ",
    image: "/eye.jpg",
    stack: ["Flask", "Python", "AI/ML", "Pandas"],
    url: "https://github.com/yegamatimanasa/Eye-Detection-using-CNN",
    liveurl: null,
  },
  {
    title: "Masquito Species Classification",
    desc: "This project utilizes CNN to classify mosquito species from images captured on human skin. By analyzing unique visual patterns, the model enhances species identification, supporting vector-borne disease prevention and ecological research.",
    category: "Machine Learning Model ",
    image: "/mosquito.jpg",
    stack: ["Flask", "Python", "AI/ML"],
    url: "https://github.com/yegamatimanasa/Mosquito-Species-Classification-CNN",
    liveurl: null,
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [swiper, setSwiper] = useState(null);

  const onSlideChange = (item) => {
    setCurrentProject(projects[item?.activeIndex]);
  };
  const index =
    projects.findIndex((item) => item.title === currentProject?.title) + 1;

  const nexto = () => {
    swiper.slideNext();
  };
  const prev = () => {
    swiper.slidePrev();
  };
  return (
    <div className="grid place-items-center lg:pt-0 sm:pt-32 pt-20 min-h-screen container">
      <div className="mt-12 pt-20">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className="text-center mb-10 "
        >
          <h3>
            {" "}
            My <span>Projects</span>
          </h3>
        </MotionDiv>
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveDown}
          transition={transition.moveDown}
          className="flex lg:flex-row  flex-col-reverse lg:gap-0 gap-10 lg:pb-0 pb-7 items-center  w-full"
        >
          <div className="flex-1 space-y-3">
            <h2 className="text-6xl font-semibold text-primary">
              {index < 10 ? `0${index}` : index}
            </h2>
            <h3>{currentProject?.title}</h3>
            <p className="w-10/12 text-accent-foreground">
              {currentProject?.desc}
            </p>
            <div className="mt-2 text-primary font-semibold tracking-wider space-x-2">
              {currentProject?.stack?.map((item) => {
                return (
                  <Badge
                    key={item}
                    variant={"outline"}
                    className="text-primary text-base"
                  >
                    {item}
                  </Badge>
                );
              })}
            </div>
            <br />
            <div className="flex gap-x-3">
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      className="bg-accent p-2.5 rounded-full"
                      onClick={() =>
                        window.open(
                          currentProject?.url,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <Image
                        src="/GitHub.svg"
                        alt="github"
                        width={40}
                        height={40}
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/* <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      className="bg-accent p-2.5 rounded-full"
                      onClick={() =>
                        window.open(
                          currentProject?.liveurl,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <Image
                        src="/open.svg"
                        alt="github"
                        width={40}
                        height={40}
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Preview</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> */}
            </div>
          </div>
          <div className="flex-1 flex items-center flex-col">
            <Swiper
              // slidesPerView={1.4}
              breakpoints={{
                // when window width is <= 499px
                499: {
                  slidesPerView: 1,
                },
                // when window width is <= 999px
                999: {
                  slidesPerView: 1.4,
                },
              }}
              spaceBetween={20}
              className="w-full md:max-w-lg max-w-[250px]"
              onSlideChange={onSlideChange}
              onSwiper={(s) => {
                setSwiper(s);
              }}
            >
              {projects.map((project, i) => {
                return (
                  <SwiperSlide
                    key={project.title}
                    className={cn(index - 1 !== i && "opacity-45", "")}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={350}
                      height={250}
                      className="object-contain"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex ml-6 mt-4 gap-x-4">
              <button onClick={prev} disabled={index === 1}>
                <Image
                  src={"/prev.png"}
                  alt={"prev"}
                  width={55}
                  height={55}
                  className={cn("cursor-pointer")}
                />
              </button>
              <button onClick={nexto} disabled={index === projects.length}>
                <Image
                  src={"/next.png"}
                  alt={"next"}
                  width={55}
                  height={55}
                  className={cn("cursor-pointer")}
                />
              </button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
