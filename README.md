Q.What is a task runner and webpacks? Difference between task runners & webpacks? Why these things are used?
TaskRunners:-
Gulp is a task runner. It is basically a convenient way of automating various tasks that may need to happen in your build/deploy process, similar to a Makefile or writing shell scripts yourself.

Gulp can be used to do what Webpack does. If you run browserify in a gulp task, it also lets you use modules. Otherwise you can have a gulp task that simply concatenates a bunch of JS files together into one, which is similar but you will still be writing modules that are added to the global namespace of your website, rather than using require or ES2015 import/export.

Webpacks:-
Webpack is a module bundler. It allows you to use the NodeJS require() and module.exports syntax (or ES2015 modules, with Babel) to organize your front end code in separate files with functionality that can be imported between them as needed.

Webpack can also include plugins that will do things like minify code, and through the use of loaders it can also bundle/transform fonts, SCSS, ES2015 JS, JSX, etc as necessary. But this is all on top of its basic function as a bundler. In its most basic configuration, all of the files you put into Webpack including CSS will come out in a single .js bundle that you can put in your site. This can be changed, though.