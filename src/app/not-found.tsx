import Link from "next/link";
import { site } from "@/data/site";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-800">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-zinc-600">
        That page doesn&apos;t exist on {site.name}&apos;s portfolio.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-teal-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
      >
        Back to home
      </Link>
    </main>
  );
}
