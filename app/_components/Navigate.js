import Link from "next/link";

function Navigate() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/upload"
            className="hover:text-accent-400 transition-colors"
          >
            Upload
          </Link>
        </li>
        <li>
          <Link
            href="/Blog"
            className="hover:text-accent-400 transition-colors"
          >
            Blog
          </Link>
        </li>

        <li className="cursor-pointer">
          <img className="h-8 rounded-full" src="" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigate;
