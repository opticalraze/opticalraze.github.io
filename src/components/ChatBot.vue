<script setup>
import { ref } from 'vue';
import ChatBotBubble from './ChatBotBubble.vue';

const chatBotForm = ref(null)
</script>

<template>
    <div id="chatbot" :data-opened="showChatBot" class="fixed transition-all duration-1000 right-4 w-64 h-96 bg-black border border-white rounded-lg flex flex-col">
        <header class="border-b border-white p-4 flex items-center justify-between">
            <img src="../assets/robot.svg" class="w-10 h-10">
            <h4 class="text-2xl">Chat<b>Bot</b></h4>
            <button @click="showChatBot = true" id="chatbot-open" class="w-10 h-10 p-2 flex items-center">
                <img src="../assets/up.svg">
            </button>
            <button @click="showChatBot = false" id="chatbot-close" class="w-10 h-10 p-2 flex items-center">
                <img src="../assets/down.svg">
            </button>
        </header>
        <div class="flex-grow overflow-auto flex flex-col-reverse">
            <div id="chatbot-output">
                <ChatBotBubble v-for="(m, index) in messages" :key="index" :user="m.user" :message="m.text" />
            </div>
        </div>
        <footer class="p-4 border-t border-white">
            <form @submit.prevent="chatBotSubmit()" ref="chatBotForm" id="chatbot-form" class="flex">
                <input v-model="message" id="chatbot-input" autocomplete="off" type="text" placeholder="Type here" class="w-full bg-black border border-white rounded-lg px-4 py-2">
            </form>
        </footer>
    </div>
</template>

<style scoped>
#chatbot[data-opened="false"] {
            bottom: -310px;
}
#chatbot[data-opened="true"] {
    bottom: 1rem;
}
#chatbot[data-opened="true"] #chatbot-close {
    display: flex;
}
#chatbot[data-opened="true"] #chatbot-open {
    display: none!important;
}
#chatbot[data-opened="false"] #chatbot-open {
    display: flex;
}
#chatbot[data-opened="false"] #chatbot-close {
    display: none!important;
}
</style>

<script>

import chatbotCompute from '../scripts/chatbot';

chatbotCompute('hello');

export default {
    data() {
        return {
            showChatBot: true,
            messages: [
                {
                    user: false,
                    text: "Hello, I'm ChatBot. Ready to answer any questions."
                }
            ],
            message: ""
        }
    },
    methods: {
        chatBotSubmit() {
            const message = this.message;
            this.message = "";
            this.messages.push({
                user: true,
                text: message
            })
            this.chatBotAnswer(message)
        },
        chatBotAnswer(message) {

            const answers = {
                greeting() {
                    const answers = ['Hi', 'Hello', 'Greetings', 'Howdy']
                    return answers[ Math.floor( Math.random() * answers.length ) ]
                }
            }

            let output;
            let input = message.toLowerCase();
            input = input.replaceAll('please ', '')
            input = input.replaceAll(' please', '')
            input = input.replaceAll(' a ', ' ')

            switch(input) {
                case "hello":
                case "hi":
                case "hey":
                case "howdy":
                    output = answers.greeting()
                break;
            }

            setTimeout(() => {
                this.messages.push({
                    user: false,
                    text: output
                })
            }, 600)
            
        }
    }
}
</script>