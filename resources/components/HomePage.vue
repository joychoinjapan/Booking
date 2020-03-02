<template>
    <div class="home-container">
        <div v-for="(group,country) in listing_groups" class="listing-summary-group">
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

    let serverData = JSON.parse(window.booking_listing_model);
    console.log(serverData);
    let listing_groups = groupByCountry(serverData.listings);
    console.log(listing_groups);
    export default {
        data() {
            return {listing_groups}
        },
        components: {
            ListingSummary
        }
    }
</script>

<style scoped>
    .home-container {
        margin: 0 auto;
        padding: 0 25px;
    }

    @media (min-width: 1131px) {
        .home-container {
            width: 1080px;
        }
    }

    .listing-summary-group {
        padding-bottom: 20px;
    }

    .listing-summaries {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow: hidden;
    }

    .listing-summaries > .listing-summary {
        margin-right: 15px;
    }

    .listing-summaries > .listing-summary：last-child {
        margin-right: 0px;
    }
</style>
