import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col text-center px-20 pt-20 gap-10">
        <h1 className="text-6xl">What is Site Generation?</h1>
        <p className="text-3xl">It is how any page loads from us to you.</p>
        <h2 className="text-5xl">Why do we care?</h2>
        <ul className="list-disc list-inside text-left text-3xl">
          <li>The wrong choice will prevent Google (and other search engines) from reaching out to us.</li>
          <li>The right choice will speed up the loading process of our pages.</li>
          <li>The wrong choice will lead to us heavylifting the more our pages are acccessed around the world.</li>
        </ul>
      </div>
      <div className="p-20">
        <h2 className="text-5xl text-center mb-8">Types of Site Generation</h2>
        <ul className="flex justify-around">
          <li><Link href="/ssg"><div className="hover:bg-white/10 flex flex-col items-center justify-center gap-1 p-10"><div className="bg-white/10 text-3xl rounded-full px-6 py-8">SSG</div><div className="text-2xl text-center">Static Site Generation</div></div></Link></li>
          <li><Link href="/ssr"><div className="hover:bg-white/10 flex flex-col items-center justify-center gap-1 p-10"><div className="bg-white/10 text-3xl rounded-full px-6 py-8">SSR</div><div className="text-2xl text-center">Server Side Rendering</div></div></Link></li>
          <li><Link href="/isr"><div className="hover:bg-white/10 flex flex-col items-center justify-center gap-1 p-10"><div className="bg-white/10 text-3xl rounded-full px-6 py-8">ISR</div><div className="text-2xl text-center">Incremental Site Rendering</div></div></Link></li>
          <li><Link href="/csr"><div className="hover:bg-white/10 flex flex-col items-center justify-center gap-1 p-10"><div className="bg-white/10 text-3xl rounded-full px-6 py-8">CSR</div><div className="text-2xl text-center">Client Side Rendering</div></div></Link></li>
        </ul>
      </div>
    </div>
  );
}
