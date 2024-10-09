import { useEffect } from "react";

const ScrollReveal = ({
  selector = ".animated-item",
  options = { duration: 1000, distance: "10px", easing: "ease-in-out" },
}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const revealElement = (element: HTMLElement) => {
      element.style.opacity = "0";
      element.style.transform = `translateY(${options.distance})`;

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              element.style.transition = `opacity ${options.duration}ms ${options.easing}, transform ${options.duration}ms ${options.easing}`;
              element.style.opacity = "1";
              element.style.transform = "translateY(0)";
              observer.unobserve(element);
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      observer.observe(element);
    };

    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        revealElement(element);
      }
    });
  }, [selector, options]);

  return null;
};

export default ScrollReveal;
