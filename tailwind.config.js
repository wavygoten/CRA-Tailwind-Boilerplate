// tailwind.config.js

module.exports = {
	purge: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// new
				primary: "var(--color-primary)", // new
				secondary: "var(--color-secondary)", // new
				whiteAlt: "var(--color-white-alt)", // new
			}, // new
		},
	},
	variants: {
		extend: {
			backgroundColor: ["responsive", "hover", "focus", "group-hover"],
			textColor: ["responsive", "hover", "focus", "group-hover"],
		},
	},
	plugins: [],
};
