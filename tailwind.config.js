
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
         dropShadow: {
        'blue-glow': '0 0 10px rgba(59, 130, 246, 0.6)', // Tailwind blue-500
      },

      
    },
  },
  plugins: [function ({ addUtilities }) {
      addUtilities({
        '.ws-tight': {
          wordSpacing: '0.5rem',
        },
      });
    },
],
}; 