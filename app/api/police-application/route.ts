import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Create Discord webhook payload
    const webhookPayload = {
      embeds: [
        {
          title: "👮 New Police Application",
          color: 0x0066cc, // Blue color for police
          fields: [
            {
              name: "👤 Player Information (OOC)",
              value: `**Full Name:** ${body.fullName}\n**Gender:** ${body.gender}\n**Age & DOB:** ${body.ageAndDOB}\n**Discord ID:** ${body.discordId}\n**Steam Profile:** ${body.steamProfile}\n**Steam Hex ID:** ${body.steamHexId}`,
              inline: false,
            },
            {
              name: "🎭 Character Information (IC)",
              value: `**IC Name:** ${body.icName}\n**IC Contact:** ${body.icContact}\n**IC Age:** ${body.icAge}\n**IC NIC:** ${body.icNIC}`,
              inline: false,
            },
            {
              name: "📝 Character Backstory",
              value: body.characterBackstory || "Not provided",
              inline: false,
            },
            {
              name: "🎯 Why Join Police Force?",
              value: body.whyJoinPolice || "Not provided",
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Hill City Roleplay - Police Application",
          },
        },
      ],
    };

    // Send to Discord webhook
    const response = await fetch(
      "https://discord.com/api/webhooks/1412066992965423114/mmL0Vg914262HAqeBZqYMOO16gXb894e1sptT9dDZEokKpzYKPacXbg_-CLo1e63br64",
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
        { message: "Police application submitted successfully!" },
        { status: 200 }
      );
    } else {
      throw new Error("Failed to submit application to Discord");
    }
  } catch (error) {
    console.error("Error submitting police application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
