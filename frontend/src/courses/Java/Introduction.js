import React from "react";
import "./Java.css";

const Introduction = () => {
  return (
    <div>
      <h3 className="subHead">Introduction</h3>
      <h3 className="subHead">What is Java?</h3>
      <br />
      <p>
        Java is a widely used object-oriented programming language and software
        that runs on billions of devices, including laptops, mobile devices,
        game consoles, medical devices and more. Java's rules and syntax are
        based on C and C++.
        <br />
        One of the great advantages of Java software development is its
        portability. Once you have written the code for a Java program on a
        laptop, it is very easy to transfer the code to a mobile phone. When the
        language was invented in 1991 by James Gosling of Sun Microsystems
        (later acquired by Oracle), the main goal was to "write once, run
        anywhere”.
        <br />
        It's also important to understand that Java is very different from
        JavaScript. JavaScript does not need to be compiled, while Java code
        must be compiled. Also, JavaScript only works in web browsers, while
        Java can be used anywhere.
        <br />
        New and improved software tools are entering the market at a remarkable
        rate, replacing legacy products that were previously considered
        essential. In light of this constant turnover, Java's longevity is
        impressive; more than two decades after its creation, Java remains the
        most popular language for developing applications, with developers
        continuing to choose it over languages such as Python, Ruby, PHP, Swift,
        C++, and more. Therefore, Java remains an important requirement to
        compete in the job market.
      </p>
    </div>
  );
};

export default Introduction;
