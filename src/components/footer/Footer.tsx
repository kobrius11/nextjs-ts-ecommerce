import { ReactNode } from "react";

interface footerProps {
  children: ReactNode;
}

export default function Footer({ children }: footerProps) {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {children}
      </div>
    </footer>
  );
}
