<template>
    <div>
        <p v-bind:class="{contracted:contracted}">
            <slot></slot>
        </p>
        <button class="more" v-if="contracted" v-on:click="contracted=false">+More</button>
        <button class="hide" v-if="!contracted" v-on:click="contracted=true">+Hide</button>
    </div>
</template>

<script>
    export default {
       data(){
           return{
               contracted: true
           }
       }
    }
</script>

<style scoped>

</style>
