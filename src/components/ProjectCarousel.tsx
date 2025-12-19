
import { useState, type ReactElement, type ReactNode } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";


interface ProjectCarouselProps {
  children: ReactNode;
}


export default function ProjectCarousel({ children }: ProjectCarouselProps) {
    const slides = (Array.isArray(children) ? children : [children]) as ReactElement[];
    const [curr, setCurr] = useState(0);

    if (slides.length === 0) return null;

    const prev = () => setCurr(i => (i === 0 ? slides.length - 1 : i - 1));
    const next = () => setCurr(i => (i === slides.length - 1 ? 0 : i + 1));

    return (
      <div className="relative max-w-4xl overflow-hidden rounded-xl ">
        
        <div
          className="flex rounded-xl transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${curr * 100}%)`
            
          }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="min-w-full rounded-xl">
              {slide}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none ">
          <button onClick={prev} aria-label="Previous" className="pointer-events-auto">
            <ChevronLeft />
          </button>
          <button onClick={next} aria-label="Next" className="pointer-events-auto">
            <ChevronRight />
          </button>
        </div>
      </div>
    );
}