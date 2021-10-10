// tailwind.config.js

module.exports = {
	purge: ["./src/**/*.{ts,tsx}"],
	theme: {},
	variants: {
		extend: {
			backgroundColor: ["responsive", "hover", "focus", "group-hover"],
			textColor: ["responsive", "hover", "focus", "group-hover"],
		},
	},
	plugins: [],
};
