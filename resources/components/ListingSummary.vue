<template>
<div class="listing-summary">
    <div class="wrapper">
        <div class="thumbnail" :style="backgroundImageStyle"></div>
            <div class="info title" >
                <span>{{listing.price_per_night}}</span>
                <span>{{listing.title}}</span>
            </div>
            <div class="info address">{{listing.address}}</div>
        </div>
</div>
</template>

<script>
    export default {
        props:['listing'],
        computed:{
            backgroundImageStyle(){
                return{
                    'background-image' : `url("${this.listing.thumb}")`
                }
            }
        }
    }
</script>

<style scoped>

</style>
