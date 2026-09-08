export function SkipLink() {
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-teal-800 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none"
    >
      Skip to content
    </a>
  );
}
