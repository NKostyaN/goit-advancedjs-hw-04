import{i as u,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="46590311-6ed07305336452fed03a33c90",h="image_type=photo&orientation=horizontal&safesearch=true";function b(o){return fetch(`${m}?key=${p}&q=${o}&${h}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function g(o){return o.map(({webformatURL:r,tags:n,likes:s,views:e,comments:t,downloads:i,largeImageURL:l})=>`
      <div class="photo-card">
        <a href="${l}" class="photo-link">
          <img src="${r}" alt="${n}" loading="lazy" class="gallery-image" data-source=${l}/>
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b><br>${s}
          </p>
          <p class="info-item">
            <b>Views</b><br>${e}
          </p>
          <p class="info-item">
            <b>Comments</b><br>${t}
          </p>
          <p class="info-item">
            <b>Downloads</b><br>${i}
          </p>
        </div>
      </div>`).join("")}const d={timeout:5e3,position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",transitionInMobile:"bounceInDown",transitionOutMobile:"fadeOutUp",messageSize:"16px",theme:"dark",backgroundColor:"#ef4040",messageColor:"white"};function y(o){u.error({...d,message:`Error!<br><b>${o}</b><br>Please try again!`})}function O(o){u.error({...d,message:`Sorry, there are no images matching your <br><b>${o}</b> query.<br>Please try again!`})}const $=document.querySelector("form");document.querySelector("button");const a=document.querySelector(".gallery"),c=document.querySelector(".loader");$.addEventListener("submit",S);let L=new f(".gallery a",{captionsData:"alt",captionDelay:250});function S(o){o.preventDefault();const r=o.target[0].value;c.hidden=!1,a.innerHTML="",b(r).then(n=>{if(n.hits.length===0){a.innerHTML="",c.hidden=!0,O(r);return}c.hidden=!0,a.innerHTML=g(n.hits),L.refresh()}).catch(n=>y(n))}
//# sourceMappingURL=index.js.map
