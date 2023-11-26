import{a as c,S as p,i as h,P as u,N as d}from"./assets/vendor-2cd1003f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();const v="https://api.thecatapi.com/v1/breeds/?",m=" https://api.thecatapi.com/v1/images/search?",o={api_key:"live_4OV6mO4kCm8Wvp0obaFUUKjV7Fg0aDGCrA5iSKIh93pBZ22atpg8saVdJ0BQ988s",breed_ids:""};async function f(){const i=new URLSearchParams(o);try{return(await c.get(`${v}${i}`)).data}catch(e){console.log(e)}}async function w(i){o.breed_ids!==i&&(o.breed_ids=i);const e=new URLSearchParams({...o,limit:15});try{return(await c.get(`${m}${e}`)).data}catch(n){console.log(n)}}const r={searchSelect:document.querySelector(".breed-select"),searchResult:document.querySelector(".cat-info"),swiperContainer:document.querySelector(".swiper-container"),swiper:document.querySelector(".swiper"),swiperWrapper:document.querySelector(".swiper-wrapper"),descriptionWrapper:document.querySelector(".description-container"),loader:document.querySelector(".loader")};r.searchSelect.addEventListener("change",b);f().then(i=>y(i)).catch(()=>g());function y(i){const e=i.map(({id:n,name:t})=>`<option class="breed-option" value="${n}">${t}</option>`).join("");r.searchSelect.insertAdjacentHTML("beforeend",e)}function b(i){r.loader.classList.remove("visually-hidden");const e=i.target.value;e!==""?(r.swiperContainer.classList.add("visually-hidden"),r.descriptionWrapper.innerHTML="",r.swiperWrapper.innerHTML="",w(e).then(n=>L(n)).catch(n=>g())):(r.descriptionWrapper.innerHTML="",r.swiperContainer.innerHTML="",r.loader.classList.add("visually-hidden"))}function L(i){const e=i[0].breeds[0],n=i.map(s=>s.url),t=[1,2,3,4,5],a=n.map(s=>`        
        <div class="swiper-slide"><img class="slide-img" src="${s}" alt="${e.name}" width="500" height="376"></div>`).join(""),l=`<h2>${e.name}</h2>
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
    ${t.map(s=>e.affection_level>=s?`<li><svg width="30" height="30">
    <use href="../assets/star-rating.icons.svg#star-filled"></use>
  </svg></li>`:`<li><svg width="30" height="30">
        <use href="../assets/star-rating.icons.svg#star-empty"></use>
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Adaptability</p>
    <ul class="stars">
    ${t.map(s=>e.adaptability>=s?`<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`:`<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Child friendly</p>
    <ul class="stars">
    ${t.map(s=>e.child_friendly>=s?`<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`:`<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Dog friendly</p>
    <ul class="stars">
    ${t.map(s=>e.dog_friendly>=s?`<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`:`<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Energy level</p>
    <ul class="stars">
    ${t.map(s=>e.energy_level>=s?`<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`:`<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Grooming</p>
    <ul class="stars">
    ${t.map(s=>e.grooming>=s?`<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`:`<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Health issues</p>
    <ul class="stars">
    ${t.map(s=>e.health_issues>=s?`<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`:`<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Intelligence</p>
    <ul class="stars">
    ${t.map(s=>e.intelligence>=s?`<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`:`<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Shedding level</p>
    <ul class="stars">
    ${t.map(s=>e.shedding_level>=s?`<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`:`<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Social needs</p>
    <ul class="stars">
    ${t.map(s=>e.social_needs>=s?`<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`:`<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Stranger friendly</p>
    <ul class="stars">
    ${t.map(s=>e.stranger_friendly>=s?`<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`:`<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`).join("")}
    </ul>    
    </li>
    <li>
    <p class="label">Vocalisation</p>
    <ul class="stars">
    ${t.map(s=>e.vocalisation>=s?`<li><svg width="30" height="30">
    <use href="/images/star-rating.icons.svg#star-filled"></use>
  </svg></li>`:`<li><svg width="30" height="30">
        <use href="/images/star-rating.icons.svg#star-empty"></use>
      </svg></li>`).join("")}
    </ul>    
    </li>
    </ul>
    <a href="${e.wikipedia_url}"> Learn more </a>`;r.loader.classList.add("visually-hidden"),r.swiperWrapper.insertAdjacentHTML("afterbegin",a),$(),r.swiperContainer.classList.remove("visually-hidden"),r.descriptionWrapper.insertAdjacentHTML("beforeend",l)}function $(){const i={modules:[u,d],loop:!0,autoplay:{delay:3e3},speed:1e3,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},e=new p(".swiper",{...i});r.swiper.addEventListener("mouseover",function(){e.autoplay.stop()}),r.swiper.addEventListener("mouseout",function(){e.autoplay.start()})}function g(i){h.error({title:"Oops!",message:"Something went wrong! Try reloading the page!"})}
//# sourceMappingURL=commonHelpers.js.map
