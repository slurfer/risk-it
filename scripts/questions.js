function control(element, isCorrect, value){
      if (isCorrect == 't'){
          document.getElementById(element).style='color: black; background-color: green; border-color: green;';
          pointscnt(value);
      }else{
          document.getElementById(element).style='color: black; background-color: red; border-color: red;';
      }
      sessionStorage.first_try = false;
}






function pointscnt(points){
    //load variables from session storage
    if(sessionStorage.points_1=='0'){
        points_1 = 0;
    }else{
        points_1 = parseInt(sessionStorage.points_1);
    }
    if(sessionStorage.points_2=='0'){
        points_2 = 0;
    }else{
    points_2 = parseInt(sessionStorage.points_2);
    }

    if(sessionStorage.team_1 == 'true'){
        if(sessionStorage.first_try=='true'){
        points_1 += (points);
        sessionStorage.points_1 = points_1;
        }
        sessionStorage.team_1 = false;
    }

    else if(sessionStorage.team_1 == 'false'){
        if(sessionStorage.first_try=='true'){
        points_2 += (points);
        sessionStorage.points_2 = points_2;
        }
        sessionStorage.team_1 = true;
    }

    else{
        alert('Error - ' + sessionStorage.team_1);
    }
    
}
