export async function POST() {
  return Response.json({
    ok: false,
    error: "分享版网站不能直接把任务写进你本地的 LS26。请在本地版本里连接设备后再下发任务。"
  }, { status: 400 });
}
