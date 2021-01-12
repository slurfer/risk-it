function control(element, isCorrect, value){
      if (isCorrect == 't'){
          document.getElementById(element).style='color: black; background-color: green; border-color: green;';
      }else{
          document.getElementById(element).style='color: black; background-color: red; border-color: red;';
      }
}