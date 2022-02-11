//var url = new URL(window.location.href);
//var params = (new URL(window.location.href)).searchParams;
// if( params.get('clk') == 'ohanashika' ) {
 if((new URL(window.location.href)).searchParams.get('clk') == 'ohanashika' ) {
//  console.log(params.get('clk'));
     document.getElementById('brimBtn').classList.remove('brim');
 }
