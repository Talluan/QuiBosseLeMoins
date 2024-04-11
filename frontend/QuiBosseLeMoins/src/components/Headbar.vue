<template>
    <div class="headbar">
        <div class="home">
            <router-link class="link" to="/">Accueil</router-link>
        </div>
        <div class="createride">
            
            <router-link class="link" to="/rank">Classement</router-link>
            
            <!-- <div class="flex flex-col" v-if="!isConnectedRef">
                <router-link class="link" to="/connect">Se connecter</router-link>
            </div> -->
            <!-- <div v-else>
                <router-link class="link" to="/create-ride">Créer Trajet</router-link>
                <router-link class="link" to="/historic">Historique</router-link>
                <button class="link" v-on:click="disconect()">Deconnexion</button>
            </div> -->
        </div>
    </div>
</template>

<script setup>
// import router from '../router';
// import { onMounted, ref } from 'vue';
// import User  from '../Helper/User';

// const isConnectedRef = ref(false);

// onMounted(() => {
//     isConnectedRef.value = User.isConnected();
// });

// const disconect = () => {
//     isConnectedRef.value = User.disconect();
// }

</script>

<style>
.headbar {
    display: flex;
    justify-content: space-between;

    background: rgb(11, 15, 37);
    background: radial-gradient(circle, rgb(49, 81, 80) 0%, rgba(125, 131, 139, 0.757) 135%);
    color: #fff;
    padding: 10px;
    text-decoration: none;
}

.link {
    color: #fff;
    text-decoration: none;
    margin: 10px;
}

.createride{
    display: flex;
    justify-content: space-between;
}
</style>