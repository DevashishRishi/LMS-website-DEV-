import React from "react";

const ConditionalStructure = () => {
  return (
    <div>
      <h3 className="subHead">Conditional structure </h3>
      <p>
        If you are a programmer, then you already know how to use (if...else)
        statements. If not, it's time to learn! Understanding (if...else)
        statements is essential, especially for beginners. After reading this
        article, you will have a fundamental understanding of the use of
        (if...else) statements in C programming.
        <br />
        <b>Conditional statement in c </b>
        <br />
        The primary types of control statements in C are:
        <br />
        • Decision-making control statements
        <br />
        1. Simple if statement
        <br />
        2. If-else statements
        <br />
        3. Nested if-else statements
        <br />
        4. else-if ladder
        <br />
        • Conditional statements
        <br />
        • Goto statements in C<br />
        • Loop control statements in C<br />
        1. While Loop
        <br />
        2. Do-while Loop
        <br />
        3. For Loop
        <br />
      </p>
      <h5 className="subHead">1) Simple-if statement </h5>
      <p>
        Simple if statements are carried out to perform some operation when the
        condition is only true. If the condition of the if statement is true
        then the statements under the if block are executed else the control is
        transferred to the statements outside the if block. Syntax of the if
        statement is as given below: If (condition)
        {"{"}
        Statement;
        {"}"}
        <br />
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                #include(stdio.h) Void main()
                {"{"}
                <br />
                &nbsp;&nbsp;Int a,b;
                <br />
                &nbsp;&nbsp;Printf(“ enter numbers for a and b”);
                <br />
                &nbsp;&nbsp;Scanf(“%d%d”, &amp;a,&amp;b);
                <br />
                &nbsp;&nbsp;If(a&lt;b)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Printf(“%d is greater than %d”, a,b);
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>enter the numbers for a and b 10 5 10 is greater than 5</pre>
          </div>
        </div>
      </p>
      <h5 className="subHead">2) If-else statement</h5>
      <p>
        If-else statements are used when you need to execute statements based on
        whether a certain condition is true or not. The if block will be run if
        the condition is true; else, the else block will be executed. The
        if-else statement has the following syntax:
        <br /> If(condition)
        <br /> Statement 1;
        <br />
        Else <br />
        Statement 2;
        <br />
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                #include(stdio.h) Void main()
                {"{"}
                <br />
                &nbsp;&nbsp;Int a,b;
                <br />
                &nbsp;&nbsp;Printf(“ enter the numbers for a and b“);
                <br />
                &nbsp;&nbsp;Scanf(“%d%d”, &amp;a,&amp;b);
                <br />
                &nbsp;&nbsp;If(a{">"}b)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Printf(“%d is greater than %d”, a,b);
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;Else
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Printf(“%d is less than %d”,a,b);
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>Enter the number for a and b 2 3 2 is less than 3</pre>
          </div>
        </div>
      </p>
      <h5 className="subHead">3) Nested if-else statements</h5>
      <p>
        There is another if or else inside the nested if-else lines. As a
        result, if the condition of the "if" block is true (i.e., an outer if),
        then the outer if's if block—which contains an inner if—is executed. If
        the condition of the if block is true, then the statements within the if
        block are run; if not, the statements within the inner if's "else" block
        are executed. The outer if's "else" block, which consists of another if,
        is executed if the outer "if" condition is false. The statement under
        the outer else's inner if is executed if the condition is true;
        otherwise, the outer else's else block is executed. The nested if-else
        statement has the following syntax: If (condition)
        {"{"}
        {"//"} if block of outer if’s If (condition2)
        {"{"}
        statement 1;
        {"}"}
        Else
        {"{"}
        Statement 2;
        {"}"}
        {"}"}
        {"//"} else block of outer if’s Else
        {"{"}
        If(condition3)
        {"{"}
        Statement 3; {"//"}inner if
        {"}"}
        Else
        {"{"}
        Statement 4; {"//"}else block of inner if
        {"}"}
        {"}"}
        <br />
        Let us understand this an program: -
        <br />
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                #include(stdio.h) Void main ()
                {"{"}
                <br />
                &nbsp;&nbsp;Int a,b;
                <br />
                &nbsp;&nbsp;Printf(“enter the numbers for a and b “);
                <br />
                &nbsp;&nbsp;Scanf(“%d%d”, &amp;a,&amp;b);
                <br />
                &nbsp;&nbsp;If(a!=b)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Printf(“%d is not equal to %d”,a,b);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;If(a{">"}b)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Printf(“%d is greater than
                %d”,a,b);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Else
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Printf(“%d is less than
                %d”,a,b);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                {"}"}
                <br />
                &nbsp;&nbsp;Else
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Printf(“%d is equal to %d”,a,b);
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              Enter the numbers for a and b 2 4 2 is not equal to 4 2 is less
              than 4
            </pre>
          </div>
        </div>
        <br />
      </p>
      <h5 className="subHead">4) Else if ladder statement</h5>
      <p>
        The statements beneath each individual "if" in the else-if ladder are
        executed if one of the two conditions is true; otherwise, the statements
        under the else block are executed. The else-if ladder has numerous
        else-if statements. Assuming the "if" condition is true, the statements
        under it will be carried out; if not, the other "if" condition will be
        examined, and if it is, the statements under that specific "if" will be
        carried out. As long as the else-if statements are included in the
        program, this procedure will continue.
        <br />
        The else-if ladder statement has the following syntax:
        <br />
        if (condition 1)
        {"{"}
        Statement 1;
        {"}"}
        else if (condition2)
        {"{"}
        Statement 2;
        {"}"}
        else lf (condition3)
        {"{"}
        Statement 3;
        {"}"}
        ………………. else if (condition n-l)
        {"{"}
        statement n-l;
        {"}"}
        Else
        {"{"}
        statement n;
        {"}"}
        <br />
        Let us better understand this by an example: -
        <br />
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                #include &lt;stdio.h&gt; void main()
                {"{"}
                <br />
                &nbsp;&nbsp;int a;
                <br />
                &nbsp;&nbsp;printf("enter the number for a");
                <br />
                &nbsp;&nbsp;scanf("%d",&amp;a);
                <br />
                &nbsp;&nbsp;if(a!=10)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;printf("%d is not equal to 10",a);
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;else if(a{">"}15)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;printf("%d is greater than 15",a);
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;else if(a{"<"}20)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;printf("%d is less than 20",a);
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;else
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;printf("%d is equal to 10",a);
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              Enter the number for a<br />
              10
              <br /> 10 is less than 20
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Conditional Control Statement</h3>
      <p>
        Multi-way branching will be permitted by the switch statement based on
        the value of the switch expression. Control is sent to that specific
        case label and the statements under it are executed based on the
        expression. The default statement is executed if the switch expression
        does not match any of the circumstances. The switch statement has the
        following . Switch (expression)
        {"{"}
        Case label 1: statement 1;
        <br /> break; <br />
        Case label 2: statement 2;
        <br /> break;
        <br /> Case label 3: statement 3;
        <br /> break;
        <br /> Case label n: statement;
        <br /> break;
        <br /> default: default statement;
        {"}"}
        Other statements;
        <br />
        Let us understand this by an program in C: -<br />
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                #include &lt;stdio.h&gt; void main()
                {"{"}
                <br />
                &nbsp;&nbsp;int n = 3;
                <br />
                &nbsp;&nbsp;printf("n=%d \n", n);
                <br />
                &nbsp;&nbsp;switch(n)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;case 1:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("the value of n is
                1");
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;case 2:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("the value of n is
                2");
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;case 3:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("the value of n is
                3");
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;default:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("value is invalid");
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>N=3 The value of n is 3</pre>
          </div>
        </div>
      </p>
      <h5 className="subHead">6) Got to statement in c</h5>
      <p>
        The goto statement, which is used to leap to a specific section of the
        program, is also known as a jump control statement. Goto statements are
        used to transfer the flow of control within programs. A name used to
        guide the branch to a specific location within the program is called a
        label in a goto statement.
        <br />
        Go to statement syntax is as follows: -<br />
        Syntax: got to lable name;
        <br />
        Example: goto odd;
        <br />
        <b>6.1) while loop</b>
        <br />
        Because the lines that make up the while loop's body are performed after
        the condition is met, a while loop is also referred to as an entry loop.
        The statements inside the while loop won't be performed even once if the
        while loop condition is false the first time. The syntax of the while
        loop is given below: - While(condition)
        {"{"}
        Statement 1 ; Statement 2; Statement n;
        {"}"}
        <br />
        Let us better understand this by a program:-
        <br />
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                #include &lt;stdio.h&gt; void main()
                {"{"}
                <br />
                &nbsp;&nbsp;int a;
                <br />
                &nbsp;&nbsp;printf("enter the number for a\n");
                <br />
                &nbsp;&nbsp;scanf("%d", &a);
                <br />
                &nbsp;&nbsp;while (a {"<="} 5)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;printf("%d \n", a);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;++a;
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>Enter the number for a 2 2 3 4 5</pre>
          </div>
        </div>
        <br />
        <b>6.2) do-while loop</b>
        <br />
        Because the statements in a do-while loop are run first and the
        condition is checked second, the do-while loop is also referred to as an
        exit loop. The while loop's body will be run again until the condition
        is false if the loop's condition is true. The control will leave the
        do-while loop and execute statements that come right after it if the
        condition is false. Syntax of do shile is as follows: - Do
        {"{"}
        Statement 1; Statement 2; ………………… …………………
        {"}"}
        While condition; Statement n; Let us understand this by a program in c.
        <br />
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                #include &lt;stdio.h&gt; int main()
                {"{"}
                <br />
                &nbsp;&nbsp;int a = 0;
                <br />
                &nbsp;&nbsp;do
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;printf("%d \n", a);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;a++;
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                &nbsp;&nbsp;while (a {"<="} 5);
                <br />
                &nbsp;&nbsp;return 0;
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>0 1 2 3 4 5</pre>
          </div>
        </div>
        <br />
        <b>6.3) for loop</b>
        <br />
        Pre-test loop is another name for the for loop. Expression 1 is an
        initialization, Expression 2 is a conditional expression, and Expression
        3 is an update, according to the grammar. Initializing the variables for
        the statement can be done. The syntax is given below: - For(expression
        1;expression 2;expression 3)
        {"{"}
        Statement 1; Statement 2; …………… ……………
        {"}"}
        Statement n; Expression1 is used to initialize the variable in the for
        loop. Expression2 is then evaluated to see if the condition is true. If
        it is, the for-loop’s body is run, followed by the lines under
        expression 3. As long as the condition for the for loop is true, this
        operation is repeated; if it is false, control goes back to the
        statements that come after the for loop and executes those statements.
        <br />
        Let us understand this by a program in c.
        <br />
        <div
          className="code-background"
          style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "#ffffff", padding: "20px" }}
          >
            <pre>
              <code>
                #include &lt;stdio.h&gt; void main()
                {"{"}
                <br />
                &nbsp;&nbsp;int n = 4, i;
                <br />
                &nbsp;&nbsp;for(i = 0; i &lt; n; i++)
                {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;printf("%d \n", i);
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>0 1 2 3</pre>
          </div>
        </div>
        <br />
      </p>
    </div>
  );
};

export default ConditionalStructure;
