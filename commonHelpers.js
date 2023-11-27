import{a as o,S as h,i as d,P as g,N as u}from"./assets/vendor-2cd1003f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const v="https://api.thecatapi.com/v1/breeds/?",m=" https://api.thecatapi.com/v1/images/search?",p={api_key:"live_4OV6mO4kCm8Wvp0obaFUUKjV7Fg0aDGCrA5iSKIh93pBZ22atpg8saVdJ0BQ988s",breed_ids:""};async function w(){const t=new URLSearchParams(p);try{return(await o.get(`${v}${t}`)).data}catch(e){console.log(e)}}async function f(t){p.breed_ids!==t&&(p.breed_ids=t);const e=new URLSearchParams({...p,limit:15});try{return(await o.get(`${m}${e}`)).data}catch(n){console.log(n)}}const s={searchSelect:document.querySelector(".breed-select"),searchResult:document.querySelector(".cat-info"),swiperContainer:document.querySelector(".swiper-container"),swiper:document.querySelector(".swiper"),swiperWrapper:document.querySelector(".swiper-wrapper"),descriptionWrapper:document.querySelector(".description-container"),loader:document.querySelector(".loader")};s.searchSelect.addEventListener("change",M);w().then(t=>y(t)).catch(()=>c());function y(t){s.loader.classList.add("visually-hidden"),s.searchSelect.classList.remove("visually-hidden");const e=t.map(({id:n,name:l})=>`<option class="breed-option" value="${n}">${l}</option>`).join("");s.searchSelect.insertAdjacentHTML("beforeend",e)}function M(t){s.loader.classList.remove("visually-hidden");const e=t.target.value;e!==""?(s.swiperContainer.classList.add("visually-hidden"),s.descriptionWrapper.innerHTML="",s.swiperWrapper.innerHTML="",f(e).then(n=>z(n)).catch(n=>c())):(s.descriptionWrapper.innerHTML="",s.swiperContainer.innerHTML="",s.loader.classList.add("visually-hidden"))}function z(t){const e=t[0].breeds[0],n=t.map(i=>i.url),l=[1,2,3,4,5],a=n.map(i=>`        
        <div class="swiper-slide"><img class="slide-img" src="${i}" alt="${e.name}" width="500" height="376"></div>`).join(""),r=`<h2>${e.name}</h2>
    <p class="label">Origin: <span class="text">${e.origin}</span></p>    
    <p class="label">Weight: <span class="text">${e.weight.metric}</span> kg</p>
    <p class="label">Weight: <span class="text">${e.weight.metric}</span> kg</p>
    <p class="label">Lifetime: <span class="text">${e.life_span}</span> yrs</p>
    <p class="label">Weight: <span class="text">${e.weight.metric}</span> kg</p>
    <p class="label">Temperament: <span class="text">${e.temperament}</span></p>
    <p class="description">${e.description}</p>
    <ul class="properties">
    <li>
    <p class="label">Affection level</p>
    <ul class="stars">
    ${l.map(i=>e.affection_level>=i?`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>          
  </svg></li>`:`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>         
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Adaptability</p>
    <ul class="stars">
    ${l.map(i=>e.adaptability>=i?`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>          
  </svg></li>`:`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>          
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Child friendly</p>
    <ul class="stars">
    ${l.map(i=>e.child_friendly>=i?`<li><svg width="30" height="30">         
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
          
  </svg></li>`:`<li><svg width="30" height="30">         
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>          
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Dog friendly</p>
    <ul class="stars">
    ${l.map(i=>e.dog_friendly>=i?`<li><svg width="30" height="30">         
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>         
  </svg></li>`:`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>          
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Energy level</p>
    <ul class="stars">
    ${l.map(i=>e.energy_level>=i?`<li><svg width="30" height="30">         
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
          
  </svg></li>`:`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>          
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Grooming</p>
    <ul class="stars">
    ${l.map(i=>e.grooming>=i?`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
          
  </svg></li>`:`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>          
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Health issues</p>
    <ul class="stars">
    ${l.map(i=>e.health_issues>=i?`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
          
  </svg></li>`:`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>          
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Intelligence</p>
    <ul class="stars">
    ${l.map(i=>e.intelligence>=i?`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
          
  </svg></li>`:`<li><svg width="30" height="30">         
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>          
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Shedding level</p>
    <ul class="stars">
    ${l.map(i=>e.shedding_level>=i?`<li><svg width="30" height="30">         
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
          
  </svg></li>`:`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>          
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Social needs</p>
    <ul class="stars">
    ${l.map(i=>e.social_needs>=i?`<li><svg width="30" height="30">         
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
          
  </svg></li>`:`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>          
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Stranger friendly</p>
    <ul class="stars">
    ${l.map(i=>e.stranger_friendly>=i?`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
          
  </svg></li>`:`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>          
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Vocalisation</p>
    <ul class="stars">
    ${l.map(i=>e.vocalisation>=i?`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
          
  </svg></li>`:`<li><svg width="30" height="30">          
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>          
      </svg></li>`).join("")}
    </ul>    
    </li>
    </ul>
    <a href="${e.wikipedia_url}"> Learn more </a>`;s.loader.classList.add("visually-hidden"),s.swiperWrapper.insertAdjacentHTML("afterbegin",a),b(),s.swiperContainer.classList.remove("visually-hidden"),s.descriptionWrapper.insertAdjacentHTML("beforeend",r)}function b(){const t={modules:[g,u],loop:!0,autoplay:{delay:3e3},speed:1e3,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},e=new h(".swiper",{...t});s.swiper.addEventListener("mouseover",function(){e.autoplay.stop()}),s.swiper.addEventListener("mouseout",function(){e.autoplay.start()})}function c(t){d.error({title:"Oops!",message:"Something went wrong! Try reloading the page!"}),s.loader.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
