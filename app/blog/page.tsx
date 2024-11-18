"use client";

import { motion } from "framer-motion";
import { BlogCard } from "@/components/blog-card";
import { Brain, Code, Lock } from "lucide-react";

const posts = [
  {
    title: "Understanding Zero-Knowledge Proofs",
    description: "An in-depth exploration of ZK-SNARKs and their applications in blockchain privacy.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=2200",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Blockchain",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    title: "The Future of Large Language Models",
    description: "Exploring recent advancements in LLMs and their impact on AI development.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2200",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "Machine Learning",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    title: "Building Scalable Microservices",
    description: "Best practices for designing and implementing microservices architecture.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2200",
    date: "2024-03-05",
    readTime: "10 min read",
    category: "Software Architecture",
    icon: <Code className="w-5 h-5" />,
  },
];

export default function Blog() {
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
            <h1 className="text-4xl font-bold">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights and thoughts on software development, blockchain technology,
              and artificial intelligence.
            </p>
          </div>

          <div className="grid gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post.title} post={post} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}