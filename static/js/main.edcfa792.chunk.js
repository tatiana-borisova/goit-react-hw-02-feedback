(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,a){t.exports={notification:"Notification_notification__1C7Ma"}},18:function(t,e,a){},2:function(t,e,a){t.exports={counters:"Statistics_counters__2SQla",counter:"Statistics_counter__Z_x9a",counterBad:"Statistics_counterBad__2zB6z",total:"Statistics_total__2pGqP",percent:"Statistics_percent__1qfaV"}},20:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),o=a(6),s=a.n(o),r=(a(17),a(18),a(7)),i=a(8),u=a(9),l=a(12),d=a(11),b=a(4),j=a.n(b),p=a(0);function h(t){var e=t.title,a=t.children;return Object(p.jsxs)("section",{className:j.a.section,children:[e&&Object(p.jsx)("h2",{className:j.a.title,children:e}),a]})}h.defaultProps={title:""};var f=a(5),_=a.n(f);var v={backgroundColor:"#"+(Math.random().toString(16)+"000000").substring(2,8)+"80"},O=function(t){var e=t.onLeaveFeedback,a=t.options;return Object(p.jsx)("div",{className:_.a.buttons,children:a.map((function(t){return Object(p.jsx)("button",{className:_.a.button,type:"button",onClick:function(){return e(t)},style:v,children:(a=t,a.replace(/(^\w{1})/,(function(t){return t.toUpperCase()})))},t);var a}))})},x=a(2),g=a.n(x),k=function(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,o=t.positivePercentage;return Object(p.jsxs)("div",{className:g.a.counters,children:[Object(p.jsxs)("span",{className:g.a.counter,children:["Good: ",e]}),Object(p.jsxs)("span",{className:g.a.counter,children:["Neutral: ",a]}),Object(p.jsxs)("span",{className:g.a.counterBad,children:["Bad: ",n]}),Object(p.jsxs)("span",{className:g.a.counter,children:[Object(p.jsx)("span",{className:g.a.total,children:"Total: "}),c]}),Object(p.jsxs)("span",{className:g.a.counter,children:[Object(p.jsx)("span",{className:g.a.percent,children:"Positive feedback: "}),o]})]})},m=a(10),N=a.n(m),F=function(t){var e=t.message;return Object(p.jsx)("p",{className:N.a.notification,children:e})},S=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={good:t.props.good,neutral:t.props.neutral,bad:t.props.bad},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good;return t.countTotalFeedback()?"".concat(Math.floor(e/t.countTotalFeedback()*100),"%"):"0%"},t}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"statistics",children:[Object(p.jsx)(h,{title:"Please leave feedback",children:Object(p.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(p.jsx)(h,{title:"Statistics",children:this.countTotalFeedback()?Object(p.jsx)(k,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(p.jsx)(F,{message:"No feedback given"})})]})}}]),a}(n.Component);S.defaultProps={good:0,neutral:0,bad:0};var P=S;s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))},4:function(t,e,a){t.exports={title:"Section_title__2S6oE",section:"Section_section__Ap5Zy"}},5:function(t,e,a){t.exports={buttons:"FeedbackOptions_buttons__2qTWo",button:"FeedbackOptions_button__3n-hy"}}},[[20,1,2]]]);
//# sourceMappingURL=main.edcfa792.chunk.js.map