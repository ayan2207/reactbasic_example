import * as React from 'react';
import { render } from 'react-dom'
import { AppContainer as HotLoaderAppContainer } from 'react-hot-loader'

import Root from './containers/home'

declare var module: any;
declare var require: any;

/* eslint-disable */
document.addEventListener('DOMContentLoaded', () => {
  render(
    <HotLoaderAppContainer>
      <Root />
    </HotLoaderAppContainer>,
    document.getElementById('mount')
  )
})

if (module.hot) {
  module.hot.accept('./containers/home', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextRoot = require('./containers/home').default;
    render(
      <HotLoaderAppContainer>
        <NextRoot />
      </HotLoaderAppContainer>,
      document.getElementById('mount')
    )
  })
}