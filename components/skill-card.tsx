"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  category: string;
  icon: React.ReactNode;
  items: string[];
  index: number;
  inView: boolean;
}

export function SkillCard({
  category,
  icon,
  items,
  index,
  inView,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="p-6 h-full hover:shadow-lg transition-shadow">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {icon}
            <h3 className="text-xl font-semibold">{category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}