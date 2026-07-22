export async function GET() {
  return Response.json({
    ok: true,
    model: process.env.DEEPSEEK_MODEL || "deepseek-v4-flash",
    configured: Boolean(process.env.DEEPSEEK_API_KEY),
    deviceConnected: false,
    deviceProductMatch: false
  });
}
