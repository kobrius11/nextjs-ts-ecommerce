import { ReactNode } from "react";

export interface baseCardProps {
  children: ReactNode;
  className: string;
}

export default function BaseCard({ children, className = "" }: baseCardProps) {
  return (
    <div className={`rounded-ld border shadow ${className}`}>{children}</div>
  );
}
