(this.webpackJsonpdummy=this.webpackJsonpdummy||[]).push([[0],{16:function(e,a,t){},17:function(e,a,t){},18:function(e){e.exports=JSON.parse('{"light":{"R-301 Carbine":{"Body Damage":"14","Head Damage":"28","Leg Damage":"11","DPS":"189","RPM":"810","Fire-Mode":["Single","Auto"],"Mag-Size":["18","20","25","28"]},"R-99 SMG":{"Body Damage":"11","Head Damage":"17","Leg Damage":"9","DPS":"198","RPM":"1080","Fire-Mode":["Auto"],"Mag-Size":["20","22","24","27"]},"P2020":{"Body Damage":"15","Head Damage":"20","Leg Damage":"12","DPS":"127","RPM":"510","Fire-Mode":["Single"],"Mag-Size":["12","14","16","18"]},"RE-45 Auto":{"Body Damage":"12","Head Damage":"16","Leg Damage":"10","DPS":"156","RPM":"780","Fire-Mode":["Auto"],"Mag-Size":["16","19","22","25"]},"Alternator":{"Body Damage":"15","Head Damage":"23","Leg Damage":"12","DPS":"150","RPM":"600","Fire-Mode":["Auto"],"Mag-Size":["19","22","25","27"]},"G-7 Scout":{"Body Damage":"34","Head Damage":"60","Leg Damage":"26","DPS":"141","RPM":"250","Fire-Mode":["Single","Burst (2)"],"Mag-Size":["10","15","18","20"]}},"heavy":{"WingMan":{"Body Damage":"45","Head Damage":"90","Leg Damage":"41","DPS":"112","RPM":"150","Fire-Mode":["Single"],"Mag-Size":["5","6","7","8"]},"Spitfire":{"Body Damage":"18","Head Damage":"36","Leg Damage":"14","DPS":"162","RPM":"540","Fire-Mode":["Auto"],"Mag-Size":["35","40","45","55"]},"Flatline":{"Body Damage":"19","Head Damage":"38","Leg Damage":"14","DPS":"190","RPM":"600","Fire-Mode":["Auto","Single"],"Mag-Size":["20","25","28","30"]},"Hemlok":{"Body Damage":"66 (22x3)","Head Damage":"132 (44x3)","Leg Damage":"51 (17x3)","DPS":"179.67","RPM":"490","Fire-Mode":["Single","Burst"],"Mag-Size":["18","24","27","30"]}},"shotgun":{"Mozambique":{"Body Damage":"45 (15x3)","Head Damage":"66 (22x3)","Leg Damage":"42 (14x3)","DPS":"95.25~","RPM":"127~","Fire-Mode":["Single"],"Mag-Size":"4"},"EVA-8":{"Body Damage":"63 (7x9)","Head Damage":"90 (10x9)","Leg Damage":"54 (6x9)","DPS":"118.65~","RPM":"113~","Fire-Mode":["Single","Burst"],"Mag-Size":"8"},"Mastiff":{"Body Damage":"104 (13x8)","Head Damage":"128 (16x8)","Leg Damage":"104 (13x8)","DPS":"166.4","RPM":"96","Fire-Mode":["Single"],"Mag-Size":"4"}},"sniper":{"Sentinel":{"Body Damage":"70","Head Damage":"140","Leg Damage":"63","DPS":"40","RPM":"34.29","Fire-Mode":["Single"],"Mag-Size":["4","5","6","7"]},"Longbow":{"Body Damage":"55","Head Damage":"118","Leg Damage":"44","DPS":"64.17","RPM":"70","Fire-Mode":["Single"],"Mag-Size":["6","8","10","12"]},"Tripletake":{"Body Damage":"69 (23x3)","Head Damage":"138 (46x3)","Leg Damage":"63 (21x3)","DPS":"101.2","RPM":"88","Fire-Mode":["Single"],"Mag-Size":["6","7","8","9"]},"Charge Rifle":{"Body Damage":"90 (3x15 + 45)","Head Damage":"116 (4x15 + 56)","Leg Damage":"90 (3x15 + 45)","DPS":"45","RPM":"30","Fire-Mode":["Single(2)"],"Mag-Size":"8"}},"energy":{"Devotion":{"Body Damage":"16","Head Damage":"32","Leg Damage":"13","DPS":"192","RPM":"685~","Fire-Mode":["Auto"],"Mag-Size":["36","40","44","48"]},"L-STAR":{"Body Damage":"18","Head Damage":"36","Leg Damage":"14","DPS":"180","RPM":"600","Fire-Mode":["Auto"],"Mag-Size":["23"]},"Havoc":{"Body Damage":"18","Head Damage":"36","Leg Damage":"14","DPS":"202","RPM":"672","Fire-Mode":["Auto","Single"],"Mag-Size":["24","28","32","36"]},"Volt SMG":{"Body Damage":"16","Head Damage":"24","Leg Damage":"13","DPS":"208.8","RPM":"783","Fire-Mode":["Auto"],"Mag-Size":["19","21","23","26"]}},"special":{"Prowler":{"Body Damage":"15","Head Damage":"23","Leg Damage":"12","DPS":"200","RPM":"670~","Fire-Mode":["Burst, Auto"],"Mag-Size":"35"},"Peacekeeper":{"Body Damage":"110 (10x11)","Head Damage":"165 (15x11)","Leg Damage":"88 (8x11)","DPS":"88","RPM":"48","Fire-Mode":["Single"],"Mag-Size":"5"},"Kraber":{"Body Damage":"145","Head Damage":"435","Leg Damage":"116","DPS":"87","RPM":"36","Fire-Mode":["Single"],"Mag-Size":"4"}}}')},19:function(e,a,t){"use strict";t.r(a);var g=t(0),n=(t(12),t(1)),o=t.n(n),i=t(9),d=t.n(i),r=(t(16),t(17),t(2)),l=t(3),s=t(6),D=t(5),m=t(4),h=(t(8),function(e){Object(D.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.props.type.charAt(0).toUpperCase()+this.props.type.slice(1);return Object(g.jsxs)("label",{className:"btn btn-padding rounded-pill "+(this.props.toggleButton===this.props.type?"btn-active":"btn-"+this.props.type+"w"),children:[Object(g.jsx)("input",{type:"radio",name:"options",id:"light",autoComplete:"off",value:this.props.type,onChange:function(a){return e.props.handleonChange(a)}}),a]})}}]),t}(o.a.Component)),u=function(e){Object(D.a)(t,e);var a=Object(m.a)(t);function t(e){var g;return Object(r.a)(this,t),(g=a.call(this,e)).state={},g}return Object(l.a)(t,[{key:"render",value:function(){return Object(g.jsx)("div",{children:"Hi"})}}]),t}(o.a.Component),M=(t(18),function(e){Object(D.a)(t,e);var a=Object(m.a)(t);function t(e){var g;return Object(r.a)(this,t),(g=a.call(this,e)).state={toggleButton:"all"},g.handleonChange=g.handleonChange.bind(Object(s.a)(g)),g}return Object(l.a)(t,[{key:"handleonChange",value:function(e){this.setState({toggleButton:e.target.value})}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"btn-group btn-group-toggle",children:[Object(g.jsx)(h,{type:"all",toggleButton:this.state.toggleButton,handleonChange:this.handleonChange}),Object(g.jsx)(h,{type:"light",toggleButton:this.state.toggleButton,handleonChange:this.handleonChange}),Object(g.jsx)(h,{type:"heavy",toggleButton:this.state.toggleButton,handleonChange:this.handleonChange}),Object(g.jsx)(h,{type:"energy",toggleButton:this.state.toggleButton,handleonChange:this.handleonChange}),Object(g.jsx)(h,{type:"shotgun",toggleButton:this.state.toggleButton,handleonChange:this.handleonChange}),Object(g.jsx)(h,{type:"sniper",toggleButton:this.state.toggleButton,handleonChange:this.handleonChange}),Object(g.jsx)(h,{type:"special",toggleButton:this.state.toggleButton,handleonChange:this.handleonChange})]}),Object(g.jsx)(u,{toggleButton:this.state.toggleButton})]})}}]),t}(o.a.Component));var c=function(){return Object(g.jsxs)("div",{className:"container App",children:["Apex Legends Weapon Stat Table",Object(g.jsx)("div",{children:Object(g.jsx)(M,{})})]})};d.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(c,{})}),document.getElementById("root"))},8:function(e,a,t){}},[[19,1,2]]]);
//# sourceMappingURL=main.3d38c670.chunk.js.map