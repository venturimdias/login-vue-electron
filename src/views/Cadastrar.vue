<template>
  <div>
      <Header />
      <div class="cadastrar flex">
        <header>
          Faça seu cadastro
        </header>
        <main>
        <label>
            <span>Nome:</span>
            <input v-model="nome" type="text" />
        </label>
        <label>
            <span>E-mail:</span>
            <input v-model="email" type="email" />
        </label>
        <label>
            <span>Login:</span>
            <input v-model="login" type="text" />
        </label>
        <label>
            <span>Senha:</span>
            <input v-model="password" type="password" />
        </label>  
        </main>
         <footer>
                <button 
                ype="butto" 
                class="flex" 
                @click="cadastrar()">
                    Salvar
                </button>
         </footer>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
    components:{
        Header
    },
    computed:{
        cadastrar(){
            return window.location.href = '/login'
        }
    }
}
</script>

<style>
.cadastrar{
    flex-direction: column;
}

.cadastrar{
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
.cadastrar header{
    font-size:2.05rem;
    color:var(--azul-engie);
    padding:0 0 2rem;
}
.cadastrar main,
.cadastrar footer{
    width:100%;
}
.cadastrar label{
    display: flex;
    flex-direction: column;   
}
.cadastrar label + label{
    margin-top:1rem;
}
.cadastrar label span{
    font-size:.8rem;
}
.cadastrar input[type=text],
.cadastrar input[type=password],
.cadastrar input[type=email]{
    display:flex;
    width:100%;
    padding:1rem 1rem;
    border:0px;
    border-bottom:1px solid var(--texto);
    transition:.2s;
}
.cadastrar input[type=text]:focus,
.cadastrar input[type=password]:focus,
.cadastrar input[type=email]:focus{
    border-bottom:1px solid var(--azul-engie)
}

.cadastrar footer{
    margin-top:1.5rem;
}
.cadastrar button{
    cursor:pointer;
    text-align:center;
    justify-content: center;
    align-items:center;
    width:100%;
    height: 3rem;
    border:0px;
    background-image: var(--bg-degrade);
    color:var(--branco)
}
</style>