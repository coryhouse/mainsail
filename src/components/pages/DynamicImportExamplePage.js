import React from 'react';

class DynamicImportExamplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: null
    };
  }

  componentDidMount() {
    // webpack treats import() as a split-point and puts the requested module in a separate chunk.
    // Using webpack magic comments below to declare the name of the separate chunk
    // Other dynamically loaded imports with this same chunk name will be bundled
    // together and lazy loaded! The comment is totally optional. Webpack will assign
    // the bundle name for me if the comment is omitted.
    // Note that your editor may interpret the code below as syntax errors since
    // the ES dynamic import syntax is a stage 3 feature, so it's not yet officially part of the
    // JavaScript spec. But it's safe for us to use in production since Webpack and Babel transpile it.
    import(/* webpackChunkName: 'moment' */ 'moment')
      .then(moment => moment().format('LLLL'))
      .then(currentTime => this.setState({currentTime}))
      .catch(err => console.log('Failed to load moment', err)); // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
        <h1>Example: Dynamic Imports</h1>
        <p>
          By default, create-react-app bundles the app into a single, minified JS file.
          This works great for small apps with few dependencies.
          However, splitting the bundle and "lazy loading" parts of your app speeds page loads and saves bandwidth. <a href="http://2ality.com/2017/01/import-operator.html">ES Dynamic imports</a> make this easy.
        </p>

        <p>
          The syntax is simple:<br/>
          <code>import('path/to/file');</code>
        </p>
        <p>
          The file specified in the import above will by dynamically loaded. With React components, <strong>place the dynamic import in <code>componentDidMount</code> so that it's called when the component is mounted</strong>.
        </p>
        <p>
          Optionally, you can declare a webpackChunkName using a <a href="https://webpack.js.org/guides/code-splitting-async/#chunk-names">magic comment</a> which allows you to specify the filename for the chunk that webpack generates.
        </p>
        <p>
          <code>import(/* webpackChunkName: myChunkName */ 'path/to/file');</code>
        </p>
        <p>
          So the example above will write the imported file to myChunkName.chunk.js. If you declare the same webpackChunkName in multiple dynamic imports, Webpack will intelligently bundle those dynamic imports together.
        </p>

        <p>
          There's an example of this approach running on this page.
        </p>
        <ul>
          <li>Check the network tab to see <code>moment.chunk.js</code> requested dynamically the first time you load this tab.</li>
          <li>If you don't load this tab, you'll never download moment.js.</li>
          <li>The separate bundle is called <code>moment.chunk.js</code> because of the optional webpack <a href="https://webpack.js.org/guides/code-splitting-async/#chunk-names">magic comment</a> declared in the import statement.</li>
        </ul>

        <p>
          Here is moment's output to prove the dynamic import worked:<br/>
          <strong>Current time</strong>: {this.state.currentTime}
        </p>
      </div>
    );
  }
}

export default DynamicImportExamplePage;
