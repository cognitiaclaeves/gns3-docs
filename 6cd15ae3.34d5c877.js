(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var a=n(2),o=n(9),r=(n(0),n(222)),s={id:"change-node-symbol",title:"Use custom symbols in GNS3",sidebar_label:"Change node symbol"},c={id:"using-gns3/change-node-symbol",isDocsHomePage:!1,title:"Use custom symbols in GNS3",description:"Beginning with GNS3 1.4 you have been able to change the symbol for a node (or supply your own).  Starting with GNS3 2.2.0, additional style types of symbols for the various device types are included by default. You can still add your own custom symbols if you wish (that hasn\u2019t changed).",source:"@site/docs/using-gns3/change-node-symbol.md",permalink:"/gns3-docs/docs/using-gns3/change-node-symbol",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/change-node-symbol.md",sidebar_label:"Change node symbol",sidebar:"someSidebar",previous:{title:"The GNS3 GUI",permalink:"/gns3-docs/docs/using-gns3/beginners/the-gns3-gui"},next:{title:"GNS3 Styles",permalink:"/gns3-docs/docs/using-gns3/gns3-styles"}},l=[{value:"Bonus",id:"bonus",children:[]}],b={rightToc:l};function i(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Beginning with GNS3 1.4 you have been able to change the symbol for a node (or supply your own).  Starting with GNS3 2.2.0, additional style types of symbols for the various device types are included by default. You can still add your own custom symbols if you wish (that hasn\u2019t changed)."),Object(r.b)("p",null,"Changing the symbol used by a device is purely cosmetic. You can change the symbol directly from the topology with a right click:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/1.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"Or in that nodes settings in its global preferences:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/2.jpg",alt:"screenshot"}))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Changing the nodes symbol on a device in a topology is just temporary, and on a per-instance basis. If you change the symbol used by a device via its global settings, all new instances of that device will use the chosen symbol."))),Object(r.b)("p",null,"When right-clicking on a device in a topology, you\u2019ll see a listing of symbols you can use:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/3.jpg",alt:"screenshot"}))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u201cClassic\u201d")," are the symbols that have been included with GNS3 for quite a while, and that many are accustomed to seeing. Click on the arrow next to it, to expand that symbol category:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/4.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"Select a symbol, and click ",Object(r.b)("strong",{parentName:"p"},"OK")," to have it applied to that device:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/5.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"The symbol for R11 has now been changed to \u201cRoute Switch Processor\u201d:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/6.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"As you could see from the Symbol Selection menu further up the page, you aren\u2019t limited to just the \u201cClassic\u201d symbols. The \u201cAffinity\u201d symbol styles are included by default, starting with GNS3 2.2.0."),Object(r.b)("p",null,"In the below example, the symbol for R11 will be changed to \u201crouter\u201d, from the Affinity-circle-blue\u201d list:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/7.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"After selecting that symbol, and clicking ",Object(r.b)("strong",{parentName:"p"},"OK"),", R11 will now use that:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/8.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"You can also add a custom symbol from any place in filesystem:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/9.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"Custom symbols should be one of these two graphic file formats:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"SVG (scalable vector graphics)"),Object(r.b)("li",{parentName:"ul"},"PNG (portable network graphics)")),Object(r.b)("p",null,"In Windows, there will be a linux_guest.svg  file included in ",Object(r.b)("inlineCode",{parentName:"p"},"C:\\User\\user_name\\GNS3\\symbols"),", as part of a default installation:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/10.jpg",alt:"screenshot"})),"\n",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/11.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"Select the SVG file and Click ",Object(r.b)("strong",{parentName:"p"},"Open")," to add it to the symbol library:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/12.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"The symbol for ",Object(r.b)("strong",{parentName:"p"},"R11")," has changed to ",Object(r.b)("strong",{parentName:"p"},"\u201cLinux Guest\u201d"),". Click ",Object(r.b)("strong",{parentName:"p"},"OK")," to complete the process:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/13.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"In the main Symbol selection menu, a new ",Object(r.b)("strong",{parentName:"p"},"\u201cCustom Symbols\u201d")," library is added:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/14.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"(as only a single custom symbol has been added, there is no arrow to expand that library. If two or more are added, that arrow will appear)"),Object(r.b)("p",null,"You can also use ",Object(r.b)("strong",{parentName:"p"},"Filter"),", to search a  library for a specific symbol that has already been added to a library:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/change-node-symbol/15.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"(typing \u201cqem\u201d in the ",Object(r.b)("strong",{parentName:"p"},"Filter")," dialog box displays the ",Object(r.b)("strong",{parentName:"p"},"Qemu Guest")," symbol in the ",Object(r.b)("strong",{parentName:"p"},"Classic")," library, as that\u2019s the only symbols in that library that matches the filter string)"),Object(r.b)("p",null,"Portability\nThe custom symbols are exported to the project directory. You can safely copy a project to another computer."),Object(r.b)("h2",{id:"bonus"},"Bonus"),Object(r.b)("p",null,"A repository of images is available here:"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/GNS3/gns3-registry/tree/master/symbols"}),"https://github.com/GNS3/gns3-registry/tree/master/symbols")),Object(r.b)("p",null,"Feel free to contribute your own"))}i.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),i=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=i(n),u=a,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?o.a.createElement(g,c(c({ref:t},b),{},{components:n})):o.a.createElement(g,c({ref:t},b))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var b=2;b<r;b++)s[b]=n[b];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);