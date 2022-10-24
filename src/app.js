let number = '0';

function showDate1(){
    number = 1;
}

function showDate2(){
    number = 2;
}

function showDate3(){
    number = 3;
}

function showDate4(){
    number = 4;
}

function showDate5(){
    number = 5;
}

function showMessage(){
    if(number>0){
        document.getElementById('mainCard').style.opacity = '0'
        document.getElementById('select').innerHTML = `You selected ${number} out of 5`;
    }else{
        alert('Please choose an option');
    }
}