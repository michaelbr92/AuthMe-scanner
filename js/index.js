
function isInService(place_id, client_id){
	return {status:0, img:'./img/avatar.png'}
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function() {
        $( document ).on('deviceready', this.onDeviceReady);
        $( '#scan' ).on('click', this.scan);
    },

    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function() {
		
    },
    scan: function() {
        console.log('scanning');
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");
        scanner.scan( function (result) { 
			alert(result.text);
			response = isInService()
			console.log(response)
			if (response.status == 0 && !result.cancelled){
				$("#avatar-img").css('background-image','url(' + response.img + ')');
				$("#status").removeClass("deny").addClass("grant");
			}else{
				$("#status").removeClass("grant").addClass("deny");
			}
			}, function (error) { 
				console.log("Scanning failed: ", error);
				$("#status").removeClass("grant").addClass("deny");
			} 
		);
    }

};
