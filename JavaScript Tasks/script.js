function titleStyling(){
    const title = document.getElementById('title');
    // title.innerHTML="Test!";
    title.style.color='#356';
    title.style.transform='scale(1.1)';
    title.style.transition='4s';
}

function getDate(){
    const date = document.getElementById('date__demo');
    date.innerHTML=Date();
}

function runLaptop(){
    const laptop = document.getElementById('laptop');
    // console.log(laptop.src);
    if (laptop.src==='file:///home/dev/Desktop/sociumtech-tasks/JavaScript%20Tasks/image/offLaptop.jpg'){
        laptop.src='image/onLaptop.jpg'
    } else
    {
        laptop.src='image/offLaptop.jpg'
    }
}



