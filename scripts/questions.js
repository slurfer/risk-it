function control(element, isCorrect, value){
      if (isCorrect == 't'){
          document.getElementById(element).style='color: black; background-color: green; border-color: green;';
          pointscnt(value);
      }else{
          document.getElementById(element).style='color: black; background-color: red; border-color: red;';
      }
}

<<<<<<< Updated upstream
var team_1 = true //If true = team 1, If false = team 2
var points_1 = 0 //points of team 1
var points_2 = 0 //points team 2

function pointscnt(points){
    if(team_1){
        points_1 += points;
        team_1 = false;
    }

    else if(!team_1){
        points_2 += points;
        team_1 = true;
=======
var points_1 = 0;//points of team 1
var points_2 = 0; //points team 2





function pointscnt(points){
    //load values from sessionStorage if there aren't, it creates them
    if(sessionStorage.team_1=='undefined'){
        sessionStorage.team_1 = true; //If true = team 1, If false = team 2
    }
    if(sessionStorage.points_1 == 'undefined'){
        points_1 = 0;
    }else{
        points_1 = parseInt(sessionStorage.points_1);
    }
    
    if(sessionStorage.points_2 == 'undefined'){
        points_2 = 0;
    }else{
        points_2 = parseInt(sessionStorage.points_2);
    }
    if(sessionStorage.team_1 == 'true'){
        alert(points_1);
        points_1 += (points);
        sessionStorage.points_1 = points_1;
        sessionStorage.team_1 = false;
    }

    else if(sessionStorage.team_1 == 'false'){
        points_2 += (points);
        sessionStorage.points_2 = points_2;
        sessionStorage.team_1 = true;
>>>>>>> Stashed changes
    }

    else{
        alert('Error');
    }
}
