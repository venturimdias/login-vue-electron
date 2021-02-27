<template>
  <section class="login flex">
        <header>
          Faça o seu login
        </header>
        <main>
            <label>
              <span>Login:</span>
              <input v-model="login" type="text" />
            </label>  
            <label>
              <span>Senha:</span>
              <input v-model="password" type="password" />
            </label>  
            <label class="lembrar flex">
                <input type="checkbox" v-model="lembrarSenha">
                <div class="flex"></div>                
                Lembrar a senha
            </label>
        </main>
        <footer>
            <button 
            ype="butto" 
            class="flex" 
            @click="logar()">
                Entrar
            </button>
            <p>Já possui cadastro? <a href="/cadastrar">Começe aqui</a> </p>
        </footer>
  </section>
</template>

<script>
const userData = [{'login': 'Jonathan'}, {'password': '1234'}]

export default {
    data() {
        return {
            user: userData,
            login: "",
            password: "",
            lembrarSenha: "",
        }
    },
    computed:{
        logar(){
            return window.location.href = '/logado'
        }
    }
}
</script>

<style>
.login{
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
.login header{
    font-size:2.05rem;
    color:var(--azul-engie);
    padding:0 0 2rem;
}

.login main,
.login footer{
    width:100%;
}
.login label{
    display: flex;
    flex-direction: column;   
}
.login label + label{
    margin-top:1rem;
}
.login label span{
    font-size:.8rem;
}
.login input[type=text],
.login input[type=password]{
    display:flex;
    width:100%;
    padding:1rem 1rem;
    border:0px;
    border-bottom:1px solid var(--texto);
    transition:.2s;
}
.login input[type=text]:focus,
.login input[type=password]:focus{
    border-bottom:1px solid var(--azul-engie)
}
.login .lembrar{
    align-items: center;
    flex-direction: row;
    font-size:.7rem;
    color:var(--menu);
    margin-bottom:1.5rem;
}
.login .lembrar input[type=checkbox]{
    display:none;
}
.login .lembrar input[type=checkbox]:checked ~ div:after{
    content:'';
    position:absolute;
    top:3px;
    left:3px;
    right:3px;
    bottom:3px;
    background:var(--azul-engie);
    border-radius:2px;
}
.login .lembrar div{
    border:1px solid var(--azul-engie);
    width: 20px;
    height: 20px;
    border-radius:3px;    
    margin-right:10px;
    position:relative;
}
.login button{
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
.login footer p{
    margin-top:1rem;
}
</style>