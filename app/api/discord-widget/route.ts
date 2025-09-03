import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const guildId = "1345678800477753394";
    const discordApiUrl = `https://discord.com/api/guilds/${guildId}/widget.json`;

    const response = await fetch(discordApiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "HillCityRP-Website/1.0",
      },
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });

    if (!response.ok) {
      throw new Error(
        `Discord API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    // Add CORS headers to allow browser requests
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
        "Cache-Control": "public, max-age=60", // Cache for 1 minute
      },
    });
  } catch (error) {
    console.error("Discord widget API error:", error);

    // Return fallback data when Discord API is unavailable
    const fallbackData = {
      id: "1345678800477753394",
      name: "Hill City Roleplay",
      presence_count: 0,
      members: [],
    };

    return NextResponse.json(fallbackData, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
        "Cache-Control": "public, max-age=300", // Cache fallback for 5 minutes
      },
    });
  }
}

// Handle preflight requests
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
