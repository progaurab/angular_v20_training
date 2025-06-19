# OnlineGift

mkdir ngApp
cd ngApp 
ng new online-gift 
        ✔ Do you want to create a 'zoneless' application without zone.js (Developer Preview)? No
        ✔ Which stylesheet format would you like to use? CSS             
        ✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No

ng generate component navbar --standalone
ng generate component product-list --standalone
ng generate component product-detail --standalone
ng generate component cart --standalone
ng generate component checkout --standalone
ng generate service services/product
ng generate service services/cart

npm install -g json-server
cd src
json-server --watch db.json
ng serve --open 