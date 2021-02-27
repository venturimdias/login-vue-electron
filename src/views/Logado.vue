<template>
    <div>
        <Header/>  
        <div class="logado flex">
            <h1>Sucesso!</h1>
            você está logado
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
    components:{
        Header
    }
}
</script>

<style>
.logado{
    flex:1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width:100%;
    width:400px;   
    margin:auto;
    padding:2.25rem;
    box-shadow: 0 0 5px rgba(0,0,0,0.15); 
    border-radius: 10px;
}
.logado h1{
    font-size:2.05rem;
    color:var(--azul-engie);
}
</style>