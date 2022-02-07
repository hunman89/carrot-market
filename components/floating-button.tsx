import Link from "next/link";
import React from "react";

interface FloatingButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({
  children,
  href,
}: FloatingButtonProps) {
  return (
    <Link href={href}>
      <a className="fixed bottom-24 right-5 bg-orange-400 rounded-full text-white p-4 shadow-xl hover:bg-orange-500 transition-colors items-center justify-center border-transparent border-0 aspect-square">
        {children}
      </a>
    </Link>
  );
}
