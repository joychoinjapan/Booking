require('./bootstrap');
import Vue from 'vue';
var sample = {
    title: 'Central Downtown Apartment with Amenities',
    address: 'No. 11, Song-Sho Road, Taipei City, Taiwan 105',
    about: 'Come and stay at this modern and comfortable apartment! My home is centrally located right in the middle' +
        ' of the downtown. Talk about convenience! Shops, stores, and other destination areas are nearby. \r\n\r\nFeel the ' +
        'warmth of the sun as there is plenty of natural light showers. The living room features tv, sofa, table, radio, ' +
        'and fan. There is free wi-fi with a fast internet speed. \r\n\r\nForgot shopping for breakfast staples? We provide ' +
        'eggs, bread, cereals, coffee, milk, tea and cookies. Enjoy cooking as my kitchen boasts full size appliances. The ' +
        'dining table is for four people. Need to wash your clothes? There is a washer and a dryer. We provide hampers, ' +
        'detergents, and clothing conditioner. \r\n\r\nIf you need to hit the gym, there is located at the fourth floor of ' +
        'the building. There is indoor spa and pool.',
    amenities: [
        {
            title: 'Wireless Internet',
            icon: 'fa-wifi'
        },
        {
            title: 'Pets Allowed',
            icon: 'fa-paw'
        },
        {
            title: 'TV',
            icon: 'fa-television'
        },
        {
            title: 'Kitchen',
            icon: 'fa-cutlery'
        },
        {
            title: 'Breakfast',
            icon: 'fa-coffee'
        },
        {
            title: 'Laptop friendly workspace',
            icon: 'fa-laptop'
        }
    ],
    prices: [
        {
            title: 'Per night',
            value: '$89'
        },
        {
            title: 'Extra people',
            value: 'No charge'
        },
        {
            title: 'Weekly discount',
            value: '18%'
        },
        {
            title: 'Monthly discount',
            value: '50%'
        }
    ]
}


let app = new Vue({
    el: "#app",
    data: {
        title: sample.title,
        address: sample.address,
        about: sample.about,
        headerImageStyle: {
            'background-image': 'url(/images/header.jpg)'
        },
        amenities: sample.amenities,
        prices: sample.prices,
        contracted: true,
        modalOpen: false
    },
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
