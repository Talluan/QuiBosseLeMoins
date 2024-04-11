<template>
    <div class="main">
        <div class="home">
            <h1 class="title">QuiBosseLeMoins</h1>
            <div class="slogan">
                <div class="slogan_text">
                    <h1 class="titleslogan">On va voir qui est le plus gros chômeur de la classe</h1>
                    <p class="desc">Retrouve le classement des invocateurs R&I !</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-image: url("../assets/rammus.jpg");
    background-position: center;
    width: 100%;
    height: 100%;
}
.home {
/** color: #fff;*/    
    height: 100vh;
    display: flex;

    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.title{
    font-size: 4rem;
    text-shadow: 0px 10px 10px #000000;
    font-weight: 600;
    margin-bottom: 0;
}
.slogan{
    width: 75%;
    text-align: center;
    
    border-radius: 10px;
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgb(49, 81, 80) 0%, rgba(125, 131, 139, 0.757) 135%);
/**    color: rgb(255, 255, 255);*/
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 2%;
}
.slogan_text{
    width: 100%;
    color: #ffffffee;  
}
.titleslogan{
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0;
}
.desc{
    font-size: 1.3rem;
    color: #ffffffee;
}
</style>