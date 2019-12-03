<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=Kanit&display=swap");
/* font-family: "Kanit", sans-serif; */
.damn-color{
  color: #726e6e;
}
.danger-color{
  color: #f87800;
}
.flex-center {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
}
.flex-column {
  -ms-flex-direction: column !important;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  flex-direction: column !important;
}
</style>
