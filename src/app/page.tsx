import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Jamieson Jones</h1>
        <p className="text-lg md:text-xl mb-6">
          Mechatronics Student @ UniMelb • Control Systems & Embedded Tech Enthusiast
        </p>
        <p className="text-neutral-400">
          Welcome to my digital corner of the internet. Check out my
        work, learn more about what drives me, and dive into some tech-fueled
        projects.
        </p>
        <Link
          href="/about"
          className="inline-block w-28 rounded-full border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 mt-4 mx-2"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="inline-block w-28 rounded-full border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 mt-4 mx-2"
        >
          Contact
        </Link>
        <Link
          href="/projects"
          className="inline-block w-28 rounded-full border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 mt-4 mx-2"
        >
          Projects
        </Link>
      </div>
    </main>
  );
}