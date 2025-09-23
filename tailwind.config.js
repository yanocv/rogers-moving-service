module.exports = {
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out",
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
      },
    },
  },
};
