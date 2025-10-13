"use client";

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useModernToastContext } from "@/components/modern-toast-provider";

export default function WhitelistApplicationPage() {
  const { success, error } = useModernToastContext();
  const [formData, setFormData] = useState({
    steam_link: "",
    steam_name: "",
    steam_hex: "",
    discord_name: "",
    discord_id: "",
    email: "",
    fullname: "",
    age: "",
    character_backstory: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send to our API route
      const response = await fetch("/api/whitelist-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        success(
          "🎉 Application Submitted Successfully!",
          "We'll review your whitelist application and get back to you soon. Check your Discord for updates!",
          { duration: 8000 }
        );
        // Reset form
        setFormData({
          steam_link: "",
          steam_name: "",
          steam_hex: "",
          discord_name: "",
          discord_id: "",
          email: "",
          fullname: "",
          age: "",
          character_backstory: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit application");
      }
    } catch (err) {
      console.error("Error submitting application:", err);
      error(
        "❌ Submission Failed",
        "There was an error submitting your application. Please check your internet connection and try again.",
        { duration: 6000 }
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      suppressHydrationWarning
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/city-background.jpeg')",
        }}
        suppressHydrationWarning
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Page Header */}
          <motion.div className="text-center mb-8" variants={cardVariants}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Whitelist Application
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Welcome to Hill City Roleplay! Complete this application to join
              our community.
            </p>
          </motion.div>

          {/* Application Form */}
          <motion.div variants={cardVariants}>
            <Card className="bg-black/50 backdrop-blur-sm border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-white">
                  Steam & Discord Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Steam Information Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white border-b border-white/20 pb-2">
                      Steam Information
                    </h3>

                    <div className="space-y-2">
                      <Label
                        htmlFor="steam_link"
                        className="text-white font-medium"
                      >
                        Your Steam profile link?
                      </Label>
                      <Input
                        id="steam_link"
                        name="steam_link"
                        type="url"
                        placeholder="Enter Steam profile link"
                        value={formData.steam_link}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="steam_name"
                        className="text-white font-medium"
                      >
                        Your Steam profile name?
                      </Label>
                      <Input
                        id="steam_name"
                        name="steam_name"
                        type="text"
                        placeholder="Enter Steam profile name"
                        value={formData.steam_name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="steam_hex"
                        className="text-white font-medium"
                      >
                        Steam Hex ID?
                      </Label>
                      <Input
                        id="steam_hex"
                        name="steam_hex"
                        type="text"
                        placeholder="Ex: 110000139a79ac8"
                        value={formData.steam_hex}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                      />
                    </div>
                  </div>

                  {/* Discord Information Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white border-b border-white/20 pb-2">
                      Discord Information
                    </h3>

                    <div className="space-y-2">
                      <Label
                        htmlFor="discord_name"
                        className="text-white font-medium"
                      >
                        What is your Discord user name? (With your #tag)
                      </Label>
                      <Input
                        id="discord_name"
                        name="discord_name"
                        type="text"
                        placeholder="Ex: RoxyBoy#1234"
                        value={formData.discord_name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="discord_id"
                        className="text-white font-medium"
                      >
                        What is your Discord user (Member) ID?
                      </Label>
                      <Input
                        id="discord_id"
                        name="discord_id"
                        type="text"
                        placeholder="Enter your Discord Member ID"
                        value={formData.discord_id}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                      />
                    </div>
                  </div>

                  {/* Personal Information Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white border-b border-white/20 pb-2">
                      Personal Information
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="fullname"
                        className="text-white font-medium"
                      >
                        Your Full Name?
                      </Label>
                      <Input
                        id="fullname"
                        name="fullname"
                        type="text"
                        placeholder="Enter your Full Name"
                        value={formData.fullname}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-white font-medium">
                        Age?
                      </Label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        placeholder="Enter your Age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        min="13"
                        max="100"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                      />
                    </div>
                  </div>

                  {/* Character Backstory Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white border-b border-white/20 pb-2">
                      Character Backstory
                    </h3>
                    <div className="space-y-2">
                      <Label
                        htmlFor="character_backstory"
                        className="text-white font-medium"
                      >
                        Tell us about your character's background and story (Minimum 200 words)
                      </Label>
                      <Textarea
                        id="character_backstory"
                        name="character_backstory"
                        placeholder="Describe your character's background, motivations, goals, and how they ended up in Hill City. Be creative and detailed - this helps us understand your roleplay style and character depth."
                        value={formData.character_backstory}
                        onChange={handleInputChange}
                        required
                        minLength={200}
                        rows={8}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 resize-none"
                      />
                      <p className="text-white/60 text-sm">
                        Character backstory: {formData.character_backstory.length}/200 words minimum
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium rounded-lg transition-all duration-200"
                    >
                      Submit Application
                    </Button>
                    <Link href="/application">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 py-3 text-lg font-medium rounded-lg transition-all duration-200"
                      >
                        Back to Applications
                      </Button>
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Information */}
          <motion.div className="mt-8 text-center" variants={cardVariants}>
            <p className="text-white/70 text-sm">
              By submitting this application, you agree to follow our community
              rules and guidelines. We'll review your application and contact
              you through Discord or email.
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
