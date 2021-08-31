# Vanilla part of Vattenfall DDS

This is the Vanilla JavaScript part of Vattenfall Digital Design System (DDS).

## Installation

- yarn

To run webserver (through webpack)

- yarn dev

To build css for examples

- yarn build-sass

To build production for deployment

- yarn build

### Standards

This project uses certain techniques, such as

- BEM - https://en.bem.info/methodology/quick-start/
- semver - https://semver.org/

### Structure

The project is built which the following thoughts

- Components will always have their css stored in a scss-file named after it's parent. Example - `buttons`-css is stored in `_indicators.scss`.
- Components who need JavaScript, which also have a JavaScript-file attached. If not, none is supplied.
- In the examples (`src/examples`) folder, you can find example of how the components are used, with attached HTML-files.
- Fonts are stored at `src/fonts`.
- Some global variables can be found in `src/style/style.scss`.

### Compiling CSS

We write the styling for the site using SCSS but we compile it using `node-sass`. We have two different scripts located at `./scripts` which compile category and component specific SCSS. You can also use the `yarn build-sass` to compile all SCSS to a massive file, in case you would want that.

### Adding new components

Most components in this library contains mostly css and some JavaScript. In case a new component gets added you should:

- Add a scss-file in to the correct map, i.e. `src/components/style/modules/component_name.scss`, which contains the styling
- Add a js-file (in case it´s needed) to the right folder i.e. `src/components/modules/component_name.js`
- Add in to category-named file as a @use.
- Add it to scss-scripts, to be able to compile
