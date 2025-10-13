import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      "steam_link",
      "steam_name",
      "steam_hex",
      "discord_name",
      "discord_id",
      "email",
      "fullname",
      "age",
      "character_backstory",
    ];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create Discord webhook payload
    const webhookPayload = {
      embeds: [
        {
          title: "🎮 New Whitelist Application",
          color: 0x00ff00, // Green color
          fields: [
            {
              name: "👤 Personal Information",
              value: `**Full Name:** ${body.fullname}\n**Age:** ${body.age}\n**Email:** ${body.email}`,
              inline: false,
            },
            {
              name: "🎮 Steam Information",
              value: `**Profile Link:** ${body.steam_link}\n**Profile Name:** ${body.steam_name}\n**Steam Hex ID:** ${body.steam_hex}`,
              inline: false,
            },
            {
              name: "💬 Discord Information",
              value: `**Username:** ${body.discord_name}\n**Member ID:** ${body.discord_id}`,
              inline: false,
            },
            {
              name: "📖 Character Backstory",
              value: body.character_backstory.length > 1024 
                ? `${body.character_backstory.substring(0, 1021)}...` 
                : body.character_backstory,
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Hill City Roleplay - Whitelist Application",
          },
        },
      ],
    };

    // Send to Discord webhook
    const discordResponse = await fetch(
      "https://discord.com/api/webhooks/1412066612323811390/doGYbX6MAJN3Y8fpJrcxeMi9E5eKcUupSPARo3Eqxq7VelysmiRTqRoAQEnL3uVuv2tH",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookPayload),
      }
    );

    if (!discordResponse.ok) {
      throw new Error(`Discord webhook failed: ${discordResponse.status}`);
    }

    return NextResponse.json(
      { message: "Application submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting whitelist application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
