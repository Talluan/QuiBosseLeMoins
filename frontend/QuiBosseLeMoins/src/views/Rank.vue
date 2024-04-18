<template>
    <div class="main">
        <div class="home">
            <h1 class="title">Classement général</h1>
            <div class="rank">
                <select name="filter" id="filter" v-model="selected" @change="chooseOrder()">
                    <option value="none">Choisir un filtre</option>
                    <option value="level">Niveau</option>
                    <option value="matches">Nombre de matchs</option>
                </select>
                <div class="divrank">
                    <table class="ranktable">
                        <tr>
                            <th class="pos">Position </th>
                            <th class="invoc">Invocateur</th>
                            <th class="firstname">Prénom</th>
                            <th class="level">Niveau</th>
                            <th class="game_nb">Nombre de matchs récents</th>
                        </tr>
                        <tr v-for="(player, index) in players">
                            <th class="pos"> {{ index+1 }}</th>
                            <th class="invoc">{{ player.gameName }}</th>
                            <th class="firstname">{{ player.firstName }}</th>
                            <th class="level">{{ player.summonerLevel }}</th>
                            <th class="game_nb">{{ playerGames[index].length }}</th>
                        </tr>

                    </table>
                    <p class="desc">Retrouve le classement des invocateurs R&I !</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const baseUrl = 'http://localhost:3000';

const selected = ref("");
const playerGames = ref([]);
const players = ref([]);

const fetchPlayers = async () => {
    const response = await fetch(baseUrl + '/players');
    players.value = await response.json();
    console.log(players.value)
}

const fetchPlayersGames = async (player) => {
    const matchesResponse = await fetch(baseUrl + '/matches/player/' + player.puuid);
    return await matchesResponse.json();
}

const fetchData = async () => {
    await fetchPlayers();
    for (const player in players.value) {
        let matches = await fetchPlayersGames(players.value[player]);
        playerGames.value.push(matches);
    }
    console.log(playerGames.value)
}

const compareLevel = (a, b) => {
    console.log("a et b");
    console.log(a); 
    console.log(b); 
    console.log(a.summonerLevel < b.summonerLevel)
    return a.summonerLevel < b.summonerLevel
}

const orderPlayerGames = () => {
    const newOrder = [];
    for (let index = 0; index < players.value.length; index++) {
        const playeruuid = players.value[index].puuid;
        for (let j = 0; j < playerGames.value.length; j++) {
            const element = playerGames.value[j];
            if (element.puuid == playeruuid) {
                newOrder.push(element);
            }
        }
    }
    console.log(newOrder)
    playerGames.value = newOrder;
}

const orderByLevel = () => {
    const newOrder = players.value.sort(compareLevel);

    console.log(newOrder)  
    orderPlayerGames();
}

const chooseOrder = () => {
    console.log("order changed" + selected.value)
    if(selected.value == "level") {
        orderByLevel();
    }
}

 fetchData();


</script>

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