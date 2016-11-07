# Topcoat Preact Components

Preact components implementing [Topcoat][topcoat] [components][topcoat-demos]

[Demos and API:][storybook]

## Components:

- [x] Button
- [x] Button Bar
- [x] Large Button Bar
- [x] Quiet Button
- [x] Large Button
- [x] Large Quiet Button
- [x] Call To Action Button
- [x] Large Call To Action Button
- [x] Checkbox
- [x] Icon Button
- [x] Quiet Icon Button
- [x] Large Icon Button
- [x] Large Quiet Icon Button
- [x] List
- [x] Navigation Bar
- [x] Notification
- [x] Radio Button
- [x] Range
- [x] Search Input
- [x] Large Search Input
- [x] Switch
- [x] Tab Bar
- [x] Text input
- [x] Large Text Input
- [x] Textarea
- [x] Large Textarea

## Workflow

### To run the Storybook in dev mode:

- `npm start`
- Then open `http://localhost:9001/` in a browser

### Before committing changes

Before committing any changes, the project must be built to the docs directory, which will be published at [phonegap.com/topcoat-preact][[storybook]]

- `npm run build` to build the components into `dist`
- `git add . && git commit && git push` or whatever your git workflow is...

[topcoat]: http://topcoat.io/
[topcoat-demos]: http://topcoat.io/topcoat
[storybook]: http://phonegap.com/topcoat-preact
