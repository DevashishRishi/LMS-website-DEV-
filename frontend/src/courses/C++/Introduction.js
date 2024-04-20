import React from "react";
import "./CPP.css";

const Introduction = () => {
  return (
    <div>
      {/* <h1>C++</h1> */}
      <br />
      <h3 className="subHead">Introduction</h3>
      <br />
      <h4 className="subHead">What is C++</h4>
      <br />
      <p>
        C++ is a general-purpose object-oriented programming language. It was
        created by Bjarne Stroustrup at Bell Labs around 1980. C++ is very
        similar to C (invented by Dennis Ritchie in the early 1970s). C++ is so
        compatible with C that it will probably compile more than 99% of C
        programs without changing a line of source code. Although C++ is an
        OOP-based language, it is much better structured and safer than C.
        <br />
        Some computer languages are written for a specific purpose. Because Java
        was originally designed to control toasters and other electronics. C was
        developed for operating system programming. Pascal's idea was to teach
        proper programming techniques. But C++ is a general-purpose language. It
        very well deserves the widely recognized nickname "Swiss Army Knife of
        Languages".
        <br />
        <br />
        <h4 style={{ color: "#333" }}>Upgrades:</h4>
        <br />
        This new programming language was called C with Classes but was later
        renamed C++ (++ refers to the C concatenation operator).
        <br />
        A few more upgrades or versions of C++ is being exist:
        <br />- C++98, C++03, C++11(C++ox), C++14(C++1y), C++17(C++1z)
      </p>
      <p>Advantages and Disadvantages of C++</p>
      <p>
        Advantage: -<br /> • Portability <br />• Multiparadigm <br />• Memory
        management <br /> • Compatibility with c <br />• Object-oriented
        <br /> • Low-level manipulation <br />• Large community support <br /> •
        Scalability
        <br /> • STL
        <br />
        Disadvantage :-
        <br />• Use of pointer
        <br />• Security issue
        <br />• Absence of built-in threads
        <br />• Absence of garbage collector
      </p>
      <h3 className="subHead">Introduction to object-oriented approach </h3>
      <p>
        The main goal of C++ programming was to add object orientation to the C
        programming language, which in itself is one of the most powerful
        programming languages. The essence of pure object-oriented programming
        is to use code to create an object with certain properties and methods.
        When designing C++ modules, we try to see the whole world in the form of
        objects. For example, a car is an object that has certain properties,
        such as color, number of doors, etc. It also has some methods like
        acceleration, braking, and so on.
      </p>
      <p>
        There are some basic concepts underlying object-oriented programming.
        <br />
        <b> Object :-</b>
        <br />
        This is the basic unit of object-oriented programming. This means that
        both the data and the functions that operate on the data are aggregated
        into a unit called an object.
        <br />
        <b>Class :-</b>
        <br />
        When you define a class, you define an outline for the object. It
        doesn't define any data but defines what the class name means, ie. what
        the object of the class consists of and what operations can be performed
        on such an object.
        <br />
        <b> Abstraction :-</b>
        <br />
        Data abstraction means transmitting only important information to the
        outside world and hiding their background information, ie. presenting
        the necessary information in the program without giving details. For
        example, a database system hides certain information about data storage,
        creation, and maintenance. Similarly, C++ classes expose various methods
        to the outside world without providing internal details about those
        methods and data.
        <br />
        <b> Encapsulation :-</b>
        <br />
        Encapsulation puts data and functions that process it in the same place.
        When working with procedural languages, it's not always clear which
        functions work with which variables, but object-oriented programming
        provides a framework for putting data and related functions into a
        single object.
        <br />
        <b> Inheritance :-</b>
        <br />
        One of the most useful aspects of object-oriented programming is code
        reusability. As the name suggests, inheritance is the process by which a
        new class is formed from an existing class that is derived from an
        existing class called a base class, and a new class is formed called a
        derived class. This is a very important concept in object-oriented
        programming, as this feature helps reduce code size.
        <br />
        <b> Polymorphism :-</b>
        <br />
        The ability to use an operator or function in different ways, that is to
        give operators or functions different meanings or functions, is called
        polymorphism. Poly refers to many. This single function or operator that
        behaves differently when used is called polymorphism
        <br />
        <b> Overloading :-</b>
        <br />
        The concept of overloading is also a branch of polymorphism. When an
        outgoing operator or function is made to work with a new data type, it
        is said to be overloaded.
      </p>
    </div>
  );
};

export default Introduction;
