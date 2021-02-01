import React from "react";
import "./styles.css";

// API endpoint: https://api.punkapi.com/v2/beers
// Documentation: https://punkapi.com/documentation/v2
// Constraints:
// - feel free to use Google
// - feel free to use libraries like redux

// Goals:
// 1. Display a table of beers from the API
//     Each table row should have these columns:
//      - Name
//      - Tagline
//      - Photo
//      - ABV

// 2. Click on a photo to view more details
//    (This can be a modal or new page)
//    New details should be:
//      - Name
//      - Tagline
//      - Photo
//      - ABV
//      - Description
//      - Date first brewed
//      - Brewer's tips
//
// 3. Sort list of beers from Step 1 by ABV
//
// 4. Display a bar chart at the top of the list of beers. This should
//    display the ABV as the x-axis
// (example) https://developers.google.com/chart/interactive/docs/gallery/columnchart

const App = () => {
  return (
    <div className="App">
      <h1>Hello from Instapanel!</h1>
      <h2>
        Take a look at <code>App.js</code> to get started.
      </h2>
    </div>
  );
};

export default App;
