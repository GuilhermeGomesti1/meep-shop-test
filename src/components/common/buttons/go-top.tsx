import { useEffect, useState } from "react";
import { IconTop } from "../icons/arrow-top";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const halfPageHeight = window.innerHeight / 2;
      const threshold = halfPageHeight * 1;

      setShowButton(scrollPosition > threshold);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showButton) {
    return null;
  }

  return (
    <div
      className="fixed bottom-[200px] right-[40px] z-[1000] flex flex-col items-center justify-center bg-[#333] text-white w-[50px] h-[50px] rounded-full cursor-pointer animate-pulse sm:w-[40px] sm:h-[40px] sm:right-[10px]"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <IconTop />
      <p className="mb-[-4px] mt-[10px] text-[10px] sm:text-[8px] sm:mb-[-2px]">
        Topo
      </p>
    </div>
  );
};

export default BackToTopButton;
