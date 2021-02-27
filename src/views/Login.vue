<template>
    <div class="PageLogin grid">
        <div class="img">
            <h1>Nossa energia <br/>
            está voltada para <br/> 
            um mundo novo</h1>
        </div>
        <FormLogin />
    </div>
</template>

<script>
import FormLogin from '../components/FormLogin'
export default {
  components: { 
      FormLogin 
  },
}
</script>

<style>
.PageLogin{
    justify-content: center;
    align-items: center;
    grid-template-columns:1fr 1fr;
    height:calc(100vh - 0px);
}
.PageLogin .img{
    height:100%;
    background:url('/nossa-energia.jpg') no-repeat calc(100% + 150px) center;
}
.PageLogin .img h1{
    display:flex;
    align-items: flex-end;
    justify-content: flex-end;

    height:100%;
    padding:1.6rem 2.5rem;
    font-size:3.2rem;
    font-weight: 700;
    text-align:right;
    color:var(--branco);
}
</style>