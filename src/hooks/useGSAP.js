import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAP(animations) {
  useEffect(() => {
    const instances = animations.map((anim) => {
      const tween = gsap.fromTo(
        anim.selector,
        anim.from,
        {
          ...anim.to,
          duration: anim.duration ?? 1,
          delay: anim.delay ?? 0,
          scrollTrigger: {
            trigger: anim.trigger ?? anim.selector,
            start: anim.start ?? "top 80%",
            ...anim.scrollTrigger,
          },
        },
      );

      return tween;
    });

    return () => {
      instances.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, [animations]);
}
