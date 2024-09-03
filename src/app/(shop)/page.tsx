import { titleFonts } from "@/config/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hello word</div>
      <h1 className={`${titleFonts.className} font-bold`}>hola mundo</h1>
    </main>
  );
}
