import{A as e,r as t,a,_ as o}from"./index.fe45df93.js";import{r as l,c as s,d as r,o as c,a as i,b as n,q as d,v as p,s as m,F as u,u as g,x as b,t as y}from"./vendor.1a36020b.js";const R={name:"Home",setup(){const o=l({newRecipe:{title:"",createdBy:"",category:"",ingredients:"",directions:""}});return{AppState:e,categories:s((()=>e.categories)),state:o,cancelForm(){o.newRecipe={title:"",createdBy:"",category:"",ingredients:"",directions:""}},async createRecipe(){try{await t.create(o.newRecipe),this.cancelForm()}catch(e){console.error("You messed up",e)}},allRecipes(){a.push({name:"RecipesPage",params:{categoryName:"all"}})}}},components:{Categories:o}},f={class:"home row justify-content-center px-0 mx-0 table-bg"},w={class:"col-12 title  bg-image shadow px-0 py-5  mb-5"},h={class:" mb-0 my-md-5 py-md-5 text-light title-bg mr-4 mr-md-0"},v=n("button",{class:"col-md-4 btn bg-tan btn-lg m-3 p-3 shadow",type:"button","data-toggle":"collapse","data-target":"#collapseAdd","aria-expanded":"false","aria-controls":"collapseAdd"},[n("h2",null,"+ Add New Recipe")],-1),x=n("h2",null," All Recipes A-Z ",-1),A={class:"form-group"},C=n("label",{for:"inputTitle"},"Recipe Title",-1),B={class:"form-group"},S=n("label",{for:"createdBy"},"Created By:",-1),k={class:"form-group"},T=n("label",{for:"CategorySelect"},"Category",-1),U=n("option",{selected:""}," Choose Category... ",-1),V={class:"form-group"},I=n("label",{for:"inputIngredient"},"Ingredients",-1),j={class:"form-group"},D=n("label",{for:"inputDirections"},"Directions",-1),F=n("button",{type:"submit",class:"btn btn-primary","data-toggle":"collapse","data-target":"#collapseAdd"}," Submit Recipe ",-1),E=n("div",{class:"col-10 bg-tan border border-dark shadow card title "},[n("p",{class:"mb-0 "},[n("u",null,"-CATEGORIES-")])],-1);R.render=function(e,t,a,o,l,s){const R=r("categories");return c(),i("div",f,[n("div",w,[n("h1",h,[v,n("button",{onClick:t[1]||(t[1]=(...e)=>o.allRecipes&&o.allRecipes(...e)),class:"col-md-4 btn bg-tan btn-lg m-3 p-3  shadow"},[x])])]),n("form",{onSubmit:t[7]||(t[7]=b(((...e)=>o.createRecipe&&o.createRecipe(...e)),["prevent"])),class:"collapse col-10 col-md-6 card shadow bg-tan p-4 m-3 border border-dark",id:"collapseAdd"},[n("div",A,[C,d(n("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.state.newRecipe.title=e),type:"text",class:"form-control",id:"inputText",placeholder:"Recipe Title..."},null,512),[[p,o.state.newRecipe.title]])]),n("div",B,[S,d(n("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.state.newRecipe.createdBy=e),type:"text",class:"form-control",id:"createdBy",placeholder:"Created By..."},null,512),[[p,o.state.newRecipe.createdBy]])]),n("div",k,[T,d(n("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>o.state.newRecipe.category=e),id:"CategorySelect",class:"form-control"},[U,(c(!0),i(u,null,g(o.categories,(e=>(c(),i("option",{key:e.id,value:e.name},y(e.name),9,["value"])))),128))],512),[[m,o.state.newRecipe.category]])]),n("div",V,[I,d(n("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>o.state.newRecipe.ingredients=e),class:"form-control",id:"inputIngredient",rows:"3"},null,512),[[p,o.state.newRecipe.ingredients]])]),n("div",j,[D,d(n("textarea",{"onUpdate:modelValue":t[6]||(t[6]=e=>o.state.newRecipe.directions=e),class:"form-control",id:"inputDirections",rows:"3"},null,512),[[p,o.state.newRecipe.directions]])]),F],32),E,(c(!0),i(u,null,g(o.categories,(e=>(c(),i(R,{key:e.id,category:e},null,8,["category"])))),128))])};export default R;