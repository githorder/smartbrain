(this.webpackJsonpsmartbrain=this.webpackJsonpsmartbrain||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(10),r=n.n(i),o=(n(19),n(9)),c=n.n(o),l=n(11),m=n(4),d=n(5),h=n(7),b=n(6),p=n(12),u=(n(21),n(22),n.p+"static/media/signOut.07c45bea.gif"),j=n(2),g=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(j.jsx)("nav",{className:"flex justify-end pa4",children:Object(j.jsxs)("div",{onClick:function(){return t("signin")},className:"pl3 pr3 bg-mine-new br3 pointer inline-flex justify-center items-center dim",children:[Object(j.jsx)("img",{className:"w2 pa2",src:u,alt:"signoutGif"}),Object(j.jsx)("button",{className:"pointer pa0 bg-transparent ttc fw4 no-border",children:"Sign Out"})]})}):Object(j.jsxs)("nav",{className:"flex justify-end pa4",children:[Object(j.jsx)("div",{onClick:function(){return t("register")},className:"pl3 pr3 br3 pointer inline-flex justify-center items-center dim",children:Object(j.jsx)("button",{className:"pointer color-mine underline pa0 bg-transparent ttc fw4 no-border",children:"Register"})}),Object(j.jsx)("div",{onClick:function(){return t("signin")},className:"pl3 pr3 br3 pointer inline-flex justify-center items-center dim",children:Object(j.jsx)("button",{className:"pointer underline color-mine bg-transparent pa0 ttc fw4 no-border",children:"Sign In"})})]})},f=n(13),O=n.p+"static/media/brain.1a8ba41f.png",x=function(){return Object(j.jsx)(f.a,{className:"bg-mine ml4 w4 h4 flex items-center justify-center shadow-3 br3 tilty",scale:1.05,children:Object(j.jsx)("img",{className:"w3 white",src:O,alt:"logo"})})},v=n(14),w=n.n(v),N=function(e){var t=e.userName,n=e.rank;return Object(j.jsx)("div",{className:"h3",children:Object(j.jsx)(w.a,{options:{strings:['<div class="fw1 color-mine inline-flex justify-center items-center"><h2 class="ttc pa2 f5 measure">'.concat(t,', your rank number is</h2> <h3 class="pa2 f3 measure underline">#').concat(n,"</h3></div>")],autoStart:!0,loop:!0}})})},C=(n(25),n.p+"static/media/search.65a7fd14.svg"),y=function(e){var t=e.onChangeInput,n=e.onClickBtn;return Object(j.jsxs)("div",{className:"outline-mine-onhover w-50 relative items-center inline-flex shadow-5 ma4 br-pill",children:[Object(j.jsx)("label",{htmlFor:"search",className:"pointer",children:Object(j.jsx)("img",{className:"w2 h2 icon icon-move absolute",src:C,alt:"search icon"})}),Object(j.jsx)("input",{id:"search",onChange:t,autoComplete:"off",className:"pv3 pl5 w-100 myInput no-border no-outline bg-transparent b--black-10",type:"search",placeholder:"Type image URL to detect a face"}),Object(j.jsx)("div",{className:"dim",children:Object(j.jsx)("button",{onClick:n,className:"ttc bg-mine-new pv2 ph4 absolute h2 br3 pointer no-border button-move",children:"detect"})})]})},k=function(e){var t=e.onloadImg,n=e.imageURL,a=e.box,s=e.landmarksObj,i={};if(0!==Object.keys(s).length){var r=a.width,o=a.height,c=s.regions[0].region_info.bounding_box,l=c.left_col,m=c.right_col,d=c.top_row,h=c.bottom_row;i={left:"".concat(l*r,"px"),top:"".concat(d*o,"px"),width:"".concat((m-l)*r,"px"),height:"".concat((h-d)*o,"px"),border:"2px solid blue"}}else 0===Object.keys(s).length&&(i={});return Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsxs)("div",{className:"relative mb4 flex items-center justify-center tilty",children:[Object(j.jsx)("img",{onLoad:t,className:"br2",width:"300px",height:"auto",src:n,alt:""}),Object(j.jsx)("div",{style:i,className:"absolute pointer"})]})})},S=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).onClickSignin=function(){var e=a.state,t=e.signinEmail,n=e.signinPassword;fetch("https://smartbrain-api-diyor.herokuapp.com/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then((function(e){return e.json()})).then((function(e){e.id?(a.props.onRouteChange("home"),a.props.loadUser(e)):console.log(e)})).catch((function(e){return console.log("error: ",e)}))},a.onChangeEmail=function(e){a.setState({signinEmail:e.target.value})},a.onChangePassword=function(e){a.setState({signinPassword:e.target.value})},a.state={signinEmail:"",signinPassword:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(j.jsx)("article",{className:"br3 ba color-mine shadow-5 b--black-10 mv4 width-mine pv3 ph2 center",children:Object(j.jsx)("main",{className:"pa2 black-80",children:Object(j.jsxs)("div",{className:"measure center",children:[Object(j.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(j.jsx)("legend",{className:"f1 fw1 ph0 mh0 color-mine",children:"Sign In"}),Object(j.jsxs)("div",{className:"mt3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6 color-mine",htmlFor:"email-address",children:"Email"}),Object(j.jsx)("input",{onChange:this.onChangeEmail,className:"pa1 input-reset bg-transparent w-100 color-mine outline-mine border-mine",type:"email",name:"email-address",id:"email-address",autoComplete:"off"})]}),Object(j.jsxs)("div",{className:"mv3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6 color-mine",htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{onChange:this.onChangePassword,className:"b pa1 input-reset border-mine outline-mine bg-transparent w-100 color-mine",type:"password",name:"password",id:"password"})]})]}),Object(j.jsx)("div",{className:"",children:Object(j.jsx)("input",{onClick:this.onClickSignin,className:"b ph3 pv2 color-mine input-reset border-mine bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(j.jsx)("div",{className:"lh-copy mt3",children:Object(j.jsx)("input",{onClick:function(){return e("register")},type:"submit",value:"Register",className:"f6 dib pointer bg-transparent no-border input-reset pv2 ph3 b link dim db color-mine"})})]})})})}}]),n}(s.a.Component),R=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).onClickRegister=function(){var e=a.state,t=e.email,n=e.password,s=e.name;fetch("https://smartbrain-api-diyor.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:t,password:n})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.onRouteChange("home"),a.props.loadUser(e))})).catch((function(e){return console.log("error: ",e)}))},a.onChangeName=function(e){a.setState({name:e.target.value})},a.onChangeEmail=function(e){a.setState({email:e.target.value})},a.onChangePassword=function(e){a.setState({password:e.target.value})},a.state={name:"",email:"",password:""},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsx)("article",{className:"br3 ba color-mine shadow-5 b--black-10 mv4 width-mine pv3 ph2 center",children:Object(j.jsx)("main",{className:"pa2 black-80",children:Object(j.jsxs)("div",{className:"measure center",children:[Object(j.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(j.jsx)("legend",{className:"f1 fw1 ph0 mh0 color-mine",children:"Register"}),Object(j.jsxs)("div",{className:"mt3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6 color-mine",htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{className:"pa1 input-reset bg-transparent w-100 color-mine outline-mine border-mine",type:"text",name:"name",id:"name",autoComplete:"off",onChange:this.onChangeName})]}),Object(j.jsxs)("div",{className:"mt3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6 color-mine",htmlFor:"email-address",children:"Email"}),Object(j.jsx)("input",{className:"pa1 input-reset bg-transparent w-100 color-mine outline-mine border-mine",type:"email",name:"email-address",id:"email-address",autoComplete:"off",onChange:this.onChangeEmail})]}),Object(j.jsxs)("div",{className:"mv3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6 color-mine",htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{className:"b pa1 input-reset border-mine outline-mine bg-transparent w-100 color-mine",type:"password",name:"password",id:"password",autoComplete:"off",onChange:this.onChangePassword})]})]}),Object(j.jsx)("div",{className:"",children:Object(j.jsx)("input",{onClick:this.onClickRegister,className:"b ph3 pv2 color-mine input-reset border-mine bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(s.a.Component),I=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:t})},e.onClickBtn=Object(l.a)(c.a.mark((function t(){var n,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({imageURL:e.state.input}),t.prev=1,t.next=4,fetch("https://smartbrain-api-diyor.herokuapp.com/image",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})});case 4:return n=t.sent,t.next=7,n.text();case 7:a=t.sent,s=JSON.parse(a).outputs[0].data,e.setState({landmarksObj:s}),"object"===typeof s&&fetch("https://smartbrain-api-diyor.herokuapp.com/image",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState({user:Object.assign(e.state.user,{rank:t})})})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log("error",t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])}))),e.onChangeInput=function(t){var n=t.target;e.setState({input:n.value})},e.onloadImg=function(t){var n=t.target;e.setState({box:{width:n.offsetWidth,height:n.offsetHeight}})},e.onRouteChange=function(t){"home"===t?e.setState({isSignedIn:!0,landmarksObj:{},imageURL:"",box:{}}):e.setState({isSignedIn:!1,input:"",user:{}}),e.setState({route:t})},e.state={input:"",imageURL:"",landmarksObj:{},box:{},isSignedIn:!1,route:"signin",user:{}},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App min-vh-100",children:[Object(j.jsx)(g,{onRouteChange:this.onRouteChange,isSignedIn:this.state.isSignedIn}),Object(j.jsx)(p.a,{type:"color",bg:!0}),"home"===this.state.route?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{}),Object(j.jsx)(N,{userName:this.state.user.name,rank:this.state.user.rank}),Object(j.jsx)(y,{onClickBtn:this.onClickBtn,onChangeInput:this.onChangeInput}),Object(j.jsx)(k,{onloadImg:this.onloadImg,box:this.state.box,landmarksObj:this.state.landmarksObj,imageURL:this.state.imageURL})]}):"signin"===this.state.route?Object(j.jsx)(S,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(j.jsx)(R,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root")),P()}},[[26,1,2]]]);
//# sourceMappingURL=main.2c625c13.chunk.js.map