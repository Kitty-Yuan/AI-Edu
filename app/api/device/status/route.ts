export async function GET() {
  return Response.json({
    connected: false,
    transportId: "",
    productId: "",
    productMatch: false,
    interactionMode: "remote_unavailable",
    syncedTask: null,
    statusText: "分享版网站不直接连接你的本地 LS26。设备相关功能请在本地版本使用。"
  });
}
