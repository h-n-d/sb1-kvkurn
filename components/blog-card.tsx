"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  post: {
    title: string;
    description: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
    icon: React.ReactNode;
  };
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
        <Card className="overflow-hidden group">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="flex items-center gap-1">
                  {post.icon}
                  {post.category}
                </Badge>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">{post.description}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <time dateTime={post.date}>
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}