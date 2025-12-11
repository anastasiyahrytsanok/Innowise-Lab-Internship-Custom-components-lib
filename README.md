## Custom-components-lib

# Task: 
https://drive.google.com/file/d/1C148FRnWfXVoRDslDWcYac3bEhebdIAV/view

# How to run the app:
Install the library:

npm install @anastasiyahrytsanok/custom-components-lib

Use in your project:
```
import { Button } from "@anastasiyahrytsanok/custom-components-lib";

function App() {
  return <Button variant="contained">Click me</Button>;
}
```

Make sure your project supports SCSS (required by the library):

npm install sass style-loader css-loader sass-loader --save-dev

Necessary React version: 18-19

Example Webpack rule:
```
{
  test: /\.s[ac]ss$/i,
  use: ["style-loader", "css-loader", "sass-loader"],
}
```
Run locally:

npm install

npm start

Run Storybook:

npm run storybook

Build the library:

npm run build
