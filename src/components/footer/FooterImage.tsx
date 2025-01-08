import { ReactNode } from "react";

interface footerImageProps {
    children: ReactNode;
}

export default function FooterImage ({ children }: footerImageProps) {
    return (
        <div className="md:flex md: justify-between">
            <div className="mb-6 md:mb-0">
                {children}
            </div>
        </div>
    );

}