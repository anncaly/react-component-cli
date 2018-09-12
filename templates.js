module.exports.createContainer = (name) => { 
	return `import React, { Component } from 'react';
import ${name} from "../components/Header";

class ${name}Container extends Component {
  render() {
    return (
      <div></div>
    );
  }
}
export default ${name}Container;
`;
}

module.exports.createIndex = (name) => {
	return `import ${name} from './${name}';
export default ${name};`;
}

module.exports.createComponentJsx = (name) => { 
	return `import React, { Component } from 'react';
import styles from './${name}.css';

class ${name} extends Component {
  render() {
    return (
      <div></div>
    );
  }
}
export default ${name};
`;
}

module.exports.createTest = (name) => { 
	return `import React from 'react'
import ${name} from './${name}'
import {shallow} from 'enzyme'
it('renders without crashing', () => {
	shallow(<${name} />);
});
`;
}
