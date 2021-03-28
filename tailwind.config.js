module.exports = {
  theme: {
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      logo: ['Fjalla One', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#301b6b',
        muted: 'rgba(0, 0, 0, 0.64)',
      },
      borderRadius: {
        half: '50%',
      },
      fontSize: {
        logo: '18px',
        'logo-large': '32px',
        '4.5xl': '2.5rem',
      },
    },
  },
  variants: {},
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue',
      './src/assets/**/*.css',
      'vue-transition-expand/dist/vue-transition-expand.css',
    ],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
      ],
    },
  },
}
