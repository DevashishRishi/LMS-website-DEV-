import React from "react";
import Figure1 from "../../assests/CourseImages/Python/FlowControl/Figure1.png"
import Figure2 from "../../assests/CourseImages/Python/FlowControl/Figure2.png"
import Figure3 from "../../assests/CourseImages/Python/FlowControl/Figure3.png"
import Figure4 from "../../assests/CourseImages/Python/FlowControl/Figure4.png"
import Figure5 from "../../assests/CourseImages/Python/FlowControl/Figure5.png"
import Figure6 from "../../assests/CourseImages/Python/FlowControl/Figure6.png"

const FlowControl = () => {
    return (
        <div>
            <br/>
            <div>
                <h3 className="subHead">Introduction</h3>
                <p>
                    After learning and understanding the basics of Python we are now ready to learn more advanced topics on Python, one such topic we must know for Python programming is called Flow Control. Flow control as the name suggests means we must know how the program will execute. The Flow control statement can decide which Python code will run first and under which condition it runs, which means it decides if the condition is met and then which part of the program must run.
                </p>
                <p>
                    In other words, we can say that Flow control in Python refers to the mechanism and structures that allow the programmer to dictate the sequence in which statements are executed within a program. It allows developers to make decisions, execute specific code blocks based on conditions, and control the overall flow of the program’s execution.
                </p>
                <div className="figure-container">
                    <img src={Figure1} alt="A Flowchart to tell you what to do if it's raining" />
                </div>
                <br/>
                <p>
                    As we can see in the above flow chart there is more than one way to go from start to end. This is the same for the codes we write in the computer program. In flow control charts the diamonds represent the branching points and the rectangles represent the other steps. The starting and ending steps are represented by a rounded rectangle.
                </p>
                <p>
                    Before we know more about flow control, we need to learn more about the representation of yes and no options and also need to know how these branching points in Python are written. Let’s explore Boolean values, comparison operators, and Boolean operators for better understanding.
                </p>
            </div>

            <div>
                <h3 className="subHead">Boolean Values</h3>
                <p>
                    Boolean is another data type of Python, as we already know Python has integer, floating-point, and string data types which have an unlimited number of possible values, but the Boolean data type has only two possible values and they are True or False. The Boolean values in Python do not have quotes around them like strings and also they always start with capital T and Capital F with the rest of the word in lowercase. Let’s look at the Boolean value with some code examples:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}ham = True
                                {"\n"}ham
                                {"\n"}spam = False
                                {"\n"}spam
                                <br/>
                                <br/>

                                {"\n"}True
                                {"\n"}False
                                
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Comparison Operators</h3>
                <p>
                    In programming many times we need to compare two or more values to each other. In such cases, we use a comparison operator Python programming language also has some comparison operators these comparison operators compare two values and evaluate them in a single Boolean value. In the below table, we can see all the Python comparison operators.
                </p>
                <table border="1">
                    <tr>
                    <th>Operator</th>
                    <th>Meaning</th>
                    </tr>
                    <tr>
                    <td>==</td>
                    <td>Equal to</td>
                    </tr>
                    <tr>
                    <td>!=</td>
                    <td>Not equal to</td>
                    </tr>
                    <tr>
                    <td>&lt;</td>
                    <td>Less than</td>
                    </tr>
                    <tr>
                    <td>&gt;</td>
                    <td>Greater than</td>
                    </tr>
                    <tr>
                    <td>&lt;=</td>
                    <td>Less than or equal to</td>
                    </tr>
                    <tr>
                    <td>&gt;=</td>
                    <td>Greater than or equal to</td>
                    </tr>
                </table>
                <br />
                <p>
                    The above operators evaluate the True and False values depending on the values we pass to them. Let's look at some code for better understanding starting with == to !=. 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}42 == 42
                                {"\n"}42 == 98
                                {"\n"}5 != 3
                                {"\n"}4 != 4
                                <br/>
                                <br/>

                                {"\n"}True
                                {"\n"}False
                                {"\n"}True
                                {"\n"}False
                                
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code we can see that, == (equal to) evaluates the values of both sides of it. If they are equal then it returns True and if not then it returns False. The next operator != (not equal) also evaluates values on both sides of it but it returns True when both sides are not equal, if they are equal then it returns False. The  == and != operators can work with values of any data type. For example, let's look at this in codes with different data types.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}'Hi' == 'Hi'
                                {"\n"}'hi' == 'Hi'
                                {"\n"}'dog' != 'cat'
                                {"\n"}True != False
                                {"\n"}42 == 42.0
                                {"\n"}43 == '43'
                                <br/>
                                <br/>

                                {"\n"}True
                                {"\n"}False
                                {"\n"}True
                                {"\n"}True
                                {"\n"}True
                                {"\n"}False
                                
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                     In the above code, we can see that we evaluate different types of data types in = = (equal to) and != (not equal) to the operator. We also need to take care that if we compare a string with numerical type values (i.e. floating-point numbers or integer) it will produce or give output as False, but if we compare float with integer and their values are the same then it will print True. 
                </p>
                <p>
                Let’s look at other different types of operators they are &lt;, &gt;, &lt;=, and &gt;= operators, they only work properly with integer and floating-point values. The first operator &lt; (less than) checks if the left side value is smaller than the right size value. The second operator &gt; (greater than) checks if the left side value is greater than the right size value. The third operator &lt;= (less than or equal to) checks if the left side value is less than or equal to the value of the right side value. And at last the fourth operator &gt;= (greater than or equal to) checks if the left side value is greater than or equal to the value of the right side value. Let’s look at them by example code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}99 &lt; 101
                                {"\n"}99 &gt; 101
                                {"\n"}42 &lt;= 43
                                {"\n"}42 &lt;= 42
                                {"\n"}45 &gt;= 30
                                {"\n"}45 &gt;= 45
                                <br/>
                                <br/>

                                {"\n"}True
                                {"\n"}False
                                {"\n"}True
                                {"\n"}True
                                {"\n"}True
                                {"\n"}True
                                
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see all conditions examples and see the expected result which we discuss in the above paragraph.
                </p>
                <p>
                    There is another operator which we use very often called assignment operator “=”. It is denoted by a single equal to a symbol. It assigns a value to a variable the value is on the right size of it and the variable is on the left size of it. Let’s look at it by an example code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}eggplant = 42
                                {"\n"}eggplant &lt;= 43
                                <br/>
                                <br/>

                                {"\n"}True
                                
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that we assign 42 values to a variable called ‘eggplant’ and then compare it using the less than equal to (&lt;=) operator with 43 values.
                </p>
                <p>
                    In the above operator, you must notice that the == operator (equal to) has two equal signs, and the = operator (assignment) has just one equal sign. Therefore, it is easy to get confused with these two operators, to differentiate them we need to just remember these points.
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            The == operator (equal to) asks whether two values are the same as each other.
                        </p>
                    </li>
                    <li>
                        <p>
                        The = operator (assignment) puts the value on the right into the variable on the left.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Boolean Operators</h3>
                <p>
                There are three Boolean operators used to compare the values they are “and”, “or” and “not”. Just like the comparison operator, they also evaluate these expressions down to a Boolean value. Let’s look at them one by one starting with the “and” operator.
                </p>
            </div>

            <div>
                <h3 className="subHead">Binary Boolean Operators</h3>
                <p>
                    The “and” and “or” operators always take two values therefore they come under the Binary Boolean Operator category. In the “and” operator the output value is True only when both the binary input values are True in other words we can say that the “and” operator evaluates an expression to True if both the Boolean values are True. If both the values are not True then it produces False as an output. Let’s look at the code using the “and” operator.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}True and True
                                {"\n"}False and True
                                {"\n"}False and False
                                <br/>
                                <br/>

                                {"\n"}True
                                {"\n"}False
                                {"\n"}False
                                
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>Now let’s look at the truth table of “and” operator</p>
                <table border="1">
                    <tr>
                    <th>Expression</th>
                    <th>Evaluates to…</th>
                    </tr>
                    <tr>
                    <td>True and True</td>
                    <td>True</td>
                    </tr>
                    <tr>
                    <td>True and False</td>
                    <td>False</td>
                    </tr>
                    <tr>
                    <td>False and True</td>
                    <td>False</td>
                    </tr>
                    <tr>
                    <td>False and False</td>
                    <td>False</td>
                    </tr>
                </table>
                <br />
                <p>
                    In the above truth table, we can see that only the first-row value is True and it is because both the values evaluated using the “and” operator are True rest of them are False. The truth table also shows every possible result of the Boolean operator.
                </p>
                <p>
                    The next operator which we are looking at now is called the “or” operator. It evaluates an expression to True if either one of the Boolean values is True if both of them are False then only it returns False. Let’s look at the code for better understanding.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}True or True
                                {"\n"}False or True
                                {"\n"}False or False
                                <br/>
                                <br/>

                                {"\n"}True
                                {"\n"}True
                                {"\n"}False
                                
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <table border="1">
                    <tr>
                    <th>Expression</th>
                    <th>Evaluates to…</th>
                    </tr>
                    <tr>
                    <td>True or True</td>
                    <td>True</td>
                    </tr>
                    <tr>
                    <td>True or False</td>
                    <td>True</td>
                    </tr>
                    <tr>
                    <td>False or True</td>
                    <td>True</td>
                    </tr>
                    <tr>
                    <td>False or False</td>
                    <td>False</td>
                    </tr>
                </table>
                <br />
            </div>

            <div>
                <h3 className="subHead">The not Operator</h3>
                <p>
                    It is a little bit different from the “and” and the “or” operators it operates on only one Boolean value (or expression). The “not” operator simply evaluates to the opposite of the Boolean value means that they reverse the value of Boolean. For example, if the Boolean value is True and we use the “not” operator with it then it will produce False as an output value and vice versa. For better understanding let’s look at a code example.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}not True
                                {"\n"}not not True
                                {"\n"}not not not False
                                <br/>
                                <br/>

                                {"\n"}False
                                {"\n"}False
                                {"\n"}False
                                
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that when we use the “not” operator with the Boolean value it reverses its value, that is not True output becomes False, and the “not not False” value becomes False again because in the first not it becomes True and then it interacts with not again which again convert its True value to False, same goes for third code.
                </p>
                <p>Let's look at it truth table:</p>
                <table border="1">
                    <tr>
                    <th>Expression</th>
                    <th>Evaluates to…</th>
                    </tr>
                    <tr>
                    <td>not True</td>
                    <td>False</td>
                    </tr>
                    <tr>
                    <td>not False</td>
                    <td>True</td>
                    </tr>
                </table>
                <br />
                <p>
                    In the above truth table, we can see the True value becomes False and the False expression with the “not” operator becomes True.
                </p>
            </div>

            <div>
                <h3 className="subHead">Mixing Boolean and Comparison Operators </h3>
                <p>
                Because the comparison operators evaluate Boolean values, we can use them in expressions with the Boolean operators. The “and”, “or” and “not” operators are called Boolean operators because they also always work with Boolean values True and False. For example let us compare two integers with comparison operator 4 &lt; 5, at first we can see that there is no Boolean operator involved but when we evaluate this expression it produces an output with a Boolean value. Let’s look at some code for better understanding.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}(4 &lt; 5) and (5 &lt; 6)
                                {"\n"}(4 &lt; 5) and (9 &lt; 6)
                                {"\n"}(1 == 2) or ( 2 == 2)
                                <br/>
                                <br/>

                                {"\n"}True
                                {"\n"}False
                                {"\n"}True
                                
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                     In the above code, we can see that inside the brackets we evaluate whether values are less than or not, or equal to or not. In the code, the comparison operator first evaluates the values inside the brackets and checks whether they satisfy the Boolean operator or not. If they satisfy the Boolean operator then it produces True as an output else False. Below is the diagram taken from the “Automated Boring Stuff with Python” book for a better understanding of the coding process.
                </p>
                <div className="figure-container">
                    <img src={Figure2} alt="" />
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Elements of Flow Control</h3>
                <p>
                    In programming, many events occur where we need to check some sort of statement so that the program moves further or to control the program's execution flow. We can also say that flow control statements often start with a part of programs called the conditions and all are followed by a block of code called the clause. 
                </p>
            </div>

            <div>
                <h3 className="subHead">Conditions</h3>
                <p>
                The Boolean expression till now we see can also be considered as the condition. Conditions are used for more specifically identifying the context of flow control statements, also Conditions always evaluate down to a Boolean value that is True or False. The flow condition is the main part that decides what the program will do if the condition is True and what to do if the condition is False also every Flow control statement uses the condition for evaluation. 
                </p>
            </div>

            <div>
                <h3 className="subHead">Block of Code</h3>
                <p>
                    In programming language, we can group the code in blocks. In Python, there are also blocks of code and we can differentiate different blocks of code from their indentation of the line. There are three rules for blocks.
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                        Blocks begin when the indentation increases.
                        </p>
                    </li>
                    <li>
                        <p>
                        Blocks can contain other blocks.
                        </p>
                    </li>
                    <li>
                        <p>
                            Blocks end when the indentation decreases to zero or a containing block’s indentation.
                        </p>
                    </li>
                </ol>
                <p>
                    By looking at the indentation we can understand where a block of code started, but for better understanding let’s look at a basic code that shows the block of codes.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name = "Mary"
                                {"\n"}password = "mary123"
                                {"\n"}if name == "Mary":
                                {"\n"}      print("Hello Mary")      
                                {"\n"}if password == "Mary123":
                                {"\n"}      print("access granted.")
                                {"\n"}else:
                                {"\n"}      print('wrong password.')
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    The first block starts just after the first “if” statement as we can see after the “if” statement the line is indented. The same goes for the second “if” statement and at last after the “else” statement. All the blocks of code in the above code have only one line which has have print() function.
                </p>
            </div>

            <div>
                <h3 className="subHead">Flow Control Statements</h3>
                <p>
                    After studying the basics of conditions and knowing a little bit about flow control we are not ready to know more about flow control. The flow control statements are shown in diamonds in the above diagram in the introduction.
                </p>
            </div>

            <div>
                <h3 className="subHead">If Statements</h3>
                <p>
                    The most common type of flow control statement is the “if” statement. In the if statement flow control if the statement is True then only it will execute if not then it will pass the condition and move to the next area or part of the program which is not inside the “if” flow control or statement part.
                </p>
                <p>
                     In plain English also an “if” statement could be read as “If the condition is true then execute the next line if not then forget it. The same logic follows in programming. In Python the “if” statement has the following things:
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            The “if” keyword
                        </p>
                    </li>
                    <li>
                        <p>
                            A condition (it is an expression that evaluates to True or False)
                        </p>
                    </li>
                    <li>
                        <p>A colon</p>
                    </li>
                    <li>
                        <p>
                        Starting on the next line, an indented block of code (it is called the if clause)
                        </p>
                    </li>
                </ol>
                <p>For a better understanding of the “if” condition let’s look at the code:</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name = "Alice"
                                {"\n"}if name == "Alice":
                                {"\n"}      print("Hi, Alice")      
                                <br/>

                                {"\n"}Hi, Alice
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that the name is True therefore the if condition is executed, and the “Hi, Alice.” line is printed. Now let’s look at the flowchart of the if statement to understand how it works.
                </p>
                <div className="figure-container">
                    <img src={Figure3} alt="" />
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Else Statements</h3>
                <p>
                If we need to check whether a condition is true or not, we use an “if” statement but when we want to also execute a “false” condition then we add “else” with an “if” condition. This “else” statement executes the false statement or the statement which is not True. In plain English, it can be described as “if one condition is true, then its statement. Or else execute the next code which is not under the if condition. An else statement doesn’t have a condition, and in code, the else statement has the following rules we can say:
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            The “else” keyword
                        </p>
                    </li>
                    <li>
                        <p>A colon</p>
                    </li>
                    <li>
                        <p>
                        Starting on the next line, an indented block of code (it is called the else clause)
                        </p>
                    </li>
                </ol>
                <p>
                For better understanding let’s look at the code that has both if and else because else is always followed by an “if” condition/statement.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name = "Bob"
                                {"\n"}if name == "Alice":
                                {"\n"}      print("Hi, Alice")    
                                {"\n"} else:
                                {"\n"}      print("Hi, Bob")
                                <br/>

                                {"\n"}Hi, Bob
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that the name is initialized with “Bob” and the if condition checks whether the name is “Alice” or not and we can see that the name is “Bob” therefore the “if” condition will not execute and the program ignore it and move to else statement where it runs because else always run the False statement that is when it is not True or executed. Let’s look at the flowchart of if-else statement for a much better understanding.
                </p>
                <div className="figure-container">
                    <img src={Figure4} alt="" />
                </div>
                <br/>
                <p>
                In the above flowchart diagram, we can see the working principle of the “if-else statement”. That is when if the condition is False then the else block of code will execute.  
                </p>
            </div>

            <div>
                <h3 className="subHead">Elif statements</h3>
                <p>
                    The limitation of if or else clauses is that they will execute only one condition but in real-life programming, we face cases where we want one of many possible clauses to execute. In situations like this, the “elif” statement (it is an “else if” statement) is used. This statement always follows “if” or another “elif” statement. This statement provides another condition that checks only if any of the previous conditions were false. An “elif” statement consists of the following rules:
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            The “elif” keyword
                        </p>
                    </li>
                    <li>
                        <p>
                        A condition (that is, an expression that evaluates to True or False) 
                        </p>
                    </li>
                    <li>
                        <p>A colon</p>
                    </li>
                    <li>
                        <p>
                        Starting on the next line, an indented block of code (it is called the elif clause)
                        </p>
                    </li>
                </ol>
                <p>
                Let’s look at the different codes of “elif” for better understanding. In the first code, we have only one if statement/condition that is followed by an “elif” condition. 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name = "Alice"
                                {"\n"}age = 26
                                {"\n"}if name == "Alice":
                                {"\n"}      print("Hi, Alice")    
                                {"\n"} elif age &lt; 12 :
                                {"\n"}      print("You are not Alice, Kid.")
                                <br/>
                                <br/>

                                {"\n"}Hi, Alice
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that if the age is &lt; 12 is False then only the if condition will execute but when the “if” condition is False and “elif” condition is True then the “elif” condition or statement will run ignoring the “if” condition. It is shown in the below code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name = "Bob"
                                {"\n"}age = 11
                                {"\n"}if name == "Alice":
                                {"\n"}      print("Hi, Alice")    
                                {"\n"} elif age &lt; 12 :
                                {"\n"}      print("You are not Alice, Kid.")
                                <br/>
                                <br/>

                                {"\n"}You are not Alice, kid.
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    Let’s look at the above codes flowchart for a better understanding of their working.
                </p>
                <div className="figure-container">
                    <img src={Figure5} alt="" />
                </div>
                <br/>
                <p>
                As we mentioned above even if the “if” condition is False then the “elif” condition will run and execute the age section of the code, but if both conditions are False then it directly moves to the end of the program and ends the program without executing any condition. In this there is no guarantee that at least one of the clauses is “True” It might happen that any of them are not True and the whole program conditions will skip. When there is a chain of elif statements, only one or none of the clauses will be executed. If one of the statement’s conditions is matched or found True then the rest of the “elif” clauses are automatically skipped. Let’s look at this case using some Python codes.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name = "Alice"
                                {"\n"}age = 11
                                {"\n"}if name == "Alice":
                                {"\n"}      print("Hi, Alice")    
                                {"\n"} elif age &lt; 12 :
                                {"\n"}      print("You are not Alice, Kid.")
                                {"\n"} elif age &gt; 2000 :
                                {"\n"}      print("Unlike you, Alice is not an undead, immortal vampire.")
                                {"\n"} elif age &gt; 100 :
                                {"\n"}      print("You are not Alice, grannie.")
                                <br/>
                                <br/>

                                {"\n"}Hi, Alice
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code when the condition matches or is True it skips all the rest of the code therefore when it matches the name it skips all the rest of the “elif” condition. Also, there is a bug in the above code that is it checks age 2000 first which is greater than 100 therefore if someone's age is above 100 and less than 2000 his/her code condition will now execute therefore we need to correct the above code in order manner.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name = "Bob"
                                {"\n"}age = 3000
                                {"\n"}if name == "Alice":
                                {"\n"}      print("Hi, Alice")    
                                {"\n"} elif age &lt; 12 :
                                {"\n"}      print("You are not Alice, Kid.")
                                {"\n"} elif age &gt; 2000 :
                                {"\n"}      print("Unlike you, Alice is not an undead, immortal vampire.")
                                {"\n"} elif age &gt; 100 :
                                {"\n"}      print("You are not Alice, grannie.")
                                <br/>
                                <br/>

                                {"\n"}You are not Alice, grannie.
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code when the name condition is true it skipped all “elif” conditions so we can’t able to check the age condition or “elif” conditions now when we change the name variable we are now able to check the age condition as we see that if we provide age = 3000 then it will print “you are not Alice, grannie’’ because before it checks the age &gt; 2000 it checks the age &gt; 100 which is True therefore, it skipped the age &gt; 2000 condition and print “You are not Alice, the grannie”. 
                </p>
                <p>
                If we want to print at least one output we can add one “else” statement at the end of the program after the last “elif” condition. It provides a guarantee that at least one of the clauses will execute. If every if and “elif” statement is False, then the else clauses are executed. For better understanding let’s look at the Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name = "Bob"
                                {"\n"}age = 3000
                                {"\n"}if name == "Alice":
                                {"\n"}      print("Hi, Alice")    
                                {"\n"} elif age &lt; 12 :
                                {"\n"}      print("You are not Alice, Kid.")
                                {"\n"} else:
                                {"\n"}      print("You are neither Alice nor a little kid.")
                                <br/>
                                <br/>

                                {"\n"}You are neither Alice nor a little kid. 
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that both the “if” and “elif” conditions are False therefore else statement will run and we can see that in the output also. Let’s look at the flowchart of the “if-elif-else” flow control.
                </p>
                
                <div className="figure-container">
                    <img src={Figure6} alt="" />
                </div>
                <br/>
                <p>
                In the above diagram, we can see that if all the conditions are False then the last condition which acts like the else statement will execute.
                </p>
                
            </div>

        </div>
    );
};
export default FlowControl;