import React from "react";

const Variables = () => {
  return (
    <div>
      <h3 className="subHead">Variables in java</h3>
      <p>
        Data is not stored directly, but as numbers or names to help identify
        data at different stages of programming. These numeric names that store
        data in a computer program are called variables in Java. This blog will
        help you understand the concept of variables in Java and its different
        types.
      </p>
      <h3 className="subHead">What are variables?</h3>
      <p>
        Variables are internal memory components of Java. They can be understood
        as places of memory. A variable can be either a single memory location
        or a combination of multiple locations that form a unit. Variables are
        used to identify the location of data in a program. They do not define
        the data itself but rather tell the programmer where certain data
        resides in memory.
        <br />
        Simply put, Java variables are names used to refer to data stored in
        memory. A single Java variable can hold only one type of data. A
        variable must be declared before it can be used in programming. This
        means assigning data to a specific memory and using a name for that
        memory. We also need to specify a Java data type for the declaration.
        This is done using the "dataType variableName" syntax. Variables can
        also be thought of as boxes or containers that hold a value during the
        execution of a computer program and allow the programmer to quickly
        refer to the value later.
        <br />
        Types of variables in Java?
        <br />
        1) Local variable <br />
        These variables are declared in methods, constructors or blocks and are
        used only within that method or block. A local variable cannot be used
        outside a method. In Java, methods are described in square brackets. The
        area between the braces ({"{....}"}) is called a block or method. This
        sets the scope of local variables. Local variables are used only during
        program execution. You cannot use a local variable from outside. A local
        variable takes effect within a block or method, but is destroyed when
        the block exits. It is worth remembering that a local variable cannot
        have a default value. Also, we cannot use access variables to declare
        local variables.
        <br />
        2) Instance variable <br />
        Class and subroutines are also important components of Java. A class
        refers to a group of objects with similar characteristics. It helps
        define objects, data types, and methods. The class is further divided
        into subroutines or methods. As you understood above, local variables
        are part of subroutines or methods. However, some variables are not part
        of the subroutine but are part of the class directly. Therefore, they
        are called member variables or instance variables. They have default
        values. We can declare an instance variable in a class before or after
        using it. All types of instance variables, except private, are visible
        in all methods or constructors of the class.
        <br />
        Member variables can be either static or non-static. We need static,
        public or private modifiers to declare an instance variable. Here's how
        to understand the difference between local variables and instance
        variables. The first is inside a subroutine or method of a class, while
        the second is inside the class but outside the block or method. Local
        variables exist only in a specific subroutine and do not work after
        that. They can only be run while this subroutine is running. In
        contrast, instance variables can form part of multiple subroutines.
        Although the value of an instance variable resides in one subroutine, it
        can be used in the execution of another subroutine.
        <br />
        3) Static variable <br />
        Static is a Java reference keyword that is prefixed to variables,
        programs, and strings. It is used for memory management in Java.
        Whenever the word static is added, it indicates that the component
        belongs to the entire class, not just the object. The term static
        variable refers to properties shared by all objects. All objects of a
        class share one copy of a static variable. Therefore, they are also
        called global variables or class variables. Allocating memory for static
        variables is done once when the programmer loads the entire class into
        memory. Static variables can only be declared as members of a class, not
        as a method or subroutine. So, they are used only within the scope of
        the class in which they are defined, not outside the class. In addition
        to the above, another type of secondary Java variable is explained
        below.
        <br />
        4) Final variable <br />
        Static variables can be used as constants in Java by adding the final
        keyword to them. These are called finite variables. As the name
        suggests, the value of a final variable becomes final and cannot be
        changed. However, it is possible to change data within the object. We
        cannot override a final variable in any subclass. Also, when a variable
        becomes final, it cannot be inherited by any class or extended by a
        subclass. If the programmer tries to change the value of the final
        variable, a compilation error occurs. Therefore, a variable must be
        initialized before being made final. Initialization can be done when
        declaring a variable. Otherwise, it is called a final empty variable
      </p>
      <h3 className="subHead">What are declaring variables in java?</h3>
      <p>
        We cannot use a variable if it is not declared. In Java, the process of
        creating a variable is called declaring the variable. However, before
        creating a variable, it is important to enter the data type. When
        creating a variable, some memory units are set aside. This memory
        location is then identified by a variable name.
        <br />
        Therefore, it is important to specify the data type before declaring the
        name, so that there are enough bits of memory to store the value of the
        variable. The process of declaring a variable in Java begins with
        entering the data type. After that, leave a space and enter the name of
        the variable. We can declare variables at any point in a subroutine.
        Here are some rules for declaring variables in Java that you have to
        mind while declaring the Java: -<br />
        • You can start a variable name with an alphabet, a dollar or underscore
        symbol, or a currency symbol instead of any other special symbol.
        <br />
        • The name of the variable cannot exceed 64 characters.
        <br />
        • Cannot use void when defining a variable.
        <br />
        • We cannot use Java-reserved keywords in variable names.
        <br />
        • The variable name must be to the left of the assignment operators.
        <br />
      </p>
      <h3 className="subHead">What is the initialization of variables in Java?</h3>
      <p>
        After declaring a variable, it is also given an initial value, which can
        be changed later. This process of assigning an initial value to a
        variable is called variable initialization in Java. Initialization
        occurs before a variable is used in a method. We cannot use a variable
        if it is not assigned a value. A variable can be initialized immediately
        after it is declared. If variables are not initialized after assignment,
        the variable is assigned a value with the assignment statement. If you
        request to print a variable without initializing it, an error will
        occur. There are two types of variable initialization - explicit and
        implicit. Explicit initialization occurs when a variable is assigned a
        value at declaration time. However, when a variable is assigned a value
        later in processing, this is called implicit initialization; If you do
        not initialize the variable, the system automatically assigns a random
        value when the program is run. This gives an unexpected result.
      </p>
    </div>
  );
};

export default Variables;
