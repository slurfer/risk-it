var visited_ids = [];
var active_question = ""

function loading(){
    start_slide_show();
    test_savgame();
    scoredraw();
}

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
        active_question = question_div;
        savgame();
    }
}
function home(){
    // hide question and disply gameboard
    document.getElementById('home').style='display: none;';
    document.getElementById(active_question).style='display: none;';
    document.getElementById('gameboard').style='display: block';
}


function start_slide_show(){
    document.getElementById('main').style.setProperty('display', 'none', 'important');
}


function to_game(){
    // alert('ahoj');
    transition_number = 0;
    if(transition_number==0){
        setTimeout(second_transition_0, 750)
    }
    else if(transition_number==1){
        setTimeout(second_transition_1, 750)
    }
    document.getElementById('transition').style='left:-75vw;top:-100vh;';
}

function second_transition_0() {
    document.getElementById('begining').style.display='none';
    document.getElementById('main').style.removeProperty('display');
    document.getElementById('player_1').style.display='flex';
    document.getElementById('player_2').style.display='flex';
    document.getElementById('transition').style='transition-duration:1.7s;left:200vw;top:300vh;';
    // document.getElementById('transition').style='transition-duration:0.75s;';
}

function second_transition_1() {
    document.getElementById('transition').style='left:-200vw;top:-300vh;';
}
/*---------------Welcome message-------------------*/
function slide_show(){
    document.getElementById('button_play').style.opacity='1';
    document.getElementById('button_play').style.transitionDuration='0.5s';
    document.getElementById('button_play').style.transition='opacity 0.5s ease-in-out;'
    document.getElementById('button_play').style.opacity='0';
    setTimeout(slide_show_01, 500)
}

function slide_show_01(){
    document.getElementById('button_play').style.display='none';
    document.getElementById('message_1').style.display='flex';
    document.getElementById('message_1').style.opacity='0';
    document.getElementById('message_1').style.transitionDuration='0.5s';
    document.getElementById('button_next_1').style.display='flex';
    document.getElementById('button_next_1').style.opacity='0';
    document.getElementById('button_next_1').style.transitionDuration='0.5s';
    setTimeout(slide_show_02, 50)
}

function slide_show_02(){
    document.getElementById('message_1').style.transition='opacity 0.5s ease-in-out;'
    document.getElementById('message_1').style.opacity='1';
    document.getElementById('button_next_1').style.transition='opacity 0.5s ease-in-out;'
    document.getElementById('button_next_1').style.opacity='1';
}

/*---------------Game rules-------------------*/
function slide_show_03(){
    document.getElementById('message_1').style.opacity='1';
    document.getElementById('message_1').style.transitionDuration='0.5s';
    document.getElementById('message_1').style.transition='opacity 0.5s ease-in-out;'
    document.getElementById('message_1').style.opacity='0';
    setTimeout(slide_show_04, 500)
}

function slide_show_04(){
    document.getElementById('message_1').style.display='none';
    document.getElementById('button_next_1').style.display='flex';
    document.getElementById('message_2').style.display='flex';
    document.getElementById('message_2').style.opacity='0';
    document.getElementById('message_2').style.transitionDuration='0.5s';
    document.getElementById('button_next_2').style.display='flex';
    setTimeout(slide_show_05, 50)
}

function slide_show_05(){
    document.getElementById('message_2').style.transition='opacity 0.5s ease-in-out;'
    document.getElementById('message_2').style.opacity='1';
}

/* ---------- Saving and restoring game ------------------- */

function savgame(){
    sessionStorage.save = visited_ids;
}

function test_savgame(){
    sessionStorage.save = " ";
    if(!sessionStorage.save){
        sessionStorage.save = " ";
        sessionStorage.points_1 = 0;
        sessionStorage.points_2 = 0;
    }
    else{
        to_game();
        var string = sessionStorage.save;
        var string_split = string.split(",");
        for(i = 0; i < string_split.length; i++){
            document.getElementById(string_split[i]).style='opacity: 0.3;';
            visited_ids.push(string_split[i]);
        }
    }
}

/* ----------- Score drawing -----------*/

function scoredraw(){
    document.getElementById(player_1).innerHTML = sessionStorage.points_1;
    document.getElementById(player_2).innerHTML = sessionStorage.points_2;
    player1 = sessionStorage.player_1;
    if(player1 == 'true'){
        document.getElementById(player_1).style.backgroundColor = '#8fe9e0';
    }
    else if(player1 == 'false'){
        document.getElementById(player_2).style.backgroundColor = '#8fe9e0';
    }
    else{
        alert('Error(invalid string content)');
    }
}
