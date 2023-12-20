import { useEffect } from "react";

const useScrollToTop = () => {
    useEffect(() => {
        scrollToTop();
    }, []);

    const scrollToTop = () => {
        document
            .getElementById("top")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
};

export default useScrollToTop;
