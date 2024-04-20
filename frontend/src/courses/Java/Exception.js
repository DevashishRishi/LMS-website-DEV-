import React from "react";

const Exception = () => {
  return (
    <div>
      <h3 className="subHead">Java exception handling</h3>
      <p>
        Java exception handling is one of the most powerful mechanisms for
        handling runtime errors so that the normal flow of an application is
        preserved. In this tutorial, we will learn about Java exceptions, their
        types, and the differences between them. and unchecked exceptions. In
        Java, an exception is an unwanted or unexpected event that occurs during
        the execution of a program, i.e. at runtime that interrupts the normal
        flow of program instructions. The program can catch and handle
        exceptions. If a method throws an exception, it creates an object. This
        object is called an exception object. It contains information about the
        exception, such as the name and description of the exception and the
        state of the program when the exception occurred. Main reasons for the
        exception occurringIncorrect user inputDevice errorNetwork connection
        failurenPhysical limitations (external disk storage) Code errorsUnable
        to open an accessible file. In Java, an exception is an unwanted or
        unexpected event that occurs during the execution of a program, i.e. at
        runtime that interrupts the normal flow of program instructions. The
        program can catch and handle exceptions. If a method throws an
        exception, it creates an object. This object is called an exception
        object. It contains information about the exception, such as the name
        and description of the exception and the state of the program when the
        exception occurred. Main reasons for the exception occurringIncorrect
        user inputDevice errorNetwork connection failurenPhysical limitations
        (external disk storage)Code errorsUnable to open an accessible file.
        <br />
        Error: An error indicates a serious problem that a reasonable
        application should not attempt to catch.
        <br />
        Exception: An exception indicates conditions that a reasonable
        application might attempt to catch.
        <br />
        <b>Exception hierarchy</b>
        All exception and error types are subclasses of the Throwable class,
        which is the base class in the hierarchy. One branch is led by Eception.
        This class is used for exception conditions that user programs should
        catch. NullPointerException is an example of such an exception. The
        second branch, Error, is used by the Java Runtime System (JVM) to
        indicate errors related to the runtime environment (JRE) itself. An
        example of such an error is StackOverflowError.
        <br />
        Types of exception <br />
        Exceptions can be classified in two ways: Built-in Exceptions
        <br />
        Challenged Exception
        <br />
        Unhandled Exception
        <br />
        User Defined Exceptions
        <br />
        Let us discuss the above exception which is as follows:
        <br />
        1. Built-in Exceptions
        <br />
        Built-in exceptions are exceptions available in Java libraries. These
        exceptions are useful for explaining certain error situations.
        <br />
        Checked exceptions: Checked exceptions are called compile-time
        exceptions because the compiler checks for them during compilation.
        <br />
        Unchecked exceptions: Unchecked exceptions are the opposite of checked
        exceptions. The compiler does not check for these exceptions during the
        compilation phase. Simply put, if a program throws an unchecked
        exception, and even if we don't handle or report it, the program will
        not throw a compile error.
        <br />
        Note. For checked and unchecked exceptions, see Checked and unchecked
        exceptions.
        <br />
      </p>
      <h3 className="subHead">User-Defined Exceptions:</h3>
      <p>
        Sometimes Java's built-in exceptions cannot describe a specific
        situation. In such cases, users can also create exceptions called
        "user-defined exceptions".
        <br />
        The advantages of exception handling in Java are:Program completion.
        Easy identification of program code and error handling codePropagation
        of errorsImportant error messageIdentification of error typesPrint
        methods Exception information.
        <br />
        1. printStackTrace()
        <br />
        This method prints exception information in the form Exception Name:
        Exception Description, Stack Trace.
        <br />
        Let us try this with a program:
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
                {"//"}program to print the exception information using
                printStackTrace() method <br />
                import java.io.*; <br />
                class GFG {"{"} <br />
                public static void main (String[] args) {"{"} <br />
                int a=5; <br />
                int b=0; <br />
                try{"{"} <br />
                System.out.println(a/b); <br />
                {"}"} <br />
                catch(ArithmeticException e){"{"} <br />
                e.printStackTrace(); <br />
                {"}"} <br />
                {"}"} <br />
                {"}"} <br />
                Output <br />
                java.lang.ArithmeticException: / by zero
              </code>
            </pre>
          </div>
        </div>
        <br />
        2. toString()
        <br />
        The ToString() method prints exception information in the form Exception
        Name: Exception Description.
        <br />
        Ex. {"//"}program to print the exception information using toString()
        method
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
                import java.io.*; <br />
                class GFG1 {"{"} <br />
                public static void main (String[] args) {"{"} <br />
                int a=5; <br />
                int b=0; <br />
                try{"{"} <br />
                System.out.println(a/b); <br />
                {"}"} <br />
                catch(ArithmeticException e){"{"} <br />
                System.out.println(e.toString()); <br />
                {"}"} <br />
                {"}"} <br />
                {"}"} <br />
                Output <br />
                java.lang.ArithmeticException: / by zero
              </code>
            </pre>
          </div>
        </div>
        <br />
        3. getMessage()
        <br />
        The getMessage() method only prints the exception description..
        <br />
        Ex. {"//"}program to print the exception information using getMessage()
        method
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
                import java.io.*; <br />
                class GFG1 {"{"} <br />
                public static void main (String[] args) {"{"} <br />
                int a=5; <br />
                int b=0; <br />
                try{"{"} <br />
                System.out.println(a/b); <br />
                {"}"} <br />
                catch(ArithmeticException e){"{"} <br />
                System.out.println(e.getMessage()); <br />
                {"}"} <br />
                {"}"} <br />
                {"}"} <br />
                Output <br />
                by zero
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">How does JVM handles Exception?</h3>
      <p>
        Default Exception Handling: When an exception has occurred within a
        method, the method creates an object called the exception object and
        passes it to the runtime system (JVM). The exception object contains the
        name and description of the exception and the current state of the
        program where the exception occurred. Creating an exception object and
        handling it in the runtime system is called throwing an exception. There
        may be a list of methods that were called to enable the method where the
        exception occurred. This ordered list of methods is called the Call
        Stack. Now the next action takes place. The runtime system searches the
        call stack for a method that contains a block of code that can handle
        the exception that occurred. The block of code is called an exception
        handler. The runtime system starts looking for the method where the
        exception occurred and moves through the call stack in the reverse order
        in which the methods were called. When it finds a suitable handler, it
        steps through the exception whom it met. A suitable handler means that
        the type of the thrown exception object matches the type of the
        exception object being handled. If the runtime system searches all
        methods on the call stack and does not find a suitable handler, the
        runtime system rethrows the exception. to the default exception handler
        that is part of the runtime system. This handler prints exception
        information in the following format and terminates the program
        abnormally. Exception in thread "xxx" Name of Exception : Description
        ... ...... .. {"//"} Call Stack
        <br />
        Let's look at an example that illustrates how the runtime system
        searches the call stack for appropriate exception handling code.
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
                class GFG {"{"} <br />
                <br />
                {"//"} Method 1 <br />
                {"//"} It throws the Exception(ArithmeticException). <br />
                {"//"} Appropriate Exception handler is not found <br />
                {"//"} within this method. <br />
                static int divideByZero(int a, int b) {"{"} <br />
                <br />
                {"//"} this statement will cause ArithmeticException <br />
                {"//"} (/by zero) <br />
                int i = a / b; <br />
                <br />
                return i; <br />
                {"}"} <br />
                <br />
                {"//"} The runTime System searches the appropriate <br />
                {"//"} Exception handler in method also but couldn't have <br />
                {"//"} found. So looking forward on the call stack <br />
                static int computeDivision(int a, int b) {"{"} <br />
                <br />
                int res = 0; <br />
                <br />
                {"//"} Try block to check for exceptions <br />
                try {"{"} <br />
                <br />
                res = divideByZero(a, b); <br />
                {"}"} <br />
                <br />
                {"//"} Catch block to handle NumberFormatException <br />
                {"//"} exception Doesn't matches with <br />
                {"//"} ArithmeticException <br />
                catch (NumberFormatException ex) {"{"} <br />
                {"//"} Display message when exception occurs <br />
                System.out.println( <br />
                "NumberFormatException is occurred"); <br />
                {"}"} <br />
                return res; <br />
                {"}"} <br />
                <br />
                {"//"} Method 2 <br />
                {"//"} Found appropriate Exception handler. <br />
                {"//"} i.e. matching catch block. <br />
                public static void main(String args[]) {"{"} <br />
                <br />
                int a = 1; <br />
                int b = 0; <br />
                <br />
                {"//"} Try block to check for exceptions <br />
                try {"{"} <br />
                int i = computeDivision(a, b); <br />
                {"}"} <br />
                <br />
                {"//"} Catch block to handle ArithmeticException <br />
                {"//"} exceptions <br />
                catch (ArithmeticException ex) {"{"} <br />
                <br />
                {"//"} getMessage() will print description <br />
                {"//"} of exception(here / by zero) <br />
                System.out.println(ex.getMessage()); <br />
                {"}"} <br />
                {"}"} <br />
                {"}"} <br />
                <br />
                Output <br />
                by zero
              </code>
            </pre>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Exception;
