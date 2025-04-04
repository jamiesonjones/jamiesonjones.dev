// src/app/projects/page.tsx (Projects placeholder)
import Link from "next/link";

export default function ProjectsPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          Projects Under Construction
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-xl text-center">
          I'm currently building out this section to showcase some cool things
          I've been working on — from embedded systems and automation
          experiments to control systems and amateur rocket projects.
        </p>
        <div className="mt-10 text-sm text-gray-500">
          <code>src/app/projects/page.tsx</code>
        </div>
        <Link
          href="/"
          className="inline-block rounded-full border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 mt-8"
        >
          Home
        </Link>
      </div>
    );
  }
  