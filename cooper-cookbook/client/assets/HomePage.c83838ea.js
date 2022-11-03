import{A as e,r as t,a,_ as o}from"./index.c912793c.js";import{r as s,c as l,d as c,o as r,a as i,b as n,q as d,v as p,s as m,F as u,u as g,x as b,t as y}from"./vendor.b51a37cd.js";const f={name:"Home",setup(){const o=s({newRecipe:{title:"",createdBy:"",category:"",ingredients:"",directions:""}});return{AppState:e,categories:l((()=>e.categories)),state:o,cancelForm(){o.newRecipe={title:"",createdBy:"",category:"",ingredients:"",directions:""}},async createRecipe(){try{await t.create(o.newRecipe),this.cancelForm()}catch(e){console.error("You messed up",e)}},allRecipes(){a.push({name:"RecipesPage",params:{categoryName:"all"}})}}},components:{Categories:o}},R={class:"home row justify-content-center px-0 mx-0 table-bg"},w={class:"col-12 title  bg-image shadow px-0 py-5  mb-5"},h={class:" mb-0 my-md-5 py-md-5 text-light title-bg mr-4 mr-md-0"},v=n("button",{class:"col-md-4 btn cuttingboard-bg btn-lg m-3 p-3 shadow",type:"button","data-toggle":"collapse","data-target":"#collapseAdd","aria-expanded":"false","aria-controls":"collapseAdd"},[n("h2",null,"+ Add New Recipe")],-1),x=n("h2",null," All Recipes A-Z ",-1),A={class:"form-group"},C=n("label",{for:"inputTitle",class:"font"},"Recipe Title",-1),B={class:"form-group"},S=n("label",{for:"createdBy",class:"font"},"Created By:",-1),T={class:"form-group"},U=n("label",{for:"CategorySelect",class:"font"},"Category",-1),V=n("option",{selected:""}," Choose Category... ",-1),k={class:"form-group"},I=n("label",{for:"inputIngredient",class:"font"},"Ingredients",-1),j={class:"form-group"},D=n("label",{for:"inputDirections",class:"font"},"Directions",-1),F=n("button",{type:"submit",class:"btn btn-primary","data-toggle":"collapse","data-target":"#collapseAdd"}," Submit Recipe ",-1),E=n("div",{class:"col-10 cuttingboard-bg  shadow card title "},[n("p",{class:"mb-0 "},[n("u",null,"-CATEGORIES-")])],-1);f.render=function(e,t,a,o,s,l){const f=c("categories");return r(),i("div",R,[n("div",w,[n("h1",h,[v,n("button",{onClick:t[1]||(t[1]=(...e)=>o.allRecipes&&o.allRecipes(...e)),class:"col-md-4 btn cuttingboard-bg btn-lg m-3 p-3  shadow"},[x])])]),n("form",{onSubmit:t[7]||(t[7]=b(((...e)=>o.createRecipe&&o.createRecipe(...e)),["prevent"])),class:" collapse col-10 col-md-6 card shadow cuttingboard-bg p-4 m-3 border border-dark",id:"collapseAdd"},[n("div",A,[C,d(n("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.state.newRecipe.title=e),type:"text",class:"form-control",id:"inputText",placeholder:"Recipe Title..."},null,512),[[p,o.state.newRecipe.title]])]),n("div",B,[S,d(n("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.state.newRecipe.createdBy=e),type:"text",class:"form-control",id:"createdBy",placeholder:"Created By..."},null,512),[[p,o.state.newRecipe.createdBy]])]),n("div",T,[U,d(n("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>o.state.newRecipe.category=e),id:"CategorySelect",class:"form-control"},[V,(r(!0),i(u,null,g(o.categories,(e=>(r(),i("option",{key:e.id,value:e.name},y(e.name),9,["value"])))),128))],512),[[m,o.state.newRecipe.category]])]),n("div",k,[I,d(n("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>o.state.newRecipe.ingredients=e),class:"form-control",id:"inputIngredient",rows:"3"},null,512),[[p,o.state.newRecipe.ingredients]])]),n("div",j,[D,d(n("textarea",{"onUpdate:modelValue":t[6]||(t[6]=e=>o.state.newRecipe.directions=e),class:"form-control",id:"inputDirections",rows:"3"},null,512),[[p,o.state.newRecipe.directions]])]),F],32),E,(r(!0),i(u,null,g(o.categories,(e=>(r(),i(f,{key:e.id,category:e},null,8,["category"])))),128))])};export default f;
