/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary-background': '#3448AA',
        'secondary-background': '#EDF0FF',
        'tertiary-background': '#F4F7FE',
        'btn-secondary': '#23AAC8',
        'btn-tertiary': '#E53333',
      },
      textColor: {
        'primary-text': '#3448AA',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mons: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      customButtons: {
        base1: {
          borderRadius: '10px',
          backgroundImage:
            'linear-gradient(99deg, #1F295C -26.62%, #6576CD 106.72%)',
        },
        base2: {
          borderRadius: '8px',
          backgroundColor: '#4CAF50',
        },
      },
      boxShadow: {
        shadow1: '0px 4px 15px rgba(0, 0, 0, 0.06)',
        shadow2: '0px 4px 30px 0px rgba(0, 0, 0, 0.10)',
        shadow3: '0px 5.725px 49.067px -13.902px rgba(0, 0, 0, 0.08)',
      },
      screens: {
        lg: '1250px',
        xl: '1366px',
        '3xl': '1700px',
      },
    },
  },
  plugins: [],
};
