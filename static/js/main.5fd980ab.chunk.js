(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{18:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),s=t(2),i=t.n(s),c=t(8),o=t(9),d=t(3),l=t(13),h=t(12),m=(t(18),t(6)),b=t.n(m),j=t(1);b.a.setOptions({breaks:!0});var u=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={markdown:"## Welcome to Markdown Live Previewer \n\n### This is an example \n Input your text here \n\n# Header 1 \n## Header 2 \n### Header 3 \n## links \n\nYou may be using [Google](https://google.com/). \n\n ## Inline code \nThis web site is using `markedjs/marked`.\n''<h1> Header </h1>'' \n## Blocks of code \n"+"```\n ".concat("<code><h1>\nhello\n</h1></code>","\n```")+'\n## Lists\n\n### Unordered list\n\n* Item 1\n* Item 2\n* Item 2a\n* Item 2b\n\n### Ordered list\n\n1. Item 1\n1. Item 2\n1. Item 3\n  1. Item 3a\n  1. Item 3b\n\n## Blockquotes \n>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.\n\n## Image \n ![Image Preview.](https://scontent.famm7-1.fna.fbcdn.net/v/t1.6435-9/139106120_230006341916772_8472671773350483624_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fcHRB9cCjSYAX-Se8Vf&_nc_ht=scontent.famm7-1.fna&oh=60b646e6484fd2979338372e2a0f057f&oe=616E56F9 "This is a sample image.")\n\n ## Bold text\n**This text will be bold**  \n__This will also be bold__\n\n'},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({markdown:e.target.value})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",id:"fullApp",children:[Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{class:"text-center",id:"mainHeader",children:"Markdown Live Previewer"})})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("div",{class:"flex-container",children:[Object(j.jsxs)("div",{id:"div1",children:[Object(j.jsx)("h2",{id:"subHeader",children:"Markdown Input"}),Object(j.jsx)("div",{children:Object(j.jsx)("textarea",{rows:"23",cols:"40",id:"editor",class:"form-control",value:this.state.markdown,onChange:this.handleChange})})]}),Object(j.jsxs)("div",{id:"div2",children:[Object(j.jsx)("h2",{class:"col-auto text-center",id:"subHeader",children:"Preview"}),Object(j.jsx)("div",{id:"preview",class:"form-control col-auto",dangerouslySetInnerHTML:{__html:b()(this.state.markdown)}})]})]})]}),Object(j.jsx)("footer",{id:"footer",children:"Markdown Previewer Done By Amani Younis"})]})}}]),t}(r.a.Component),f=t(11),v=Object(f.a)({reducer:{}}),x=t(10);t(24);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x.a,{store:v,children:Object(j.jsx)(u,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5fd980ab.chunk.js.map