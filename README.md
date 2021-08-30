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
