import { useEffect, useState, type RefObject } from "react";

export default function useInView<T extends HTMLElement>(
  ref: RefObject<T | null>,
): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }

      observer.disconnect();
    };
  }, [ref]);

  return visible;
}