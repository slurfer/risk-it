var ids = [];
var aq = ""
function test(id, q){
    if (ids.includes(id)){
    }else{
        document.getElementById(id).style='opacity: 0.3;';
        ids.push(id);
        document.getElementById(q).style='display: block';
        document.getElementById('home').style='display: block';
        document.getElementById('gameboard').style='display: none';
        aq = q
    }
}
function home(){
    document.getElementById('home').style='display: none;';
    document.getElementById(aq).style='display: none;';
    document.getElementById('gameboard').style='display: block';
}