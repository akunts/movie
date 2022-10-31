document.querySelector('button').onclick = myClick;

function myClick(){
    let name = document.querySelector('.name').value;
    let link = '<video src="./video.mp4" autoplay="autoplay"></video>';
    document.querySelector('.vidos').innerHTML = ('Привет, ' + name + '! Для тебя есть подарок:');
    document.querySelector('.video').innerHTML = link;
}

