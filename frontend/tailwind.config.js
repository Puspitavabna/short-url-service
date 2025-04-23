/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'neon-blue-minimized': '0 0 2px #00FFFF, 0 0 5px #00FFFF', // Reduced glow intensity
        'neon-pink-minimized': '0 0 2px #FF00FF, 0 0 5px #FF00FF', // Reduced glow intensity
        'pink-drop': '2px 2px 4px #FF00FF', // Pink drop shadow (unchanged)
        'cyan-drop': '2px 2px 4px #00FFFF', // Pink drop shadow (unchanged)
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-neon-blue-minimized': {
          textShadow: '0 0 2px #00FFFF, 0 0 5px #00FFFF',
        },
        '.text-shadow-neon-pink-minimized': {
          textShadow: '0 0 2px #FF00FF, 0 0 5px #FF00FF',
        },
        '.text-shadow-pink-drop': {
          textShadow: '2px 2px 4px #FF00FF',
        },
        '.text-shadow-cyan-drop': {
          textShadow: '2px 2px 4px #00FFFF',
        },
        
      };
      addUtilities(newUtilities, ['responsive']);
    },
  ],
};
