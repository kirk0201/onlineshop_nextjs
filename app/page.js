import SwiperView from "@/components/swiperview";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between">
      <div className="w-full h-[150px]">
        <SwiperView />
      </div>
    </main>
  );
}
