(this.webpackJsonptodoist=this.webpackJsonptodoist||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(20),c=a.n(n),s=a(4),r=a(2),o=a.n(r),d=a(6),i=a(10),j=a.n(i),l=a(11),u=a(8),b=a.n(u),h=a(21),O=(a(32),h.a.initializeApp({apiKey:"AIzaSyAMkgS8gakKHkUjW1b2W_gWyomqV7jtke4",authDomain:"todoist-dad7e.firebaseapp.com",projectId:"todoist-dad7e",storageBucket:"todoist-dad7e.appspot.com",messagingSenderId:"802114518305",appId:"1:802114518305:web:a63ad44b10ca2c13265260"})),x=a(17),f=[{key:"INBOX",name:"Inbox"},{key:"TODAY",name:"Today"},{key:"NEXT_7",name:"Next 7 days"}],p=function(e){return f.find((function(t){return t.key===e}))},k=function(){var e="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",t=[];return function(){for(var a=(new Date).getTime(),n=new Array(8),c=7;c>=0;c--)n[c]=e.charAt(a%64),a=Math.floor(a/64);var s=n.join("");for(c=0;c<12;c++)s+=e.charAt(t[c]);return s}}(),m=a(1),v=o.a.createContext({projects:[],setProjects:function(){return[]}}),w=function(e){var t=e.children,a=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){O.firestore().collection("projects").where("userId","==","tarrak123").orderBy("projectId").get().then((function(e){var t=e.docs.map((function(e){return Object(x.a)(Object(x.a)({},e.data()),{},{docId:e.id,projectId:e.get("projectId")})}));JSON.stringify(t)!==JSON.stringify(a)&&n(t)})).catch((function(e){return console.log(e)}))}),[a]),{projects:a,setProjects:n}}(),n=a.projects,c=a.setProjects;return Object(m.jsx)(v.Provider,{value:{projects:n,setProjects:c},children:t})},y=function(){return Object(r.useContext)(v)},_=o.a.createContext({selectedProject:"INBOX",setSelectedProject:function(){return""}}),N=function(e){var t=e.children,a=Object(r.useState)("INBOX"),n=Object(s.a)(a,2),c=n[0],o=n[1];return Object(m.jsx)(_.Provider,{value:{selectedProject:c,setSelectedProject:o},children:t})},S=function(){return Object(r.useContext)(_)},D=o.a.createContext({shouldShowMain:!1,showQuickAddTask:!1,setShowQuickAddTask:function(){return!1},setShouldShowMain:function(){return!1}}),I=function(e){var t=e.children,a=Object(r.useState)(!1),n=Object(s.a)(a,2),c=n[0],o=n[1],d=Object(r.useState)(!1),i=Object(s.a)(d,2),j=i[0],l=i[1];return Object(m.jsx)(D.Provider,{value:{shouldShowMain:c,showQuickAddTask:j,setShowQuickAddTask:l,setShouldShowMain:o},children:t})},Y=function(){return Object(r.useContext)(D)},T=function(e){var t=e.setProject,a=e.showProjectOverlay,n=e.setShowProjectOverlay,c=y().projects;return Object(m.jsx)(m.Fragment,{children:c&&a&&Object(m.jsx)("div",{className:"project-overlay","data-testid":"project-overlay",children:Object(m.jsx)("ul",{className:"project-overlay__list",children:c.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("div",{"data-testid":"project-overlay-action",onClick:function(){t(e.projectId),n(!1)},onKeyDown:function(){t(e.projectId),n(!1)},tabIndex:0,role:"button","aria-label":"Select the task project",children:e.name})},e.projectId)}))})})})},M=function(e){var t=e.showTaskDate,a=e.setShowTaskDate,n=e.setTaskDate;return Object(m.jsx)(m.Fragment,{children:t&&Object(m.jsx)("div",{className:"task-date","data-testid":"task-date-overlay",children:Object(m.jsxs)("ul",{className:"task-date__list",children:[Object(m.jsx)("li",{children:Object(m.jsxs)("div",{"data-testid":"task-date-today",tabIndex:0,role:"button","aria-label":"Select today as the task date",onClick:function(){a(!1),n(b()().format("DD/MM/YYYY"))},onKeyDown:function(){a(!1),n(b()().format("DD/MM/YYYY"))},children:[Object(m.jsx)("span",{children:Object(m.jsx)(d.h,{})}),Object(m.jsx)("span",{children:"Today"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("div",{"data-testid":"task-date-tomorrow",tabIndex:0,role:"button","aria-label":"Select tomorrow as the task date",onClick:function(){a(!1),n(b()().add(1,"day").format("DD/MM/YYYY"))},onKeyDown:function(){a(!1),n(b()().add(1,"day").format("DD/MM/YYYY"))},children:[Object(m.jsx)("span",{children:Object(m.jsx)(d.i,{})}),Object(m.jsx)("span",{children:"Tomorrow"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("div",{"data-testid":"task-date-next-week",tabIndex:0,role:"button","aria-label":"Select next week as the task date",onClick:function(){a(!1),n(b()().add(7,"days").format("DD/MM/YYYY"))},onKeyDown:function(){a(!1),n(b()().add(7,"days").format("DD/MM/YYYY"))},children:[Object(m.jsx)("span",{children:Object(m.jsx)(d.g,{})}),Object(m.jsx)("span",{children:"Next week"})]})})]})})})},C=function(e){var t=e.showAddTaskMain,a=e.shouldShowMain,n=e.showQuickAddTask,c=e.setShowQuickAddTask,o=Object(r.useState)(""),i=Object(s.a)(o,2),u=i[0],h=i[1],x=Object(r.useState)(""),f=Object(s.a)(x,2),p=f[0],k=f[1],v=Object(r.useState)(""),w=Object(s.a)(v,2),y=w[0],_=w[1],N=Object(r.useState)(a),D=Object(s.a)(N,2),I=D[0],Y=D[1],C=Object(r.useState)(!1),g=Object(s.a)(C,2),A=g[0],P=g[1],K=Object(r.useState)(!1),Q=Object(s.a)(K,2),X=Q[0],B=Q[1],E=(S()||{}).selectedProject,F=function(){var e=Object(l.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="","TODAY"===(t=y||E)?a=b()().format("DD/MM/YYYY"):"NEXT_7"===t&&(a=b()().add(7,"days").format("DD/MM/YYYY")),e.t0=u&&t,!e.t0){e.next=8;break}return e.next=7,O.firestore().collection("tasks").add({archived:!1,projectId:t,task:u,date:a||p,userId:"tarrak123"}).then((function(){h(""),_(""),Y(!1),P(!1)}));case 7:e.t0=e.sent;case 8:return e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:n?"add-task add-task__overlay":"add-task","data-testid":"add-task-comp",children:[t&&Object(m.jsxs)("div",{"aria-label":"Add task",className:"add-task__shallow","data-testid":"show-main-action",onClick:function(){return Y(!I)},onKeyDown:function(){return Y(!I)},tabIndex:0,role:"button",children:[Object(m.jsx)("span",{className:"add-task__plus",children:"+"}),Object(m.jsx)("span",{className:"add-task__text",children:"Add Task"})]}),(I||n)&&Object(m.jsxs)("div",{className:"add-task__main","data-testid":"add-task-main",children:[n&&Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{"data-testid":"quick-add-task",children:[Object(m.jsx)("h2",{className:"header",children:"Quick Add Task"}),Object(m.jsx)("span",{"aria-label":"Cancel adding task",className:"add-task__cancel-x","data-testid":"add-task-quick-cancel",onClick:function(){Y(!1),P(!1),c(!1)},onKeyDown:function(){Y(!1),P(!1),c(!1)},tabIndex:0,role:"button",children:Object(m.jsx)(d.j,{fontSize:"18px"})})]})}),Object(m.jsx)(T,{setProject:_,showProjectOverlay:A,setShowProjectOverlay:P}),Object(m.jsx)(M,{setTaskDate:k,showTaskDate:X,setShowTaskDate:B}),Object(m.jsx)("input",{type:"text","aria-label":"Type in a task",className:"add-task__content","data-testid":"add-task-content",value:u,onChange:function(e){return h(e.target.value)}}),Object(m.jsx)("button",{type:"button",className:"add-task__submit","data-testid":"add-task",onClick:n?function(){F(),c(!1)}:function(){return F()},onKeyDown:n?function(){F(),c(!1)}:function(){return F()},tabIndex:0,children:"Add Task"}),!n&&Object(m.jsx)("span",{className:"add-task__cancel","data-testid":"add-task-main-cancel",onClick:function(){Y(!1),P(!1)},onKeyDown:function(){Y(!1),P(!1)},tabIndex:0,role:"button",children:"Cancel"}),Object(m.jsx)("span",{className:"add-task__project","data-testid":"show-project-overlay",onClick:function(){return P(!A)},onKeyDown:function(){return P(!A)},tabIndex:0,role:"button",children:Object(m.jsx)(d.f,{})}),Object(m.jsx)("span",{className:"add-task__date","data-testid":"show-task-date-overlay",onClick:function(){return B(!X)},onKeyDown:function(){return B(!X)},tabIndex:0,role:"button",children:Object(m.jsx)(d.e,{})})]})]})},g=C,A=function(e){var t=e.darkMode,a=e.setDarkMode,n=Y(),c=n.shouldShowMain,s=n.setShouldShowMain,r=n.showQuickAddTask,o=n.setShowQuickAddTask;return Object(m.jsxs)("header",{className:"header","data-testid":"header",children:[Object(m.jsxs)("nav",{children:[Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("img",{src:"/todoist_ts/images/logo.png",alt:"Todoist"})}),Object(m.jsx)("div",{className:"settings",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{className:"settings__add",children:Object(m.jsx)("button",{"data-testid":"quick-add-task-action","aria-label":"Quick add task",type:"button",onClick:function(){o(!0),s(!0)},onKeyDown:function(){o(!0),s(!0)},children:"+"})}),Object(m.jsx)("li",{className:"settings__darkmode",children:Object(m.jsx)("button",{"data-testid":"dark-mode-action","aria-label":"Darkmode on/off",type:"button",onClick:function(){return a(!t)},onKeyDown:function(){return a(!t)},children:Object(m.jsx)(d.c,{})})})]})})]}),Object(m.jsx)(C,{showAddTaskMain:!1,shouldShowMain:c,showQuickAddTask:r,setShowQuickAddTask:o})]})},P=a(16),K=function(e){var t=e.project,a=Object(r.useState)(!1),n=Object(s.a)(a,2),c=n[0],o=n[1],i=y()||{},u=i.projects,b=i.setProjects,h=(S()||{}).setSelectedProject,x=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.firestore().collection("projects").doc(t).delete().then((function(){b(Object(P.a)(u)),h("INBOX")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{className:"sidebar__dot",children:"\u2022"}),Object(m.jsx)("span",{className:"sidebar__project-name",children:t.name}),Object(m.jsxs)("span",{"aria-label":"Confirm delete project",className:"sidebar__project-delete","data-testid":"delete-project",onClick:function(){return o(!c)},onKeyDown:function(){return o(!c)},tabIndex:0,role:"button",children:[Object(m.jsx)(d.k,{}),c&&Object(m.jsx)("div",{className:"project-delete-modal",children:Object(m.jsxs)("div",{className:"project-delete-modal__inner",children:[Object(m.jsx)("p",{children:"Are you sure want to delete this project?"}),Object(m.jsx)("button",{type:"button",onClick:function(){return x(t.docId)},children:"Delete"}),Object(m.jsx)("span",{"aria-label":"Cancel adding project",onClick:function(){return o(!c)},onKeyDown:function(){return o(!c)},tabIndex:0,role:"button",children:"Cancel"})]})})]})]})},Q=function(e){var t=e.activeValue,a=Object(r.useState)(t),n=Object(s.a)(a,2),c=n[0],o=n[1],d=S().setSelectedProject,i=y().projects;return Object(m.jsx)(m.Fragment,{children:i&&i.map((function(e){return Object(m.jsx)("li",{"data-testid":"project-action-parent","data-doc-id":e.docId,className:c===e.projectId?"active sidebar__project":"sidebar__project",children:Object(m.jsx)("div",{"aria-label":"Select ".concat(e.name," as the task project"),"data-testid":"project-action",className:"project-wrapper",role:"button",tabIndex:0,onClick:function(){o(e.projectId),d(e.projectId)},onKeyDown:function(){o(e.projectId),d(e.projectId)},children:Object(m.jsx)(K,{project:e})})},e.projectId)}))})},X=function(e){var t=e.shouldShow,a=Object(r.useState)(t),n=Object(s.a)(a,2),c=n[0],o=n[1],d=Object(r.useState)(""),i=Object(s.a)(d,2),u=i[0],b=i[1],h=k(),x=y()||{},f=x.projects,p=x.setProjects,v=function(){var e=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=u,!e.t0){e.next=4;break}return e.next=4,O.firestore().collection("projects").add({projectId:h,name:u,userId:"tarrak123"}).then((function(){p(Object(P.a)(f)),b(""),o(!1)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"add-project","data-testid":"add-project",children:[c&&Object(m.jsxs)("div",{className:"add-project__input","data-testid":"add-project-inner",children:[Object(m.jsx)("input",{value:u,onChange:function(e){return b(e.target.value)},className:"add-project__name","data-testid":"project-name",type:"text",placeholder:"Name your project"}),Object(m.jsx)("button",{className:"add-project__submit",type:"button",onClick:function(){return v()},"data-testid":"add-project-submit",children:"Add Project"}),Object(m.jsx)("span",{"aria-label":"Cancel adding project",className:"add-project__cancel","data-testid":"hide-project-overlay",onClick:function(){return o(!1)},onKeyDown:function(){return o(!1)},children:"Cancel"})]}),Object(m.jsx)("span",{className:"add-project__plus",children:"+"}),Object(m.jsx)("span",{className:"add-project__text","data-testid":"add-project-action",onClick:function(){return o(!c)},onKeyDown:function(){return o(!c)},role:"button",tabIndex:0,children:"Add Project"})]})},B=function(){var e=S().setSelectedProject,t=Object(r.useState)("inbox"),a=Object(s.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)(!0),i=Object(s.a)(o,2),j=i[0],l=i[1];return Object(m.jsxs)("div",{className:"sidebar","data-testid":"sidebar",children:[Object(m.jsxs)("ul",{className:"sidebar__generic",children:[Object(m.jsx)("li",{"data-testid":"inbox",className:"inbox"===n?"active":void 0,children:Object(m.jsxs)("div",{"aria-label":"Show inbox tasks","data-testid":"inbox-action",tabIndex:0,role:"button",onClick:function(){c("inbox"),e("INBOX")},onKeyDown:function(){c("inbox"),e("INBOX")},children:[Object(m.jsx)("span",{children:Object(m.jsx)(d.b,{})}),Object(m.jsx)("span",{children:"Inbox"})]})}),Object(m.jsx)("li",{"data-testid":"today",className:"today"===n?"active":void 0,children:Object(m.jsxs)("div",{"aria-label":"Show today's asks","data-testid":"today-action",tabIndex:0,role:"button",onClick:function(){c("today"),e("TODAY")},onKeyDown:function(){c("today"),e("TODAY")},children:[Object(m.jsx)("span",{children:Object(m.jsx)(d.d,{})}),Object(m.jsx)("span",{children:"Today"})]})}),Object(m.jsx)("li",{"data-testid":"next_7",className:"next_7"===n?"active":void 0,children:Object(m.jsxs)("div",{"aria-label":"Show tasks for the next 7 days","data-testid":"next_7-action",tabIndex:0,role:"button",onClick:function(){c("next_7"),e("NEXT_7")},onKeyDown:function(){c("next_7"),e("NEXT_7")},children:[Object(m.jsx)("span",{children:Object(m.jsx)(d.e,{})}),Object(m.jsx)("span",{children:"Next 7 days"})]})})]}),Object(m.jsxs)("div",{className:"sidebar__middle","aria-label":"Show/hide projects",onClick:function(){return l(!j)},onKeyDown:function(){return l(!j)},tabIndex:0,role:"button",children:[Object(m.jsx)("span",{children:Object(m.jsx)(d.a,{className:j?void 0:"hidden-projects"})}),Object(m.jsx)("h2",{children:"Projects"})]}),Object(m.jsx)("ul",{className:"sidebar__projects",children:j&&Object(m.jsx)(Q,{activeValue:n})}),j&&Object(m.jsx)(X,{shouldShow:!1})]})},E=function(e){var t=e.id,a=e.taskDesc,n=function(){var e=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.firestore().collection("tasks").doc(t).update({archived:!0});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"checkbox-holder","data-testid":"checkbox-action","aria-label":"Mark ".concat(a," as done?"),onClick:function(){return n()},onKeyDown:function(){return n()},role:"button",tabIndex:0,children:Object(m.jsx)("span",{className:"checkbox"})})},F=function(){var e,t,a,n=S().selectedProject,c=y().projects,o=function(e){var t=Object(r.useState)([]),a=Object(s.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)([]),d=Object(s.a)(o,2),i=d[0],j=d[1];return Object(r.useEffect)((function(){var t=O.firestore().collection("tasks").where("userId","==","tarrak123");return t=(t=e&&!p(e)?t=t.where("projectId","==",e):"TODAY"===e?t=t.where("date","==",b()().format("DD/MM/YYYY")):"INBOX"===e||null===e?t=t.where("date","==",""):t).onSnapshot((function(t){var a=t.docs.map((function(e){return Object(x.a)({id:e.id,task:e.get("task")},e.data())}));c("NEXT_7"===e?a.filter((function(e){return b()(e.date,"DD/MM/YYYY").diff(b()(),"days")<=7&&!0!==e.archived})):a.filter((function(e){return!0!==e.archived}))),j(a.filter((function(e){return!1!==e.archived})))})),function(){return t}}),[e]),{tasks:n,archivedTasks:i}}(n).tasks,d=Y(),i=d.shouldShowMain,j=d.setShowQuickAddTask;p(n)&&n&&(e=null===(t=function(e,t){return e.find((function(e){return e.key===t}))}(f,n))||void 0===t?void 0:t.name);c&&c.length>0&&n&&!p(n)&&(e=null===(a=function(e,t){return e.find((function(e){return e.projectId===t}))}(c,n))||void 0===a?void 0:a.name);return Object(r.useEffect)((function(){document.title="".concat(e,": Todoist")}),[e]),Object(m.jsxs)("div",{className:"tasks","data-testid":"tasks",children:[Object(m.jsx)("h2",{"data-testid":"project-name",children:e}),Object(m.jsx)("ul",{className:"tasks__list",children:o.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsx)(E,{id:e.id,taskDesc:e.task}),Object(m.jsx)("span",{children:e.task})]},"".concat(e.id))}))}),Object(m.jsx)(g,{showAddTaskMain:!0,shouldShowMain:i,showQuickAddTask:!1,setShowQuickAddTask:j})]})},q=function(){return Object(m.jsxs)("section",{className:"content",children:[Object(m.jsx)(B,{}),Object(m.jsx)(F,{})]})},J=function(e){var t=e.darkModeDefault,a=Object(r.useState)(t),n=Object(s.a)(a,2),c=n[0],o=n[1];return Object(m.jsx)(N,{children:Object(m.jsx)(w,{children:Object(m.jsx)(I,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("main",{"data-testid":"application",className:c?"darkmode":void 0,children:[Object(m.jsx)(A,{darkMode:c,setDarkMode:o}),Object(m.jsx)(q,{})]})})})})})};a(30);c.a.render(Object(m.jsx)(J,{darkModeDefault:!1}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.885074dc.chunk.js.map