function changeColor(c,t){
    if(t==1)text.style.color=c;
    else if(t==0)text.style.backgroundColor=c;
}
let text=document.getElementById('text');






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