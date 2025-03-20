"use client"
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  url: string;
  target: "_blank" | "_self";
}

const FocusCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const items: CarouselItem[] = [
    {
      id: 1,
      image: "/Hardwar-market-demo.png",
      title: "Market-Handler",
      url: "https://hardwar-market.vercel.app/",
      target: "_blank"
    },
    {
      id: 2,
      image: "/lostronauntdemo.png",
      title: "E-commerce",
      url: "https://ecommerce-henna-iota.vercel.app/",
      target: "_self"
    },
    {
      id: 3,
      image: "/scrubberdemo.png",
      title: "Data handler",
      url: "https://lostronauntscrubber.vercel.app/",
      target: "_blank"
    },
    {
      id: 3,
      image: "/Time-Bomb_demo.png",
      title: "Time-Bomb :social media",
      url: "https://time-bomb-ruddy.vercel.app/",
      target: "_blank"
    },

  ];

  const scrollTo = (index: number): void => {
    setActiveIndex(index);
    const container = carouselRef.current;
    if (container) {
      const item = container.children[index % items.length] as HTMLElement;
      const containerWidth = container.offsetWidth;
      const itemWidth = item.offsetWidth;
      const scrollPosition = item.offsetLeft - (containerWidth - itemWidth) / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % items.length;
        scrollTo(nextIndex); // Ensure the scroll happens
        return nextIndex;
      });
    }, 5000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDragEnd = (
    e: any,
    { offset, velocity }: { offset: { x: number }; velocity: { x: number } }
  ): void => {
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe < -50) {
      setActiveIndex((prev) => (prev + 1) % items.length);
    } else if (swipe > 50) {
      setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  return (
    <div className="relative  w-full h-[500px] overflow-hidden border rounded border-amber-400 scrollbar no-scrollbar px-2">
      <div
        ref={carouselRef}
        className="flex items-center h-full overflow-x-auto scrollbar no-scrollbar"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`flex-shrink-0 w-[300px] h-[400px] mx-4 rounded-lg overflow-hidden cursor-pointer transition-all duration-1000 ${
              activeIndex % items.length === index ? "opacity-100" : "opacity-50"
            }`}
            style={{
              scale: activeIndex % items.length === index ? 1.15 : 0.9
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            onClick={() => scrollTo(index)}
          >
            <a
              href={item.url}
              target={item.target}
              className="block w-full h-full relative"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1682687220199-d0124f48f95b";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => scrollTo((activeIndex - 1 + items.length) % items.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        onClick={() => scrollTo((activeIndex + 1) % items.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default FocusCarousel;