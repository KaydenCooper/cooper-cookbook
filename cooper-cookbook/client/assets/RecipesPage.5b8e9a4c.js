import{A as e,b as a}from"./index.e4b6f78e.js";import{r as t,c as r,p as s,j as c,y as o,d as n,o as l,a as i,b as d,F as p,u as m,k as u,l as b}from"./vendor.b51a37cd.js";const f={name:"RecipesPage",setup(){const a=o();return{state:t({}),AppState:e,route:a,recipes:r((()=>"all"===a.params.categoryName?e.recipe:e.recipe.filter((e=>e.category===a.params.categoryName))))}},components:{Recipe:a}},y=u();s("data-v-1c10b4f8");const g={class:"recipesPage row container-fluid justify-content-center  text-center cuttingboard-bg  px-md-0"},k={class:"col-md-2 col-12 justify-content-center"},v=b(" Go Back "),x=d("div",{class:"col-12 d-flex justify-content-center align-items-center"},[d("h2",{class:"card shadow border border-dark table-bg px-5 py-2 mt-4  font"},[d("u",null,"- Click The Recipe for Details -")])],-1),j={class:"col-md-8 col-12 pr-3 pr-sm-5"};c();const h=y(((e,a,t,r,s,c)=>{const o=n("router-link"),u=n("recipe");return l(),i("div",g,[d("div",k,[d(o,{to:{name:"Home"},class:"nav-link border border-dark font-small mt-4 text-dark navTitle card table-bg px-4 my-2 py-0 shadow text-center"},{default:y((()=>[v])),_:1})]),x,d("div",j,[(l(!0),i(p,null,m(r.recipes,(e=>(l(),i(u,{key:e.id,recipe:e},null,8,["recipe"])))),128))])])}));f.render=h,f.__scopeId="data-v-1c10b4f8";export default f;
