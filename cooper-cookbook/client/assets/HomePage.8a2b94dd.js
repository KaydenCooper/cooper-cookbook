import{a as e,A as t,l as a,r,_ as o}from"./index.c42e4a11.js";import{r as s,c,d as l,o as i,a as n,b as d,n as p,v as g,q as m,F as u,s as y,u as b,t as f}from"./vendor.33a26869.js";const w=new class{async getbyId(r){try{const a=await e.get(`api/recipes/${r}`);t.recipe=a.data.data}catch(o){a.err("WRONG",o)}}async getAll(){try{const a=await e.get("api/recipes");t.recipe=a.data.data}catch(r){a.error("Error Error Error???",r)}}async create(r){try{const a=await e.post("api/recipes",r);t.recipe.push(a.data)}catch(o){a.error("Error Error Error???",o)}}};const R={name:"Home",setup(){const e=s({newRecipe:{title:"",createdBy:"",category:"",ingredients:"",directions:""}});return{AppState:t,categories:c((()=>t.categories)),state:e,cancelForm(){e.newRecipe={title:"",createdBy:"",category:"",ingredients:"",directions:""}},async createRecipe(){try{await w.create(e.newRecipe),this.cancelForm()}catch(t){console.error("You messed up",t)}},allRecipes(){r.push({name:"RecipesPage",params:{categoryName:"all"}})}}},components:{Categories:o}},h={class:"home row justify-content-center px-0 mx-0 table-bg"},v={class:"col-12 title  bg-image shadow px-0 py-5  mb-5"},x={class:" mb-0 my-md-5 py-md-5 text-light title-bg mr-4 mr-md-0"},A=d("button",{class:"col-md-4 btn cuttingboard-bg btn-lg m-3 p-3 shadow",type:"button","data-toggle":"collapse","data-target":"#collapseAdd","aria-expanded":"false","aria-controls":"collapseAdd"},[d("h2",null,"+ Add New Recipe")],-1),C=d("h2",null," All Recipes A-Z ",-1),B={class:"form-group"},E=d("label",{for:"inputTitle",class:"font"},"Recipe Title",-1),S={class:"form-group"},I=d("label",{for:"createdBy",class:"font"},"Created By:",-1),T={class:"form-group"},U=d("label",{for:"CategorySelect",class:"font"},"Category",-1),V=d("option",{selected:""}," Choose Category... ",-1),k={class:"form-group"},j=d("label",{for:"inputIngredient",class:"font"},"Ingredients",-1),D={class:"form-group"},F=d("label",{for:"inputDirections",class:"font"},"Directions",-1),N=d("button",{type:"submit",class:"btn btn-primary","data-toggle":"collapse","data-target":"#collapseAdd"}," Submit Recipe ",-1),G=d("div",{class:"col-10 cuttingboard-bg  shadow card title "},[d("p",{class:"mb-0 "},[d("u",null,"-CATEGORIES-")])],-1);R.render=function(e,t,a,r,o,s){const c=l("categories");return i(),n("div",h,[d("div",v,[d("h1",x,[A,d("button",{onClick:t[1]||(t[1]=(...e)=>r.allRecipes&&r.allRecipes(...e)),class:"col-md-4 btn cuttingboard-bg btn-lg m-3 p-3  shadow"},[C])])]),d("form",{onSubmit:t[7]||(t[7]=b(((...e)=>r.createRecipe&&r.createRecipe(...e)),["prevent"])),class:" collapse col-10 col-md-6 card shadow cuttingboard-bg p-4 m-3 border border-dark",id:"collapseAdd"},[d("div",B,[E,p(d("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.state.newRecipe.title=e),type:"text",class:"form-control",id:"inputText",placeholder:"Recipe Title..."},null,512),[[g,r.state.newRecipe.title]])]),d("div",S,[I,p(d("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.state.newRecipe.createdBy=e),type:"text",class:"form-control",id:"createdBy",placeholder:"Created By..."},null,512),[[g,r.state.newRecipe.createdBy]])]),d("div",T,[U,p(d("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>r.state.newRecipe.category=e),id:"CategorySelect",class:"form-control"},[V,(i(!0),n(u,null,y(r.categories,(e=>(i(),n("option",{key:e.id,value:e.name},f(e.name),9,["value"])))),128))],512),[[m,r.state.newRecipe.category]])]),d("div",k,[j,p(d("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>r.state.newRecipe.ingredients=e),class:"form-control",id:"inputIngredient",rows:"3"},null,512),[[g,r.state.newRecipe.ingredients]])]),d("div",D,[F,p(d("textarea",{"onUpdate:modelValue":t[6]||(t[6]=e=>r.state.newRecipe.directions=e),class:"form-control",id:"inputDirections",rows:"3"},null,512),[[g,r.state.newRecipe.directions]])]),N],32),G,(i(!0),n(u,null,y(r.categories,(e=>(i(),n(c,{key:e.id,category:e},null,8,["category"])))),128))])};export default R;
