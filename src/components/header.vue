  
<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Hero</router-link></li>
            <li><router-link to="/add" exact>Add novo Heroi</router-link></li>
            <li><router-link to="/herois" exact>Lista de Herois</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}

a:hover{
    background: rgb(247, 247, 247);
    color: rgb(41, 41, 41);
    transition-delay: 0.08s;
}
nav{
    background: rgb(0, 139, 121);
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: rgb(247, 247, 247);
    color: rgb(41, 41, 41);
}
</style>