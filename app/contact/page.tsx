"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "hello@bolt.dev",
    href: "mailto:hello@bolt.dev",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "San Francisco, CA",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "@bolt",
    href: "https://github.com",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "Bolt",
    href: "https://linkedin.com",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    label: "Twitter",
    value: "@bolt",
    href: "https://twitter.com",
  },
];

export default function Contact() {
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
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out.
              I'm always open to discussing new opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 md:col-span-2">
              <ContactForm />
            </Card>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group"
                    >
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3">
                      <div className="text-muted-foreground">{item.icon}</div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}