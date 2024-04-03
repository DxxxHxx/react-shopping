import Hero from "@/components/about/Hero";
import Tech from "@/components/about/Tech";

export default function About() {
  return (
    <div className="container w-full min-h-screen p-2 m-auto md:w-3/4 md:p-5">
      <Hero />
      <Tech />
    </div>
  );
}
