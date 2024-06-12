# namaste-react
This is a Repository to Practice Learnings From Namaste React Tutorial By Akshay Saini 

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- Caching - Faster Builds 
- Image optimization
- Minification
- Bundling
- Compress
- Consistent hashing
- Code Splitting
- Differential Bundling 
- Diagnostics
- Error Handling and better Error messaging
- HTTPs
- Zero Config 
- Tree shaking 
Official Documentation [www.parcel.org]

# Namaste food
/**
 * Header
 * - Logo
 * - Nav Item
 * Body
 * - Search
 * - RestaurantContainer
 * - - RestaurantCard
 * - - - Image
 * - - - Name of the restaurant
 * - - - Star rating
 * - - - Cusines
 * - - - Time for delivery
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

Two types of Export/Import

- Default Export/Import

```
export default Component;
Import Comppnent from "path";
```
- Named Export/Import
```
export const Component;
import {Component} from "path";

```

# React Hooks:
They are normal Js utility funtions written by facebook devs inside React.
We have to import these as a named import
There are 2 most IMP hooks which are 90% we use
- useState() - super powerful state variables in react
- useEffect()


# Redux toolkit:

- Install Libraries @reduxjs/toolkit and react-redux
- Build our own store
- Connect our store to the app
- Create a cart slice
- dispatch(action)
- read using selector