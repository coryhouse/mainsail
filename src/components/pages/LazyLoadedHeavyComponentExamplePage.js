import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../Loading';

function fakeDelay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

const LazyLoadedHeavyComponent = Loadable({ // eslint-disable-line new-cap
  // Adding fakeDelay below just so you can see the loading message display.
  // Note that HeavyComponent is NOT imported above.
  // This way it can be dynamically loaded by react-loadable.
  // The webpack magic comment in the dynamic import below is optional.
  // The bundle will just be given a number as a name without it.
  loader: () => fakeDelay(2000).then(() => import(/* webpackChunkName: 'heavy' */ '../HeavyComponent')),
  loading: Loading
});

function LazyLoadComponentExamplePage() {
  return (
    <div>
      <h1>Example: Lazy Load React Components</h1>
      <p>
        By default, create-react-app bundles your entire app into a single, minified file. This page shows how to use <a href="https://github.com/thejameskyle/react-loadable">react-loadable</a> to lazy load a React component. React-loadable uses ES dynamic imports behind the scenes, and provides a handy API for lazy loading React components, and showing a loading message while the component is loading.
      </p>
      <p>
        To see this in action:
      </p>

      <ol>
        <li>Open the network tab.</li>
        <li>Reload this page.</li>
        <li>Note that on page load, the loading component displays. Then, a separate network request is made for the HeavyComponent.</li>
        <li>Note that if you never navigate to this page, then you never download HeavyComponent.</li>
      </ol>

      <hr/>

      <LazyLoadedHeavyComponent/>
    </div>
  );
}

export default LazyLoadComponentExamplePage;
