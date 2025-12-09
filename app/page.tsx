import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Home(){
  return(
    <div className="flex flex-col">
      <main className="min-h-screen">
        <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />
      </main>
    </div>
  );
}