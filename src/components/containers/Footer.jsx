"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

/**

 *
 * @return {JSX.Element|null} The rendered Footer component or null if on the home page.
 */
export default function Footer() {
  const pathname = usePathname();

  // Render the footer component only on pages other than the home page
  return pathname !== "/" ? (
    <footer className="border-t">
      {/* Copyright information */}
      <div className="bg-accent text-center py-4 text-accent-foreground flex justify-between items-center px-6">
        <p className="font-semibold">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/yegamatimanasa/"
            className="font-semibold hover:underline"
          >
            Manasa Yegamati
          </a>
        </p>
        <p>
          {" "}
          Say{" "}
          <a href="/contact" className="font-semibold hover:underline">
            Hello!
          </a>
        </p>
      </div>
    </footer>
  ) : null;
}
