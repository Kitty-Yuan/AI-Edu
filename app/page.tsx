import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LS26 共创观察平台",
  description: "儿童户外观察、任务卡生成、导入整理与作文生成平台。",
};

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh", margin: 0 }}>
      <iframe
        src="/legacy/index.html"
        title="LS26 共创观察平台"
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
      />
    </main>
  );
}
