(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){},30:function(e,a,t){e.exports=t(67)},35:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(26),o=t.n(r),l=(t(35),t(3)),s=t(29),i=t(11),m="UPDATE_SEARCH_RESULTS",u="LOAD_FAVORITES",d="FILTER_SEARCH_RESULTS",f="PAGE_CHANGE",v=Object(n.createContext)(),b=v.Provider,E=function(e,a){switch(a.type){case m:case d:return Object(i.a)({},e,{searchResults:a.searchResults});case u:return Object(i.a)({},e,{savedBooks:a.favorites,currentPage:a.page});case f:return Object(i.a)({},e,{currentPage:a.page});default:return e}},h=function(e){e.value;var a=Object(s.a)(e,["value"]),t=Object(n.useReducer)(E,{savedBooks:[],searchResults:[],currentPage:""}),r=Object(l.a)(t,2),o=r[0],i=r[1];return c.a.createElement(b,Object.assign({value:[o,i]},a))},g=function(){return Object(n.useContext)(v)},k=t(27),p=t(1),N=function(){var e=g(),a=Object(l.a)(e,2),t=a[0];a[1];return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"Search"===t.currentPage?"nav-item active":"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/"},"Search")),c.a.createElement("li",{className:"Saved"===t.currentPage?"nav-item active":"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/saved"},"Saved")))))},w=t(10),y=t.n(w),j={getBooks:function(){return y.a.get("/api/books")},saveBook:function(e){return y.a.post("/api/books",{title:e.title,author:e.author,description:e.description,smallThumbnail:e.smallThumbnail,infoLink:e.infoLink})},deleteBook:function(e){return y.a.delete("/api/books/"+e)},searchForBooks:function(e){return y.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&download=epub&key=AIzaSyDkBRoBfAczEqSC1zVbTZsz4HeadIRAULA"))}},O=(t(24),function(e){var a=g(),t=Object(l.a)(a,2),r=t[0],o=t[1],s="";function i(e){s=e.target.getAttribute("data-tag"),function(){var e=r.searchResults.filter(function(e){return s===e.etag}),a={title:e[0].volumeInfo.title,author:e[0].volumeInfo.authors[0],description:e[0].volumeInfo.description,smallThumbnail:e[0].volumeInfo.imageLinks.smallThumbnail,infoLink:e[0].volumeInfo.infoLink};j.saveBook(a).then(function(e){m()}).catch(function(e){return console.log(e)})}()}function m(){var e=r.searchResults.filter(function(e){return s!==e.etag});o({type:d,searchResults:e})}return Object(n.useEffect)(function(){""!==s&&m()},[]),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement("div",{className:"card mb-2"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-2"},c.a.createElement("img",{src:e.book.volumeInfo.imageLinks.smallThumbnail})),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("h5",{className:"card-title"},e.book.volumeInfo.title),c.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},e.book.volumeInfo.authors),c.a.createElement("p",{className:"card-text"},e.book.volumeInfo.description),c.a.createElement("div",{className:"mt-2 d-flex justify-content-end"},c.a.createElement("a",{href:e.book.volumeInfo.canonicalVolumeLink,className:"btn btn-raised btn-link",target:"_blank"},"View Details"),c.a.createElement("button",{type:"button",className:"ml-2 btn btn-raised btn-info","data-tag":e.book.etag,onClick:function(e){return i(e)}},"Save")))))))}),R=t(13),S=t.n(R),B=function(){var e=g(),a=Object(l.a)(e,2),t=a[0],r=a[1],o=Object(n.useRef)();function s(e){j.searchForBooks(e).then(function(e){r({type:m,searchResults:e.data.items})}).catch(function(e){return console.log(e)}),o.current.value=""}return Object(n.useEffect)(function(){0!==t.searchResults.length&&s(o.current.value)},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement("form",{className:"mt-5"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{ref:o,type:"text",className:"form-control",id:"bookSearchInput","aria-describedby":"emailHelp",placeholder:"Search for books and autors"})),c.a.createElement("button",{type:"submit",className:"btn btn-raised btn-primary",onClick:function(e){return function(e){""!==o.current.value&&(e.preventDefault(),s(o.current.value))}(e)}},"Search")))),0===t.searchResults.length?"":t.searchResults.map(function(e){return c.a.createElement(O,{book:e,key:S.a.generate()})}))},I=function(){var e=g(),a=Object(l.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)(function(){t({type:f,page:"Search"})},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(N,null),c.a.createElement(B,null))},x=function(e){var a=g(),t=Object(l.a)(a,2),n=(t[0],t[1]),r="";function o(e){var a;r=e.target.getAttribute("data-id"),a=r,j.deleteBook(a).then(function(){j.getBooks().then(function(e){n({type:u,favorites:e.data})}).catch(function(e){return console.log(e)})}).catch(function(e){return console.log(e)})}return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement("div",{className:"card mb-2"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-2"},c.a.createElement("img",{src:e.book.smallThumbnail})),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("h5",{className:"card-title"},e.book.title),c.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},e.book.authors),c.a.createElement("p",{className:"card-text"},e.book.description),c.a.createElement("div",{className:"mt-2 d-flex justify-content-end"},c.a.createElement("button",{type:"button",className:"ml-2 btn btn-raised btn-danger","data-id":e.book._id,onClick:function(e){o(e)}},"Remove")))))))},A=function(){var e=g(),a=Object(l.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(function(){j.getBooks().then(function(e){r({type:u,favorites:e.data,page:"Saved"})}).catch(function(e){return console.log(e)})},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(N,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-md-3 my-3"},c.a.createElement("h2",null,"Saved Books"))),t.savedBooks.length>0?t.savedBooks.map(function(e){return c.a.createElement(x,{book:e,key:S.a.generate()})}):"No saved books yet")};var T=function(){return c.a.createElement(k.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null,c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:["/","/search"],component:I}),c.a.createElement(p.a,{exact:!0,path:"/saved",component:A})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[30,1,2]]]);
//# sourceMappingURL=main.fc9ef4e0.chunk.js.map