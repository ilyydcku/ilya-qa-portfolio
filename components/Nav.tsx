import Link from "next/link";
import { Container } from "./Container";
import { LocaleSwitch } from "./Locale";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-paper-faint bg-[#07070A]/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-mono text-xs tracking-tightish text-paper-dim hover:text-paper-ink transition">
            ILYA / QA
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <Link href="/work" className="text-paper-dim hover:text-paper-ink transition underline-offset-4 hover:underline">
              Work
            </Link>
            <Link href="/about" className="text-paper-dim hover:text-paper-ink transition underline-offset-4 hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-paper-dim hover:text-paper-ink transition underline-offset-4 hover:underline">
              Contact
            </Link>
            <LocaleSwitch />
          </nav>
        </div>
      </Container>
    </header>
  );
}
