<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link rel=stylesheet href="{{ mix('css/app.css') }}" />
	<link rel=stylesheet href="{{ asset('css/animate.css') }}" />
	<script src="{{ mix('js/app.js') }}"  defer></script>
	<script src="{{ asset('js/Charts.js') }}"  defer></script>
	<script src="{{asset('js/sweetAlert2.js')}}" defer></script>
	<script src="{{asset('js/wow.min.js')}}" defer></script>
	<script src="{{asset('js/init.wow.js')}}" defer></script>
	<title>{{env('APP_NAME')}}</title>
</head>

<body>
	<div id="app">
	</div>
	
</body>

</html>