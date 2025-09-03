import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Create Discord webhook payload
    const webhookPayload = {
      embeds: [
        {
          title: "🏥 New Medical Application",
          color: 0x00ff00, // Green color for medical
          fields: [
            {
              name: "👤 IC Section",
              value: `**Full Name:** ${body.fullName}\n**Gender:** ${body.gender}\n**Date of Birth:** ${body.dateOfBirth}\n**ID Number:** ${body.idNumber}\n**Mobile Number:** ${body.mobileNumber}`,
              inline: false,
            },
            {
              name: "📝 Character Backstory",
              value: body.characterBackstory || "Not provided",
              inline: false,
            },
            {
              name: "💼 Employment History",
              value: body.employmentHistory || "Not provided",
              inline: false,
            },
            {
              name: "🏥 Preferred Division",
              value: body.preferredDivision || "Not specified",
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Hill City Roleplay - Medical Application",
          },
        },
      ],
    };

    // Send to Discord webhook
    const response = await fetch(
      "https://discord.com/api/webhooks/1412067102000414820/tWAHFMBvMfQlj4N65IKGnPR5-njyAb5B5DOLC9t6TP_gDRSTsvHawQT-dvOOAGLwDrtY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookPayload),
      }
    );

    if (response.ok) {
      return NextResponse.json(
        { message: "Medical application submitted successfully!" },
        { status: 200 }
      );
    } else {
      throw new Error("Failed to submit application to Discord");
    }
  } catch (error) {
    console.error("Error submitting medical application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
