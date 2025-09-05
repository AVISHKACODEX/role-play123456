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

export default function MedicalApplicationPage() {
  const { success, error } = useModernToastContext();
  const [formData, setFormData] = useState({
    // IC Section
    fullName: "",
    gender: "",
    dateOfBirth: "",
    idNumber: "",
    mobileNumber: "",

    // Character Backstory Section
    characterBackstory: "",
    employmentHistory: "",
    preferredDivision: "",
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

  const handleDivisionChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredDivision: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send to our API route
      const response = await fetch("/api/medical-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        success(
          "🏥 Medical Application Submitted!",
          "Your application has been received by our medical department. We'll review it and contact you via Discord within 24-48 hours.",
          { duration: 8000 }
        );
        // Reset form
        setFormData({
          fullName: "",
          gender: "",
          dateOfBirth: "",
          idNumber: "",
          mobileNumber: "",
          characterBackstory: "",
          employmentHistory: "",
          preferredDivision: "",
        });
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (err) {
      console.error("Error submitting application:", err);
      error(
        "❌ Application Failed",
        "Unable to submit your medical application. Please check your connection and try again.",
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
              Medical Application
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join the Hill City Medical Team and help save lives in our
              community.
            </p>
          </motion.div>

          {/* Application Form */}
          <motion.div variants={cardVariants}>
            <Card className="bg-black/50 backdrop-blur-sm border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-white">
                  Medical Department Application Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* IC Section */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        IC Section
                      </h2>
                      <p className="text-white/70 text-sm">
                        Please be sure to fill that section by assuming yourself
                        as the IC character. Inclusion of any other unnecessary
                        details out of character can be subject to reject your
                        application.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="fullName"
                          className="text-white font-medium"
                        >
                          Full Name
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
                        <Label className="text-white font-medium">Gender</Label>
                        <RadioGroup
                          value={formData.gender}
                          onValueChange={handleRadioChange}
                          className="flex gap-6"
                        >
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
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="dateOfBirth"
                          className="text-white font-medium"
                        >
                          Date of Birth
                        </Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="text"
                          placeholder="Your answer"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="idNumber"
                          className="text-white font-medium"
                        >
                          ID Number
                        </Label>
                        <Input
                          id="idNumber"
                          name="idNumber"
                          type="text"
                          placeholder="Your answer"
                          value={formData.idNumber}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="mobileNumber"
                          className="text-white font-medium"
                        >
                          Mobile Number
                        </Label>
                        <Input
                          id="mobileNumber"
                          name="mobileNumber"
                          type="text"
                          placeholder="Your answer"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Character Backstory Section */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        Character Backstory
                      </h2>
                      <p className="text-white/70 text-sm">
                        Please summarize the outline of your upbringing,
                        academic & professional achievements and highlights in
                        your life until now and your motivation behind your
                        intention to join Ceylon MD.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="characterBackstory"
                          className="text-white font-medium"
                        >
                          Character Backstory
                        </Label>
                        <Textarea
                          id="characterBackstory"
                          name="characterBackstory"
                          placeholder="Your answer"
                          value={formData.characterBackstory}
                          onChange={handleInputChange}
                          rows={8}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="employmentHistory"
                          className="text-white font-medium"
                        >
                          Have you ever employed in somewhere else before? If so
                          state the employment history. (Position, Service
                          Period, etc.)
                        </Label>
                        <Input
                          id="employmentHistory"
                          name="employmentHistory"
                          type="text"
                          placeholder="Your answer"
                          value={formData.employmentHistory}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white font-medium">
                          Preferred Division
                        </Label>
                        <RadioGroup
                          value={formData.preferredDivision}
                          onValueChange={handleDivisionChange}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="Doctor Division"
                              id="doctor"
                              className="text-white"
                            />
                            <Label htmlFor="doctor" className="text-white">
                              Doctor Division
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="Paramedic Division"
                              id="paramedic"
                              className="text-white"
                            />
                            <Label htmlFor="paramedic" className="text-white">
                              Paramedic Division
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      type="submit"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium rounded-lg transition-all duration-200"
                    >
                      Submit Medical Application
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
