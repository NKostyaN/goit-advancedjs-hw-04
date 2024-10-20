var E=Object.defineProperty;var D=(t,e,s)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var m=(t,e,s)=>D(t,typeof e!="symbol"?e+"":e,s);import{a as y,i as f,S as v}from"./assets/vendor-Qob_5Ba8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const O="46590311-6ed07305336452fed03a33c90";y.defaults.baseURL="https://pixabay.com/api/";async function b({page:t,perPage:e,query:s}){return(await y.get(`?key=${O}`,{params:{q:s,page:t,per_page:e}})).data}function L(t){return t.map(({webformatURL:e,tags:s,likes:a,views:r,comments:o,downloads:d,largeImageURL:p})=>`
      <div class="photo-card">
        <a href="${p}" class="photo-link">
          <img src="${e}" alt="${s}" loading="lazy" class="gallery-image" data-source=${p}/>
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b><br>${a}
          </p>
          <p class="info-item">
            <b>Views</b><br>${r}
          </p>
          <p class="info-item">
            <b>Comments</b><br>${o}
          </p>
          <p class="info-item">
            <b>Downloads</b><br>${d}
          </p>
        </div>
      </div>`).join("")}const g={timeout:5e3,position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",transitionInMobile:"bounceInDown",transitionOutMobile:"fadeOutUp",messageSize:"16px",theme:"dark",messageColor:"white"};function S(t){f.error({...g,backgroundColor:"#ef4040",message:`Error!<br><b>${t}</b><br>Please try again!`})}function q(t){f.error({...g,backgroundColor:"#ef4040",message:`Sorry, there are no images matching your <br><b>${t}</b> query.<br>Please try again!`})}function H(){f.info({...g,backgroundColor:"#ffa000",message:"Sorry, we can't search empty query.<br>Please try again!"})}const l=class l{constructor(e,s,a,r){this.gallery=e,this.loader=s,this.loadMore=a,this.endMessage=r}setHided(){this.gallery.classList.add(l.HIDDEN_CLASS),this.loader.hidden=!0,this.loadMore.hidden=!0,this.endMessage.hidden=!0}setLoading(){this.loader.hidden=!1}setLoaded(){this.loader.hidden=!0,this.loadMore.hidden=!0}setGalleryShow(){this.gallery.classList.remove(l.HIDDEN_CLASS)}setLoadMore(){this.loader.hidden=!0,this.loadMore.hidden=!1}setFinalShow(){this.loader.hidden=!0,this.gallery.classList.remove(l.HIDDEN_CLASS),this.loadMore.hidden=!0,this.endMessage.hidden=!1}};m(l,"HIDDEN_CLASS","visually-hidden");let u=l;const P=document.querySelector("form"),c=document.querySelector(".gallery"),$=document.querySelector(".loader"),M=document.querySelector(".load-more"),C=document.querySelector(".end-collection"),i=new u(c,$,M,C);i.setHided();P.addEventListener("submit",I);let w=new v(".gallery a",{captionsData:"alt",captionDelay:250}),h=1;const n={query:"",page:1,perPage:15};async function I(t){if(t.preventDefault(),i.setHided(),n.page=1,n.query=t.target[0].value.trim(),n.query===""){H();return}i.setLoading(),c.innerHTML="",b(n).then(e=>{if(e.hits.length===0){c.innerHTML="",i.setLoaded(),q(userQuery);return}h=Math.floor(e.totalHits/e.hits.length),n.page<=h&&(i.setLoadMore(),M.addEventListener("click",N)),i.setGalleryShow(),c.innerHTML=L(e.hits),w.refresh()}).catch(e=>S(e))}async function N(){n.page+=1,i.setLoading(),b(n).then(t=>{i.setLoaded(),n.page>=h?i.setFinalShow():i.setLoadMore(),c.insertAdjacentHTML("beforeend",L(t.hits)),w.refresh(),window.scrollBy({top:window.innerHeight,left:0,behavior:"smooth"})}).catch(t=>S(t))}
//# sourceMappingURL=index.js.map
