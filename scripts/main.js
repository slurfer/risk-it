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