var E=Object.defineProperty;var D=(t,e,s)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var m=(t,e,s)=>D(t,typeof e!="symbol"?e+"":e,s);import{a as y,i as f,S as v}from"./assets/vendor-Qob_5Ba8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const O="46590311-6ed07305336452fed03a33c90";y.defaults.baseURL="https://pixabay.com/api/";async function b({page:t,perPage:e,query:s}){return(await y.get(`?key=${O}`,{params:{q:s,page:t,per_page:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}function L(t){return t.map(({webformatURL:e,tags:s,likes:n,views:o,comments:r,downloads:d,largeImageURL:g})=>`
      <div class="photo-card">
        <a href="${g}" class="photo-link">
          <img src="${e}" alt="${s}" loading="lazy" class="gallery-image" data-source=${g}/>
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b><br>${n}
          </p>
          <p class="info-item">
            <b>Views</b><br>${o}
          </p>
          <p class="info-item">
            <b>Comments</b><br>${r}
          </p>
          <p class="info-item">
            <b>Downloads</b><br>${d}
          </p>
        </div>
      </div>`).join("")}const p={timeout:5e3,position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",transitionInMobile:"bounceInDown",transitionOutMobile:"fadeOutUp",messageSize:"16px",theme:"dark",messageColor:"white"};function S(t){f.error({...p,backgroundColor:"#ef4040",message:`Error!<br><b>${t}</b><br>Please try again!`})}function q(t){f.error({...p,backgroundColor:"#ef4040",message:`Sorry, there are no images matching your <br><b>${t}</b> query.<br>Please try again!`})}function H(){f.info({...p,backgroundColor:"#ffa000",message:"Sorry, we can't search empty query.<br>Please try again!"})}const l=class l{constructor(e,s,n,o){this.gallery=e,this.loader=s,this.loadMore=n,this.endMessage=o}setHided(){this.gallery.classList.add(l.HIDDEN_CLASS),this.loader.hidden=!0,this.loadMore.hidden=!0,this.endMessage.hidden=!0}setLoading(){this.loader.hidden=!1}setLoaded(){this.loader.hidden=!0,this.loadMore.hidden=!0}setGalleryShow(){this.gallery.classList.remove(l.HIDDEN_CLASS)}setLoadMore(){this.loader.hidden=!0,this.loadMore.hidden=!1}setFinalShow(){this.loader.hidden=!0,this.gallery.classList.remove(l.HIDDEN_CLASS),this.loadMore.hidden=!0,this.endMessage.hidden=!1}};m(l,"HIDDEN_CLASS","visually-hidden");let u=l;const P=document.querySelector("form"),c=document.querySelector(".gallery"),$=document.querySelector(".loader"),M=document.querySelector(".load-more"),C=document.querySelector(".end-collection"),i=new u(c,$,M,C);i.setHided();P.addEventListener("submit",I);let w=new v(".gallery a",{captionsData:"alt",captionDelay:250}),h=1;const a={query:"",page:1,perPage:15};async function I(t){if(t.preventDefault(),i.setHided(),a.page=1,a.query=t.target[0].value.trim(),a.query===""){H();return}i.setLoading(),c.innerHTML="",b(a).then(e=>{if(e.hits.length===0){c.innerHTML="",i.setLoaded(),q(userQuery);return}h=Math.ceil(e.totalHits/e.hits.length),a.page<h?(i.setLoadMore(),M.addEventListener("click",N)):i.setFinalShow(),i.setGalleryShow(),c.innerHTML=L(e.hits),w.refresh()}).catch(e=>S(e))}async function N(){a.page+=1,i.setLoading(),b(a).then(t=>{i.setLoaded(),a.page>=h?i.setFinalShow():i.setLoadMore(),c.insertAdjacentHTML("beforeend",L(t.hits)),w.refresh(),window.scrollBy({top:window.innerHeight,left:0,behavior:"smooth"})}).catch(t=>S(t))}
//# sourceMappingURL=index.js.map
