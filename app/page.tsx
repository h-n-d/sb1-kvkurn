"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/particles-background";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
                Bolt
              </span>
              <br />A Software Engineer
            </h1>
            <p className="text-xl text-muted-foreground">
              Passionate about Crypto and Machine Learning, building the future one
              line of code at a time.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex justify-center gap-6 pt-8">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}