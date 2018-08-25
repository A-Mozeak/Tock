File structure.
--> main.js - Contains BrowserWindow object. Loads the following views:
----> main/
------> index.html -
--------> scroll.js - Contains the Scroll class/object. Imports the following:
----------> bite.js - Contains Bite class/object.
----------> content.js - Contains ContentWindow class/object.

//Note: You must specify './' as a path of root folder to import a local module.
//However, you do not need to specify path to import Node.js core module or NPM
//module in the require() function.
