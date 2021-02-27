<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
:root{
  --branco:#FFF;
  --menu: #424242;
  --texto: #212121;
  --azul-engie:#00bcfd;
  --azul-claro:#23d2b5;
  --bg-degrade:linear-gradient(90deg, var(--azul-engie), var(--azul-claro));
}
*{
  padding: 0px;
  margin:0px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  color:var(--texto);
}
body{
  overflow-x:hidden;
}
body,
input,
textare,
select,
button{
    font-family: 'Lato', Helvetica, sans-serif;
    font-size:1rem;
}
input,
textare,
select,
button{
  outline:0px;
}

.flex{ display:flex; }
.grid{ display:grid; }
</style>
