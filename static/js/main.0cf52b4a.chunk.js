(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),c=o(6),l=o.n(c),s=(o(13),o(2)),r=(o(14),o(7)),i=function(e){var t=e.inputText,o=e.setInputText,a=e.todos,c=e.setTodos,l=e.setStatus;return n.a.createElement("form",null,n.a.createElement("input",{value:t,onChange:function(e){o(e.target.value)},type:"text",className:"todo-input"}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),""!==t&&(c([].concat(Object(r.a)(a),[{text:t,completed:!1,id:Math.floor(100*Math.random()+1)}])),o(""))},className:"todo-button",type:"submit"},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{onChange:function(e){l(e.target.value)},name:"todos",className:"filter-todo"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},u=o(4),m=function(e){var t=e.text,o=e.todo,a=e.todo_id,c=e.todos,l=e.setTodos;return n.a.createElement("div",{className:"todo"},n.a.createElement("li",{className:"todo-item ".concat(o.completed?"completed":"")},t),n.a.createElement("button",{onClick:function(){l(c.map((function(e){return e.id===a?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn"},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{onClick:function(){l(c.filter((function(e){return e.id!==a})))},className:"trash-btn"},n.a.createElement("i",{className:"fas fa-trash"})))},d=function(e){var t=e.todos,o=e.setTodos,a=e.filterTodos;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},a.map((function(e){return n.a.createElement(m,{todo:e,todo_id:e.id,text:e.text,key:e.id,todos:t,setTodos:o})}))))};var f=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),o=t[0],c=t[1],l=Object(a.useState)([]),r=Object(s.a)(l,2),u=r[0],m=r[1],f=Object(a.useState)("all"),p=Object(s.a)(f,2),E=p[0],b=p[1],v=Object(a.useState)([]),h=Object(s.a)(v,2),g=h[0],N=h[1];Object(a.useEffect)((function(){S()}),[]),Object(a.useEffect)((function(){O(),j()}),[u,E]);var O=function(){switch(E){case"completed":N(u.filter((function(e){return!0===e.completed})));break;case"uncompleted":N(u.filter((function(e){return!1===e.completed})));break;default:N(u)}},j=function(){localStorage.setItem("todos",JSON.stringify(u))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));console.log(e),m(e)}};return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"Anshul's Todo List")),n.a.createElement(i,{inputText:o,setInputText:c,todos:u,setTodos:m,status:E,setStatus:b}),n.a.createElement(d,{todos:u,setTodos:m,filterTodos:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,o){e.exports=o(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0cf52b4a.chunk.js.map