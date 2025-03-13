"use client"; // Required for Next.js App Router
import { MotionButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { transition, variants } from "@/utils/framer_variants";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  MotionTabs,
} from "@/components/ui/tabs";
import { MotionDiv, MotionImage } from "@/utils/motionTags";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Graduate Teaching Assistant",
    subTitle: "University of East London, UK",
    duration: " Feb 2025 - Present ",
    description: ` Serves as an Hourly Paid Lecturer, conducting technical lab sessions that integrate theoretical knowledge with hands-on application. Develops structured study materials, ensures clarity in complex technical concepts, and provides real-time guidance to enhance student learning. Oversees attendance management, tracks performance, and maintains accuracy in academic reporting while fostering an engaging and interactive environment.

        Evaluates projects, grades exams, and assesses student performance with a focus on academic integrity and analytical problem-solving. Collaborates with faculty to refine lab curricula, implement innovative teaching methodologies, and optimize student engagement. Provides hands-on support in troubleshooting, debugging, and executing lab activities while contributing to curriculum development, academic research, and student success initiatives.`,
  },
  {
    title: "Research Assistant",
    subTitle: "University of East London, UK",
    duration: " Sept 2024 - Present ",
    description: `Conducts in-depth research activities, including academic paper writing, literature reviews, and LaTeX document conversions, ensuring precision in scientific documentation. Engages in critical analysis of published research papers and journals, identifying key insights and trends to enhance ongoing studies. Develops machine learning models using diverse algorithms, applying statistical methodologies to extract meaningful patterns and improve predictive accuracy.  

        Manages and safeguards a repository of over 7,000 AI and cloud-related data points, ensuring research integrity and confidentiality for reliable analysis. Performs data preprocessing and exploratory analysis using Python, providing actionable insights that contribute to hypothesis validation and early-stage research findings. Drafts manuscript outlines and research progress reports, facilitating knowledge dissemination and preparing studies for publication.  

       Actively participates in academic conferences, presenting findings and engaging with experts to refine methodologies. Coordinates research project meetings, timelines, and collaboration efforts, ensuring smooth workflow execution. Recognized as a contributing author for the accepted publication "AI-GeoInfo Crop Recommendation Framework Using Decision Tree Classifier and Flask-based GeoAPI," set for inclusion in the "3rd International Conference on Mechatronics and Smart Systems (CONF-MSS 2025) under Applied and Computational Engineering (ACE)".`,
  },
  {
    title: "Software Engineer",
    subTitle: "Tata Consultancy Services, INDIA",
    duration: " July 2021 - Sept 2023 ",
    description: `Developed highly responsive banking applications using ReactJS, enhancing user experience and driving a 25% increase in mobile user engagement. Designed and implemented intuitive UI components with advanced validation mechanisms, significantly reducing development time for new features by 20%. Diagnosed and resolved production issues with efficient debugging techniques, leading to a 30% reduction in incident response time and bolstering application stability. Automated key regulatory processes by creating web applications and scripts, cutting manual effort by 40%, optimizing operational efficiency, and earning client recognition for reducing compliance workload.  

                  Streamlined version control workflows by transitioning from Gerrit to GitHub, refining code review processes, and accelerating code deployment speed by 15%. Ensured application functionality through rigorous manual and functional testing, achieving 98% accuracy in delivered solutions and maintaining high-quality standards. Enhanced test coverage by 35% through desktop and mobile testing, accessibility compliance verification (CCA, NVDA), and well-documented test cases. Led knowledge transfer sessions for new team members, increasing team productivity by 15%, fostering collaboration, and improving overall engagement in project execution.`,
  },
];

const educationData = [
  {
    degree: "Master's in Computer Science with Industrial Placement (MS)",
    university: "University of East London, UK",
    duration: "Sept 2023 - May 2025",
    coursework: [
      "Advanced Software Engineering",
      "Big Data",
      "Cloud Computing",
      "Machine Learning and Artificial Intelligence",
      "Dissertation",
    ],
  },
  {
    degree:
      "Bachelor of Technology (B.Tech) | Computer Science and Engineering (CSE)",
    university:
      "University College of Engineering and Technology for Women (UCETW), Kakatiya University, India",
    duration: "2017 - 2021",
    coursework: [
      "C Programming",
      "C++ (OOPS Concepts)",
      "Core Java",
      "Database Management Systems (DBMS & SQL)",
      "Data Structures and Algorithms",
      "Operating Systems",
    ],
  },
];
export default function Resume() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.min(
          1,
          Math.max(0, (windowHeight - top) / height)
        );
        setScrollProgress(progress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={cn(
          "max-w-4xl mx-auto 2xl:pt-60 pt-32 px-3 pb-4 min-h-screen"
        )}
      >
        <div className="flex md:flex-row flex-col md:gap-0 gap-7 items-center justify-between w-full">
          <div className="flex sm:flex-row flex-col gap-x-7 sm:gap-y-0 gap-y-4 items-center">
            <MotionImage
              initial="initial"
              animate="animate"
              variants={variants.scale}
              transition={transition.scale}
              src="/Manasa.avif"
              width={155}
              height={155}
              className="md:w-36 w-28 rounded-full "
              alt="avatar"
            ></MotionImage>
            <MotionDiv
              initial="initial"
              animate="animate"
              variants={variants.moveDown}
              transition={transition.moveDown}
              className="sm:text-left text-center"
            >
              <h3 className="mb-2">
                Manasa <span>Yegamati</span>
              </h3>
              <h5>Dartford, UK</h5>
            </MotionDiv>
          </div>
          <MotionButton
            initial="initial"
            animate="animate"
            variants={variants.moveDown}
            transition={transition.moveDown}
            variant="outline"
            size="lg"
          >
            Software Engineer
          </MotionButton>
        </div>
        <MotionTabs
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          defaultValue="about"
          className="leading-7 mt-10"
        >
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <h6>Hello! </h6>
            <p className="text-justify text-accent-foreground mt-2">
              I am <b>Manasa Yegamati</b>, a passionate <b>Software Engineer</b>{" "}
              and <b>Researcher</b> with expertise in{" "}
              <b>
                full-stack development, cloud computing, and artificial
                intelligence
              </b>
              . Currently pursuing an{" "}
              <b>MS in Computer Science with Industrial Placement </b>
              at the <b>University of East London</b>, I have a strong
              background in designing and developing scalable, high-performance
              applications. My technical proficiency spans{" "}
              <b>ReactJS, Next.js, Node.js, Flask</b>, and <b>WebSockets </b>
              for real-time communication, alongside <b>GraphQL </b> and{" "}
              <b>REST</b> for efficient data handling. I am also experienced in
              cloud platforms like <b>AWS</b> and <b>GCP</b>, database
              management with <b>MySQL</b> and <b>MongoDB</b>, and AI/ML
              frameworks such as <b>TensorFlow</b> and <b>Scikit-learn</b>.
            </p>
            <p className="text-justify text-accent-foreground mt-2">
              With professional experience as a <b>Software Engineer</b> at{" "}
              <b>Tata Consultancy Services</b>, I have contributed to building
              robust banking applications, optimizing system performance, and
              leading cloud migration projects. Currently, as a{" "}
              <b>Research Assistant</b> at UEL, I work on machine learning
              research, large-scale data analysis, and AI-driven solutions,
              contributing to international publications. Additionally, as a{" "}
              <b>Graduate Teaching Assistant</b>, I mentor students and deliver
              hands-on technical instruction.
            </p>
            <p className="text-justify text-accent-foreground mt-2">
              I am driven by a passion for problem-solving, innovation, and
              continuous learning. Whether developing cutting-edge applications,
              optimizing system performance, or conducting AI research, I thrive
              on tackling complex challenges and contributing to meaningful
              technological advancements.
            </p>
          </TabsContent>
          <TabsContent value="experience">
            <div className=" text-white p-8 min-h-screen flex justify-center">
              <div className="relative max-w-3xl w-full">
                {/* Vertical Progress Bar including Icons */}
                <div
                  ref={timelineRef}
                  className="absolute left-6 top-0 w-1 h-full bg-gray-700"
                >
                  <motion.div
                    className="bg-primary w-1 absolute top-0"
                    animate={{ height: `${scrollProgress}%` }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  ></motion.div>
                </div>

                {experienceData.map((exp, index) => (
                  <div key={index} className="relative pl-16 mb-12">
                    {/* Timeline Icon - Part of the Progress Bar */}
                    <motion.div
                      className="absolute left-0 w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary bg-gray-900"
                      animate={{
                        backgroundColor:
                          scrollProgress > index * 50 ? "#FFD700" : "#333",
                        borderColor:
                          scrollProgress > index * 50 ? "#FFD700" : "#555",
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      💼
                    </motion.div>

                    {/* Line Extending from Icon to the Next */}
                    {index !== experienceData.length - 1 && (
                      <motion.div
                        className="w-1 bg-primary absolute left-6 top-12"
                        animate={{
                          height: scrollProgress > index * 50 ? "60px" : "0px",
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      ></motion.div>
                    )}

                    {/* Education Details */}
                    <h3 className="text-lg font-bold text-primary">
                      {exp.title}
                    </h3>
                    <p className="italic text-gray-300">{exp.subTitle}</p>
                    <p className="text-sm text-gray-400">{exp.duration}</p>
                    <p className="text-justify text-accent-foreground pt-4">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="education">
            <div className=" text-white p-8 min-h-screen flex justify-center">
              <div className="relative max-w-3xl w-full">
                {/* Vertical Progress Bar including Icons */}
                <div
                  ref={timelineRef}
                  className="absolute left-6 top-0 w-1 h-full bg-gray-700"
                >
                  <motion.div
                    className="bg-primary w-1 absolute top-0"
                    animate={{ height: `${scrollProgress}%` }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  ></motion.div>
                </div>

                {educationData.map((edu, index) => (
                  <div key={index} className="relative pl-16 mb-12">
                    {/* Timeline Icon - Part of the Progress Bar */}
                    <motion.div
                      className="absolute left-0 w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary bg-gray-900"
                      animate={{
                        backgroundColor:
                          scrollProgress > index * 50 ? "#FFD700" : "#333",
                        borderColor:
                          scrollProgress > index * 50 ? "#FFD700" : "#555",
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      🎓
                    </motion.div>

                    {/* Line Extending from Icon to the Next */}
                    {index !== educationData.length - 1 && (
                      <motion.div
                        className="w-1 bg-primary absolute left-6 top-12"
                        animate={{
                          height: scrollProgress > index * 50 ? "60px" : "0px",
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      ></motion.div>
                    )}

                    {/* Education Details */}
                    <h3 className="text-lg font-bold text-primary">
                      {edu.degree}
                    </h3>
                    <p className="italic text-gray-300">{edu.university}</p>
                    <p className="text-sm text-gray-400">{edu.duration}</p>

                    {/* Coursework List */}
                    {edu.coursework.length > 0 && (
                      <>
                        <h4 className="mt-3">Coursework:</h4>
                        <ul className="space-y-1 w-full">
                          {edu.coursework.map((course, i) => (
                            <li
                              key={i}
                              className="text-accent-foreground border-b border-accent last:border-b-0"
                            >
                              {course}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </MotionTabs>
      </div>
    </>
  );
}
