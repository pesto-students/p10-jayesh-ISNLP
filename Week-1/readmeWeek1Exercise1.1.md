Ques >

When a user enters an URL in the browser, how does the browser fetch the desiredresult ? 
Explain this with the below in mind and Demonstrate this by drawing a diagramfor the same.

Ans >

On typing a URL in the browser and pressing 'Enter', the following takes place.
- Browser looks up IP address for the domain by going through the following 4 layers.
  -- Browser cache is checked to find the IP address of recently visited sites.
  -- OS cache is checked
  -- Router cache is checked. 
  -- In case of no response, request is sent to top or root server of the DNS hierarchy.
  -- Resolver server (of the Internet Service Provider) is checked based on the input from the result from Router cache for different URLs eg .com, .gov, .net, .org. Resolver obtains the IP address from the Top Level Domain (TLD) and also stores it in the cache for later use.
- Browser initiates TCP connection with the server where the website is hosted.
- A connection is built between the client and the server.
  -- Browser sends the HTTP request to the server.
  -- Server processes request and sends back a response.
  -- The browser renders the content that has been requested.
- The browser parses HTML into a DOM tree and includes tokenization (start and end tags, attribute names and values) and tree construction.
  -- In case the HTML parser encounters a non-blocking resources (eg image), it requests those resources and continue parsing.
  -- On encountering CSS styles, it parses the text into the CSS Object Model (or CSSOM), a data structure it then uses for styling layouts and painting. 
  -- The browser then creates a render tree from both these structures to paint the content to the screen. JavaScript is also downloaded, parsed, and then executed.
  -- JavaScript parsing is done during compile time or whenever the parser is invoked, such as during a call to a method.
- Finally, the browser renders the content.

Diagramatic Representation

                     --------------                           ---------------
               -->  |Browser Cache |                    --> |  Root Server  |
               |      --------------                    |     ---------------
               |                                        |
 ----------    |    -------------        ----------     |     ---------------
| Browser  |---- > |  OS Cache   |----> | Resolver | ------> |  TLD Server   |
| (Client) |   |   |             |      |  (ISP)   |    |    |               |
 ----------    |    -------------        ----------     |     ---------------
               |                                        |
               |                                        |     ---------------
               |    -------------                       ---> | Authoritative |
               --> | Router Cache|                           | Name Server   |
                    -------------                             ---------------

a. The main functionality of a browser is to interpret and display web content such as HTML, CSS, and JavaScript. This involves fetching resources such as HTML files, stylesheets, and images from web servers, parsing and interpreting these resources, and rendering them as a visual representation on the user's screen.

b. The high-level components of a browser include:

User interface: The part of the browser that the user interacts with, including the address bar, tabs, and navigation buttons.

Browser engine: The component that manages interactions between the user interface and the rendering engine, as well as between the rendering engine and other components such as network and storage.

Rendering engine: The component that interprets HTML, CSS, and JavaScript code and renders it as a visual representation on the user's screen.

Networking: The component that handles network requests to fetch resources such as HTML files, stylesheets, and images from web servers.

Storage: The component that handles local storage of data such as cookies and cached resources.

c. The rendering engine is responsible for interpreting HTML, CSS, and JavaScript code and rendering it as a visual representation on the user's screen. Different browsers use different rendering engines, with the most popular ones being Blink (used by Google Chrome), WebKit (used by Safari), and Gecko (used by Firefox). The rendering engine uses a variety of algorithms to determine how web content should be displayed, including layout, painting, and compositing.

d. Parsers are components that are responsible for parsing different types of web resources, such as HTML, CSS, and JavaScript. 

The HTML parser is responsible for interpreting the structure of an HTML document and creating a tree-like structure called the Document Object Model (DOM), which represents the content and structure of the web page. 

The CSS parser is responsible for interpreting the styling information in a CSS file and applying it to the corresponding HTML elements.

The JavaScript parser is responsible for interpreting JavaScript code and executing it.

e. Script processors are components that are responsible for executing JavaScript code. The JavaScript engine is a type of script processor that interprets and executes JavaScript code, and is built into most modern web browsers. Other types of script processors include WebAssembly, which is a low-level binary format that can be executed in the browser, and TypeScript, which is a superset of JavaScript that adds additional features and type checking.

f. Tree construction involves building the Document Object Model (DOM) tree, which represents the content and structure of the web page. The HTML parser is responsible for constructing this tree by interpreting the structure of the HTML document and creating nodes in the tree to represent the different elements and attributes.

g. The order of script processing depends on where the script tags are placed in the HTML document. Scripts that are included in the head section of the document are typically executed before the rest of the document is loaded, while scripts that are included in the body section are typically executed after the rest of the document is loaded. However, scripts can also be loaded asynchronously or deferred to improve page load times.

h. Layout and painting are the final stages of rendering, where the visual representation of the web page is generated based on the DOM tree and styling information. Layout involves determining the size and position of each element on the page, while painting involves rendering the visual appearance of each element based on its styling information. Once the layout and painting are complete, the visual representation of the web page is displayed on the user's screen.
     
