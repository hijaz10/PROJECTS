function z(students) {
    var highestGPA = 0;
    var output={};
    for (var i = 0; i < students.length; i++) {
      if (students[i].gpa > highestGPA) {
        highestGPA = students[i].gpa; 
        output=students[i]    
      }
    }
  
    return output;
  }
  
  var studentArray = [
    { name: 'John', gpa: 3.5 },
    { name: 'Alice', gpa: 4.0 },
    { name: 'Bob', gpa: 3.8 }
  ];
  
  var result = z(studentArray);
  console.log(result);
  