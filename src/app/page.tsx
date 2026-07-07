import { HeroFallback } from "@/components/HeroFallback";
import { Typewriter } from "@/components/Typewriter";

export default function Home() {
  return (
    <header>
      <h1 className="m-0 text-[1em] font-normal leading-[inherit]">
        <pre className="m-0">
          <code>
            <HeroFallback />
            <Typewriter />
          </code>
        </pre>
      </h1>
    </header>
  );
}
