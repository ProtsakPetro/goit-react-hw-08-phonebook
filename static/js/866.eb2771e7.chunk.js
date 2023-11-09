"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[866],{7866:function(e,n,a){a.r(n),a.d(n,{default:function(){return W}});var t=a(9164),r=a(9439),i=a(2791),s=a(9434),o=a(1686),l=a(2866),d=a(6382),c=a(4554),u=a(3006),x=a(5849),f=a(184),p=function(){var e=(0,i.useState)(""),n=(0,r.Z)(e,2),a=n[0],t=n[1],p=(0,i.useState)(""),m=(0,r.Z)(p,2),h=m[0],b=m[1],Z=(0,s.v9)((function(e){return e.contacts})).contacts,j=(0,s.I0)(),g=function(e){var n=e.target,a=n.name,r=n.value;"name"===a?t(r):b(r)};return(0,f.jsxs)(c.Z,{component:"form",onSubmit:function(e){e.stopPropagation(),e.preventDefault(),Z.some((function(e){return a===e.name}))?o.Notify.failure("".concat(a," is already in contacts")):(j((0,l.yH)({name:a,number:h,id:(0,d.x0)()})),t(""),b(""))},noValidate:!0,sx:{mt:1},children:[(0,f.jsx)(u.Z,{margin:"normal",required:!0,fullWidth:!0,id:"filled-basic",label:"Name",variant:"filled",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",autoComplete:"off",value:a,InputProps:{sx:{borderRadius:"15px"},style:{color:"#fff"}},onChange:g}),(0,f.jsx)(u.Z,{margin:"normal",required:!0,fullWidth:!0,id:"filled-basic",label:"Number",variant:"filled",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",autoComplete:"off",onChange:g,value:h,InputProps:{sx:{borderRadius:"15px"},style:{color:"#fff"}}}),(0,f.jsx)(x.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{borderRadius:"15px",mt:3,mb:2},children:"ADD CONTACT"})]})},m=a(3236),h=a(4567),b=a(2411),Z=a(977),j=a(4333),g=a(220),v=a(9900),y=a(2013),C=a(7247),k=a(1286),N=a(5130),w=function(e){var n=e.contacts,a=(0,i.useState)(null),t=(0,r.Z)(a,2),o=t[0],d=t[1],x=(0,s.I0)();return n.map((function(e){var n=e.id,a=e.name,t=e.number;return o===n?(0,f.jsxs)(b.ZP,{sx:{height:"72px",bgcolor:"#f7faff",borderRadius:"15px",mb:"10px",paddingLeft:"30px"},secondaryAction:(0,f.jsxs)(c.Z,{sx:{display:"flex",gap:"10px"},children:[(0,f.jsx)(Z.Z,{edge:"end","aria-label":"delete",onClick:function(){return d(null)},children:(0,f.jsx)(N.Z,{})}),(0,f.jsx)(Z.Z,{edge:"end","aria-label":"delete",onClick:function(){return x((0,l.xX)(n))},children:(0,f.jsx)(C.Z,{})})]}),children:[(0,f.jsx)(j.Z,{children:(0,f.jsx)(g.Z,{children:a[0]})}),(0,f.jsxs)(c.Z,{component:"form",onSubmit:function(e){e.preventDefault();var a=e.target.elements,t=a.contactName,r=a.contactNumber,i={id:n,name:t.value,number:r.value};x((0,l.KY)(i)),d(null)},noValidate:!0,sx:{mt:1,display:"flex",maxWidth:"300px",gap:"30px",marginLeft:"20px"},children:[(0,f.jsx)(u.Z,{name:"contactName",defaultValue:a,id:"standard-basic",variant:"standard"})," ",(0,f.jsx)(u.Z,{name:"contactNumber",defaultValue:t,id:"standard-basic",variant:"standard"}),(0,f.jsx)(Z.Z,{"aria-label":"done",color:"success",type:"submit",children:(0,f.jsx)(y.Z,{})})]})]},n):(0,f.jsxs)(b.ZP,{sx:{bgcolor:"#f7faff",borderRadius:"15px",mb:"10px"},secondaryAction:(0,f.jsxs)(c.Z,{sx:{display:"flex",gap:"30px",paddingRight:"30px"},children:[(0,f.jsx)(Z.Z,{edge:"end","aria-label":"delete",onClick:function(){return d(n)},children:(0,f.jsx)(k.Z,{})}),(0,f.jsx)(Z.Z,{edge:"end","aria-label":"delete",onClick:function(){return x((0,l.xX)(n))},children:(0,f.jsx)(C.Z,{})})]}),children:[(0,f.jsx)(j.Z,{children:(0,f.jsx)(g.Z,{children:a[0]})}),(0,f.jsx)(v.Z,{primary:a,secondary:t})]},n)}))},A=a(6916),R=function(e){return e.contacts},_=(0,A.P1)([R,function(e){return e.filter}],(function(e,n){var a=e.contacts,t=n.filter;return a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())}))})),P=function(){var e=(0,s.v9)(_);return e.length>0?(0,f.jsx)(m.Z,{children:(0,f.jsx)(w,{contacts:e})}):(0,f.jsx)(h.Z,{component:"p",align:"center",paddin:"25px",color:"#706f6f",children:"Have no contacts yet"})},I=a(7747),S=function(){var e=(0,s.I0)();return(0,s.v9)(R).length>0&&(0,f.jsx)(c.Z,{noValidate:!0,sx:{mt:1},children:(0,f.jsx)(u.Z,{fullWidth:!0,type:"text",name:"filter",onChange:function(n){var a=n.target.value;e((0,I.T)(a))},label:"Find contacts by Name",variant:"standard",sx:{borderRadius:"30px"}})})},W=function(){var e=(0,s.I0)();return(0,i.useEffect)((function(){e((0,l.XQ)())}),[e]),(0,f.jsxs)(t.Z,{component:"main",maxWidth:"md",sx:{backgroundColor:"#9a9898",borderRadius:"15px",boxShadow:"rgba(0, 0, 0, 0.7)",marginTop:"150px",padding:"30px",width:"1000px"},children:[(0,f.jsx)(p,{}),(0,f.jsx)(S,{}),(0,f.jsx)(P,{})]})}}}]);
//# sourceMappingURL=866.eb2771e7.chunk.js.map