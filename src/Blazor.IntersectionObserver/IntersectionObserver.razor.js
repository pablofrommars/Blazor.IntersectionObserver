export function construct(options) {
	return new IntersectionObserver(entries => {
		entries.forEach(entry => {
			entry.target.dispatchEvent(new CustomEvent("intersectionchanged", {
				bubbles: true,
				detail: { ratio: entry.intersectionRatio }
			}));
		});
	}, options);
}