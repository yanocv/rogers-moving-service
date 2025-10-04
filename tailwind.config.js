module.exports = {
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "accordion-down": "accordion-down 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "accordion-up": "accordion-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
};
