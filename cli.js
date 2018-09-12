#!/usr/bin/env node

const fs = require('fs');
const components = './components';
const containers = './containers';
const name = process.argv[2];
const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
const { createIndex, createComponentJsx, createTest, createContainer} = require('./templates.js');

if (!fs.existsSync(containers)) {
  fs.mkdirSync(containers);

  fs.writeFile(`containers/${nameCapitalized}Container.jsx`, createContainer(`${nameCapitalized}`), (err) => {
  	if (err) throw err;
  	console.log('Containers folder has been created!');
	});
}

if (!fs.existsSync(components)) {
	const componentDir = `components/${nameCapitalized}`;
  fs.mkdirSync(components);
  fs.mkdirSync(componentDir);

  const ext = {
  	jsx: 'jsx', 
  	css: 'css', 
  	test: 'test.js'
  };

	fs.writeFile(`${componentDir}/index.js`, createIndex(`${nameCapitalized}`), (err) => {
  	if (err) throw err;
	});
	fs.writeFile(`${componentDir}/${nameCapitalized}.` + ext.jsx, createComponentJsx(`${nameCapitalized}`), (err) => {
  	if (err) throw err;
	});
	fs.writeFile(`${componentDir}/${nameCapitalized}.` + ext.css, '', (err) => {
  	if (err) throw err;
	});
	fs.writeFile(`${componentDir}/${nameCapitalized}.` + ext.test, createTest(`${nameCapitalized}`), (err) => {
  	if (err) throw err;
	});
	console.log('Components folder has been created!');
}
