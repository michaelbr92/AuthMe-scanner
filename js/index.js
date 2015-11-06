var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
		this.scan();
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

        }, function (error) { 
            console.log("Scanning failed: ", error); 
        } );
    }

};
