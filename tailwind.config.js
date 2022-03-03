module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./shape.svg')",
      },
      spacing: {
        450: '28.125rem',
        736: '46rem',
      },
    },
  },
  plugins: [],
};
