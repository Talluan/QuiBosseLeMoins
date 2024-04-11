<template>
    <div class="footbar">
            <div class="nom">
                Qui bosse le moins ?
            </div>
            <!-- <div class="icons">
                <font-awesome-icon icon="fa-brands fa-facebook" />
                <font-awesome-icon icon="fa-brands fa-instagram" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-telegram" />
            </div> -->
            <div class="copyright">
                © 2024 
            </div>
      <div class="chat-container">
        <!-- <ul id="messages">
          <li v-for="message in messages" :key="message">{{ message }}</li>
        </ul> -->
        <!-- <form v-on:submit.prevent="sendMessage">
          <input class="chat" v-model="newMessage" placeholder="Écrivez un message">
          <button class="submit" type="submit">Envoyer</button>
        </form> -->
      </div>
    </div>
</template>

<script setup>
// import { ref, onMounted } from 'vue';
// import io from 'socket.io-client';;
// const socket = io('http://localhost:3001');
// const newMessage = ref('');
// const messages = ref([]);

// const sendMessage = () => {
//   socket.emit('chat message', newMessage.value);
//   newMessage.value = '';
// };

// onMounted(() => {
//   socket.on('chat message', (msg) => {
//     messages.value.push(msg);
//   });
// });
</script>

<style>
    .footbar{
        justify-content: space-between;
        
        background: rgb(11,15,37);
        background: radial-gradient(circle, rgb(49, 81, 80) 0%, rgba(125, 131, 139, 0.757) 135%);
        color: #fff;
        padding: 10px;
        text-decoration: none;
    }
    .nom{
        color: #fff;
        text-decoration: none;
        margin: 10px;
        font-size: 1.5rem;
    }
    /* .icons{
        display: flex;
        justify-content: center;
        margin: 10px;
        font-size: 1.5rem;
    } */
    .copyright{
        color: #fff;
        text-decoration: none;
        margin: 10px;
        font-size: 1rem;
        justify-content: center;
    }
    .chat-container {
      display: inline-block;
      flex-direction: column;
      align-items: left;
      justify-content: left;
      margin-top: 2rem;
    }
    .submit {
      border-radius: 10px;
      border: none;
      padding: 5px;
      background: linear-gradient(135deg, rgb(237, 239, 245) 0%, rgba(212, 214, 220, 0.757) 31%, rgb(231, 245, 247)135%);
      color: rgb(0, 0, 0);
      text-align: center;
      cursor: pointer;
    }
    .chat{
        border-radius: 10px;
        border: none;
        padding: 5px;
        background: linear-gradient(135deg, rgb(237, 239, 245) 0%, rgba(212, 214, 220, 0.757) 31%, rgb(231, 245, 247)135%);
        color: rgb(0, 0, 0);
        text-align: center;
        cursor: pointer;
    }
</style>