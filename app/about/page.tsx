"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SkillCard } from "@/components/skill-card";
import { Brain, Code, Database, Lock } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />,
    items: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    category: "Blockchain",
    icon: <Lock className="w-6 h-6" />,
    items: ["Solidity", "Web3.js", "Hardhat", "EVM", "DeFi"],
  },
  {
    category: "Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "NLP", "Computer Vision"],
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
                alt="Bolt's profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">About Me</h1>
              <p className="text-lg text-muted-foreground font-merriweather">
                I'm a passionate Software Engineer with expertise in Crypto and
                Machine Learning. With years of experience in building scalable
                applications, I combine technical excellence with creative
                problem-solving.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>Software Engineer</Badge>
                <Badge>Blockchain Developer</Badge>
                <Badge>ML Engineer</Badge>
                <Badge>Open Source Contributor</Badge>
              </div>
            </div>
          </div>

          <div ref={ref} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Skills & Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and areas of
                expertise.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {skills.map((skill, index) => (
                <SkillCard
                  key={skill.category}
                  category={skill.category}
                  icon={skill.icon}
                  items={skill.items}
                  index={index}
                  inView={inView}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}