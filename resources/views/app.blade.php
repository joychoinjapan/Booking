<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Vuebnb</title>
  <link rel="stylesheet" href="{{asset('/css/open-sans.css')}}" type="text/css">
  <link rel="stylesheet" href="{{asset('/css/font-awesome.css')}}" type="text/css">
  <link rel="stylesheet" href="{{mix('css/style.css')}}" type="text/css">
</head>
<body>
<div id="toolbar">
  <img class="icon" src="{{asset('/images/logo.png')}}">
  <h1>Booking</h1>
</div>
<div id="app">
  <div class="header">
    <div class="header-img" 
	v-bind:style="headerImageStyle" 
	v-on:click="modalOpen=true">
		<button class="view-photos">View Photos</button>
	</div>
  </div>
  <div class="container">
    <div class="heading">
      <h1>@{{title}}</h1>
      <p>@{{address}}</p>
    </div>
    <hr>
    <div class="about">
      <h3>About this listing</h3>
      <p v-bind:class="{contracted:contracted}">@{{about}}</p>
	  <button class="more" v-if="contracted" v-on:click="contracted=false">+More</button>
	  <button class="hide" v-if="!contracted" v-on:click="contracted=true">+Hide</button>
	  
    </div>
    <div class="lists">
      <hr>
      <div class="amenities list">
        <div class="title"><strong>Amenities</strong></div>
        <div class="content">
          <div class="list-item" v-for="amenity in amenities">
            <i class="fa fa-lg" v-bind:class="amenity.icon"></i>
            <span>@{{amenity.title}}</span>
          </div>
        </div>
      </div>
      <hr>
	  <div class="price list">
		  <div class="title">
			  <strong>Price</strong>
		  </div>
		  <div class="content">
			  <div class="list-item" v-for="price in prices">
				  @{{price.title}}: <strong>@{{price.value}}</strong>
			  </div>
		  </div>
	  </div>
	</div>
  </div>
  <div id="modal" v-bind:class="{show:modalOpen}">
	  <button v-on:click="modalOpen = false" class="modal-close">
		  &times;
	  </button>
	  <div class="modal-content">
		  <img src="{{asset('/images/header.jpg')}}">
	  </div>
  </div>
</div>
{{--<script src="../../node_modules/laravel-mix/src/components/Vue.js"></script>--}}
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
