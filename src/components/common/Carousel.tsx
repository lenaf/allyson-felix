import { Children, useEffect, useRef, useState } from "react";
import Button from "./Button";

interface CarouselProps extends React.HTMLProps<HTMLDivElement> {
    id: string;
    isAutoPlay?: boolean;
    showArrows?: boolean;
    itemsToShow?: number;
    gap?: number;
}

export function Carousel({ className = '', children, id, isAutoPlay = false, showArrows = true, itemsToShow = 1, gap, ...rest }: CarouselProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const itemsLength = Children.count(children);
    const autoPlayIntervalId = useRef<any>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const clearAutoPlayInterval = () => clearInterval(autoPlayIntervalId.current);

    const isAtStart = activeIndex === 0;
    const isAtEnd = activeIndex >= (itemsLength - itemsToShow);

    const scrollToIndex = (index: number) => {
        const carousel = carouselRef.current;
        if (carousel) {
            const items = carousel.querySelectorAll('.carousel-item');
            if (items && items[index]) {
                const item = items[index] as HTMLElement;
                carousel.scrollTo({ left: item.offsetLeft, behavior: 'smooth' });
                setActiveIndex(index);
            }
        }
    };

    useEffect(() => {
        if (isAutoPlay) {
            if (autoPlayIntervalId.current) clearAutoPlayInterval();
            autoPlayIntervalId.current = setInterval(() => {
                scrollToIndex(isAtEnd ? 0 : activeIndex + 1)
            }, 4000);
        } else {
            clearAutoPlayInterval();
        }
        return clearAutoPlayInterval;
    }, [isAutoPlay, activeIndex, isAtEnd]);

    useEffect(() => {
        const carouselElement = carouselRef.current;
        if (!carouselElement) return;

        let scrollTimeout: NodeJS.Timeout;

        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // Scroll has ended, determine active index
                const scrollLeft = carouselElement.scrollLeft;
                const items = carouselElement.querySelectorAll('.carousel-item');
                let newActiveIndex = 0;

                for (let i = 0; i < items.length; i++) {
                    const item = items[i] as HTMLElement;
                    // If the item's left offset is less than or equal to scrollLeft, it's potentially the active one
                    // We want the first item that is fully or mostly visible
                    if (item.offsetLeft <= scrollLeft + 1) { // Add a small tolerance
                        newActiveIndex = i;
                    } else {
                        break; // Items are ordered, so we can stop
                    }
                }
                setActiveIndex(newActiveIndex);
            }, 150); // Debounce time
        };

        carouselElement.addEventListener('scroll', handleScroll);

        return () => {
            carouselElement.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [itemsLength]);

    return (
        <div className={`relative w-full px-4 ${className}`}>
            <div
                {...rest}
                id={id}
                ref={carouselRef}
                className={`carousel relative w-full snap-x snap-mandatory touch-pan-x overflow-x-scroll overflow-y-hidden ${`gap-${gap}`}`}
                style={{ WebkitOverflowScrolling: 'touch' }}
            >
                {Children.map(children, (child, index) =>
                    <div
                        key={index}
                        className={`carousel-item flex-shrink-0 snap-start pointer-events-auto`}
                        style={{
                            flexBasis: itemsToShow === 1
                                ? '100%'
                                : `calc((100% - ${gap ? gap * 4 : 0}px * ${itemsToShow - 1}) / ${itemsToShow})`
                        }}
                    >
                        {child}
                    </div>)}
            </div>
            {showArrows && <div className="absolute h-full -left-8 -right-8 top-1/3 flex -translate-y-1/3 transform justify-between text-2xl">
                {<Button
                    disabled={isAtStart}

                    id='scroll-back'
                    onClick={() => {
                        scrollToIndex(isAtStart ? itemsLength - 1 : activeIndex - 1);
                    }}
                    className={`btn-circle btn-xl h-full text-3xl m-0  ${isAtStart ? 'invisible' : ''}`}
                >
                    ❮
                </Button>}
                {<Button
                    disabled={isAtEnd}
                    id='scroll-forward'
                    onClick={() => {
                        scrollToIndex(isAtEnd ? 0 : activeIndex + 1);
                    }}
                    className={`btn-circle btn-xl h-full text-3xl m-0  ${isAtEnd ? 'invisible' : ''}`}
                >
                    ❯
                </Button>}
            </div>}
        </div>
    )
}
