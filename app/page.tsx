import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import TextScramble from "@/components/text-scramble";

export default function Home(){
  return(
    <div className="flex flex-col">
      <main className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />
      <h1 className="text-7xl font-semibold mb-4 text-pink-600 fill-cyan-500 drop-shadow-xl drop-shadow-pink-600">
        <TextScramble 
         text="Welcome to Haven"
        />
      </h1>
      </main>
    </div>
  );
}