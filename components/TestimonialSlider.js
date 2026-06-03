import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "../data/siteData";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonial-slider">
      <Quote size={34} />
      <p>{testimonial.quote}</p>
      <div>
        <strong>{testimonial.name}</strong>
        <span>{testimonial.role}</span>
      </div>
      <div className="slider-controls">
        <button
          type="button"
          className="icon-button"
          aria-label="Previous testimonial"
          onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          className="icon-button"
          aria-label="Next testimonial"
          onClick={() => setIndex((index + 1) % testimonials.length)}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
