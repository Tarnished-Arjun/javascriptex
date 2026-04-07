let student = {
  rollno: "",
  course: "",
  duration: "",
  startDate: "",
  endDate: "",
  grade: "",

  setStudentData: function(roll, course, duration, start, end, grade) {
    this.rollno = roll;
    this.course = course;
    this.duration = duration;
    this.startDate = start;
    this.endDate = end;
    this.grade = grade;
  },

  getStudentData: function() {
    return `Roll No: ${this.rollno}<br>
    Course: ${this.course}<br>
    Duration: ${this.duration}<br>
    Start Date: ${this.startDate}<br>
    End Date: ${this.endDate}<br>
    Grade: ${this.grade}`;
  }
};

function showData() {
  student.setStudentData(2462177, "Btech in CS AIML", "4 years", "2023", "2027", "c");
  document.getElementById("output").innerHTML = student.getStudentData();
}