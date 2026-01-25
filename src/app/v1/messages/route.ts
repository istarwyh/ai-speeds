// Re-export the API handler from /api/v1/messages
// This provides compatibility with Claude Code which uses /v1/messages endpoint
export { POST, runtime } from '@/app/api/v1/messages/route';
