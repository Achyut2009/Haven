import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import TextScramble from "@/components/text-scramble";
import {judges} from "./data";
import Image from "next/image";
export default function Home() {
  const beforeCode = `import { NextRequest } from 'next/server';
export const middleware = async (req: NextRequest) => {
  let user = undefined;
  let team = undefined;
  const token = req.headers.get('token'); 
  if(req.nextUrl.pathname.startsWith('/auth')) {
    user = await getUserByToken(token);
    if(!user) {
      return NextResponse.redirect('/login');
    }
  }
  if(req.nextUrl.pathname.startsWith('/team')) {
    user = await getUserByToken(token);
    if(!user) {
      return NextResponse.redirect('/login');
    }
    const slug = req.nextUrl.query.slug;
    team = await getTeamBySlug(slug); // [!code highlight]
    if(!team) { // [!code highlight]
      return NextResponse.redirect('/'); // [!code highlight]
    } // [!code highlight]
  } // [!code highlight]
  return NextResponse.next(); // [!code highlight]
}
export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'], // [!code highlight]
};`;
  const afterCode = `import { createMiddleware, type MiddlewareFunctionProps } from '@app/(auth)/auth/_middleware';
import { auth } from '@/app/(auth)/auth/_middleware'; // [!code --]
import { auth } from '@/app/(auth)/auth/_middleware'; // [!code ++]
import { team } from '@/app/(team)/team/_middleware';
const middlewares = {
  '/auth{/:path?}': auth,
  '/team{/:slug?}': [ auth, team ],
};
export const middleware = createMiddleware(middlewares); // [!code focus]
export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};`;
  return (
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
      <div className="flex flex-col gap-5 justify-center items-center p-8">
        <div className="text-7xl font-semibold mb-4 text-pink-400 fill-cyan-400 drop-shadow-lg drop-shadow-pink-400">
          Meet the Judges
        </div>
        <div className="max-w-4xl text-md text-gray-700 dark:text-gray-300 text-center">
          Our esteemed panel of judges comprises industry leaders and experts who bring a wealth of knowledge and experience to the table. They will be evaluating projects based on innovation, technical excellence, and real-world impact. Get ready to impress them with your creativity and skills!!
        </div>
        <div className="flex flex-col gap-10 justify-center">
          {judges.map((item, index) => (
            <div className="" key={index}>
              <div>
                {item.name}
              </div>
              {item.title.map((p, index) => (
                <div key={index}>
                  {p}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}