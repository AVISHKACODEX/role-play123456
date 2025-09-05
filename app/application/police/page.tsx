"use client";

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useModernToastContext } from "@/components/modern-toast-provider";

export default function PoliceApplicationPage() {
  const { success, error } = useModernToastContext();
  const [formData, setFormData] = useState({
    // Player Information Section (OOC)
    fullName: "",
    gender: "",
    ageAndDOB: "",
    discordId: "",
    steamProfile: "",
    steamHexId: "",

    // Character Section (IC)
    icName: "",
    icContact: "",
    icAge: "",
    icNIC: "",
    characterBackstory: "",
    whyJoinPolice: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      gender: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send to our API route
      const response = await fetch("/api/police-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        success(
          "🚔 Police Application Submitted!",
          "Your application has been received. Our recruitment team will review it and contact you via Discord within 24-48 hours.",
          { duration: 8000 }
        );
        // Reset form
        setFormData({
          fullName: "",
          gender: "",
          ageAndDOB: "",
          discordId: "",
          steamProfile: "",
          steamHexId: "",
          icName: "",
          icContact: "",
          icAge: "",
          icNIC: "",
          characterBackstory: "",
          whyJoinPolice: "",
        });
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      error(
        "❌ Application Failed",
        "Unable to submit your police application. Please check your connection and try again.",
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
              Police Application
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join the Hill City Police Department and help maintain law and
              order in our community.
            </p>
          </motion.div>

          {/* Application Form */}
          <motion.div variants={cardVariants}>
            <Card className="bg-black/50 backdrop-blur-sm border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-white">
                  Police Department Application Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Player Information Section (OOC) */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        1.0 Player Information Section ((OOC Section))
                      </h2>
                      <p className="text-white/70 text-sm">
                        Please fill out this section to the best of your
                        knowledge, failure to do so may result in longer wait
                        times for your application.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="fullName"
                          className="text-white font-medium"
                        >
                          1.1 Full Name
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          type="text"
                          placeholder="Your answer"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white font-medium">
                          1.2 Gender
                        </Label>
                        <RadioGroup
                          value={formData.gender}
                          onValueChange={handleRadioChange}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="Female"
                              id="female"
                              className="text-white"
                            />
                            <Label htmlFor="female" className="text-white">
                              Female
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="Male"
                              id="male"
                              className="text-white"
                            />
                            <Label htmlFor="male" className="text-white">
                              Male
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="ageAndDOB"
                          className="text-white font-medium"
                        >
                          1.3 Age and Date of Birth
                        </Label>
                        <Input
                          id="ageAndDOB"
                          name="ageAndDOB"
                          type="text"
                          placeholder="Your answer"
                          value={formData.ageAndDOB}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="discordId"
                          className="text-white font-medium"
                        >
                          1.5 What is your discord user(Member) ID?
                        </Label>
                        <Input
                          id="discordId"
                          name="discordId"
                          type="text"
                          placeholder="Go to CeylonRP Discord Server > Go to bot command only channel > Type !user > click ENTER > copy & Enter your Member ID"
                          value={formData.discordId}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="steamProfile"
                          className="text-white font-medium"
                        >
                          1.6 Your Steam profile link?
                        </Label>
                        <Input
                          id="steamProfile"
                          name="steamProfile"
                          type="url"
                          placeholder="Your answer (Links must be valid.)"
                          value={formData.steamProfile}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="steamHexId"
                          className="text-white font-medium"
                        >
                          1.7 Steam Hex ID?
                        </Label>
                        <Input
                          id="steamHexId"
                          name="steamHexId"
                          type="text"
                          placeholder="search of vacbanned, ex: 110000139a79ac8. Use this website: https://steamidfinder.com/ or https://steamid.pro/"
                          value={formData.steamHexId}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Character Section (IC) */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        2.0 Character Section (IC Section)
                      </h2>
                      <p className="text-white/70 text-sm">
                        Please fill out this section to the best of your
                        knowledge, failure to do so may result in longer wait
                        times for your application.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="icName"
                          className="text-white font-medium"
                        >
                          2.1 Full Name
                        </Label>
                        <Input
                          id="icName"
                          name="icName"
                          type="text"
                          placeholder="State your IC name here"
                          value={formData.icName}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="icContact"
                          className="text-white font-medium"
                        >
                          2.2 Contact Details
                        </Label>
                        <Input
                          id="icContact"
                          name="icContact"
                          type="text"
                          placeholder="state your IC contact number here"
                          value={formData.icContact}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="icAge"
                          className="text-white font-medium"
                        >
                          2.3 Age
                        </Label>
                        <Input
                          id="icAge"
                          name="icAge"
                          type="text"
                          placeholder="state your IC age here"
                          value={formData.icAge}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="icNIC"
                          className="text-white font-medium"
                        >
                          2.4 NIC Number
                        </Label>
                        <Input
                          id="icNIC"
                          name="icNIC"
                          type="text"
                          placeholder="state your IC NIC number here"
                          value={formData.icNIC}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            2.5 Tips for writing a character backstory
                          </h3>
                          <p className="text-white/70 text-sm">
                            An appropriate character should have a thought-out
                            and defined personality with various positive and
                            negative traits. For example, roleplaying as an
                            elderly character would inherently mean they would
                            be slower and be less effective in combat.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="characterBackstory"
                            className="text-white font-medium"
                          >
                            2.6 Please outline your character backstory.
                          </Label>
                          <Textarea
                            id="characterBackstory"
                            name="characterBackstory"
                            placeholder="Your answer"
                            value={formData.characterBackstory}
                            onChange={handleInputChange}
                            rows={6}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="whyJoinPolice"
                            className="text-white font-medium"
                          >
                            2.7 Why does your character wish to join the Police
                            Force?
                          </Label>
                          <Textarea
                            id="whyJoinPolice"
                            name="whyJoinPolice"
                            placeholder="Your answer"
                            value={formData.whyJoinPolice}
                            onChange={handleInputChange}
                            rows={4}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium rounded-lg transition-all duration-200"
                    >
                      Submit Police Application
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
