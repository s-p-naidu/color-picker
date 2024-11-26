function changeColor(c,t){
    if(t==1)text.style.color=c;
    else if(t==0)text.style.backgroundColor=c;
}
let text=document.getElementById('text');
var tooltip=document.getElementById('tooltiptextid');
text.addEventListener('keydown',function(){
    tooltip.style.visibility='hidden';
});
text.addEventListener('mouseenter',function(){
   
    tooltip.style.visibility='visible';
    //not giving output no error also
    //var tooltip=document.getElementsByClassName('tooltiptext');
    //tooltip[0].style.visibility='visible';
})
text.addEventListener('mouseleave',function(){
    tooltip.style.visibility='hidden';
})



function downloadImage() {
    const element = document.getElementById('text');
     html2canvas(element).then(canvas => 
        { // Convert the canvas to a data URL 
         const dataURL = canvas.toDataURL('image/png'); // Create a link element 
         const link = document.createElement('a');
         link.href = dataURL; 
         link.download = 'textcard.jpg'; // Trigger the download 
        document.body.appendChild(link); 
        link.click(); 
        document.body.removeChild(link); 
}); }