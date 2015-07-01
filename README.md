[![Stories in Ready](https://badge.waffle.io/TechnikInc/openFDA-DesignPrototype.png?label=ready&title=Ready)](https://waffle.io/TechnikInc/openFDA-DesignPrototype)
# OpenFDA Drug Search by Technik Inc. 

[Click here to view the prototype](http://TechnikInc.github.io/openFDA-DesignPrototype)

This tool allows consumers to search for OTC and prescription drug facts via a simple and intuitive user interface. In addition to detailed drug information provided by OpenFDA APIs, product images from Microsoft's Bing search API are used to facilitate rapid recognition.

## Approach used to create Pool One Design prototype

***We followed the U.S. Digital Services Playbook requirements***

a. Ms. Alexa Tsui was the assigned leader (Product Manager) with authority, responsibility and accountability for the quality of the prototype submitted.

b. The Technik openFDA design prototype team consisted of three resources assigned to the following Design Pool Labor categories from 18F Agile Labor Categories. Attachment C is updated accordingly.
This rapid development effort project was developed and scaled using agile methodologies. The primary roles as they pertain to our chosen labor categories are as follows: 

 - Category 1: Product Manager, responsible for defining and
   prioritizing the requirements, developing the vision and roadmap and working with Web Designer to optimize our design tools & techniques.
   
 - Category 3: Interaction Designer/User Researcher/Usability Tester,
   responsible for creating artifacts such as usability testing plan,
   testing scripts and usability testing report. Conduct stakeholder
   interviews, user requirements analysis, conceptual modeling and
   prototype building.  
   
 - Category 6: Front End Web Designer, responsible
   for developing interface experiences for enterprise desktop and
   mobile applications and  improving the look, feel, quality and performance stability.

c. A group of representative users (consumers interested in learning about prescription and OTC drug facts) was assembled and their feedback was used to drive the design of this prototype. Initial interviews identified typical activities that users were interested in performing. Wireframe mockups of the tool were sketched and presented to the users for critique. Users were observed while trying to use the functional prototype and their challenges were translated into enhancements. See "Evidence" folder in the GitHub repository for artifacts.


d. The following three human-centered design techniques and tools were used in developing this prototype with a collaborative agile process to determine user needs: Artifacts are located in the "Evidence" folder in the GitHub Repository. 
- Conducted user interviews to identify audience personas and representative use cases (contextual inquiry). (artifact-Technik_18F_brainstrom.jpeg) 
- Applied white-boarding and card sorting techniques to identify possible layout/flow approaches. (artifacts-Technik_18F_userstory.docx, Technik_18F_cardeck.jpeg) 
- Used Balsamiq Mockups to create wireframes of web and mobile flows for user review. (artifact-Technik_18F_balsamiq.jpeg) 
- Performed usability testing with rapid iteration of working prototypes, adding and validating enhancements requested by users. (artifact-Technik_18F_testinglog.xls), (artifact-Technik_18F_SystemUsability_Responses.xls)

e. Standard, responsive components and layouts from the Bootstrap UI library were used to create the interface.

f. In addition to openFDA APIs, several open source libraries were used to power this prototype.
 - [jQuery](https://jquery.com/) for general JavaScript utilities and
   JSON manipulation
 -  [HTML5   Boilerplate](https://github.com/h5bp/html5-boilerplate) for basic responsive web template 
 - [Bootstrap](http://getbootstrap.com/) for basic web components
 - [Bootstrap-Table](https://github.com/wenzhixin/bootstrap-table) for table generation from JSON data and frozen table headers
 - [jQuery Bing Search](http://cbenard.github.io/jquery-bingsearch/) for authenticated Bing image searches using the Windows Azure Marketplace Bing Search API

g. A team of 2 people tested the prototype, validated the acceptance criteria and provided feedback for iteration improvement including enhancement requests. 
Additionally, an independent group of 5 people not associated the working prototype completed usability tests and provided feedback using a Google questionnaire form by answering 12 questions. (artifact -Technik_18F_SystemUsability_Responses). See artifact in the "evidence folder" in the GitHub repository.

h. Feedback from the tests led to subsequent work and an updated prototype. (Ex. users told us that they weren't sure if the drug they clicked on was the actual one that they were researching). - An image gallery that displays product images from Microsoft's Bing search API was implemented to facilitate rapid recognition. This enhancement was introduced to address the user requested enhancement. Used GitHub issues, labels and milestones for collaboration.

i. This prototype was tested successfully in Windows (Internet Explorer, Chrome, Firefox), Mac OS (Safari, Chrome, Firefox), and on the iPhone and iPad (Safari) and on Android phones and tablets (Chrome). The prototype uses a responsive layout that reduces the amount of data shown on-screen at a given time on mobile devices. (artifacts - Technik_18F_Iphone.jpeg, Technik_18F_android.jpeg, Technik_18F_IE.jpeg, Technik_18F_Chrome.jpeg, Technik_18F_Firefox.jpeg)

j. To deploy a copy of this prototype, simply clone this repository or download the ZIP file and deploy the project on a web server (e.g. IIS, Apache). Navigate to index.html to use the prototype.

k. The prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge using the MIT free software license.

----------
