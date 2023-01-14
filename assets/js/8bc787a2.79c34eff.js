"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1544],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>p});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){return function(n){var t=d(n.components);return a.createElement(e,o({},n,{components:t}))}},d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),u=r,y=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return t?a.createElement(y,s(s({ref:n},c),{},{components:t})):a.createElement(y,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2412:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={},i="Basic Syntax and Data Types",s={unversionedId:"python-basics/Basic-Syntax-and-Data-Types",id:"python-basics/Basic-Syntax-and-Data-Types",title:"Basic Syntax and Data Types",description:"Now that you have your development environment set up, it's time to start learning the basics of Python programming. In this lesson, we will cover basic syntax and data types.",source:"@site/docs/02-python-basics/02-Basic-Syntax-and-Data-Types.md",sourceDirName:"02-python-basics",slug:"/python-basics/Basic-Syntax-and-Data-Types",permalink:"/docs/python-basics/Basic-Syntax-and-Data-Types",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to Python and Setting up a Development Environment",permalink:"/docs/python-basics/intro-python"},next:{title:"Tutorial - Extras",permalink:"/docs/category/tutorial---extras"}},l={},c=[{value:"Variables",id:"variables",level:2},{value:"Data Types",id:"data-types",level:2},{value:"Integers",id:"integers",level:3},{value:"Strings",id:"strings",level:3},{value:"Booleans",id:"booleans",level:3},{value:"Lists",id:"lists",level:3},{value:"Tuples",id:"tuples",level:3},{value:"Dictionaries",id:"dictionaries",level:3},{value:"Basic Syntax",id:"basic-syntax",level:3},{value:"Comments",id:"comments",level:3},{value:"Printing",id:"printing",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,a.default)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"basic-syntax-and-data-types"},"Basic Syntax and Data Types"),(0,r.mdx)("p",null,"Now that you have your development environment set up, it's time to start learning the basics of Python programming. In this lesson, we will cover basic syntax and data types."),(0,r.mdx)("h2",{id:"variables"},"Variables"),(0,r.mdx)("p",null,"A variable is a name given to a value. In Python, you can create a variable by assigning a value to a name using the assignment operator (=).\nFor example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},'x = 5\ny = "Hello"\nprint(x)\nprint(y)\n')),(0,r.mdx)("h2",{id:"data-types"},"Data Types"),(0,r.mdx)("p",null,"Python has a variety of data types, including integers, strings, and booleans."),(0,r.mdx)("h3",{id:"integers"},"Integers"),(0,r.mdx)("p",null,"Integers are whole numbers, such as 1, 2, and 3. In Python, you can perform mathematical operations with integers, such as addition (+), subtraction (-), multiplication (*), and division (/)."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},"x = 5\ny = 3\nz = x + y\nprint(z)\n")),(0,r.mdx)("h3",{id:"strings"},"Strings"),(0,r.mdx)("p",null,'Strings are sequences of characters, such as "hello" or "world". In Python, strings are enclosed in quotation marks. You can use the + operator to concatenate strings.'),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},'x = "Hello"\ny = "World"\nz = x + " " + y\nprint(z)\n')),(0,r.mdx)("h3",{id:"booleans"},"Booleans"),(0,r.mdx)("p",null,"Booleans are True or False values. They are often used in control flow statements, such as if-else statements."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},"x = True\ny = False\nprint(x)\nprint(y)\n")),(0,r.mdx)("h3",{id:"lists"},"Lists"),(0,r.mdx)("p",null,"A list is a collection of items, which can be of any data type. Lists are written using square brackets []."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},'x = [1, 2, 3, 4, 5]\ny = ["apple", "banana", "cherry"]\nprint(x)\nprint(y)\n')),(0,r.mdx)("h3",{id:"tuples"},"Tuples"),(0,r.mdx)("p",null,"A tuple is similar to a list, but it is immutable(can't be changed once created). Tuples are written using parentheses ()."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},'x = (1, 2, 3, 4, 5)\ny = ("apple", "banana", "cherry")\nprint(x)\nprint(y)\n')),(0,r.mdx)("h3",{id:"dictionaries"},"Dictionaries"),(0,r.mdx)("p",null,"A dictionary is a collection of key-value pairs. Dictionaries are written using curly braces {}."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},'x = {"name": "John", "age": 30}\nprint(x)\n')),(0,r.mdx)("h3",{id:"basic-syntax"},"Basic Syntax"),(0,r.mdx)("p",null,"Indentation\nIn Python, indentation is used to indicate the scope of a block of code. For example, the code inside a for loop or an if statement is indented."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},'if x > 5:\n    print("x is greater than 5")\n')),(0,r.mdx)("h3",{id:"comments"},"Comments"),(0,r.mdx)("p",null,"In Python, comments are used to explain the code. Comments start with the # symbol."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},"# This is a comment\nx = 5 # This is also a comment\n")),(0,r.mdx)("h3",{id:"printing"},"Printing"),(0,r.mdx)("p",null,"As you can see from all the examples above, in Python, you can use the print() function to display output on the screen."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},"x = 5\nprint(x)\n")),(0,r.mdx)("h2",{id:"conclusion"},"Conclusion"),(0,r.mdx)("p",null,"In conclusion, understanding basic syntax and data types is an essential part of learning Python. Now that you are familiar with variables, data types, and basic syntax, you are ready to start writing more complex programs."))}d.isMDXComponent=!0}}]);