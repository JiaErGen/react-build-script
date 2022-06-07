module.exports = {
  presets: [
    [
      '@babel/preset-env',
      // {
      //   targets: {
      //     chrome: '90',
      //   },
      // },
    ],
    [
      '@babel/preset-typescript',
      {
        allowDeclareFields: true,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // classic automatic
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime', ['@babel/plugin-proposal-decorators', { version: '2021-12' }]],
}
