Front End:
~~~~~~~~~~

   pre-requisites to learn ReactJs
   ->HTML : Provides a structure to the web page
   ->CSS : Provides styles to the web page
   ->Javascript : Provides interactivity to the web page

ReactJs
~~~~~~~~
HTML : Structure to web page
~~~~~~~
 ->Lifeless/colourless/ not attractve

 CSS styles:
~~~~~~~~~~~~~

->Inline styles
->Internal styles
->External styles

Javascript:
~~~~~~~~~~~~~

-> Have some validation on the browser, when users send  data to the server

 ->ES5 ---> ES6 (ES2015) --->ES7

-> Library: jQuery(1998)

->Google team came up with AngularJS(1.8)
->Facebook announced: ReactJs(2013)
->Facebook mde it open source (2015): ReactJs (B2C) : 75%
->Google  +  MicroSoft (Typescript) => Angular (B2B) : 18-20%

Others:
~~~~~~~
    ->vue.js / backbone -> OLA



 ///React JS
~~~~~~~~~~~~
    ->Fronted Library
    ->Single page application (SPAs)
    ->Open source
    ->Large Community / Facebook


    ->Web applications (react)
    ->Moblie application (react native)
    ->Virual reality (react VR)


    SPA ---->MSA
    SPA -->Single page application
    MSA --> Multi-page application


    PWA -->Progressive web app
      ->Offline Capability
      ->Many of your website function can still be avaliable even when offline.


Library vs FrameWork:
~~~~~~~~~~~~~~~~~~~~~

Library:
~~~~~~~~

->set of functions
->You can attach a library to an existing application
->Library cannot run on its own,it needs a framework to run
->React is a Library

->Framework:
~~~~~~~~~~~~~

->Libraries + an envirolment to run those libraries
->You have to bulid the application according to the Framework
->Framework provides an environment to execute
->Angular is a Framework

A React Application:
~~~~~~~~~~~~~~~~~~~~

(1) you have an existing HTML page ---> You can add reactJS in this web page.

(2) You can run  ReactJs is an node environment and bulid your application

    ReactJS + NodeJS


Migrate from angularJS ---> ReactJs
    -->stranglar approach
    --> any new development is to the be done in ReactJS
    -->attach those ReactJs modules in the existing AngularJS App
    --> over a period of time, react modules will take over angular code
    -->spend effect to convert the existing angularJs modules to ReactJs
-->write it from the scratch

JSON:
~~~~~
Javascript Object Notation
    ->Format for data  exchange.
    ->MSA uses it as a standard

Multi-page Application:
~~~~~~~~~~~~~~~~~~~~~~~~

\*\* In multi-page application each time you click on a link or interact with the application, a new page is downloaded from the server and then rendered in the web browsers.

\*\* Here content is organized on individual pages that are usually static.

\*\* They do not change in response to user's action.

\*\* A brand new page with its own static content is served when a user clicks any button.

Single-page Application:
~~~~~~~~~~~~~~~~~~~~~~~~

** A single-page application is an application that works inside a browser and does not require page reloading during use.

** Instead of serving a brand new page to the user, SPA swaps out the old content for new in case of any user interaction.

** SPA is a faster,more responsive,compact,eay to develop and deploy.

** SPA and all its content is only loaded once, when the user first nteracts with the web page.


///MVC Patterns:
~~~~~~~~~~~~~~~~~

M - Model - which deals with the data flowing in the application

V - View - which deals with the user interaction

C - Controlled - which deals with the logic to be executed for ever action



Front End(FE): is a view
~~~~~~~~~~~~~~~
     ->ReactJS
Back End(BE) : is a controller
~~~~~~~~~~~~~~

Database (DB) : is a  model
~~~~~~~~~~~~~~~


What is the React?
~~~~~~~~~~~~~~~~~~
** React (also known as ReactJS) is a JavaScript library for buliding user interfaces.
** React is used in the development of single-page application or mobile applications,as it is optimal for fetching rapidly changing data that needs to be recorded.

Elements of React:
~~~~~~~~~~~~~~~~~
(1)JSX

(2)Virtual DOM

(3)Components

(4)States

(5)Props

(6)Event handling



Github ?
~~~~~~~~~
    ->code repo
    ->version control system
    ->Public and private access
    ->Generic hub for any kind of files


Node packages managers:
~~~~~~~~~~~~~~~~~~~~~~~
-> code repo which hosts various packages.
->packages developed in NodeJs envirolment.
->Version control
->public developed in NodeJs envirolment


NPM:
~~~~
npmjs.com

-->lets park it aside for sometimes

           (3) Jsx :
           ~~~~~~~~~
                 --> JS: Javascript
                 --> JSX : JS + HTML
                 -->certain rules to understand and work with it:
                   a. Inside HTML you can evaluate a Js Expression with the help of {} 

                   e.g:
                   ~~~~
                   In JS :
                     const appname = "My First App";
                     Now in JSX:
                        <h1>Welcome to  {appname} </h2>  -->Welcome to My First App

                    b. CSS : class attribute of any element to apply css is now know as classname 

                    c.Properly honor the closing of the tags in JSX:

                    <div></div>
                    <img />

                    d.JSX syntax only permits one parent element of a component


Virual DOM:
~~~~~~~~~~~
DOM: Document object model
~~~~
   html
     ->head
     ->body
      ->h1
        ->content : welcome to my first react application
    ->div&root
    ->content:

->frequently changing the content of a DOM is a costly process(processing and resource consumption)
   -> why ? because whenever you change the contents of a DOM,entire DOM has to be re-rendered

-->Virual DOM:
~~~~~~~~~~~~~~
   -->react app loads : react will create an in-memory copy of the DOM,this copy is know as virual DOM.
   -->react will not immeadiatly  change the DOM
   -->rather react will make that change to the virual DOM (easy AND fast to change)
   -->react will compute the diff between the DOM and virtual DOM, calculate the data
   -->react will path the changes (async) to the DOM at an appropriate time
   -->thus savings huge on the DOM updation process

(1)Adding ReactJs to an existing web page:
(2) create-react-app:
 --> It is a utility
 --> to create and run react applications in a  NodeJs environment



NodeJS: Javascript runtime environment
~~~~~~~
-->npm will help you download create-react-app utility

-->npx: node package explorer

-->npm : node package manager

-->npx create-react-app <name_of_your_app> 

e.g.:   npx create-react-app my-first-react-app


--->
how you can create variables
how you can store the data
how many data types are avaliable
   ->primitive
   ->reference
how many operators are avaliable

languages specific functionalities and concepts
version +1 previous of the languages
how to execute and see the output

