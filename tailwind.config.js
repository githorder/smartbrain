module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      minHeight: {
        450: '28.125rem',
        578: '36.125rem',
        736: '46rem',
      },
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
