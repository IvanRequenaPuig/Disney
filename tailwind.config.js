export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: { preflight: false }, // evita choques con Bootstrap
  theme: { extend: { colors: { disney: '#0033cc', ink: '#1c2340' } } },
}
