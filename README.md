[![Stories in Ready](https://badge.waffle.io/TechnikInc/openFDA-DesignPrototype.png?label=ready&title=Ready)](https://waffle.io/TechnikInc/openFDA-DesignPrototype)
# OpenFDA Drug Search by Technik Inc. 

[View the prototype](http://TechnikInc.github.io/openFDA-DesignPrototype)

This tool allows consumers to search for OTC and prescription drug facts via a simple and intuitive user interface. In addition to detailed drug information provided by OpenFDA APIs, product images from Microsoft's Bing search API are used to facilitate rapid recognition.

## Approach used to create Pool One Design prototype

### We followed U.S. Digital Services Playbook requirements

a. Assigned one leader, gave that person authority and responsibility, and held that person accountable for the quality of the prototype submitted
    - Ms. Alexa Tsui was the assigned leader (Product Manager) with authority, responsibility and accountability for the quality of the prototype submitted

b. Assembled a multidisciplinary and collaborative team that includes at a minimum of three of the labor categories  limited to the Design Pool Labor categories to design the prototype as quoted in Attachment C.
    - The Technik opeFDA design prototype team consisted of three resources assigned to the following Design Pool Labor categories from 18F Agile Labor Categories. Attachment C is updated accordingly.
    - This project was developed and scaled using agile methodologies, since it was a rapid development effort, here are the primary roles as they pertain to our chosen labor categories. 
        - Category 1: Product Manager, responsible for defining and prioritizing the requirements, developing the vision and roadmap and working with Web Designer to optimize our design tools & techniques.  
        - Category 3: Interaction Designer/User Researcher/Usability Tester, responsible for creating artifacts such as usability testing plan, testing scripts and usability testing report. Conduct stakeholder interviews, user requirements analysis, conceptual modeling and prototype building. 
        - Category 6: Front End Web Designer, responsible for developing interface experiences for enterprise desktop and mobile applications and improving the look, feel, quality and performance stability. 
       c. Understand what people need, by including people in the prototype design process
    - A group of representative users (consumers interested in learning about prescription and OTC drug facts) was assembled and their feedback was used to drive the design of this prototype. Initial interviews identified typical activities that users were interested in performing. Wireframe mockups of the tool were sketched and presented to the users for critique. Users were observed while trying to use the functional prototype and their challenges were translated into enhancements.
5. Used at least three "human-centered design" techniques or tools
    - The following three human-centered design techniques and tools were used in developing this prototype and a collaborative agile process was implemented to determine user needs:
    - Conducted user interviews to identify audience personas and representative use cases (contextual inquiry). (artifact-Technik_18F_brainstrom.jpeg)
    - Applied white-boarding and card sorting techniques to identify possible layout and flow approaches. (artifacts-Technik_18F_userstory.docx, Technik_18F_cardeck.jpeg)
    - Used Balsamiq Mockups to create wireframes of web and mobile flows for user review. (artifact-Technik_18F_balsamiq.jpeg)
    - Performed usability testing with rapid iteration of working prototypes, adding and validating enhancements requested by users. (artifact-Technik_18F_testinglog.xls), (artifact-Technik_18F_SystemUsability_Responses.xls)
6. Created or used a design style guide and/or a pattern library
    - Standard, responsive components and layouts from the Bootstrap UI library were used to create the interface
7. Used at least three modern and open-source frontend or client-side web technologies
    - [jQuery](https://jquery.com/) for general JavaScript utilities and JSON manipulation
    - [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) for basic, responsive web template
    - [Bootstrap](http://getbootstrap.com/) for basic web components
    - [Bootstrap-Table](https://github.com/wenzhixin/bootstrap-table) for table generation from JSON data and frozen table headers
    - [jQuery Bing Search](http://cbenard.github.io/jquery-bingsearch/) for authenticated Bing image searches using the Windows Azure Marketplace Bing Search API
8. Performed usability tests with people
    - A team of 2 people tested the prototype, validated the acceptance criteria and provided feedback for iteration improvement including enhancement requests.
    - Additionally, an independent group of 5 people not associated the working prototype completed usability tests and provided feedback using a Google questionnaire form by answering 12 questions.
9. Used an iterative approach, where feedback informed subsequent work or versions of the prototype
    - Feedback from the tests led to subsequent work and an updated prototype. (Ex. users told us that they weren't sure if the drug they clicked on was the actual one that they were researching). 
    - An image gallery that displays product images from Microsoft's Bing search API was implemented to facilitate rapid recognition. This enhancement was introduced to address the user requested enhancement. 
10. Created a prototype that works on multiple devices, and presents a responsive design
    - This prototype was tested successfully in Internet Explorer, Chrome and Firefox on Windows, as well as Safari, Chrome and Firefox on Mac OS, and also with Safari on the iPhone and iPad and with Chrome on Android phones and tablets. The prototype uses a responsive layout that reduces the amount of data shown on-screen at a given time on mobile devices.

## Prototype deployment
To deploy a copy of this prototype, simply clone this repository or download the ZIP file and deploy the project on a web server (e.g. IIS, Apache). Navigate to index.html to use the tool.
