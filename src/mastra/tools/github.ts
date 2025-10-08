import {MCPClient} from "@mastra/mcp";

export const githubMcp = new MCPClient({
  servers: {
    "github-mcp": {
      url: new URL("https://api.githubcopilot.com/mcp/"),
      requestInit: {
        headers: {
          // .envファイルにGITHUB_PERSONAL_ACCESS_TOKENを設定する必要がある
          Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN || ""}`,
        },
      },
    },
  },
});

// MCPサーバが提供している全てのツール群の取得
export const githubMcpTools = await githubMcp.getTools();
// ツール名を頼りにread onlyなツールだけに絞って取得
export const readOnlyGithubMcpTools = Object.fromEntries(
  Object.entries(githubMcpTools).filter(([toolName]) =>
    toolName.includes("_get_")
  )
);
