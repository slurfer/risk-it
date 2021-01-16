function control(element, isCorrect, value){
      if (isCorrect == 't'){
          document.getElementById(element).style='color: black; background-color: green; border-color: green;';
          pointscnt(value);
      }else{
          document.getElementById(element).style='color: black; background-color: red; border-color: red;';
      }
}

var points_1 = 0;//points of team 1
var points_2 = 0; //points team 2

sessionStorage.team_1 = true; //If true = team 1, If false = team 2

points_1 = parseInt(sessionStorage.points_1);

points_2 = parseInt(sessionStorage.points_2);



function pointscnt(points){
<<<<<<< HEAD
    if(team_1){
        points_1 += points;
        team_1 = false;
    }

    else if(!team_1){
        points_2 += points;
        team_1 = true;
=======
    if(sessionStorage.team_1 == 'true'){
        points_1 += (points);
        sessionStorage.points_1 = points_1;
        sessionStorage.team_1 = false;
    }

    else if(sessionStorage.team_1 == 'false'){
        points_2 += (points);
        sessionStorage.points_2 = points_2;
        sessionStorage.team_1 = true;
>>>>>>> 721f311c04342268d16e504fee73ae98d044d345
    }

    else{
        alert('Error');
    }
    
}
