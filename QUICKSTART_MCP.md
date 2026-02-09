# 🚀 Quick Start: Testing MCP Server with Claude Desktop

## ✅ Automated Setup (Recommended)

The easiest way to set up and test the MCP server:

```bash
# 1. Build the project
npm run build

# 2. Auto-configure Claude Desktop
npm run mcp:configure

# 3. Restart Claude Desktop
# (Close and reopen the app completely)
```

That's it! The MCP server is now configured. ✨

## 🧪 Testing with Claude

After restarting Claude Desktop, you should see a 🔌 icon indicating MCP servers are connected.

### Example Prompts to Try:

**1. Basic Stock Search:**
```
Find large-cap stocks with price above $100
```

**2. Crypto Search:**
```
Show me cryptocurrencies with market cap over 1 billion
```

**3. Field Discovery:**
```
What RSI fields are available for stocks?
```

**4. Custom Technical Analysis:**
```
Find stocks with RSI below 30, MACD positive, and volume over 1 million
```

**5. Value Investing:**
```
Find undervalued stocks with P/E ratio below 15 and dividend yield above 3%
```

**6. Top Movers:**
```
Show me today's top 10 losing cryptocurrencies
```

**7. Sector Analysis:**
```
Find technology stocks with market cap between 1B-10B sorted by price
```

**8. Complex Multi-Filter:**
```
Find stocks between $50-$200 with volume over 1 million and market cap between 1B-10B
```

## 🔍 Verify Connection

In Claude Desktop, you should see:
- **MCP indicator**: 🔌 icon in the interface
- **Server name**: "tradingview-screener"
- **Available tools**: 9 tools including discover_fields, custom_query, search_stocks, search_crypto, search_forex, get_top_movers, and more

## 🐛 Debugging

### Check if Server is Running

The server runs automatically when Claude calls it. To test manually:

```bash
npm run mcp:server
```

You should see: `TradingView Screener MCP server running`

### View Claude Logs

**macOS:**
```bash
tail -f ~/Library/Logs/Claude/mcp*.log
```

**Linux:**
```bash
tail -f ~/.local/share/Claude/logs/mcp*.log
```

### Check Configuration

```bash
cat ~/.config/Claude/claude_desktop_config.json
```

Should show:
```json
{
  "mcpServers": {
    "tradingview-screener": {
      "command": "node",
      "args": ["/path/to/dist/mcp/server.js"],
      "env": {}
    }
  }
}
```

## 🔧 Manual Configuration

If the automated setup doesn't work, manually edit:

**macOS/Linux:**
```
~/.config/Claude/claude_desktop_config.json
```

**Windows:**
```
%APPDATA%\Claude\claude_desktop_config.json
```

Add:
```json
{
  "mcpServers": {
    "tradingview-screener": {
      "command": "node",
      "args": [
        "/Users/i324180/Development/github.com/tradingview-screener-api/dist/mcp/server.js"
      ],
      "env": {}
    }
  }
}
```

## 📋 Available Tools

The MCP server provides **9 powerful tools** for querying financial markets:

### 1. discover_fields
Search through 3500+ available fields/indicators by keyword.

**Parameters:**
- `search_term` (string): Keyword to search (e.g., "rsi", "volume", "earnings", "dividend")
- `asset_type` (string): Asset type - stock, crypto, forex, bond, futures, coin (default: "stock")
- `limit` (number): Maximum results (default: 20)

**Example:**
```
What RSI fields are available for stocks?
```

### 2. list_field_types
List available field categories with sample fields.

**Parameters:**
- `asset_type` (string): Asset type (default: "stock")

**Example:**
```
Show me what types of fields are available
```

### 3. custom_query
Advanced query with any fields and custom filters. Most flexible tool.

**Parameters:**
- `asset_type` (string): Asset type (default: "stock")
- `fields` (string): Comma-separated field names (e.g., "NAME,PRICE,RSI,MACD_LEVEL_12_26")
- `filters` (string): JSON array of filters: `[{"field": "PRICE", "op": ">=", "value": 100}]`
- `sort_by` (string): Field name to sort by
- `ascending` (boolean): Sort direction (default: false)
- `limit` (number): Max results (default: 25, max: 100)

**Example:**
```
Find stocks with RSI below 30 and volume over 1 million
```

### 4. search_stocks
Search for stocks with common filters (simplified interface).

**Parameters:**
- `min_price` (number): Minimum price in USD
- `max_price` (number): Maximum price in USD
- `min_market_cap_billions` (number): Minimum market cap in billions
- `max_market_cap_billions` (number): Maximum market cap in billions
- `sectors` (string): Comma-separated sectors
- `sort_by` (string): Sort by market_cap, price, volume, or change
- `limit` (number): Max results (default: 25, max: 100)

**Example:**
```
Find large-cap tech stocks priced above $100
```

### 5. search_crypto
Search for cryptocurrencies.

**Parameters:**
- `min_volume_millions` (number): Minimum 24h volume in millions USD
- `min_market_cap_billions` (number): Minimum market cap in billions
- `limit` (number): Max results (default: 25, max: 100)

**Example:**
```
Show me top cryptocurrencies with market cap over 1 billion
```

### 6. search_forex
Search forex currency pairs.

**Parameters:**
- `limit` (number): Max results (default: 25, max: 100)

**Example:**
```
Show me forex pairs
```

### 7. get_top_movers
Get top gaining or losing assets.

**Parameters:**
- `asset_type` (string): stock or crypto (default: "stock")
- `direction` (string): gainers or losers (default: "gainers")
- `limit` (number): Number of results (default: 10, max: 50)

**Example:**
```
Show me today's top 10 gaining stocks
```

### 8. list_sectors
List available stock sectors for filtering.

**Example:**
```
What sectors are available?
```

### 9. list_filter_operators
List available filter operators for custom_query with examples.

**Example:**
```
What filter operators can I use in custom queries?
```

## 🎯 What Claude Can Do

With the enhanced MCP server, Claude can:

✅ Search 3500+ fields across stocks, crypto, forex, bonds, futures
✅ Discover available fields by keyword search
✅ Create complex custom queries with multiple filters
✅ Find top gainers and losers
✅ Screen stocks by price, volume, market cap, sectors
✅ Analyze cryptocurrencies and forex pairs
✅ Use technical indicators (RSI, MACD, moving averages)
✅ Apply flexible filtering with 8+ operators (>=, >, <=, <, ==, !=, match, in_range)
✅ Return formatted markdown tables
✅ Handle natural language queries

## 🚫 Common Issues

### Issue: Server not appearing in Claude
**Solution:**
1. Verify Node.js 18+ installed: `node --version`
2. Rebuild: `npm run build`
3. Reconfigure: `npm run mcp:configure`
4. Restart Claude Desktop completely

### Issue: "Server crashed" error
**Solution:**
1. Check logs: `tail -f ~/Library/Logs/Claude/mcp*.log`
2. Test manually: `npm run mcp:server`
3. Reinstall dependencies: `npm install`

### Issue: No response from tools
**Solution:**
1. Check Claude Desktop has MCP enabled
2. Verify configuration file exists and is valid JSON
3. Try simpler query: "Search for stocks"

## 📚 Next Steps

1. ✅ Test basic queries
2. ✅ Try complex multi-filter searches
3. ✅ Monitor performance
4. 📖 Read full documentation: `docs/integration/claude-desktop.md`
5. 🛠️ Extend with custom tools: `docs/integration/custom-tools.md`

## 💡 Pro Tips

- Start with simple queries to verify connection
- Claude will automatically parse natural language to tool parameters
- Check logs if queries don't work as expected
- The server starts automatically when Claude needs it
- Use specific numbers for better results ("market cap over 1 billion" → 1000000000)

## 🔗 Resources

- Full Testing Guide: `MCP_TESTING_GUIDE.md`
- Claude Desktop Integration: `docs/integration/claude-desktop.md`
- MCP Server Documentation: `docs/integration/mcp-server.md`
- Custom Tools Guide: `docs/integration/custom-tools.md`

---

**Ready to test?** Restart Claude Desktop and try: "Find tech stocks with price above $100" 🚀
