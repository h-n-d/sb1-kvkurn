"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { Brain, Code, Lock } from "lucide-react";

const projects = [
  {
    title: "DeFi Trading Platform",
    description: "A decentralized trading platform built on Ethereum with automated market making and liquidity pools.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232&h=1674",
    tags: ["Solidity", "Web3.js", "React", "TypeScript"],
    link: "https://github.com",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    title: "AI Image Recognition",
    description: "Deep learning model for real-time object detection and classification using computer vision.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2232&h=1674",
    tags: ["Python", "PyTorch", "OpenCV", "TensorFlow"],
    link: "https://github.com",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "Cloud Development Platform",
    description: "Full-stack platform for cloud-native development with real-time collaboration features.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=2232&h=1674",
    tags: ["Next.js", "TypeScript", "Docker", "Kubernetes"],
    link: "https://github.com",
    icon: <Code className="w-6 h-6" />,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Featured Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my most impactful work in software development,
              blockchain, and machine learning.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}