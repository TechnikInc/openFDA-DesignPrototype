# OpenFDA Drug Search by Technik Inc.

[View the prototype](http://tsuic.github.io/technik-openfda/)

This tool allows consumers to search for OTC and prescription drug facts via a simple and intuitive user interface. In addition to detailed drug information provided by OpenFDA APIs, product images from Microsoft's Bing search API are used to facilitate rapid recognition.

## Approach used to create Pool One Design prototype

### UX design & usability testing
* Conducted user interviews to identify audience personas and representative use cases (contextual inquiry)
* Applied whiteboarding and card sorting techniques to identify possible layout and flow approaches
* Used Balsamiq Mockups to create wireframes of web and mobile flows for user review
* Performed usability testing with rapid iteration of working prototypes, adding and validating enhancements requested by users

### Prototype implementation
The prototype tool was created with HTML, JavaScript, and CSS.

In addition to [OpenFDA APIs](https://open.fda.gov/api/reference/), a number of open source libraries were used to power this prototype:

* [jQuery](https://jquery.com/) for general JavaScript utilities and JSON manipulation
* [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) for basic, responsive web template
* [Bootstrap](http://getbootstrap.com/) for basic web components
* [Bootstrap-Table](https://github.com/wenzhixin/bootstrap-table) for table generation from JSON data and frozen table headers
* [jQuery Bing Search](http://cbenard.github.io/jquery-bingsearch/) for authenticated Bing image searches using the Windows Azure Marketplace Bing Search API

### Prototype deployment
To deploy a copy of this prototype, simply clone this repository or download the ZIP file and launch index.html in a web browser