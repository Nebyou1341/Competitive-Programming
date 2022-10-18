function gradingStudents(grades) {
    // Write your code here
  
  for(let i=0; i <grades.length; i++){

     if(grades[i] >= 38 && ((Math.ceil(grades[i] /5) * 5 ) - grades[i]) < 3){
         grades[i] = Math.ceil(grades[i]/5) * 5;
     }
         else{
             grades[i] = grades[i];
         }
     }
  return grades

  }
  
