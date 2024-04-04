import Hero from "@/components/home/Hero";
import Tech from "@/components/home/Tech";

export default function Home() {
  return (
    <div className="container w-full min-h-screen p-2 m-auto md:w-3/4 md:p-5">
      <Hero />
      <Tech />
    </div>
  );
}
