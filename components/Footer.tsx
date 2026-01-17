import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-paper-faint">
      <Container>
        <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-mono text-paper-dim">© 2026 · Built with Next.js</p>
          <div className="flex gap-5 text-sm text-paper-dim">
            <Link href="/work" className="hover:text-paper-ink transition underline-offset-4 hover:underline">Work</Link>
            <Link href="/about" className="hover:text-paper-ink transition underline-offset-4 hover:underline">About</Link>
            <Link href="/contact" className="hover:text-paper-ink transition underline-offset-4 hover:underline">Contact</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
