require('./bootstrap');
import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers';

let model=JSON.parse(window.booking_listing_model);
model = populateAmenitiesAndPrices(model);


let app = new Vue({
    el: "#app",
    data:
        Object.assign(model,{
            title: model.title,
            address: model.address,
            about: model.about,
            images:model.images,
            headerImageStyle: {
                'background-image':`url(${model.images[0]})`
            },
            amenities: model.amenities,
            prices: model.prices,
            contracted: true,
            modalOpen: false
        }),
    methods:{
        escapeKeyListener:function(evt){
            if(evt.keyCode === 27 && app.modalOpen){
                app.modalOpen = false;
            }
        }
    },
    watch: {
        modalOpen: function() {
            let className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    created:function(){
        document.addEventListener('keyup',this.escapeKeyListener);
    },
    destroyed:function(){
        document.removeEventListener('keyup',this.escapeKeyListener)
    }
});
