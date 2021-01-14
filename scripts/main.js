var visited_ids = [];
var active_question = ""
function test(id, question_div){
    if (visited_ids.includes(id)){
    }else{
        //set this question to visited (semitransparent and non-clickable)
        document.getElementById(id).style='opacity: 0.3;';
        visited_ids.push(id);
        // display question and hide gameboard
        document.getElementById(question_div).style='display: block';
        document.getElementById('home').style='display: block';
        document.getElementById('gameboard').style='display: none';
        active_question = question_div
    }
}
function home(){
    // hide question and disply gameboard
    document.getElementById('home').style='display: none;';
    document.getElementById(active_question).style='display: none;';
    document.getElementById('gameboard').style='display: block';
}

function transition(transition_number){
    // alert('ahoj');
    if(transition_number==0){
        setTimeout(second_transition_0, 750)
    }
    else if(transition_number==1){
        setTimeout(second_transition_1, 750)
    }
    document.getElementById('transition').style='left:-75vw;top:-100vh;';
}

function second_transition_0() {
    document.getElementById('button_play').style.display='none';
    document.getElementById('transition').style='transition-duration:1.7s;left:200vw;top:300vh;';
    // document.getElementById('transition').style='transition-duration:0.75s;';
}

function second_transition_1() {
    document.getElementById('transition').style='left:-200vw;top:-300vh;';
}

function slide_show(){
    document.getElementById('button_play').style.opacity='1';
    document.getElementById('button_play').style.transitionDuration='0.5s';
    document.getElementById('button_play').style.transition='opacity 0.5s ease-in-out;'
    document.getElementById('button_play').style.opacity='0';

    setTimeout(slide_show_01, 1000)
}

function slide_show_01(){
    document.getElementById('button_play').style.display='none';
    document.getElementById('message_1').style.display='flex';
    document.getElementById('message_1').style.opacity='0';
    document.getElementById('message_1').style.transitionDuration='0.5s';
    setTimeout(slide_show_02, 500)
}

function slide_show_02(){
    document.getElementById('message_1').style.transition='opacity 0.5s ease-in-out;'
    document.getElementById('message_1').style.opacity='1';
    setTimeout(slide_show_02, 1000)
}

