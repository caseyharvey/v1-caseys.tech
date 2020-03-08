import React from 'react';
import Prism from 'prismjs';
import './prism.scss';

class PrismSnippet extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    console.log(this.props);
    return (
      <pre>
        <code className={this.props.language}>{`
        const App = () => {
          console.log('app is working')
        }

        <PrismSnippet language='language-javascript' />
`}</code>
      </pre>
    );
  }
}
export default PrismSnippet;
