/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  buildOptions: {
    baseUrl: 'https://achess01.github.io/avocados',
  },
}
