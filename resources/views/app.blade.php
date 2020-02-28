<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Booking</title>
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
<ListingPage></ListingPage>
</div>
{{--<script src="../../node_modules/laravel-mix/src/components/Vue.js"></script>--}}
<script type="text/javascript">
    window.booking_listing_model="{!! addslashes(json_encode($model))!!}";
</script>
<script src="{{ mix('js/app.js') }}"></script>

</body>
</html>
