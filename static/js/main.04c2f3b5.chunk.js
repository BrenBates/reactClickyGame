(this["webpackJsonpreact-clicky-game"]=this["webpackJsonpreact-clicky-game"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Selene","image":"https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/DF-07916.jpg","clicked":false},{"id":2,"name":"Vlad","image":"https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/INTRO_Universal_DraculaUntold.jpg","clicked":false},{"id":3,"name":"Queen Akasha","image":"https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/AaliyahQUEENoFTHEDAMNED2.jpg","clicked":false},{"id":4,"name":"Lestat","image":"https://storiescdn.hornet.com/wp-content/uploads/2018/07/18135350/vampire-chronicles-lestat-interview-1000x500.jpg","clicked":false},{"id":5,"name":"Louis","image":"https://parade.com/wp-content/uploads/2018/10/interview-with-a-vampire-ftr.jpg","clicked":false},{"id":6,"name":"David","image":"https://bloody-disgusting.com/wp-content/uploads/2019/10/Kiefer-Sutherland-e1571925847303.jpg","clicked":false},{"id":7,"name":"Barnabus","image":"http://images5.fanpop.com/image/photos/30600000/Dark-Shadows-Featurette-Vampire-History-tim-burtons-dark-shadows-30628190-900-506.jpg","clicked":false},{"id":8,"name":"Blade","image":"https://www.syfy.com/sites/syfy/files/styles/syfy_episode_recap_full_breakpoints_theme_syfy_smartphone_1x/public/blog-images/Blade_hero_movie.jpg","clicked":false},{"id":9,"name":"Danny","image":"https://i.pinimg.com/originals/9b/dc/b1/9bdcb1edbc6523b0982cb9d63d95d8c8.jpg","clicked":false},{"id":10,"name":"Orlock","image":"https://i.ytimg.com/vi/9_Z19l-K5Ko/maxresdefault.jpg","clicked":false},{"id":11,"name":"Kurt","image":"https://miro.medium.com/max/3840/1*KV9MFX9QRP7CksZOAFQzWQ.jpeg","clicked":false},{"id":12,"name":"Dracula","image":"https://i.imgur.com/bVajDlM.jpg","clicked":false}]')},,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),i=a.n(r),c=a(4),n=a.n(c),s=a(5),o=a(6),l=a(7),m=a(12),d=a(8),p=a(13);a(19);var g=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.handleClick(e.id)}})))};a(20);var u=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},h=(a(21),a(9));var f=function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("p",{id:"headerLeft"},"Vampire Clicky Game ",i.a.createElement(h.a,null)),i.a.createElement("p",{id:"headerMiddle"},e.headerText),i.a.createElement("p",{id:"headerRight"},"Score: ",e.score," | Top Score: ",e.topScore))},k=(a(22),a(10));var v=function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("p",{id:"footerLeft"},"Vampire Clicky Game ",i.a.createElement(k.a,null)))},y=a(2),b=a(11),E=a.n(b),j=(a(24),function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={topScore:0,score:0,headerText:"Don't click the same image twice!",vampires:y},a.handleClick=function(e){console.log(e);for(var t=a.state.vampires,r=0;r<t.length;r++)e===t[r].id&&(!1===t[r].clicked?a.setState({score:a.state.score+1,vampires:E()(a.state.vampires,Object(s.a)({},r,{clicked:{$set:!0}})),headerText:"You guessed correct!"}):(a.state.score>a.state.topScore&&a.setState({topScore:a.state.score,score:0,headerText:"You guessed incorrect!",vampires:y},(function(){console.log("Updated new top score!")})),a.state.score<=a.state.topScore&&a.setState({score:0,headerText:"You guessed incorrect!",vampires:y},(function(){console.log("Reset, did not beat the top score!")}))))},a.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[a],e[a]=r}return e},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.vampires.map((function(t){return i.a.createElement(g,{name:t.name,image:t.image,key:t.id,id:t.id,handleClick:e.handleClick})})),a=this.shuffleArray(t);return i.a.createElement("div",null,i.a.createElement(f,{score:this.state.score,topScore:this.state.topScore,headerText:this.state.headerText}),i.a.createElement(u,null,a),i.a.createElement(v,null))}}]),t}(i.a.Component));a(25);n.a.render(i.a.createElement(j,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.04c2f3b5.chunk.js.map