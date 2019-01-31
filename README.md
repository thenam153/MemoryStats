# Show Memory Stats information project
Use this project to show memory information on webapp (browser or electron)

## Content of this project
* CheckMem: contain core components. Include it into your project
* CheckMem-test-browser: Sample app for browser that use CheckMem
* CheckMem-test-electron: Sample electron app that use CheckMem

## How to use 
### Using browser app
1. Build extension
2. Require modal-memory
3. Run webpack
4. Add <modal-memory></modal-memory> in your index.html
5. Run

### Using electron app
1. Require modal-memory
2. Require showMem, run with yourWindow 
3. Run webpack
4. Add <modal-memory></modal-memory> in your index.html
5. Run

## Dependencies
### Browser
* Angularjs
* Is-electron

### Electron 
* Electron 
* Is-electron
* Angularjs
* Os
