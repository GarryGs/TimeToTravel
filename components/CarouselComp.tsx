"use client";

import { useEffect } from 'react';

export const CarouselComponent = () => {
    useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') return;

        // Dynamically import Flowbite to ensure it's only loaded in the client
        import('flowbite').then(({ Carousel }) => {
            const carouselElement = document.getElementById('carousel-example');

            if (!carouselElement) return;

            const items = [
                { position: 0, el: document.getElementById('carousel-item-1') as HTMLElement },
                { position: 1, el: document.getElementById('carousel-item-2') as HTMLElement },
                { position: 2, el: document.getElementById('carousel-item-3') as HTMLElement },
                { position: 3, el: document.getElementById('carousel-item-4') as HTMLElement },
            ];

            const options = {
                defaultPosition: 1,
                interval: 3000,
                indicators: {
                    activeClasses: 'bg-white dark:bg-gray-800',
                    inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
                    items: items,
                },
                onNext: () => console.log('Next slider item is shown'),
                onPrev: () => console.log('Previous slider item is shown'),
                onChange: () => console.log('New slider item has been shown'),
            };

            const instanceOptions = {
                id: 'carousel-example',
                override: true,
            };

            const carousel = new Carousel(carouselElement, items, options, instanceOptions);
            carousel.cycle();

            const prevButton = document.getElementById('data-carousel-prev');
            const nextButton = document.getElementById('data-carousel-next');

            const handlePrev = () => carousel.prev();
            const handleNext = () => carousel.next();

            if (prevButton) prevButton.addEventListener('click', handlePrev);
            if (nextButton) nextButton.addEventListener('click', handleNext);

            return () => {
                if (prevButton) prevButton.removeEventListener('click', handlePrev);
                if (nextButton) nextButton.removeEventListener('click', handleNext);
            };
        });
    }, []);

    return (
        <div id="carousel-example" className="relative w-full mb-16" data-carousel="static">
            <div className="relative h-[25vh] overflow-hidden rounded-lg sm:h-[30vh] xl:h-[60vh] 2xl:h-[70vh]">
                <div id="carousel-item-1" className="duration-700 ease-in-out" data-carousel-item>
                    <img
                        className="w-full h-full object-fill"
                        src="https://w5lyingog1fowzo0.public.blob.vercel-storage.com/carousel/image1-y2g9ETKsW9ZQ2DzzPxcdLG4d2VjHeT.webp"
                        alt="Slide 1"
                    />
                </div>
                <div id="carousel-item-2" className="duration-700 ease-in-out" data-carousel-item>
                    <img
                        className="w-full h-full object-fill"
                        src="https://w5lyingog1fowzo0.public.blob.vercel-storage.com/carousel/image2-ZLAPWQMXO9feQ7xXzUgGfuUTPGVptr.webp"
                        alt="Slide 2"
                    />
                </div>
                <div id="carousel-item-3" className="duration-700 ease-in-out" data-carousel-item>
                    <img
                        className="w-full h-full object-fill"
                        src="https://w5lyingog1fowzo0.public.blob.vercel-storage.com/carousel/image3-uQ5LKV4qvvaxTw2FrfVLtHkM9arGV5.jpg"
                        alt="Slide 3"
                    />
                </div>
                <div id="carousel-item-4" className="duration-700 ease-in-out" data-carousel-item>
                    <img
                        className="w-full h-full object-fill"
                        src="https://w5lyingog1fowzo0.public.blob.vercel-storage.com/carousel/image4-xPBDJDZI2ILhSXKNliSYDTmjQ1ztfz.jpg"
                        alt="Slide 4"
                    />
                </div>
            </div>
            <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
                <button
                    id="carousel-indicator-1"
                    type="button"
                    className="h-3 w-3 rounded-full"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    id="carousel-indicator-2"
                    type="button"
                    className="h-3 w-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                ></button>
                <button
                    id="carousel-indicator-3"
                    type="button"
                    className="h-3 w-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 3"
                ></button>
                <button
                    id="carousel-indicator-4"
                    type="button"
                    className="h-3 w-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 4"
                ></button>
            </div>
            <button
                id="data-carousel-prev"
                type="button"
                className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                    <svg
                        className="h-4 w-4 text-white dark:text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="hidden">Previous</span>
                </span>
            </button>
            <button
                id="data-carousel-next"
                type="button"
                className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                    <svg
                        className="h-4 w-4 text-white dark:text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="hidden">Next</span>
                </span>
            </button>
        </div>
    );
};
