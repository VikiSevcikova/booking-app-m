(this["webpackJsonpbooking-app-m"]=this["webpackJsonpbooking-app-m"]||[]).push([[0],{113:function(e,t,a){},114:function(e,t,a){},186:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(23),r=a.n(s),i=(a(113),a(114),a(115),a(116),a(20)),l=a.n(i),o=a(33),j=a(12),u=a(13),d=(a(88),a(30)),b=a.n(d),p=a(99),h=a.n(p),O=(a(137),a(2));var m=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(u.g)().id,r=function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=".concat(s),e.prev=1,e.next=4,b.a.get(t,{headers:{"x-rapidapi-key":"d1b9e6522fmsh0a181650a1ef265p11f88ajsnc40ac559e156","x-rapidapi-host":"hotels4.p.rapidapi.com"}});case 4:a=e.sent,console.log(a),c=a.data.hotelImages.slice(0,10).map((function(e){return{original:e.baseUrl.replace("{size}","d"),thumbnail:e.baseUrl.replace("{size}","d")}})),console.log(c),n(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(O.jsx)(O.Fragment,{children:a&&Object(O.jsx)(h.a,{items:a,thumbnailPosition:"left",showPlayButton:!1})})},x=a(39),g=a(87);var f=function(e){var t=e.overviewSection;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:t.title}),Object(O.jsx)(g.a,{variant:"flush",children:t.content.map((function(e){return Object(O.jsx)(g.a.Item,{dangerouslySetInnerHTML:{__html:e}})}))})]})},y=a(203),v=a(197),C=a(102),S=a(198),N=a(46),E=a.n(N),k=a(11),I=n.a.createContext(),w=new Date,A=new Date((new Date).setDate(w.getDate()+1)),L={loading:!1,places:null,checkIn:w,checkOut:A,adults:1,children:0,alert:{show:!1,title:"",message:"",variant:"warning"}},D=function(e,t){switch(t.type){case"LOADING":return Object(k.a)(Object(k.a)({},e),{},{loading:!0});case"CHANGE_PLACES":return Object(k.a)(Object(k.a)({},e),{},{places:t.payload,loading:!1});case"CHANGE_CHECKIN":return Object(k.a)(Object(k.a)({},e),{},{checkIn:t.payload});case"CHANGE_CHECKOUT":return Object(k.a)(Object(k.a)({},e),{},{checkOut:t.payload});case"CHANGE_ADULTS":return Object(k.a)(Object(k.a)({},e),{},{adults:t.payload});case"CHANGE_CHILDREN":return Object(k.a)(Object(k.a)({},e),{},{children:t.payload});case"CHANGE_ALERT_MESSAGE":return Object(k.a)(Object(k.a)({},e),{},{alert:Object(k.a)(Object(k.a)({},e.alert),{},{message:t.payload.message,title:t.payload.title,variant:t.payload.variant?t.payload.variant:"warning"})});case"SHOW_ALERT":return Object(k.a)(Object(k.a)({},e),{},{alert:Object(k.a)(Object(k.a)({},e.alert),{},{show:!e.alert.show})});default:return e}},_=function(e){var t=Object(c.useReducer)(D,L),a=Object(j.a)(t,2),n=a[0],s=a[1];return Object(O.jsx)(I.Provider,{value:{placesState:n,placesDispatch:s},children:e.children})},H=(I.Consumer,a(98),a(206)),T=a(106),G=n.a.createContext(),U={users:JSON.parse(localStorage.getItem("users")),loggedInUser:JSON.parse(localStorage.getItem("loggedInUser"))},R=function(e,t){switch(t.type){case"SIGN_UP":return Object(k.a)(Object(k.a)({},e),{},{users:e.users?[].concat(Object(T.a)(e.users),[t.payload]):[t.payload],loggedInUser:t.payload});case"LOG_IN":return Object(k.a)(Object(k.a)({},e),{},{loggedInUser:e.users.find((function(e){return e.email===t.payload.email&&e.password===t.payload.password}))});case"LOG_OUT":return Object(k.a)(Object(k.a)({},e),{},{loggedInUser:null});default:return e}},P=function(e){var t=Object(c.useReducer)(R,U),a=Object(j.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){localStorage.setItem("users",JSON.stringify(n.users))}),[n.users]),Object(c.useEffect)((function(){localStorage.setItem("loggedInUser",JSON.stringify(n.loggedInUser))}),[n.loggedInUser]),Object(O.jsx)(G.Provider,{value:{userState:n,userDispatch:s},children:e.children})},F=(G.Consumer,a(101)),W=Object(F.a)("pk_test_51J7odVDB3cFdxUXMoirpsUV16TXAlJvjNiT3I8pZmsyb3SiQ1MPaki7YPT8q19e9uWptIXi3AsOqtrVDa4nDuKp800CbC7U9ct"),M=function(e){var t=e.place,a=Object(c.useContext)(I),n=Object(c.useContext)(G),s=a.placesState,r=a.placesDispatch,i=n.userState,u=(n.userDispatch,s.checkIn),d=s.checkOut,p=s.adults,h=s.children,m=i.loggedInUser,x=Object(c.useState)(t.price),g=Object(j.a)(x,2),f=g[0],N=g[1],k=new Date,w=new Date((new Date).setDate(k.getDate()+1)),A=u.toISOString().slice(0,10),L=d.toISOString().slice(0,10),D=function(){var e=Object(o.a)(l.a.mark((function e(a){var c,n,s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),m){e.next=5;break}return r({type:"CHANGE_ALERT_MESSAGE",payload:{title:"Cannot reserve hotel",message:"Please log in."}}),r({type:"SHOW_ALERT"}),e.abrupt("return");case 5:return c={id:Object(H.a)(),hotelName:t.name,checkIn:A,checkOut:L,adults:p,children:h,total:f},console.log(c),e.prev=7,e.next=10,W;case 10:return n=e.sent,e.next=13,b.a.post("http://localhost:4000/payment",{booking:c,customer:m.email});case 13:if(500!==(s=e.sent).status){e.next=18;break}return r({type:"CHANGE_ALERT_MESSAGE",payload:{title:"Issue with payment",message:"We're sorry, but currently it is not possible to reserve."}}),r({type:"SHOW_ALERT"}),e.abrupt("return");case 18:return i=s.data,e.next=21,n.redirectToCheckout({sessionId:i.id});case 21:(o=e.sent).error&&console.error("Error",o.error.message),e.next=30;break;case 25:e.prev=25,e.t0=e.catch(7),console.error(e.t0),r({type:"CHANGE_ALERT_MESSAGE",payload:{title:"Issue with payment",message:"We're sorry, but currently it is not possible to reserve."}}),r({type:"SHOW_ALERT"});case 30:case"end":return e.stop()}}),e,null,[[7,25]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=Math.round(Math.round(d.getTime()-u.getTime())/864e5);console.log(t.price);var a=t.price*(parseInt(p)+parseInt(h))*e;N(a)}),[s]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(y.a,{onSubmit:D,className:"sticky-top py-2 mb-5",children:Object(O.jsxs)("div",{className:"bookingCard px-3 py-3 my-5 g-2 align-items-end",children:[Object(O.jsx)("p",{children:Object(O.jsxs)("b",{children:["$",f," CAD/night"]})}),Object(O.jsxs)(v.a,{children:[Object(O.jsxs)(C.a,{md:!0,children:[Object(O.jsx)(y.a.Label,{children:"Check in"}),Object(O.jsx)(E.a,{name:"checkIn",selected:u,onChange:function(e){return r({type:"CHANGE_CHECKIN",payload:e})},className:"form-control",minDate:k,customInput:Object(O.jsx)("input",{type:"text",id:"checkin",placeholder:"Check Out"})})]}),Object(O.jsxs)(C.a,{md:!0,children:[Object(O.jsx)(y.a.Label,{children:"Check out"}),Object(O.jsx)(E.a,{name:"checkOut",selected:d,onChange:function(e){return r({type:"CHANGE_CHECKOUT",payload:e})},className:"form-control",minDate:w,customInput:Object(O.jsx)("input",{type:"text",id:"checkin",placeholder:"Check Out"})})]})]}),Object(O.jsxs)(v.a,{children:[Object(O.jsxs)(C.a,{md:!0,children:[Object(O.jsx)(y.a.Label,{children:"Adults"}),Object(O.jsx)(y.a.Control,{name:"adults",type:"number",maxLength:"10",value:p,onChange:function(e){return r({type:"CHANGE_ADULTS",payload:e.target.value})}})]})," ",Object(O.jsxs)(C.a,{md:!0,children:[Object(O.jsx)(y.a.Label,{children:"Children"}),Object(O.jsx)(y.a.Control,{name:"children",type:"number",maxLength:"10",value:h,onChange:function(e){return r({type:"CHANGE_CHILDREN",payload:e.target.value})}})]})]}),Object(O.jsx)(v.a,{children:Object(O.jsx)(C.a,{md:!0,className:"align-items-end my-2",children:Object(O.jsx)(S.a,{type:"submit",variant:"info",style:{width:"100%"},children:"Reserve"})})})]})})})},B=a(199);var K=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),r=Object(j.a)(s,2),i=r[0],d=r[1],p=Object(u.g)().id,h=function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://hotels4.p.rapidapi.com/properties/get-details?id=".concat(p,"&currency=CAD&locale=en_US"),e.prev=1,n(!0),e.next=5,b.a.get(t,{headers:{"x-rapidapi-key":"d1b9e6522fmsh0a181650a1ef265p11f88ajsnc40ac559e156","x-rapidapi-host":"hotels4.p.rapidapi.com"}});case 5:a=e.sent,console.log(a),d(a.data.data.body),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:return e.prev=13,n(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h()}),[p]),Object(O.jsx)(O.Fragment,{children:a?Object(O.jsx)(v.a,{children:Object(O.jsx)(B.a,{className:"mx-auto",animation:"border"})}):Object(O.jsx)("div",{className:"detail",children:i&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:i.propertyDescription.name}),Object(O.jsxs)("p",{children:[Object(O.jsx)(x.a,{}),Object(O.jsxs)("strong",{children:[" ",i.guestReviews.brands.rating," "]})," (",i.guestReviews.brands.total," reviews)"]}),Object(O.jsx)(m,{}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)(C.a,{lg:8,children:i.overview.overviewSections.map((function(e,t){return Object(O.jsx)(f,{overviewSection:e},t)}))}),Object(O.jsx)(C.a,{lg:4,children:Object(O.jsx)(M,{place:{id:p,name:i.propertyDescription.name,price:i.propertyDescription.featuredPrice.currentPrice.plain}})})]})]})})})},J=a(38),z=a(201),q=a(204),V=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(q.a,{className:"justify-content-center",children:Object(O.jsxs)(q.a.Brand,{className:"d-flex align-items-center",children:[Object(O.jsx)("h2",{children:Object(O.jsx)(x.b,{className:"mx-1"})}),"BOOKING"]})})})},X=(a(186),a(208)),Y=a(200),Q=function(e){var t=e.place;return Object(O.jsx)(J.b,{to:"/detail/".concat(t.id),children:Object(O.jsx)(X.a,{className:"border-top-0 border-left-0 border-right-0",children:Object(O.jsx)(X.a.Body,{children:Object(O.jsxs)(v.a,{children:[Object(O.jsx)(C.a,{md:4,children:Object(O.jsx)(Y.a,{style:{width:"100%",height:"100%",objectFit:"cover"},src:t.thumbnailUrl?t.thumbnailUrl:t.optimizedThumbUrls?t.optimizedThumbUrls.srpDesktop:"",alt:t.name,rounded:!0})}),Object(O.jsxs)(C.a,{md:8,children:[Object(O.jsx)(X.a.Text,{className:"mb-1",children:t.address.locality}),Object(O.jsx)(X.a.Title,{children:t.name}),Object(O.jsx)(X.a.Text,{children:t.deals&&t.deals.specialDeal?t.deals.specialDeal.dealText:""}),Object(O.jsxs)(v.a,{className:"align-items-end",children:[Object(O.jsx)(C.a,{className:"justify-content-end",children:t.guestReviews?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x.a,{}),Object(O.jsxs)("strong",{children:[" ",t.guestReviews.rating," "]})," (",t.guestReviews.total," reviews)"]}):""}),Object(O.jsxs)(C.a,{className:"float-right text-right",children:[Object(O.jsx)("strong",{children:t.ratePlan.price.current}),Object(O.jsx)("br",{}),t.ratePlan.price.info]})]})]})]})})})})},Z=a(104),$=function(){var e=Object(c.useContext)(I).placesState,t=e.places,a=e.checkIn,n=e.checkOut,s=e.adults,r=e.children,i={month:"short",day:"numeric"},l=new Intl.DateTimeFormat("en-US",i).format(a),o=new Intl.DateTimeFormat("en-US",i).format(n);return Object(O.jsx)(z.a,{className:"my-2",children:t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:[l," - ",o," \xb7 ",parseInt(s)+parseInt(r)," ",parseInt(s)+parseInt(r)>1?"guests":"guest"]}),Object(O.jsxs)("h1",{children:["Stays in ",t.header]}),t.searchResults.results&&t.searchResults.results.map((function(e){return Object(O.jsx)(Q,{place:e},e.id)}))]}):Object(O.jsxs)("div",{className:"d-flex flex-column align-items-center text-center",children:[Object(O.jsx)("h3",{children:Object(O.jsx)(Z.a,{className:"bounce"})}),Object(O.jsx)("h5",{children:"Please fill out and submit the form to see the results"})]})})},ee=function(){var e=Object(c.useContext)(I),t=e.placesState,a=e.placesDispatch,n=t.loading,s=new Date,r=new Date((new Date).setDate(s.getDate()+1)),i=Object(c.useState)(""),u=Object(j.a)(i,2),d=u[0],p=u[1],h=Object(c.useState)(s),m=Object(j.a)(h,2),x=m[0],g=m[1],f=Object(c.useState)(r),N=Object(j.a)(f,2),k=N[0],w=N[1],A=Object(c.useState)(1),L=Object(j.a)(A,2),D=L[0],_=L[1],H=Object(c.useState)(0),T=Object(j.a)(H,2),G=T[0],U=T[1],R=function(){var e=Object(o.a)(l.a.mark((function e(t){var c,n,s,r,i,o,j,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),d&&null!==d&&""!==d){e.next=5;break}return a({type:"CHANGE_ALERT_MESSAGE",payload:{title:"Wrong Input",message:"Please add location."}}),a({type:"SHOW_ALERT"}),e.abrupt("return");case 5:if(!(x>=k)){e.next=9;break}return a({type:"CHANGE_ALERT_MESSAGE",payload:{title:"Wrong Input",message:"Check out date has to be bigger than check in date."}}),a({type:"SHOW_ALERT"}),e.abrupt("return");case 9:return P(),c=x.toISOString().slice(0,10),n=k.toISOString().slice(0,10),s="https://hotels4.p.rapidapi.com/locations/search?query=".concat(d),e.prev=13,a({type:"LOADING"}),e.next=17,b.a.get(s,{headers:{"x-rapidapi-key":"d1b9e6522fmsh0a181650a1ef265p11f88ajsnc40ac559e156","x-rapidapi-host":"hotels4.p.rapidapi.com"}});case 17:return r=e.sent,i=r.data.suggestions[0].entities[0].destinationId,console.log(i),o="https://hotels4.p.rapidapi.com/properties/list?adults1=".concat(D,"&pageNumber=1&destinationId=").concat(i,"&pageSize=25&checkOut=").concat(n,"&checkIn=").concat(c,"&sortOrder=PRICE&locale=en_US&currency=CAD"),e.next=23,b.a.get(o,{headers:{"x-rapidapi-key":"d1b9e6522fmsh0a181650a1ef265p11f88ajsnc40ac559e156","x-rapidapi-host":"hotels4.p.rapidapi.com"}});case 23:j=e.sent,u=j.data.data.body,console.log(u),a({type:"CHANGE_PLACES",payload:u}),e.next=32;break;case 29:e.prev=29,e.t0=e.catch(13),console.error(e.t0);case 32:case"end":return e.stop()}}),e,null,[[13,29]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){a({type:"CHANGE_CHECKIN",payload:x}),a({type:"CHANGE_CHECKOUT",payload:k}),a({type:"CHANGE_ADULTS",payload:D}),a({type:"CHANGE_CHILDREN",payload:G})};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(y.a,{onSubmit:R,children:Object(O.jsxs)(v.a,{className:"glass px-3 py-3 mx-3 my-5 g-2 align-items-end",children:[Object(O.jsxs)(C.a,{lg:!0,className:"mb-1",children:[Object(O.jsx)(y.a.Label,{children:"Location"}),Object(O.jsx)(y.a.Control,{type:"text",name:"location",placeholder:"Anywhere",onChange:function(e){return p(e.target.value)}})]}),Object(O.jsxs)(C.a,{md:!0,className:"mb-1",children:[Object(O.jsx)(y.a.Label,{children:"Check in"}),Object(O.jsx)(E.a,{name:"checkIn",selected:x,onChange:function(e){return g(e)},className:"form-control",minDate:s,customInput:Object(O.jsx)("input",{type:"text",id:"checkin",placeholder:"Check Out"})})]}),Object(O.jsxs)(C.a,{md:!0,className:"mb-1",children:[Object(O.jsx)(y.a.Label,{children:"Check out"}),Object(O.jsx)(E.a,{name:"checkOut",selected:k,onChange:function(e){return w(e)},className:"form-control",minDate:r,customInput:Object(O.jsx)("input",{type:"text",id:"checkin",placeholder:"Check Out"})})]}),Object(O.jsxs)(C.a,{md:!0,className:"mb-1",children:[Object(O.jsx)(y.a.Label,{children:"Adults"}),Object(O.jsx)(y.a.Control,{name:"adults",type:"number",min:"1",max:"10",value:D,onChange:function(e){return _(e.target.value)}})]})," ",Object(O.jsxs)(C.a,{md:!0,className:"mb-1",children:[Object(O.jsx)(y.a.Label,{children:"Children"}),Object(O.jsx)(y.a.Control,{name:"children",type:"number",min:"0",max:"10",value:G,onChange:function(e){return U(e.target.value)}})]}),Object(O.jsx)(C.a,{lg:!0,className:"align-items-end mt-2",children:Object(O.jsx)(S.a,{type:"submit",variant:"info",style:{width:"100%"},children:n?"Loading\u2026":"Search"})})]})})})},te=function(){return Object(O.jsxs)(v.a,{className:"banner justify-content-center align-items-end position-relative",children:[Object(O.jsx)("h1",{className:"text-light text-center fw-bold text-uppercase p-2 mt-1",children:"Book your dream place"}),Object(O.jsx)(ee,{})]})},ae=function(){var e=new URLSearchParams(Object(u.f)().search),t=Object(c.useContext)(I).placesDispatch;return Object(c.useEffect)((function(){e.get("success")&&(t({type:"CHANGE_ALERT_MESSAGE",payload:{title:"Successful checkout",message:"Your booking was payed.",variant:"success"}}),t({type:"SHOW_ALERT"})),e.get("canceled")&&(t({type:"CHANGE_ALERT_MESSAGE",payload:{title:"Canceled checkout",message:"Your payment failed.",variant:"danger"}}),t({type:"SHOW_ALERT"}))}),[]),Object(O.jsxs)("div",{className:"position-relative mb-5",children:[Object(O.jsx)(te,{}),Object(O.jsx)(v.a,{children:Object(O.jsx)($,{})})]})},ce=a(205),ne=function(){var e=Object(c.useContext)(I),t=e.placesState,a=e.placesDispatch,n=t.alert;return Object(O.jsx)("div",{className:"alert position-fixed p-3",children:Object(O.jsxs)(ce.a,{onClose:function(){return a({type:"SHOW_ALERT"})},show:n.show,delay:3e3,autohide:!0,className:"bg-".concat(n.variant),children:[Object(O.jsx)(ce.a.Header,{children:Object(O.jsx)("strong",{className:"mr-auto",children:n.title})}),Object(O.jsx)(ce.a.Body,{children:n.message})]})})},se=a(105),re=a(207),ie=a(202),le=a(48),oe=a.n(le),je=function(){var e=Object(c.useContext)(G),t=e.userState,a=e.userDispatch,n=t.users,s=t.loggedInUser,r=Object(c.useState)(!1),i=Object(j.a)(r,2),l=i[0],o=i[1],u=Object(c.useState)(!1),d=Object(j.a)(u,2),b=d[0],p=d[1],h=Object(c.useState)(),m=Object(j.a)(h,2),x=m[0],g=m[1],f=Object(c.useState)(),v=Object(j.a)(f,2),C=v[0],N=v[1],E=Object(c.useState)(),k=Object(j.a)(E,2),I=k[0],w=k[1],A=function(){o(!1),g(""),N(""),w("")},L=function(){p(!1),N(""),w("")};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(q.a,{fixed:"bottom",variant:"light",className:"bg-light justify-content-between",children:Object(O.jsxs)(z.a,{children:[Object(O.jsx)(re.a,{children:Object(O.jsx)(re.a.Link,{href:"/",children:"Home"})}),Object(O.jsx)(re.a,{children:s?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(re.a.Link,{children:["Hi ",s.name,"! "]}),Object(O.jsx)(re.a.Link,{eventKey:1,onClick:function(){return a({type:"LOG_OUT"})},children:Object(O.jsx)(se.a,{})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(re.a.Link,{eventKey:1,onClick:function(){return o(!0)},children:"Sign Up"}),Object(O.jsx)(re.a.Link,{eventKey:2,onClick:function(){return p(!0)},children:"Log in"})]})})]})}),Object(O.jsxs)(ie.a,{show:l,onHide:A,animation:!1,children:[Object(O.jsx)(ie.a.Header,{closeButton:!0,children:Object(O.jsx)(ie.a.Title,{children:"Sign up"})}),Object(O.jsxs)(y.a,{onSubmit:function(e){e.preventDefault(),n&&n.some((function(e){return e.email===C}))?alert("Email already exists."):(a({type:"SIGN_UP",payload:{name:x,email:C,password:I,bookings:null}}),A())},children:[Object(O.jsxs)(ie.a.Body,{children:[Object(O.jsx)(oe.a,{controlId:"name",label:"Name",className:"mb-3",type:"text",value:x,onChange:function(e){return g(e.target.value)}}),Object(O.jsx)(oe.a,{controlId:"email",label:"Email",className:"mb-3",type:"email",value:C,onChange:function(e){return N(e.target.value)}}),Object(O.jsx)(oe.a,{controlId:"password",label:"Password",className:"mb-3",type:"password",value:I,onChange:function(e){return w(e.target.value)}})]}),Object(O.jsxs)(ie.a.Footer,{children:[Object(O.jsx)(S.a,{variant:"secondary",onClick:A,children:"Close"}),Object(O.jsx)(S.a,{variant:"primary",type:"submit",children:"Sign up"})]})]})]}),Object(O.jsxs)(ie.a,{show:b,onHide:L,animation:!1,children:[Object(O.jsx)(ie.a.Header,{closeButton:!0,children:Object(O.jsx)(ie.a.Title,{children:"Log in"})}),Object(O.jsxs)(y.a,{onSubmit:function(e){e.preventDefault(),n&&n.some((function(e){return e.email===C&&e.password===I}))?a({type:"LOG_IN",payload:{email:C,password:I}}):alert("Wrong email/password"),L()},children:[Object(O.jsxs)(ie.a.Body,{children:[Object(O.jsx)(oe.a,{controlId:"email",label:"Email",className:"mb-3",type:"email",value:C,onChange:function(e){return N(e.target.value)}}),Object(O.jsx)(oe.a,{controlId:"password",label:"Password",className:"mb-3",type:"password",value:I,onChange:function(e){return w(e.target.value)}})]}),Object(O.jsxs)(ie.a.Footer,{children:[Object(O.jsx)(S.a,{variant:"secondary",onClick:L,children:"Close"}),Object(O.jsx)(S.a,{variant:"primary",type:"submit",children:"Log in"})]})]})]})]})};var ue=function(){return Object(O.jsx)(P,{children:Object(O.jsx)(_,{children:Object(O.jsx)(J.a,{basename:"/booking-app-m",children:Object(O.jsxs)(z.a,{children:[Object(O.jsx)(V,{}),Object(O.jsx)(ne,{}),Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{exact:!0,path:"/detail/:id",children:Object(O.jsx)(K,{})}),Object(O.jsx)(u.a,{exact:!0,path:"/",children:Object(O.jsx)(ae,{})})]}),Object(O.jsx)(je,{})]})})})})},de=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,209)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(ue,{})}),document.getElementById("root")),de()},88:function(e,t,a){}},[[188,1,2]]]);
//# sourceMappingURL=main.d204382e.chunk.js.map