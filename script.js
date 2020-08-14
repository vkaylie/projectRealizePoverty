//quiz

var quizOutcome = [
    {
        Action: "You did not send them to Foster Care",
        Outcome: "Not only will you continue you to struggle but your child will also the struggles that poverty carries."
    }
    {
        Action: "You sent your kids to Foster Care",
        Outcome: "Sometimes, in order to grow you must sacriface, yet leaving your child isn't easy to do as it left a heartburn in your chest.  People in poverty think about this often, what if I gave up my kid? Would they have been better off there?"
    }
    ]
    
    function doSomething(){
    document.getElementById("Q1A1").innerHTML = "You choosed: You did not send them to Foster Care...  Not only will you continue you to struggle but your child will also the struggles that poverty carries.You did not send them to Foster Care. Not only will you continue you to struggle but your child will also the struggles that poverty carries.";
    } 
    
    
    function getResult(){
      var outCome = document.getElementById("Q1A1");
        var outCome = document.getElementById("Q1A2");
        var total = document.getElementById("result");
        total.style.display = outCome.checked ? "block" : "none";
    
    //}
    //function doSomething(){
    //  console.log("it works");
    //var total = document.getElementById("Q1A1");
     //total.append("hello");
    //}
    
    function doSomething(){
    var total = document.getElementById("Q1A1");
    total.alert("You");
    } 