export async function POST() {
  return Response.json({
    ok: false,
    error: "分享版网站不能直接结束你本地的 LS26 会话。请在本地版本里完成设备导回。"
  }, { status: 400 });
}
