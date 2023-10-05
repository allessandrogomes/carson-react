/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        backgroundImage: {
          'lupa': "url('/public/imagens/Cabecalho/lupa.svg')",
          'banner': "url('/public/imagens/Chamada/banner.svg')"
        },
        backgroundPosition: {
          'lupa-position': '95%'
        },
        fontFamily: {
          'archivo': ['Archivo', 'sans-serif'],
          'big-shoulders-display': ['Big Shoulders Display', 'sans-serif']

        },
        height: {
          '400': '400px',
          '600': '600px',
          '70%': '70%'
        },
        fontSize: {
          'font-56px': '56px',
          'font-10px': '10px'
        },
        width: {
          'width-340px': '340px',
          'width-300px': '300px',
          'width-7%': '7%',
          'width-600px': '600px',
          'width-400px': '400px',
          '12%': '12%'
        },
        colors: {
          'color1': '#0B2926',
          'color2': '#38BCAC',
          'color3': '#A4B3B5',
          'color4': '#FAFAFA',
          'cor-desfoque': 'rgba(0, 0, 0, 0.5)'
        },
        borderRadius: {
          'borde-radius-32px': '32px'
        },
        maxWidth: {
          '90%': '90%'
        },
        spacing: {
          '73.7': '73.7%',
          '74': '74%',
          '5%': '5%',
          '93': '93%'
        }
      },
    },
    plugins: [],
  }