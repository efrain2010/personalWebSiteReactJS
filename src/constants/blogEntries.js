import hero from '../assets/images/code-background.jpg';
import efraAvatar from '../assets/images/efra_avatar.gif';


export const blogAuthors = [
  {
    name: "Efrain Villanueva",
    userName: "efra",
    email: "efrain.villanueva3@gmail.com",
    avatar: efraAvatar,
  },
  {
    name: "Graaciela Quinones",
    userName: "grace",
    email: "gracielaqw89@gmail.com",
    avatar: efraAvatar,
  },
];

export const categories = [
  "programming",
  "react",
  "javascript",
  "funny"
];

const date = "12/06/2021";
const tempBody = `React has introduced its Hook API in version React 16.8. Hooks make it possible to divide a particular individual component into several smaller functions based on the role they relate to, and to divide them according to their lifecycle methods. The great thing about hooks is that, like assets, they enable the exchange of state and logic between components without redesigning entire blocks of code. This is because hooks allow the reuse of logic across components without changing the logic structure.
\n
React as disposable data binding keeps everything modular and fast. The unidirectional flow of data means that when designing React apps, developers can nest child components in parent components. In this way, developers know when errors occur and give them better control over the entire web application. React applications are easy to test due to the large developer community.
\n
Components: Components are one of the core components of React. In other words, we can say that every application you develop with React consists of parts called components. Components make the creation of UIs much easier. As you can see, you disassemble multiple parts, called components, and work with them to merge them with a parent component to get your final user interface.
\n
There are two primary ways to declare components in React: functional components and class-based components. Functional components are declared as functions that are returned in JSX. Component whose state is green is rendered by returning a child component with the color green.
\n
Selective rendering provides a significant boost in performance. React creates an in-memory data structure and a cache to calculate the resulting difference between the updated browser display and the DOM. One notable feature is the use of virtual document objects to model the virtual DOM. This allows programmers to write code so that an entire page can be rendered without changing the rendering of the React libraries of subcomponents that have changed.
\n
HTML is a JavaScript processing syntax called by the React Framework. re writing pure old JavaScript. In React, the component renderer is given a set of invariable values as a property of its HTML tag. The renderer does not change the passed properties, but the call-back function helps us with the modification.
\n
In the case of React, it allows us to use HTML and JavaScript in the same file to efficiently handle state changes in the DOM. In the user interface, we need HTML elements and DOM events to handle state changes. We can change the above code by adding expressions. Expressions use curly braces so that they can be extended at runtime. Here is a simple example of using expressions in JSX.
\n
The last step in this process is to call a React component from JavaScript. In the code above, react.createElement () is a reaction function that creates an element (in this case a div) and displays the text in it. This is a simple component that displays plain text in React (npm).
\n
In the following code, ReactDOM.render is responsible for rendering the React component. The rendering method takes the root element of the component to render. In this code, the first parameter is the name of the component class. In the out case we render the component with div id root.
\n
In the next chapter we will use the same process to execute JavaScript files. The react-scripts package takes care of compiling the code, starting the server, and displaying the HTML file, i.e. index.html. If we want to present guru99 in this tutorial as above, specify the DOM element id root and it takes the index. HTML file and start the file as shown below.
\n
The following is a rudimentary example of using React in HTML, JSX and JavaScript. The greet () function is a React component that accepts the greeting. The method react.dom.render () displays the greeting function on a DOM element with the ID myReactApp.
\n
Example 1.2 src / main / js / app.js: app / components / app / component / class _ app extends React.Component {constructor (props) {super (props); this.state = employees; componentDidMount ("client," method ("path / to / employees / done," answer); this.setState (employees); response.entity (embeddedEmployee); render (); return ("employee eList," employee);} this.StateEmployees;} The component class has methods for creating React components.
\n
The previous listing creates a new React component (note the uppercase format) with two properties, keys and data. The employee status and the data are included as input parameters in the creation of the EmploloyerList React component. These qualities provide the values of the employees, connect themselves. Employees and employees. With the help of the JavaScript map function this.propseEmployees transforms the array of employees into a dataset with a number of elements for the React component, which you will see a little later.
\n
It provides a way to pass data from one component to another, just as arguments are passed to functions. It is a built-in React object that stores the value of Tagas attributes that work similar to HTML attributes.
\n
The main purpose of React is to be fast, scalable and simple. It allows developers to build large web applications without changing the data or reloading the page. React was first used on Facebook's News Feed in 2011-2012.
\n
It is easy to use and allows users to create reusable components. JSX is an extension of JavaScript. It is not compulsory to use JSX with React, but it is one of the best features to get used to.
\n
This is the use of a virtual DOM (JavaScript object). It can be used on both the client and server side, just like any other framework. It is used to improve the performance of the app, as the virtual DOM is faster than the regular DOM. This library is licensed under the React license of Facebook, Inc.
\n
It is an open source component-based front-end library that is responsible for the application as a view layer. Model View Controller (MVC) is an architecture in which the view layer is primarily responsible for an Appas look-and-feel. Let's take a look at the example of the Instagram website created with ReactJS to get a better understanding of how it works.
\n
It runs on Node.js and can be used to create React apps like Facebook Scaffold. It is compatible with a wide range of IDEs and can be integrated into any development environment, allowing you to design your entire front-end application. If you want to get started with this powerful library, Edx.org offers a course in partnership with Microsoft to free you from the foundation and start building.
\n
Facebook has adopted a code of conduct that we expect all project participants to abide by. The main purpose of this repository is to further develop React Core and simplify its use. Continue reading how to participate in the improvement of ReactJS. The development of ReactJS takes place outdoors on GitHub, and we are grateful to the community for contributing bug fixes and improvements.
\n
The website itself uses Next.js for server-side rendering and React for UI. I chose it after reading that it was the fastest listing of websites optimized for it. I used functional components with a reaction hook for government management. The router is equipped with the Next-Framework for page switching.`;

const tags = [ "code", "efra", "fun" ];

export const blogEntries = [
  {
    author: blogAuthors[ 0 ],
    title: "ReactJS theory",
    body: tempBody,
    date: date,
    category: categories[ 0 ],
    slug: "reactjs-theory",
    tags: tags,
    image: hero,
  },
  {
    author: blogAuthors[ 1 ],
    title: "ReactJS theory",
    body: tempBody,
    date: date,
    category: categories[ 2 ],
    slug: "reactjs-theory-1",
    tags: tags,
    image: hero,
  },
  {
    author: blogAuthors[ 1 ],
    title: "ReactJS theory",
    body: tempBody,
    date: date,
    category: categories[ 3 ],
    slug: "reactjs-theory-2",
    tags: tags,
    image: hero,
  },
  {
    author: blogAuthors[ 0 ],
    title: "ReactJS theory",
    body: tempBody,
    date: date,
    category: categories[ 1 ],
    slug: "reactjs-theory-3",
    tags: tags,
    image: hero,
  },
  {
    author: blogAuthors[ 0 ],
    title: "ReactJS theory",
    body: tempBody,
    date: date,
    category: categories[ 0 ],
    slug: "reactjs-theory-4",
    tags: tags,
    image: hero,
  },
  {
    author: blogAuthors[ 1 ],
    title: "ReactJS theory",
    body: tempBody,
    date: date,
    category: categories[ 2 ],
    slug: "reactjs-theory-5",
    tags: tags,
    image: hero,
  },
  {
    author: blogAuthors[ 1 ],
    title: "ReactJS theory",
    body: tempBody,
    date: date,
    category: categories[ 3 ],
    slug: "reactjs-theory-6",
    tags: tags,
    image: hero,
  },
  {
    author: blogAuthors[ 0 ],
    title: "ReactJS theory",
    body: tempBody,
    date: date,
    category: categories[ 1 ],
    slug: "reactjs-theory-7",
    tags: tags,
    image: hero,
  },
  {
    author: blogAuthors[ 1 ],
    title: "ReactJS theory",
    body: tempBody,
    date: date,
    category: categories[ 2 ],
    slug: "reactjs-theory-8",
    tags: tags,
    image: hero,
  },
  {
    author: blogAuthors[ 1 ],
    title: "ReactJS theory",
    body: tempBody,
    date: date,
    category: categories[ 3 ],
    slug: "reactjs-theory-9",
    tags: tags,
    image: hero,
  },
];


export const getPostBySlug = (slug) => {
  return blogEntries.filter((entry) => {
    return slug === entry.slug
  })[0];
};