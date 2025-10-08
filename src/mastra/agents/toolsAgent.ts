import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
// import { readOnlyEsaMcpTools } from "../tools/esa";
import { readOnlyGithubMcpTools } from "../tools/github";

const instructions = `
あなたは、与えられたツールを使用して、ユーザーの質問に答えるエージェントです。
ツールが使えない際は、その旨をユーザーに伝えてください。
日本語で回答してください。
`;

export const toolsAgent = new Agent({
  name: "tools agent",
  model: openai("gpt-4o"),
  instructions,
  tools: {
    ...readOnlyGithubMcpTools
  },
});
