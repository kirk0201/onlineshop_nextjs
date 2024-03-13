import SwiperView from "@/components/swiperview";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="w-full">
        {/* 배너 광고 */}
        <SwiperView />
      </div>
      {/* 하단 Content */}
      <div className="w-[1200px] m-auto">dd</div>
    </main>
  );
}
