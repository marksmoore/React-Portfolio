(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{27:function(e){e.exports=JSON.parse('[{"id":1,"name":"Pour Decisions","image":"https://user-images.githubusercontent.com/79875711/123901989-a9c7ca80-d931-11eb-8dbb-b15b33ec4781.png","github":"https://misn0147.github.io/pour-decisions/","deploy":"https://pour-decisions.herokuapp.com/","topics":"Node.js/MySQL/Heroku"},{"id":2,"name":"goodnewsly","image":"https://raw.githubusercontent.com/godwinbw/goodnewsly/main/goodnewsly_screenshot.png","github":"https://github.com/godwinbw/goodnewsly","deploy":"https://godwinbw.github.io/goodnewsly/develop/","topics":"HTML/JavaScript/CSS"},{"id":3,"name":"Note Taker","image":"https://github.com/marksmoore/Note-Taker/raw/main/Notes.jpg","github":"https://github.com/marksmoore/Note-Taker","deploy":"https://stark-scrubland-23380.herokuapp.com/","topics":"HTML/CSS/JavaScript/Heroku/NPM/Express/"},{"id":4,"name":"Budget Tracker","image":"https://github.com/marksmoore/budget-tracker/raw/main/Budget-Tracker.jpg","github":"https://github.com/marksmoore/budget-tracker","deploy":"https://fathomless-mountain-90293.herokuapp.com/","topics":"Node.js/Mongoose/MongoDB/JavaScript"},{"id":5,"name":"Work Day Scheduler","image":"https://github.com/marksmoore/react-portfolio/raw/main/src/docs/Work-Day-Scheduler.jpg","github":"https://github.com/marksmoore/work-day-scheduler","deploy":"https://marksmoore.github.io/Work-Day-Scheduler/","topics":"HTML5, CSS, Javascript, JQuery, Bootstrap"}]')},36:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);c(31);var s=c(0),n=c.n(s),a=c(11),i=c.n(a),o=(c(36),c(22)),r=c(23),l=c(29),j=c(28),d=c(9),m=c(4),b=c(47),h=c(1);var u=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)(b.a,{expand:"lg",bg:"dark",sticky:"top",children:[Object(h.jsx)(d.b,{className:"nav-link",to:"/",children:Object(h.jsx)("div",{class:"text-light",children:Object(h.jsx)("h4",{class:"nav-title-font",children:"Mark S. Moore"})})}),Object(h.jsxs)("ul",{class:"navbar-nav ml-auto navitem-indent",children:[Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(d.b,{to:"/about",children:Object(h.jsx)("div",{class:"nav-font text-light",children:"About Me"})})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(d.b,{to:"/portfolio",children:Object(h.jsx)("div",{class:"nav-font text-light",children:"Portfolio"})})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(d.b,{to:"/contact",children:Object(h.jsx)("div",{class:"nav-font text-light",children:"Contact"})})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(d.b,{to:"/resume",children:Object(h.jsx)("div",{class:"nav-font text-light",children:"Resume"})})})]})]})})},p=c.p+"static/media/Mark_med.dc6a733f.jpg";var g=function(){return Object(h.jsxs)("section",{className:"container",children:[Object(h.jsx)("h2",{class:"top-title",children:"Mark S. Moore"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"img-box col-lg-4",children:Object(h.jsx)("img",{src:p,alt:"Me",className:"margin-block my-pic"})}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Educated as an Electrical Engineer, I transitioned to Content Management fifteen years ago. While most of my work has been project managment, I have long desired to learn software to round out the skills needed to complete all the tasks associated with my job. Completing the UT Coding Bootcamp will help me work toward completing that."})]})]})};c(15);var x=function(e){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{alt:e.name,src:e.image})}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("p",{className:"card-title",children:e.name}),Object(h.jsxs)("p",{class:"proj-icons-container",children:[Object(h.jsx)("a",{href:e.github,children:Object(h.jsx)("img",{class:"project-icon",src:"https://img.icons8.com/fluent/48/000000/github.png",alt:"GitHub Repo"})}),Object(h.jsx)("a",{href:e.deploy,children:Object(h.jsx)("img",{class:"project-icon",src:"https://img.icons8.com/fluent/48/000000/domain.png",alt:"Live Application"})})]}),Object(h.jsxs)("p",{class:"topics",children:["(",e.topics,")"]})]})]})},O=c(27);function v(e){return Object(h.jsx)("div",{className:"wrapper",children:e.children})}var f=function(){return Object(h.jsxs)("section",{className:"container",children:[Object(h.jsxs)("div",{className:"project",children:[Object(h.jsx)("h2",{className:"top-title",children:"Portfolio"}),Object(h.jsx)("hr",{})]}),Object(h.jsx)(v,{id:"card-data",children:O.map((function(e){return Object(h.jsx)(x,{image:e.image,name:e.name,github:e.github,deploy:e.deploy,topics:e.topics},e.id)}))})]})},k=c(12),w=c(19),y=c(20);var N=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(y.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(y.a)(a,2),o=i[0],r=i[1],l=c.name,j=c.email,d=c.message;function m(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);r(t?"":"please enter a valid email")}else e.target.value.length?r(""):r("".concat(e.target.name," is required."));o||n(Object(w.a)(Object(w.a)({},c),{},Object(k.a)({},e.target.name,e.target.value)))}return Object(h.jsxs)("section",{className:"container",children:[Object(h.jsx)("h2",{"data-testid":"h1tag",className:"top-title",children:"Contact Form"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("form",{class:"justify-content-center",id:"contact-form",children:[Object(h.jsxs)("div",{class:"mt-5",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(h.jsx)("input",{class:"form-control",type:"text",name:"name",defaultValue:l,onBlur:m})]}),Object(h.jsxs)("div",{class:"mt-5",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(h.jsx)("input",{class:"form-control",type:"email",name:"email",defaultValue:j,onBlur:m})]}),Object(h.jsxs)("div",{class:"mt-5",children:[Object(h.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(h.jsx)("textarea",{class:"form-control",name:"message",defaultValue:d,onBlur:m,rows:"7"})]}),o&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"error-text",children:o})}),Object(h.jsx)("div",{class:"mt-5 mb-5",children:Object(h.jsx)("button",{"data-testid":"button",class:"btn btn-outline-dark ",type:"submit",onSubmit:function(e){e.preventDefault()},children:"Submit"})})]})]})},S=c.p+"static/media/MarkSMooreResume.340b6341.docx";var M=function(){return Object(h.jsxs)("section",{class:"container",children:[Object(h.jsx)("h2",{className:"top-title",children:"Resume"}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{class:"mt-5",children:[Object(h.jsx)("h2",{className:"top-title",children:"Mark S. Moore"}),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:"Core competencies in Enterpirse Content Management and full-stack Web Development."})}),Object(h.jsx)("p",{class:"mt-5",children:Object(h.jsx)("a",{href:"https://www.linkedin.com/in/markstevenmoore/",children:Object(h.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"inkedIn"})})}),Object(h.jsx)("a",{className:"resume-button",href:S,children:Object(h.jsx)("button",{children:"Download my Resume"})})]})}),Object(h.jsx)("div",{class:"justify-content-center mt-5",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"top-title",children:"Proficiencies"}),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:"HTML, CSS, JavaScript, jQuery, React.js, IndexedDB, Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating."})})]})})]})},C=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(h.jsxs)(d.a,{children:[Object(h.jsx)("header",{children:Object(h.jsx)(u,{})}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(m.a,{to:"/about"})}}),Object(h.jsx)(m.b,{path:"/about",component:g}),Object(h.jsx)(m.b,{path:"/portfolio",component:f}),Object(h.jsx)(m.b,{path:"/contact",component:N}),Object(h.jsx)(m.b,{path:"/resume",component:M})]})]})}}]),c}(s.Component);var B=function(){return Object(h.jsxs)("footer",{className:"footer bg-dark fixed-bottom",children:[Object(h.jsx)("a",{href:"https://github.com/marksmoore",children:Object(h.jsx)("img",{src:"https://img.icons8.com/color/48/000000/github--v1.png",alt:"Github",className:"icon"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/markstevenmoore/",children:Object(h.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"LinkedIn",className:"icon"})})]})};c(43);var T=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(C,{}),Object(h.jsx)(B,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),L()}},[[44,1,2]]]);
//# sourceMappingURL=main.dd33a58b.chunk.js.map