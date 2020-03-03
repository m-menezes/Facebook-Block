$( document ).ready( function(){
    var ADDelete = 0;
    function hideAd(){
        $( '.a_ayheuibiq' ).each( function( index ){
            console.log('achei');
            var labelPost = $( this ).find( ".w_ayheuibj5" );
            var divPost = $( this ).closest( '._5jmm' );
            if( $( labelPost ).text() == "Patrocinado" ){
                $( divPost ).remove();
                ADDelete ++;
                console.log(ADDelete + ' - AD Deletados');
            } else {
                //Refatorar
                var a = [];
                var content = $( labelPost ).toArray();
                for ( var i = 0; i < content.length; i++ ){
                    a.push( $( content[i] ).attr( 'data-content' ) );
                }
                var b = a.join( "" );
                if( b == "Patrocinado" ){
                    $( divPost ).remove();
                    ADDelete ++;
                    console.log(ADDelete + ' - AD Deletados');
                }
            }
        } );
    }
    
    var lastScrollTop = 0;
    window.addEventListener( "scroll", function(){
        var st = window.pageYOffset;
        if( st > lastScrollTop + 250  ){
            lastScrollTop = st;
            hideAd();
        }
    }, false );
    hideAd();
} );