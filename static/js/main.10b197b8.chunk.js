(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/me.4dbc6f38.jpg"},function(e,t,a){e.exports=a.p+"static/media/Resume.ce22405b.docx"},function(e,t,a){e.exports=a.p+"static/media/folder_icon.2856dda2.svg"},function(e,t,a){e.exports=a(27)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),l=a(1),s=a(2),c=a(4),u=a(3),m=a(5),p=a(6),d=a.n(p),h=a(12),b=a.n(h),g=a(13),f=a.n(g),E=(a(21),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).openTab=function(e){a.props.UpdateOpenTab(e)},a.state={openTab:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"sidebar",className:this.props.isHamburgerOpen?"open":"closed"},r.a.createElement("div",{className:"sidebarNavigation"},r.a.createElement("img",{src:b.a,alt:"Joel Atwood"}),d.a.map(this.props.contentList,function(t){return r.a.createElement("button",{onClick:function(){return e.openTab(t)},className:"whiteButton sidebarButton",key:t},t)}),r.a.createElement("button",{className:"whiteButton buttonWrappedLink sidebarButton"},r.a.createElement("a",{href:f.a,download:"Joel_Atwood_Resume",className:"linkAsText"},"Resume"))))}}]),t}(n.Component)),v=a(7),y=(a(22),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).removeTab=function(e){var t=Object(v.a)(a.state.displayedTabList);t=d.a.filter(t,function(t){return e!==t}),a.setState({displayedTabList:t}),a.props.UpdateOpenTab(t[0])},a.displayTab=function(e){a.props.UpdateOpenTab(e)},a.state={displayedTabList:["Home"]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;if(this.props!==e&&(this.props.openTab!==e.openTab&&void 0===d.a.find(this.state.displayedTabList,function(e){return t.props.openTab===e}))){var a=Object(v.a)(this.state.displayedTabList);a.push(this.props.openTab),window.screen.width<768&&this.state.displayedTabList.length>=3&&(a=d.a.tail(a)),this.setState({displayedTabList:a}),this.props.UpdateOpenTab(this.props.openTab)}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tabContainer"},d.a.map(this.state.displayedTabList,function(t){return t===e.props.openTab?r.a.createElement("div",{className:"tab openTab",key:t},r.a.createElement("button",{onClick:function(){return e.displayTab(t)},className:"tabText text_only_button"},t),r.a.createElement("button",{className:"tabCloseButton text_only_button",onClick:function(){return e.removeTab(t)}},"X")):r.a.createElement("div",{className:"tab",key:t},r.a.createElement("button",{onClick:function(){return e.displayTab(t)},className:"tabText text_only_button"},t),r.a.createElement("button",{className:"tabCloseButton text_only_button",onClick:function(){return e.removeTab(t)}},"X"))}))}}]),t}(n.Component)),w=a(14),j=a.n(w),O=(a(23),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"headerContainer"},r.a.createElement("div",{id:"header"},r.a.createElement("div",{className:"namedTitle"},"Joel Atwood"),r.a.createElement("div",{className:"idealPosition"},"Full Stack Developer")),window.screen.width<768?r.a.createElement("button",{className:"hamburger",onClick:this.props.ToggleHamburgerMenu},r.a.createElement("img",{src:j.a})):null,r.a.createElement(y,{className:"tab",contentList:this.props.contentList,openTab:this.props.openTab,UpdateOpenTab:this.props.UpdateOpenTab})," ")}}]),t}(n.Component)),k=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null,"I am both a software developer and a computer science student. I have worked on full stack web development along with software development. My favorite languages to work with are SQL and Javascript. I have worked using several frameworks/methodologies although my favorite is SCRUM."),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/atwo6777",target:"_blank",style:{color:"#417ff2",fontWeight:"bold"}},"My github can be found here."))),r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Current Employment"),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://fenwaygroup.com/"},"Fenway Group")),r.a.createElement("p",null,"Full-Stack Web Developer"),r.a.createElement("p",null,"React, Javascript, Drupal 8, SCRUM, and Java"),r.a.createElement("p",null,"I have progressed through three quarters of Fenway Group's mentorship progression program, by working hard and am set to complete this program later this year."),r.a.createElement("p",null,"As an employee I worked on an advising application. Due to my work on the optimal meeting logic, we have been able to save the company both time and money.")),r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Education"),r.a.createElement("h3",null,"University of Idaho"),r.a.createElement("p",null,"I will graduate in Fall 2019 with a BS in Computer Science.")),r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Favorite Projects"),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("a",{href:"https://github.com/atwo6777/DM-Hoard"},"Dungeons and Dragons Toolkit")),r.a.createElement("p",null,"XQuery, Javascript, React, Java, and Nodejs "),r.a.createElement("p",null,"This was originally a reasearch project with the goal of creating a Natural Language Processing solution for making Dungeons and Dragons easier to play. It is in progress but will include the ability to answer any question about Dungeons and Dragons.")),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("a",{href:"https://github.com/atwo6777/college_advising"},"Advising Program")),r.a.createElement("p",null,"MySQL, Javascript, React and Nodejs"),r.a.createElement("p",null,"This is a database application to advise students on which classes to take based upon what is needed to graduate and for the student's desired occupation. I added an algorithm that determines which classes a student should take next semester. The program determines which classes are needed now to take required classes in the future along with any classes that are useful for a particular career.")),r.a.createElement("div",null,r.a.createElement("h3",null,"Scheduling Web Application"),r.a.createElement("p",null,"Javascript with React, Typescript, and SCRUM "),r.a.createElement("p",null,"This is an application for keeping track of coworkers schedules and choosing optimal meeting times. I wrote an algorithm to determine the optimal meeting times between everyone's schedules."))))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={projectList:[{title:"DM's Hoard",url:"https://github.com/atwo6777/DM-Hoard",technologies:"XQuery, Javascript, React, Java, and Nodejs",text:"This was originally a reasearch project with the goal of creating a Natural Language Processing solution for making Dungeons and Dragons easier to play. It is in progress but with include the        ability to ask any question and find multiple options."},{title:"Advising Program",url:"https://github.com/atwo6777/college_advising",technologies:"MySQL, Javascript, React and Nodejs",text:"Created a database application to advise students on which classes to take based upon what is needed to graduate and for the student's desired occupation. I added an algorithm that determines which classes a student should take next semester. The program determines which classes are needed now to take required classes in the future along with any classes that are useful for a particular career."},{title:"Scheduling Web Application",technologies:"Javascript with React, Typescript, and SCRUM",text:"Created an application for keeping track of schedules and choosing optimal meeting times. I wrote an algorithm to determine the optimal meeting times between everyone's schedules. We defined optimal as the time of the day in which the largest quantity of people could attend."},{title:"Twin Stick Shooter Video Game",url:"https://github.com/atwo6777/Team4Game",technologies:"Unreal Engine and C++",text:"Created a dinosaur hunting video game with a group of classmates. This was my first group project in which I learned Git and worked with other classmates' code. I learned a lot about communication and designed the user interface."},{title:"Simulation of the Producer Consumer problem",technologies:"Semaphores and C++",text:"Created a simulation using piping of the producer consumer problem. I used sempaphores due to our class discussion at the time of the sempaphores. It is not much more complicated than a monitor but is a little bit more difficult to use. "},{title:"Shell Scripter",technologies:"C and Linux System utilities",text:" Created an application to run different commands based on the Bash shell. I used Bash for the longest time and was given the assignment for a class to create a simple version of a shell. I personally struggled with using c inputs up until this assignment."},{title:"Calculator",technologies:" Flex, YACC, Regex",text:"This was an assignment to explore Flex and YACC after having built a lexor using just Flex. I added some functionality to store data and variables along with basic calculator functions."}],projectListInProgress:[{title:"Neural Network",technologies:"C++",text:"This is a class project for a machine learning class. I will be responsible for building a neural network that uses a single layer."},{title:"VR Tractor Simulator",technologies:"Unity and C#",text:"I will create a virtual reality tractor simulator along with several classmates. The goal is to create a training simulation for students to learn how to drive tractors on the Palouse."}]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Projects"),r.a.createElement("div",{className:"projectGrid"},d.a.map(this.state.projectList,function(e){return r.a.createElement("div",{key:e.url+e.title},void 0===e.url?r.a.createElement("h3",null,e.title):r.a.createElement("h3",null,r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("p",null,e.text),r.a.createElement("hr",null))})),r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Projects in Progress"),r.a.createElement("div",{className:"projectGrid"},d.a.map(this.state.projectListInProgress,function(e){return r.a.createElement("div",{key:e.url+e.title},r.a.createElement("h3",null,r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("p",null,e.text),r.a.createElement("hr",null))})))))}}]),t}(n.Component),C=(a(10),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={jobList:[{companyName:"Fenway Group",position:"Full-Stack Web Developer",url:"https://fenwaygroup.com/",technologies:"React, Javascript, Drupal 8, SCRUM, and Java",dateRange:"March 2018 - Current",description:"Fenway Group has the primary goal of developing the next generation of software developers. Because of this they use a variety of technologies and languages and work on a variety of projects.\n I have been through the product life cycle for two different projects and are working on a third project that is set to be released later this year."},{companyName:"Wyndham Gardens Boise",position:"Hotel front-desk and night auditor",dateRange:"May 2017 - August 2017",description:"Wyndham Garends Boise has the primary goal of providing the best experience possible on a budget for travelers visiting the Boise area. Because of this they require their employees to go above and beyond for their clients. I was able to successfully leave 75% of the customers I dealt with happy about the interaction."},{companyName:"Aspire SL Start",position:"Teaching life skills and improving quality of life",url:"https://www.slstart.com/",dateRange:"May 2015 - August 2015",description:"Aspire has the primary goal of improving the lives of those people diagnosed with disabilities. Because of this they require patience and adaptation in dealing with constant new and unique situations."},{companyName:"Maximus",position:"Customer Services Associate for the Affordable Care Act",dateRange:"October 2014 - February 2015",description:"Maximus has the primary goal of educating potential Health Inusrance consumers. Because of this they require an indepth knowledge of working closely with everyone."},{companyName:"Hiero Games",position:"3D model and animation developer",technologies:"Autodesk Maya and Photoshop",dateRange:"May 2014 - September 2014",description:"Hiero Games has the primary goal of creating the vision of their clients multimedia goals. Because of the size of the company I was required to work both independantly and with my coworkers."}]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Job Experiences"),d.a.map(this.state.jobList,function(e){return r.a.createElement("div",{key:e.url+e.companyName},void 0===e.url?r.a.createElement("h3",null,e.companyName,": ",e.dateRange):r.a.createElement("h3",null,r.a.createElement("a",{href:e.url},e.companyName,": ",e.dateRange)),r.a.createElement("p",null,e.position),r.a.createElement("p",null,e.technologies),r.a.createElement("p",null,e.description),r.a.createElement("hr",null))}))}}]),t}(n.Component)),N=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Awards"),r.a.createElement("ul",null,r.a.createElement("li",null,"Certified SCRUM Developer"),r.a.createElement("li",null,"Certified Blockchain Developer"),r.a.createElement("li",null,"BPA - 4th place two years in a row in state for Computer Graphic Design"),r.a.createElement("li",null,"SkillsUSA - 2nd place two years in a row for Computer Animation"),r.a.createElement("li",null,"Certified Solid Works Associate")))}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Education"),r.a.createElement("h3",null,"University of Idaho"),r.a.createElement("p",null,"I will graduate in Fall 2019 with a BS in Computer Science."),r.a.createElement("hr",null),r.a.createElement("h3",null,"Emmett High School"),r.a.createElement("p",null,"I graduated in May of 2014"),r.a.createElement("hr",null))}}]),t}(n.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Home")}}]),t}(n.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Skills"),r.a.createElement("h4",null,"Working Knowledge"),r.a.createElement("ul",null,r.a.createElement("li",null,"Javascript with React"),r.a.createElement("li",null,"MySQL"),r.a.createElement("li",null,"C/C++"),r.a.createElement("li",null,"Typescript"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"Scrum/Agile Development"),r.a.createElement("li",null,"Git version control")),r.a.createElement("h4",null,"Basic Knowledge"),r.a.createElement("ul",null,r.a.createElement("li",null,"Perl"),r.a.createElement("li",null,"Bash"),r.a.createElement("li",null,"Java")))}}]),t}(n.Component),L=(a(24),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).ChooseContent=function(){switch(a.props.openTab){case"Home":case void 0:return r.a.createElement(k,null);case"Projects":return r.a.createElement(T,null);case"Experience":return r.a.createElement(C,null);case"Education":return r.a.createElement(S,null);case"Skills":return r.a.createElement(I,null);case"Awards":return r.a.createElement(N,null);case"Hobbies":return r.a.createElement(x,null);default:return r.a.createElement("div",null,"An error occurred please contact"," ",r.a.createElement("a",{href:"joelatwooddeveloper@gmail.com"},"Joel Atwood."))}},a.state={content:r.a.createElement(k,null)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"main_content"},r.a.createElement("div",{id:"main_content_interior"},this.ChooseContent()))}}]),t}(n.Component)),H=(a(25),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"rightSidebar",className:this.props.isHamburgerOpen?"open":"closed"},r.a.createElement("div",{className:"contact"},"Contact:",r.a.createElement("button",{className:"whiteButton buttonWrappedLink rightSidebarButton"},r.a.createElement("a",{href:"mailto:joelatwooddeveloper@gmail.com",target:"_top",className:"linkAsText"},"Email")),r.a.createElement("button",{className:"whiteButton buttonWrappedLink rightSidebarButton"},r.a.createElement("a",{href:"https://www.linkedin.com/in/joelatwooddeveloper",className:"linkAsText",target:"_blank"},"LinkedIn")),r.a.createElement("p",null,"I love programing. I know that I can build anything if I work hard and put in the time. This is why I seek after challenging and engaging projects."),r.a.createElement("p",null,"I also enjoy being creative with solutions and in my personal life. That is why I play Dungeons and Dragons.")))}}]),t}(n.Component)),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).updateContentList=function(e){a.setState({contentList:e})},a.UpdateOpenTab=function(e){a.setState({openTab:e,isHamburgerOpen:!1})},a.ToggleHamburgerMenu=function(){a.setState({isHamburgerOpen:!a.state.isHamburgerOpen},function(){})},a.state={contentList:["Home","Experience","Education","Projects","Skills","Awards"],openTab:"Home",isHamburgerOpen:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{UpdateOpenTab:this.UpdateOpenTab,contentList:this.state.contentList,openTab:this.state.openTab,isHamburgerOpen:this.state.isHamburgerOpen,ToggleHamburgerMenu:this.ToggleHamburgerMenu}),r.a.createElement(E,{UpdateOpenTab:this.UpdateOpenTab,contentList:this.state.contentList,ToggleHamburgerMenu:this.ToggleHamburgerMenu,isHamburgerOpen:this.state.isHamburgerOpen}),this.state.isHamburgerOpen?null:r.a.createElement(L,{openTab:this.state.openTab}),r.a.createElement(H,{isHamburgerOpen:this.state.isHamburgerOpen}))}}]),t}(n.Component),M=(a(26),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.10b197b8.chunk.js.map