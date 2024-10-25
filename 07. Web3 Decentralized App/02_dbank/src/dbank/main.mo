import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  // ##Assigning variables
  stable var currentValue: Float = 300; //var here is a keyword that creates a variable
  // stable keyword allows the value to be Orthogonally Persisted
  currentValue:= 300;

  stable var startTime = Time.now();
  startTime := Time.now();

  // Debug.print(debug_show(startTime));

  // currentValue := 100;

  let id = 72391672937; //let is similiar to const in JS, value that doesnt changes
  //id:=8679870989878; // expects a value thats immutable

  // ##Displaying as output
  // Debug.print("Hello World!!");
  // Debug.print(debug_show(id));

  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount: Float) {
    let tempValue: Float = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    }
    else {
      Debug.print("Amount too low! Amount not deducted");
    }
  
  };

  public query func checkBalance(): async Float {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsed = currentTime - startTime;
    let timeElapsedInSec = timeElapsed / (10 ** 9);
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedInSec));
    startTime := currentTime;
  };

}
