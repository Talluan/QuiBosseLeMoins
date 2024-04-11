<template>
    <div class="main">
        <div class="home">
            <h1 class="title">Classement général</h1>
            <div class="rank">
                <select name="filter" id="filter">
                    <option value="">Choisir un filtre</option>
                    <option value="level">Nivau</option>
                    <option value="game">Nombre de matchs</option>
                    <option value="test">none</option>
                </select>
                <div class="divrank">
                    <table class="ranktable">
                        <tr>
                            <th class="pos">Position</th>
                            <th class="invoc">Invocateur</th>
                            <th class="name">Nom</th>
                            <th class="firstname">Prénom</th>
                            <th class="level">Niveau</th>
                            <th class="game_nb">Nombre de matchs</th>
                            <th class="lp">Points</th>
                        </tr>
                        <tr>
                            <td class="pos">1</td>
                            <th class="invoc">Invocateur1</th>
                            <th class="name">Nom1</th>
                            <th class="firstname">Prénom1</th>
                            <th class="level">165</th>
                            <th class="game_nb">157</th>
                            <th class="lp">0 LP</th>
                        </tr>
                        <tr>
                            <td class="pos">2</td>
                            <th class="invoc">Invocateur2</th>
                            <th class="name">Nom2</th>
                            <th class="firstname">Prénom2</th>
                            <th class="level">272</th>
                            <th class="game_nb">89</th>
                            <th class="lp">94 LP</th>
                        </tr>
                        <tr>
                            <td class="pos">3</td>
                            <th class="invoc">Invocateur3</th>
                            <th class="name">Nom3</th>
                            <th class="firstname">Prénom3</th>
                            <th class="level">35</th>
                            <th class="game_nb">16</th>
                            <th class="lp">587 LP</th>
                        </tr>    
                    </table>
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
    display:flex;

    align-items:center;
    justify-content: center;
    flex-direction: column;
}
.title{
    font-size: 3rem;
    text-shadow: 0px 10px 10px #000000;
    font-weight: 600;
    margin-bottom: 0;
}
.rank{
    width: 85%;
    text-align: center;
    
    border-radius: 10px;
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgb(49, 81, 80) 0%, rgba(125, 131, 139, 0.757) 135%);
/**    color: rgb(255, 255, 255);*/
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 2%;
}
.divrank{
    width: 100%;
    color: #ffffffee;  
}
.ranktable, tr, td, th{
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0;
    width: 100%;
    align-items: center;
    border: 1px solid #000000ee;
    border-collapse: collapse;
}

.pos{
    width: 5%;
}
.invoc{
    width: 30%;
}
.name{
    width: 20%;
}
.firstname{
    width: 20%;
}
.level{
    width: 5%;
}
.game_nb{
    width: 15%;
}
.lp{
    width: 15%;
}
.desc{
    font-size: 1.3rem;
    color: #ffffffee;
}
</style>