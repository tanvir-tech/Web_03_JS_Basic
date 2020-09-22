var current_Year = parseInt(prompt("How many years :"));
var current_Semester = parseInt(prompt("How many Semesters :"));

var sem = current_Year * 2 + current_Semester ;
document.write("Total passed Semesters : "+ sem);

var total_gpa = 0.00;
for (i=0; i<sem ; i++){
    var sem_gpa = parseFloat(prompt("Enter gpa of "+i+"th Semester."));
    document.write("<br>gpa = "+ sem_gpa);
    total_gpa = total_gpa + sem_gpa;

}
var avg_gpa = total_gpa/sem ;
document.write("<br>CGPA = "+ avg_gpa);


function cgpa_calc(){
    
}

