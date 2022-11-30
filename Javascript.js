function theFunction(){
    let name;
    let person = prompt("Please Enter Your Name: ", "Kyle");
    if(person == null || person == "") {
name="User Enter No Name";
    } else{
        name = "Hi " +person+ "! Welcome to my video game website , stick around and watch a video!";
  }
document.getElementById("intro").innerHTML = name;
}