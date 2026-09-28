import * as React from "react";
import { Carousel } from "rc-slider";
import "rc-slider/assets/rc-slider.css";

interface CoverflowCarouselProps {
  items: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
}

export const CoverflowCarousel: React.FC<CoverflowCarouselProps> = ({
  items,
  autoPlay = false,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [autoplayTimeout, setAutoplayTimeout] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (autoPlay) {
      const timeout = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, interval);
      setAutoplayTimeout(timeout);

      return () => clearInterval(autoplayTimeout);
    }
  }, [autoPlay, interval, items.length]);

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleItems = items.map((item, index) => ({
    ...item,
    isActive: index === currentIndex,
  }));

  return (
    <div className="relative w-full">
      <Carousel
        className="w-full"
        index={currentIndex}
        onChange={handleSlideChange}
        renderItem={(_, { index }) => (
          <div
            key={index}
            className="p-4 border rounded transition-all duration-500 ease-out hover:scale-[1.05]"
            style={{
              transform: `perspective(1000px) rotateY(${
                (index - currentIndex) * 30
              }deg)`,
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover rounded"
            />
            <div className="p-4">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        )}
        style={{
          // rc-slider specific styles
          .slick-slide:focus {
            outline: none;
          },
        }}
      />
    </div>
  );
};