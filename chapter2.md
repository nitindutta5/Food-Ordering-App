# NR - chapter2
What is `NPM`?
It's a library and registry for JavaScript software packages.

What is `Parcel/Webpack`? Why do we need it?
Webpack/ Parcel are both bundlers. We need bundlers for converting our written javascript code into production ready code which is optimised. 

What is `.parcel-cache`?
It the folder which is created when we create the build file using parcel.

Why is npx?
The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

What is difference between `dependencies` vs `devDependencies`?
The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime. 

What is tree-shaking?
It is one of the features of the latest module bundlers such as parcel or webpack , which helps in removing the unused code during the build time for making an optimised build.

What is Hot Module Replacement?
Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.
 
List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- Caching
- Minifying
- HMR(Hot Module Replacement)
- Image Optimisation
- Tree Shaking
- Code splitting

What is `.gitignore`? What should we add and not add into it?
It is a file wherin we define the files and folder which we want git to ignore. We should add node_modules, .env, and all the file folder which we dont want the git to read. Note: We shouldn't add package.lock.json in our gitignore file.

What is the difference between `package.json` and `package-lock.json`?
Package.json file is create on npm init while the package-lock.json is created on installing the dependencies defined in package.json
You should commit package-lock. json to your code repository. Sharing this file with teammates and the production environment is the best way to make sure that everyone has the same configuration for their copy of the project.

Why should I not modify `package-lock.json`?
It is a file generated on installation and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies and the exact version of each dependency

What is `node_modules` ? Is it a good idea to push that on git?
These are folder which contains all the dependency related files which are generated post installation and this is the place from where we import the installed packages. 
No, because it is regenerated on the server.

What is the `dist` folder?
It's the folder that contains the build files, which are minified and contains browser understandable code.

 What is `browserlists`?
 It's a library to config the target browsers and Node.js versions between different front-end tools. I