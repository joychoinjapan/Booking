<template>
   <div>
       <div v-for="(group,country) in listing_groups">
           <h1>Places in {{country}}</h1>
           <div class="listing-summaries">
               <listing-summary
                   v-for="listing in group"
                   :key="listing.id"
                   :listing="listing">
               </listing-summary>
           </div>
       </div>
   </div>
</template>

<script>
    import {groupByCountry} from "../js/helpers";
    import ListingSummary from "./ListingSummary";

    let serverData=JSON.parse(window.booking_listing_model);
    console.log(serverData);
    let listing_groups=groupByCountry(serverData.listings);
    console.log(listing_groups);
    export default {
        data(){
            return {listing_groups}
        },
        components:{
            ListingSummary
        }
    }
</script>

<style scoped>

</style>
