import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there is a hash, try to scroll to the element
        if (hash) {
            // Small timeout to ensure the element is rendered and layout is stable
            const timer = setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
            return () => clearTimeout(timer);
        }
        // Otherwise, standard scroll to top
        else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
