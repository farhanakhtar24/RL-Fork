export const nextSlide = (currentSlide: any, slideLength: any) => {
	return (currentSlide + 1) % slideLength;
};

export const previousSlide = (currentSlide: any, slideLength: any) => {
	return (currentSlide - 1 + slideLength) % slideLength;
};
