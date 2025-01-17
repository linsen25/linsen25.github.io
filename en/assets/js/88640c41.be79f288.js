"use strict";(self.webpackChunkdocsaurus_tutorial=self.webpackChunkdocsaurus_tutorial||[]).push([[6131],{1970:(t,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>e,toc:()=>h});const e=JSON.parse('{"id":"git/intro","title":"\ud83d\udcda Git \u7b80\u4ecb","description":"Git \u662f\u4e00\u4e2a\u5f00\u6e90\u7684 \u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u6700\u521d\u7531 Linus Torvalds \u4e8e 2005 \u5e74\u521b\u5efa\u3002\u5b83\u88ab\u5e7f\u6cdb\u7528\u4e8e\u8ddf\u8e2a\u4ee3\u7801\u6587\u4ef6\u7684\u66f4\u6539\u3001\u7ba1\u7406\u9879\u76ee\u5386\u53f2\u8bb0\u5f55\uff0c\u5e76\u652f\u6301\u591a\u4eba\u534f\u4f5c\u5f00\u53d1\u3002","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/git/intro.md","sourceDirName":"git","slug":"/git/intro","permalink":"/en/docs/git/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/git/intro.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"gitSidebar","previous":{"title":"git\u7684\u524d\u671f\u51c6\u5907","permalink":"/en/docs/git/download"},"next":{"title":"git \u539f\u7406","permalink":"/en/docs/git/theory"}}');var i=s(4848),r=s(8453);const d={sidebar_position:2},l="\ud83d\udcda Git \u7b80\u4ecb",c={},h=[{value:"\u2728 <strong>Git \u7684\u6838\u5fc3\u529f\u80fd</strong>",id:"-git-\u7684\u6838\u5fc3\u529f\u80fd",level:2},{value:"\ud83d\udd17 <strong>Git \u7684\u8fdc\u7a0b\u4ed3\u5e93\u5e73\u53f0</strong>",id:"-git-\u7684\u8fdc\u7a0b\u4ed3\u5e93\u5e73\u53f0",level:2},{value:"\ud83c\udf31 <strong>Git \u7684\u4f18\u70b9</strong>",id:"-git-\u7684\u4f18\u70b9",level:2},{value:"\ud83d\udcd6 <strong>Git \u5b66\u4e60\u8d44\u6e90</strong>",id:"-git-\u5b66\u4e60\u8d44\u6e90",level:2}];function o(t){const n={a:"a",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"-git-\u7b80\u4ecb",children:"\ud83d\udcda Git \u7b80\u4ecb"})}),"\n",(0,i.jsxs)(n.p,{children:["Git \u662f\u4e00\u4e2a\u5f00\u6e90\u7684 ",(0,i.jsx)(n.strong,{children:"\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf"}),"\uff0c\u6700\u521d\u7531 ",(0,i.jsx)(n.strong,{children:"Linus Torvalds"})," \u4e8e 2005 \u5e74\u521b\u5efa\u3002\u5b83\u88ab\u5e7f\u6cdb\u7528\u4e8e\u8ddf\u8e2a\u4ee3\u7801\u6587\u4ef6\u7684\u66f4\u6539\u3001\u7ba1\u7406\u9879\u76ee\u5386\u53f2\u8bb0\u5f55\uff0c\u5e76\u652f\u6301\u591a\u4eba\u534f\u4f5c\u5f00\u53d1\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"Git \u5141\u8bb8\u5f00\u53d1\u8005\u5728\u672c\u5730\u521b\u5efa\u7248\u672c\u5e93\u3001\u5206\u652f\u548c\u6807\u7b7e\uff0c\u540c\u65f6\u8fd8\u80fd\u5c06\u672c\u5730\u66f4\u6539\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93\uff08\u5982 GitHub\u3001Gitee \u7b49\uff09\uff0c\u4ece\u800c\u5b9e\u73b0\u56e2\u961f\u4e4b\u95f4\u7684\u9ad8\u6548\u534f\u4f5c\u548c\u4ee3\u7801\u7ba1\u7406\u3002"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"-git-\u7684\u6838\u5fc3\u529f\u80fd",children:["\u2728 ",(0,i.jsx)(n.strong,{children:"Git \u7684\u6838\u5fc3\u529f\u80fd"})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u529f\u80fd"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u7248\u672c\u63a7\u5236"}),(0,i.jsx)(n.td,{children:"\u8ddf\u8e2a\u9879\u76ee\u6587\u4ef6\u7684\u66f4\u6539\uff0c\u5e76\u5141\u8bb8\u6062\u590d\u5230\u4e4b\u524d\u7684\u7248\u672c\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u5206\u652f\u7ba1\u7406"}),(0,i.jsx)(n.td,{children:"\u652f\u6301\u540c\u65f6\u5f00\u53d1\u591a\u4e2a\u529f\u80fd\uff0c\u4e92\u4e0d\u5e72\u6270\uff0c\u5e76\u53ef\u968f\u65f6\u5408\u5e76\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u591a\u4eba\u534f\u4f5c"}),(0,i.jsx)(n.td,{children:"\u901a\u8fc7\u8fdc\u7a0b\u4ed3\u5e93\uff08\u5982 GitHub/Gitee\uff09\u5b9e\u73b0\u56e2\u961f\u534f\u4f5c\u5f00\u53d1\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u5386\u53f2\u8bb0\u5f55\u67e5\u770b"}),(0,i.jsx)(n.td,{children:"\u67e5\u770b\u9879\u76ee\u7684\u63d0\u4ea4\u5386\u53f2\uff0c\u4e86\u89e3\u6bcf\u6b21\u66f4\u6539\u7684\u5185\u5bb9\u548c\u4f5c\u8005\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u51b2\u7a81\u89e3\u51b3"}),(0,i.jsx)(n.td,{children:"\u5728\u5408\u5e76\u5206\u652f\u65f6\uff0c\u5982\u679c\u6709\u51b2\u7a81\uff0cGit \u4f1a\u5e2e\u52a9\u8bc6\u522b\u548c\u89e3\u51b3\u3002"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"-git-\u7684\u8fdc\u7a0b\u4ed3\u5e93\u5e73\u53f0",children:["\ud83d\udd17 ",(0,i.jsx)(n.strong,{children:"Git \u7684\u8fdc\u7a0b\u4ed3\u5e93\u5e73\u53f0"})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5e73\u53f0"}),(0,i.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GitHub"}),(0,i.jsx)(n.td,{children:"\u5168\u7403\u6700\u5927\u7684\u4ee3\u7801\u6258\u7ba1\u5e73\u53f0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Gitee"}),(0,i.jsx)(n.td,{children:"\u56fd\u5185\u4e3b\u6d41\u7684\u4ee3\u7801\u6258\u7ba1\u5e73\u53f0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GitLab"}),(0,i.jsx)(n.td,{children:"\u4f01\u4e1a\u5e38\u7528\u7684\u4ee3\u7801\u7ba1\u7406\u5de5\u5177"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bitbucket"}),(0,i.jsx)(n.td,{children:"\u5f00\u53d1\u56e2\u961f\u5e38\u7528\u7684\u5de5\u5177"})]})]})]}),"\n",(0,i.jsxs)(n.h2,{id:"-git-\u7684\u4f18\u70b9",children:["\ud83c\udf31 ",(0,i.jsx)(n.strong,{children:"Git \u7684\u4f18\u70b9"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u652f\u6301 ",(0,i.jsx)(n.strong,{children:"\u5206\u5e03\u5f0f\u5f00\u53d1"}),"\uff1a\u6bcf\u4e2a\u5f00\u53d1\u8005\u90fd\u6709\u5b8c\u6574\u7684\u9879\u76ee\u526f\u672c\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5feb\u901f\u9ad8\u6548"}),"\uff1aGit \u7684\u6027\u80fd\u975e\u5e38\u597d\uff0c\u5373\u4f7f\u5728\u5927\u578b\u9879\u76ee\u4e2d\u4e5f\u80fd\u5feb\u901f\u6267\u884c\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5b89\u5168\u6027\u5f3a"}),"\uff1aGit \u4f7f\u7528 SHA-1 \u54c8\u5e0c\u7b97\u6cd5\u6765\u4fdd\u62a4\u6570\u636e\u5b8c\u6574\u6027\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7075\u6d3b\u7684\u5206\u652f\u7ba1\u7406"}),"\uff1aGit \u7684\u5206\u652f\u521b\u5efa\u3001\u5408\u5e76\u548c\u5220\u9664\u64cd\u4f5c\u975e\u5e38\u8f7b\u677e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"-git-\u5b66\u4e60\u8d44\u6e90",children:["\ud83d\udcd6 ",(0,i.jsx)(n.strong,{children:"Git \u5b66\u4e60\u8d44\u6e90"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://git-scm.com/doc",children:"Git \u5b98\u65b9\u6587\u6863"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://git-scm.com/book/zh/v2",children:"Pro Git \u4e2d\u6587\u7248"})}),"\n"]}),"\n",(0,i.jsx)(n.hr,{})]})}function x(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(o,{...t})}):o(t)}},8453:(t,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var e=s(6540);const i={},r=e.createContext(i);function d(t){const n=e.useContext(r);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function l(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:d(t.components),e.createElement(r.Provider,{value:n},t.children)}}}]);