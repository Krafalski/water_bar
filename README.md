# water_bar

MEAN STACK - Partials Example

#### Set up:

- `npm i` to install
- new tab, start `mongod`
- go to `localhost:3003/seed` to seed some data
- go to `localhost:3003/seed/dropit` to drop the database
- go to `localhost:3003` to interact with angular front end

#### Other Notes
- two ways to set partials, look in `public/index.html`
 - commented out div with `ng-include` for forms
 - dynamic inlcudes inside class container - inside `public/js/app.js` - the corresponding ng-clicks are in the `public/partials/navigation.html` - each pass in a corresponding string to dynamically include the correct path to the partial
 
 #### Comments
 - Although not as robust as ng-router, this is simpler to set up
 - the downside is that you can't send links to a specific partial view,  only the main page, and this won't keep track of your click history. back and forward buttons will not interact with app. 

