(self.AMP=self.AMP||[]).push({n:"amp-accordion",v:"1494957764037",f:(function(AMP){function g(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){
    var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}
        else a[d]=b[d]};Date.now();self.log=self.log||{user:null,dev:null};
    var k=self.log;
     
    function l(){
        if(k.user)
        return k.user;throw Error("failed to call initLogConstructor");};
                                                                                   
    function m(){
        var a,b=Object.create(null);
        a&&Object.assign(b,a);return b};
                        
    function n(a){AMP.BaseElement.call(this,a);this.a=this.b=this.f=null;this.c=!1}g(n,AMP.BaseElement);n.prototype.isLayoutSupported=function(a){return"container"==a};
n.prototype.buildCallback=function(){
    var a=this;this.f=this.getRealChildren();this.c=this.element.hasAttribute("disable-session-states");this.element.setAttribute("role","tablist");this.b=p(this);this.a=q(this);this.f.forEach(function(b,c){l().assert("section"==b.tagName.toLowerCase(),"Sections should be enclosed in a <section> tag, See https://github.com/ampproject/amphtml/blob/master/extensions/amp-accordion/amp-accordion.md. Found in: %s",a.element);
    var d=b.children;l().assert(2==d.length,"Each section must have exactly two children. See https://github.com/ampproject/amphtml/blob/master/extensions/amp-accordion/amp-accordion.md. Found in: %s",
a.element);a.mutateElement(function(){var e=d[0],h=d[1];e.classList.add("i-amphtml-accordion-header");e.setAttribute("role","tab");h.classList.add("i-amphtml-accordion-content");h.setAttribute("role","tabpanel");var f=h.getAttribute("id");f||(f=a.element.id+"_AMP_content_"+c,h.setAttribute("id",f));a.a[f]?b.setAttribute("expanded",""):0==a.a[f]&&b.removeAttribute("expanded");e.setAttribute("aria-controls",f);e.setAttribute("aria-expanded",b.hasAttribute("expanded").toString());e.addEventListener("click",
a.g.bind(a))})})};function p(a){var b=a.element.id||a.element.getResourceId();a=a.win.location.href;var c=a.indexOf("#");a=-1==c?a:a.substring(0,c);return"amp-"+b+"-"+a}function q(a){if(a.c)return m();try{var b=a.win.sessionStorage.getItem(a.b);return b?JSON.parse(b):m()}catch(c){return m()}}function r(a){if(!a.c){var b=JSON.stringify(a.a);try{a.win.sessionStorage.setItem(a.b,b)}catch(c){}}}
n.prototype.g=function(a){a.preventDefault();var b=a.currentTarget.parentNode,c=b.children,d=c[0],c=c[1].getAttribute("id"),e=b.hasAttribute("expanded");this.mutateElement(function(){b.hasAttribute("expanded")?(b.removeAttribute("expanded"),d.setAttribute("aria-expanded","false")):(b.setAttribute("expanded",""),d.setAttribute("aria-expanded","true"))},b);this.a[c]=!e;r(this)};AMP.registerElement("amp-accordion",n,"amp-accordion{display:block!important}amp-accordion>section{float:none!important}amp-accordion>section>:nth-child(n){display:none!important;float:none!important}amp-accordion>section>.i-amphtml-accordion-content,amp-accordion>section>.i-amphtml-accordion-header{display:block!important;overflow:hidden!important;position:relative!important}.i-amphtml-accordion-content,.i-amphtml-accordion-header,amp-accordion,amp-accordion>section{margin:0}.i-amphtml-accordion-header{cursor:pointer;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}amp-accordion>section>.i-amphtml-accordion-content{display:none!important}amp-accordion>section[expanded]>.i-amphtml-accordion-content{display:block!important}\n/*# sourceURL=/extensions/amp-accordion/0.1/amp-accordion.css*/");
})});