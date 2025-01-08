import { ReactNode } from "react";

interface footerContainerProps {
    children: ReactNode;
}

export default function FooterContainer ({ children }: footerContainerProps ) {
    return (
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {children}
        </div>
    );
}