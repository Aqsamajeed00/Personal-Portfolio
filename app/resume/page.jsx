"use client";

import { Description } from "@radix-ui/react-dialog";
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

// about data
const about = {
  title : "About me",
  description:
   "Hello! I&apos;m Aqsa Majeed, a passionate Full Stack Developer driven by innovation. With a keen eye for creative solutions, I specialize in crafting dynamic web experiences. My technical expertise includes: HTML5 | CSS | ReactJS | Tailwind CSS | Next.js | Typescript. I&apos;m also well-versed in Generative AI and Cloud Computing, constantly seeking to leverage cutting-edge technologies. As a dedicated developer, I thrive on transforming visionary ideas into reality. Feel free to explore my portfolio and discover the innovative projects I&apos;ve brought to life.",
   info: [
    {
      fieldName: "Name",
      fieldValue: "Aqsa Majeed"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 330 8578357"
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years"
    },
    {
      fieldName: "Twitter",
      fieldValue: "@AqsaShaikh_034"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani"
    },
    {
      fieldName: "Email",
      fieldValue: "aqsamajeedking313@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English"
    },
   ],
};

// experience data 
const experience = {
  icon : '/assets/resume/badge.svg',
  title: 'My Experience',
  description: "As a seasoned Full Stack Developer, I&apos;ve built a strong portfolio showcasing my expertise in HTML, CSS, JavaScript, React, Node.js, and Tailwind CSS. With 2 years of experience, My expertise spans responsive design, UI/UX, accessibility, and integration of third-party APIs. I&apos;ve developed and deployed multiple web applications, leveraging modern frameworks and technologies to deliver scalable and user-friendly solutions.",
  items: [
    {
      company: "Web Design Studio",
      position: "Front-end Developer Intern",
      duration: "2022 - present",
    },
    {
      company: "Tech Solutions Inc",
      position: "Full-Stack Developer",
      duration: "winter - 2023",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "present"
    },
    {
      company : "Governor House",
      position: "Senior Student",
      duration: "2024"
    },
  ],
};

// education data 
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "As a science-turned-IT professional, I bring a distinct combination of logical reasoning, technical expertise, and creative problem-solving to the table. With skills in programming languages (Python, Java, C++), web development, and database management, I&apos;m poised to tackle complex challenges and drive technological innovation.",
  items : [
    {
      institution: "GIAIC",
      degree: "Cloud Applied Generative AI Engineer",
      duration: "2 years",
    },
    {
      institution: " NITSEP (Online Course Platform)",
      degree: "Full Stack Web Engineer",
      duration: "1 year",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2023",
    },
    {
    institution: "Codecademy",
    degree: "Front-End Track",
    duration: "2022-2023",
    },
    {
      institution: "Government Degree College",
      degree:"FSc in Arts",
    },
    {
      institution: "Tech Institite",
      degree: "Certified Web Developer",
    },
  ],
};

const skills = {
  title: "My Skills",
  description : "Key Skills: I possess expertise in a range of technologies, including: - Front-end development: HTML, CSS, React.js, Next.js  - Back-end development: Node.js- Programming language: JavaScript ,With a strong foundation in these technologies, I create scalable, efficient, and user-friendly web applications that meet the highest standards.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import {motion} from "framer-motion"

const Resume = () => {
    return (

    <motion.div 
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
     <div className="container mx-auto">
      <Tabs
       defaultValue="experience"
       className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>
        {/* Content */}
        <div className="min-h-[70vh] w-full">
          {/* experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea  className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
            </TabsContent>

          {/* education */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea  className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
            </TabsContent>

          {/* skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) =>{
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )
                })}
              </ul>
            </div>
            </TabsContent>

          {/* about */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
             <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
             </div>
            </TabsContent>

          </div>
      </Tabs>
     </div>
      </motion.div>
  )
}

export default Resume;