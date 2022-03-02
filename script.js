
    function capFunc() {

        var states = [ "New York" , "California" , "Nevada" , "Texas" , "Arizona" ];
    
        var nyCap = [ "Albany" ];
        var caCap = [ "Sacramento" ];
        var nvCap = [ "Carson City" ];
        var txCap = [ "Austin" ];
        var azCap = [ "Phoenix" ]

        var selectOptions = ( document.getElementById( "capPick" ).value );
        var displayOption = document.getElementById( "display" );

        document.getElementById( "display" ).innerHTML = "";
        
        if ( selectOptions == "ny" ) {
            
            for ( i = 0; i < nyCap.length; i++ ) 
            
            {
                
                var sOptions = document.createElement( 'option' );
                sOptions.innerHTML = nyCap[i];
                sOptions.value = nyCap[i];
                displayOption.appendChild( sOptions );
            
            }
        } else if ( selectOptions == "ca" ) {
            
            for ( i = 0; i < caCap.length; i++ ) 
            
            {
                
                var sOptions = document.createElement( 'option' );
                sOptions.innerHTML = caCap[i];
                sOptions.value = caCap[i];
                displayOption.appendChild( sOptions );
            
            }
        } else if ( selectOptions == "nv" ) {
            
            for ( i = 0; i < nvCap.length; i++ ) 
            
            {
                
                var sOptions = document.createElement( 'option' );
                sOptions.value = nvCap[i];
                sOptions.innerHTML = nvCap[i];
                displayOption.appendChild( sOptions );
            
            }
        } else if ( selectOptions == "tx" ) {
            
            for ( i = 0; i < txCap.length; i++ ) 
            
            {
                
                var sOptions = document.createElement( 'option' );
                sOptions.value = txCap[i];
                sOptions.innerHTML = txCap[i];
                displayOption.appendChild( sOptions );
            
            }
        } else if ( selectOptions == "az" ) {
            
            for ( i = 0; i < azCap.length; i++ ) 
            
            {
                
                var sOptions = document.createElement( 'option' );
                sOptions.value = azCap[i];
                sOptions.innerHTML = azCap[i];
                displayOption.appendChild( sOptions );
            
            }
        }
    }