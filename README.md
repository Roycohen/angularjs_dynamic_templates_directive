angularjs_dynamic_templates_directive
=====================================

AngularJS Directive for loading dynamic templates.
If you ever wanted to make the same "directive logic" and just change the layout of the HTML, with angularjs_dynamic_templates_directive you can make the MAGIC.
angularjs_dynamic_templates_directive gives you the ability to dynamically load templates and to manage them by their types.
No longer need to create the same directive twice just to change the HTML layout.

LOADING THE DIRECTIVE:
add the "angularjs_dynamic_template.js to your working directory.
Load the template and change the "app.directive" to feet your app directives structure.

USAGE:
````html

<div dynamic-template type="'video'" content="videoObject"></div>
````
This example loads the /views/partials/templates/video.html template and passes the videoObject as the content.
1. baseUrl - Is the PREFIX path you want to load the templates from.
2. type - Is the SUFFIX html file you want to load the templates from.
3. content - Is the data you want to pass to the directive.

ENHANCEMENTS:
1. Add as many variables you like to pass tp the isolated scope in the "scope" section of the directive.
2. Add new types to the "templateMap" variable.

For any questions/enhancements just add a comment.
