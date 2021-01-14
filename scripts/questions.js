function control(element, isCorrect, value){
      if (isCorrect == 't'){
          document.getElementById(element).style='color: black; background-color: green; border-color: green;';
          pointscnt(value);
      }else{
          document.getElementById(element).style='color: black; background-color: red; border-color: red;';
      }
}

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
    }

    else{
        alert('Error');
    }
}