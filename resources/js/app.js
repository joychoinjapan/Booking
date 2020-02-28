require('./bootstrap');

import Vue from 'vue';
import ListingPage from "../components/ListingPage";


let app = new Vue({
    el: "#app",
    render:h=>h(ListingPage)
});
