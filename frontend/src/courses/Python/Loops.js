import React from "react";
import Figure1 from "../../assests/CourseImages/Python/Loops/Figure1.png"
import Figure2 from "../../assests/CourseImages/Python/Loops/Figure2.png"
import Figure3 from "../../assests/CourseImages/Python/Loops/Figure3.png"

const Loops = () => {
    return (
        <div>
            <br/>
            <div>
                <h3 className="subHead">Loops</h3>
                <p>
                In programming many times, we need to run the same statement, function, or code section again and again. If we do it manually means writing every time code then it takes lots of time, manpower, space, and cost also which is not good for any case. To overcome this shortcoming we use loops, Python also has some types of loops which are also quite common in every other programming language. They are the while, the break statement, and the for loop. 
                </p>
            </div>

            <div>
                <h5 className="subHead">While Loop Statements</h5>
                <p>
                We can make a block of code execute over and over again with a while statement. In the while statement or loop the code will execute until the condition is False means it runs till the condition meets the criteria or True. While statements always consist of the following:
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                        The “while” keyword
                        </p>
                    </li>
                    <li>
                        <p>
                        A condition (that is, an expression that evaluates to True or False)
                        </p>
                    </li>
                    <li>
                        <p>
                        A colon
                        </p>
                    </li>
                    <li>
                        <p>
                            Starting on the next line, an indented block of code (called the while clause)
                        </p>
                    </li>
                </ol>
                <p>
                If we read the above statements, we find that it is very similar to the “if” statement. The difference is in the behavior of both of them. In the “if” statement the program continues to the next step after the if clause that is it moves forward in the program whereas in the while clause, the program comes back to the start of the while statement, that is if a program goes inside the while clause then it executes and then come back to the while statement starting for further execution until it became False.
                </p>
                <p>
                Let's look at both the “if” statement code and “while” statement code for a much better understanding of how they are both different in the execution of the program and what output they both produce.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}spam = 0
                                {"\n"}if spam &lt; 5:
                                {"\n"}      print("Hello world.")
                                {"\n"}      spam = spam+1
                                <br/>
                                <br/>

                                {"\n"}Hello world.
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                The above code is written with the “if” statement and we can see that the condition is satisfied therefore it produces the result “Hello world”. But it does not execute the code again and again which we want from it. It checks the condition, and it prints “Hello world” only once if the condition is true. Now let’s look at the same code with the “while” statement.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}spam = 0
                                {"\n"}while spam &lt; 5:
                                {"\n"}      print("Hello world.")
                                {"\n"}      spam = spam+1
                                <br/>
                                <br/>

                                {"\n"}Hello world.
                                {"\n"}Hello world.
                                {"\n"}Hello world.
                                {"\n"}Hello world.
                                {"\n"}Hello world.
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that the “while” statement continues 5 times because we declare that the program will run till the spam is less than 5, and after every successful execution we add 1 to the spam count which leads to an increment of 1 after every iteration of the code therefore till the “while” condition is True the statement runs.  
                </p>
                <p>
                The “while” statement looks very useful when we want to print something again and again but it has some drawbacks also let’s look at them one by one.
                </p>
                <p>
                Potential Infinite Loop: one of the significant drawbacks of while loops is the possibility of creating an infinite loop. If the loop condition is not appropriately updated within the loop body, or if there’s a logical error, the loop may continue indefinitely, leading to a program that doesn’t terminate as expected. 
                </p>
                <p>
                Complexity and readability: while loops can sometimes result in code that is more complex and harder to read compared to its counterpart, the for loop. Especially when iterating through a sequence of known length, a for loop may offer clearer syntax and better readability.
                </p>
                <p>
                Initialization and Update: managing loop variables, especially initialization and update, requires careful attention. If not done correctly, it might lead to unexpected behavior or errors in the loop’s execution.
                </p>
                <p>
                Dependence on External Variables: The while loops often rely on external variables to control their flow. If these variables are modified elsewhere in the program, it can unintentionally affect the loop’s behavior. This dependency on the external state introduces an additional layer of complexity.
                </p>
                <p>
                Potential for Performance Issues: in some cases, using a while loop might be less efficient than alternatives like the “for” loops. Iterating through a predefined sequence using a for loop is often more optimized, and the “while” loops may result in unnecessary checks for a condition on each iteration.
                </p>
                <p>
                Let’s loop at the flowchart of the “while” statement for better understanding, that is how the “while” loop works in the program.
                </p>
                <div className="figure-container">
                    <img src={Figure1} alt="" />
                </div>
                <br/>
                <p>
                import Figure1 from "../../assests/CourseImages/Python/FlowControl/Figure1.png"
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name = ""
                                {"\n"}while name != "Your name":
                                {"\n"}      print("Please type your name.")
                                {"\n"}      name = input()
                                {"\n"}print('thank you')
                                <br/>
                                <br/>

                                {"\n"}Please type your name.
                                {"\n"}Mohit
                                {"\n"}Please type your name.
                                {"\n"}Your name
                                {"\n"}thank you
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, the “while” loop continued to execute till we didn’t enter “Your name” in input in the same order because it is the condition that terminates the while loop means the while continues to run until, we enter “Your name” as an input it leads to infinite loop which does not work for programming. 
                </p>
                <p>
                The while loop has one disadvantage which is known as trapped in an infinite loop. In this, we by mistake make such a condition which is always True therefore the while loop runs always without stopping if you ever encounter a situation like that, please press CTRL-C on the keyboard, it interrupts the program and causes it to stop immediately. Let’s look at code where this condition meets.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}while True :
                                {"\n"}      print("Hello World")
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>in the above code, the while condition is always true therefore print statement runs infinitely.</p>
            </div>

            <div>
                <h3 className="subHead">Break Statements</h3>
                <p>
                If we want to terminate the while loop in the middle of the execution of some condition met then we can also do this using a break statement. It is used as a shortcut for breaking out of the while loop clause early. Whenever a while loop clause reaches a break statement it immediately exits the while clause. To implement the break statement in the loop we just need to include the “break” keyword inside the while clause. Let’s look at a code example, this code is the same as the above code the only change is that we added a “break” statement in the while clause.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name = ""
                                {"\n"}while True :
                                {"\n"}      print("Please type your name.")
                                {"\n"}      name = input()     
                                {"\n"}      if name == "your name":
                                {"\n"}              break
                                {"\n"}print('thank you)
                                <br/>

                                {"\n"}Please type your name.
                                {"\n"}Mohit
                                {"\n"}Please type your name.
                                {"\n"}Your name
                                {"\n"}thank you
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code we can see that the while loop will run infinitely because whatever we enter as an input simply prints it because in its condition it is always True means whatever we enter is True, but to terminate the loop we introduce an if condition that is whenever the user input “your name” in same order it breaks the while with the help of break statement. After entering the name as “your name” the program terminates the while clause and moves to the next line which has a print statement and the program then prints it and terminates its execution. The break statements are used in a while loop when we want to loop to continue till it does not meet a certain condition.
                </p>
            </div>

            <div>
                <h3 className="subHead">Continue Statements</h3>
                <p>
                    The continue statement is also used inside the loops just like the break statement. The continue statement is used when we want to go back to the loop starting point again means if the program execution reaches a “continue” statement, then the program execution immediately jumps back to the start of the loop and reevaluates the loop’s condition.
                </p>
                <p>
                For a better understanding of the continue statement let’s look at an example code:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name = ""
                                {"\n"}while True :
                                {"\n"}      print('who are you?')
                                {"\n"}      name = input()     
                                {"\n"}      if name == "Rohit":
                                {"\n"}              continue
                                {"\n"}      print("Hello Rohit. What is the password? (it is a fish.)")
                                {"\n"}      password = input()
                                {"\n"}      if password == "swordfish":
                                {"\n"}              break
                                {"\n"}print("Access granted.")
                                <br/>

                                {"\n"}who are you?
                                {"\n"}Rohit
                                {"\n"}Hello Rohit. What is the password? (it is a fish.)
                                {"\n"}swordfish
                                {"\n"}Access granted.
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that if the name is not equal to “Rohit” it goes to the continue statement which re-executes the while clause from the beginning that is the while loop starts again and when we enter the right condition of the “if” statement it goes to the next line skipping the continue statement and print the message and asks for the password if we enter the wrong password then it goes back to the start of the while loop and starts again, but in the above code we enter the right input so the program meets it breaking condition or terminating condition therefore it goes to next line and print the last line and terminate the execution.
                </p>
                <div className="figure-container">
                    <img src={Figure2} alt="" />
                </div>
                <br/>
                <p>
                Note: there are some values in other data types that conditions will consider equivalent to True and False. When used in the conditions, 0, 0.0, and ‘’ (the empty string) are considered False, while all other values are considered True. 
                </p>
            </div>

            <div>
                <h3 className="subHead">For loops and the range() Function</h3>
                <p>
                The While loop is very useful when we don’t know how many times we need to repeat the code or condition or when we only have one certain condition in which we need to stop the loop, change its progress, or continue other parts of the program, but if we know how much time we need to repeat the condition or loop then it is much easier and useful to use for loop. We can do this with a “for” loop statement and the range() function.
                </p>
                <p>
                In Python code the for loop looks like “for i in range(5)” and it always includes the following:
                </p>
                <ol style={{listStyleType:'disc'}}>
                    <li>
                        <p>
                            The “for” keyword
                        </p>
                    </li>
                    <li>
                        <p>
                            A variable name
                        </p>
                    </li>
                    <li>
                        <p>
                            The “in” keyword
                        </p>
                    </li>
                    <li>
                        <p>
                        A call to the range() method with up to three integers passed to it 
                        </p>
                    </li>
                    <li>
                        <p>
                        A colon
                        </p>
                    </li>
                    <li>
                        <p>
                        Starting on the next line, an indented block of code (called the for clause)
                        </p>
                    </li>
                </ol>
                <p>
                Let's look at the code using which uses for loop to better understand it.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}print("My name is")
                                {"\n"}for i in range(5):
                                {"\n"}      print("Rohit Five Times (" + str(i) +")")
                                <br/>
                                <br/>

                                {"\n"}My name is
                                {"\n"}Rohit Five Times (0)
                                {"\n"}Rohit Five Times (1)
                                {"\n"}Rohit Five Times (2)
                               
                                {"\n"}Rohit Five Times (3)
                                {"\n"}Rohit Five Times (4)
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that the program starts with the first line which prints the message “My name is” one time after that it goes to the next line which has the “for” loop in the “for” loop we describe the variable “i” and range() function in the range() function we pass the numbers of iteration we want the loop will run (in above we describe it 5) (note: in Python range function start with 0 and terminates the outer bound of the number means the number 5 will not be executed and the program run from 0 to 4 count which is also 5 times). After it comes to the loop it goes to the next line and prints the message and the value of “i” will increase by 1, the program then again goes to the for loop and checks the condition if it is still in the range of 5 or not if yes then it move to next line and print the message again this goes till the it is under the range when the value of “i” is equal to 5 then the loop will terminate and move to forward if there are more code. We must remember that in Python for loop the range has always one minus value that is if we give an upper range value equal to 10 then it will always go to a value of 9 is 10-1 or in mathematical terms written as n-1. Here is the upper value of the range.
                </p>
                <div className="figure-container">
                    <img src={Figure3} alt="" />
                </div>
                <br/>
                <p>
                Note: we can also use “break” and “continue” statements inside “for” loops as well. The “continue” statement will continue to the next value of the “for” loop’s counter as if the program execution had reached the end of the loop and returned to the start. We can use “continue’ and “break” statements only inside “while” and “for” loops. If we try to use these statements elsewhere, Python will give us an error. 
                </p>
            </div>

            <div>
                <h3 className="subHead">The Starting, Stopping, and Stepping Arguments to range()</h3>
                <p>
                In a programming language, some functions can have multiple arguments which are separated by commas. In Python range() function also belongs to this type of function. We can decide from where the range function starts other than zero value (zero is the default value), till where it iterates, and how many steps it takes (skip ) between two iterations. Let’s look at the with Python code for better understanding.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}for i in range(12, 20, 2):
                                {"\n"}      print(i)")
                                <br/>
                                <br/>

                                {"\n"}12
                                {"\n"}14
                                {"\n"}16
                                {"\n"}18
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that in range we pass the 3 arguments separated by commas, the first argument is the starting point that is from where we want to start our loop, the second argument is the endpoint that is where we want to stop (remember that Python excludes the upper bound so the count will go to 19, not 20), and the third argument is the step we want to jump between two iterations or between printing two number. In output, we can see that the number starts with 12 and goes to 20 with 2 differences of 2 which is correct according to our argument. We can also pass the less value as a second argument if we want to decrease it from top to bottom but we also need to pass the third argument as a negative value, if the first argument is greater than the second or endpoint argument and the step or last argument is in negative then the “for” loop decreases after each iteration. For better understanding let’s look at this using Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}for i in range(5, -2, -1):
                                {"\n"}      print(i)")
                                <br/>
                                <br/>

                                {"\n"}5
                                {"\n"}4
                                {"\n"}3
                                {"\n"}2
                                {"\n"}1
                                {"\n"}0
                                {"\n"}-1
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Importing Modules</h3>
                <p>
                In Python, we can call a basic set of functions with any program this set of functions is called built-in functions, some of these built-in functions are print(), input(), len(), etc. Python also comes with a set of modules called the standard library. In Python, every module contains a related group of functions that we can use in our programs. For example, the math module has mathematics-related functions, the random module has random number-related functions, and so on.
                </p>
                <p>
                To use the module’s functions we need to import it from the Python program, we must import the module with an import statement. In code, an import statement has the following :-
                </p>
                <ol style={{listStyleType:'disc'}}>
                    <li>
                        <p>
                            The import keyword
                        </p>
                    </li>
                    <li>
                        <p>
                        The name of the module
                        </p>
                    </li>
                    <li>
                        <p>
                        Optionally, more module names, as long as they are separated by commas
                        </p>
                    </li>
                </ol>
                <p>
                After importing the module we can use all the functions it has. Let’s try the random module, for a better understanding of how we can import the module in Python and how they work. In this example, we access the random.ranint() function of the random module.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}import random
                                {"\n"}for i in range(5):
                                {"\n"}      print(random.randint(1, 10))
                                <br/>
                                <br/>

                                {"\n"}2
                                {"\n"}1
                                {"\n"}3
                                {"\n"}3
                                {"\n"}6
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that we imported the random function using the import keyword and used the randint function from the random module The random.randint() function produces random integers but we bound its limit by passing the arguments 1 and 10. Here one is the lowest limit and 10 is the upper limit.
                </p>
            </div>

            <div>
                <h3 className="subHead">From import Statements</h3>
                <p>
                An alternative way to import modules in Python is by using the “from” keyword followed by the module name, the “import” keyword, and an asterisk (*). For instance, we might see “from random import *”. In this form, functions from the “random” module can be used without the “random” prefix. However, it’s generally recommended to use the standard import statement with the module name preceding the function calls. This helps enhance code readability, and relying on the full module name provides a clearer indication of the source of the functions being used.
                </p>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                Flow control is a fundamental aspect of Python programming, enabling developers to dictate the sequence of code execution based on specific conditions. Understanding Boolean values and comparison operators is essential, as they form the basis for decision-making in Python. Boolean values, True or False, are determined by comparison operators such as ==, !=, &lt;, &gt;, &lt;=, and &gt;=. It's crucial to differentiate the assignment operator (=) from the equality operator (==).
                </p>
                <p>
                Boolean operators, including "and," "or," and "not," further shape program flow by evaluating expressions to True or False. These operators offer flexibility in combining conditions and altering the program's course.
                </p>
                <p>
                Flow control statements, such as "if," "else," and "elif," empower developers to execute specific code blocks based on varying conditions. The "if" statement initiates the decision-making process, while the "else" statement handles scenarios where the initial condition is false. The "elif" statement allows for multiple conditions to be evaluated in sequence.
                </p>
                <p>
                Loops are instrumental in executing code repetitively, and Python offers diverse loop types. The "while" loop continues execution as long as a specified condition remains true. However, caution is needed to avoid potential pitfalls like infinite loops. The "break" statement provides a safeguard by allowing an early exit from the loop when a particular condition is met.
                </p>
                <p>
                The "for" loop, coupled with the "range()" function, provides a more structured approach when the number of iterations is known. It involves the "for" keyword, a variable name, the "in" keyword, a call to "range()" specifying iterations, and an indented code block. The "break" and "continue" statements can also be applied to control the loop's flow.
                </p>
                <p>
                Importing modules enhances Python's functionality by incorporating related groups of functions. The standard import statement, such as "import math," is recommended for clarity, though the "from import" statement is an alternative.
                </p>
                <p>
                In short, mastering flow control and loops in Python is paramount for creating dynamic and responsive programs. It empowers developers to navigate the execution sequence effectively, ensuring code behaves as intended under diverse conditions.
                </p>
            </div>


        </div>
    );
};
export default Loops;