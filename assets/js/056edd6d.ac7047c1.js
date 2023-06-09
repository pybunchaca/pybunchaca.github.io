"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[911],{3905:(e,n,o)=>{o.r(n),o.d(n,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>p});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},a.apply(this,arguments)}function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=t.createContext({}),p=function(e){return function(n){var o=u(n.components);return t.createElement(e,a({},n,{components:o}))}},u=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},d=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return o?t.createElement(f,i(i({ref:n},c),{},{components:o})):t.createElement(f,i({ref:n},c))}));function h(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},6648:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=o(7462),r=(o(7294),o(3905));const a={},l="Control Flow and Loops",i={unversionedId:"python-basics/control-flow-and-loops",id:"python-basics/control-flow-and-loops",title:"Control Flow and Loops",description:"In this lesson, we will cover control flow and loops in Python. Control flow refers to the order in which the computer executes statements in a program. Loops allow you to repeat a block of code multiple times.",source:"@site/docs/02-python-basics/03-control-flow-and-loops.md",sourceDirName:"02-python-basics",slug:"/python-basics/control-flow-and-loops",permalink:"/docs/python-basics/control-flow-and-loops",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Syntax and Data Types",permalink:"/docs/python-basics/basic-syntax-and-data-types"},next:{title:"Algorithms and Data Structures",permalink:"/docs/category/algorithms-and-data-structures"}},s={},c=[{value:"If-Elif-Else Statements",id:"if-elif-else-statements",level:2},{value:"For Loops",id:"for-loops",level:2},{value:"While Loops",id:"while-loops",level:2},{value:"Break and Continue",id:"break-and-continue",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function u(e){let{components:n,...o}=e;return(0,r.mdx)("wrapper",(0,t.default)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"control-flow-and-loops"},"Control Flow and Loops"),(0,r.mdx)("p",null,"In this lesson, we will cover control flow and loops in Python. Control flow refers to the order in which the computer executes statements in a program. Loops allow you to repeat a block of code multiple times."),(0,r.mdx)("h2",{id:"if-elif-else-statements"},"If-Elif-Else Statements"),(0,r.mdx)("p",null,"The if-elif-else statement is used to control the flow of a program based on a condition. The basic structure of an if-elif-else statement is:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"if condition1:\n    # code to be executed if condition1 is True\nelif condition2:\n    # code to be executed if condition1 is False and condition2 is True\nelse:\n    # code to be executed if both condition1 and condition2 are False\n")),(0,r.mdx)("p",null,"For example, you can use an if-else statement to check if a number is positive or negative:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},'x = 5\nif x > 0:\n    print("x is positive")\nelse:\n    print("x is negative")\n')),(0,r.mdx)("h2",{id:"for-loops"},"For Loops"),(0,r.mdx)("p",null,"A for loop is used to iterate over a sequence (such as a list or a tuple) and execute a block of code for each item in the sequence. The basic structure of a for loop is:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"for variable in sequence:\n    # code to be executed for each item in the sequence\n")),(0,r.mdx)("p",null,"For example, you can use a for loop to print out each item in a list:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},'fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)\n')),(0,r.mdx)("h2",{id:"while-loops"},"While Loops"),(0,r.mdx)("p",null,"A while loop is used to execute a block of code as long as a certain condition is true. The basic structure of a while loop is:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"while condition:\n    # code to be executed as long as the condition is true\n")),(0,r.mdx)("p",null,"For example, you can use a while loop to print out numbers from 1 to 10:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},"x = 1\nwhile x <= 10:\n    print(x)\n    x += 1\n")),(0,r.mdx)("h2",{id:"break-and-continue"},"Break and Continue"),(0,r.mdx)("p",null,"The break statement is used to exit a loop and the continue statement is used to skip an iteration of the loop."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},"for x in range(10):\n    if x == 5:\n        break\n    print(x)\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"enablePythonEditor",enablePythonEditor:!0},"for x in range(10):\n    if x % 2 == 0:\n        continue\n    print(x)\n")),(0,r.mdx)("h2",{id:"conclusion"},"Conclusion"),(0,r.mdx)("p",null,"In conclusion, control flow and loops are important concepts in Python programming. By using if-elif-else statements, for loops, and while loops, you can control the flow of a program and repeat blocks of code as needed. Understanding how to use these structures will help you to write more powerful and efficient programs."))}u.isMDXComponent=!0}}]);