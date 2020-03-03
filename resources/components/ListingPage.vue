<template>
    <div>
        <header-image v-if="images[0]" :image-url="images[0]" @header-clicked="openModal"></header-image>
        <div class="container">
            <div class="heading">
                <h1>{{title}}</h1>
                <p>{{address}}</p>
            </div>
            <hr>
            <div class="about">
                <h3>About this listing</h3>
                <expandable-text>{{ about }}</expandable-text>
            </div>
            <div class="lists">
                <feature-list title="Amenities" :items="amenities">
                    <template slot-scope="amenity">
                        <i class="fa fa-lg" v-bind:class="amenity.icon"></i>
                        <span>{{amenity.title}}</span>
                    </template>
                </feature-list>
                <feature-list title="Prices" :items="prices">
                    <template slot-scope="price">
                        {{price.title}}: <strong>{{price.value}}</strong>
                    </template>
                </feature-list>
            </div>
        </div>
        <modal-window ref="imageModal">
            <image-carousel :images="images"></image-carousel>
        </modal-window>
    </div>
</template>

<script>
    import {populateAmenitiesAndPrices} from "../js/helpers";
    import ImageCarousel from "../components/ImageCarousel";
    import ModalWindow from "../components/ModalWindow";
    import HeaderImage from "../components/HeaderImage";
    import FeatureList from "../components/FeatureList";
    import ExpandableText from "../components/ExpandableText";
    import routeMixin from "../js/route-mixin";


    export default {
       mixins:[routeMixin],
        data(){
            return {
                id: null,
                title: null,
                address: null,
                about:null,
                amenities:[],
                prices: [],
                images: []
            }
        },
       components:{
           ImageCarousel,
           ModalWindow,
           HeaderImage,
           FeatureList,
           ExpandableText
       },
        computed:{
            model:function(){
            }
        },
        methods:{
            assignData({listing}){
                Object.assign(this.$data,populateAmenitiesAndPrices(listing));
            },
            openModal(){
                this.$refs.imageModal.modalOpen=true;
            }
        }
    }
</script>

<style scoped>
    .about{
        margin-top: 2em;
    }

    .about h3{
        font-size:22px;
    }
</style>
