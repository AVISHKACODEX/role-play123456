# Server Status Live Updates Setup

This document explains how to configure the live server status feature for Hill City Roleplay.

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# FiveM Server Configuration
FIVEM_SERVER_IP=your-server-ip-here
FIVEM_SERVER_PORT=30120

# Discord Configuration (optional)
DISCORD_GUILD_ID=your-discord-guild-id
DISCORD_WIDGET_ENABLED=true

# Server Status Update Interval (in milliseconds)
SERVER_STATUS_UPDATE_INTERVAL=30000
```

## Configuration

### FiveM Server Setup

1. **Server IP**: Replace `your-server-ip-here` with your actual FiveM server IP address
2. **Server Port**: Default is `30120`, change if your server uses a different port
3. **API Endpoints**: The system uses FiveM's built-in JSON endpoints:
   - `/info.json` - Server information
   - `/players.json` - Current player list

### Features

The live server status includes:

- **Real-time Player Count**: Shows current players vs max capacity
- **Server Status**: Online/Offline/Maintenance indicators
- **Server Uptime**: How long the server has been running
- **Auto-refresh**: Updates every 30 seconds
- **Manual Refresh**: Users can manually refresh the data
- **Loading States**: Smooth loading animations
- **Fallback Data**: Graceful handling when server is unreachable

### API Endpoint

The server status is available at: `/api/server-status`

Returns JSON with:

```json
{
  "name": "Hill City Roleplay",
  "playerCount": 45,
  "maxPlayers": 128,
  "status": "online",
  "uptime": "24h 15m",
  "lastUpdated": "2024-01-01T12:00:00.000Z"
}
```

### Customization

You can modify the update interval by changing the `SERVER_STATUS_UPDATE_INTERVAL` environment variable.

For production deployment, ensure your server allows CORS requests from your website domain.

## Troubleshooting

1. **Server Unreachable**: Check if your FiveM server is running and accessible
2. **CORS Issues**: Ensure your server allows requests from your website
3. **Port Issues**: Verify the server port is correct and open
4. **Rate Limiting**: The system includes fallback data to prevent errors

## Security Notes

- The API endpoint is read-only and safe for public access
- No sensitive server information is exposed
- User-Agent headers are included for proper identification
