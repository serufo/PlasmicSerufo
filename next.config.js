
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['4KnkHUpsYZ4EPg6SVi6WhS'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  