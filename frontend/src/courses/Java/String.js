import React from "react";

const String = () => {
  return (
    <div>
      <h3 className="subHead">String</h3>
      <p>
        In this example, only one object is created. First, the JVM cannot find
        any string object with the value "Welcome" in the string constants
        collection, so it creates a new object. It then finds the collection
        with the string value "Welcome" and returns a reference to the same
        instance instead of creating a new object. In this article, we will
        learn about strings in Java.
        <br />
        What are strings in Java?
        <br />
        Strings are object types that can store character values, and in Java,
        each character is stored as 16-bit, that is, UTF, 16-bit encoding. In
        Java, a string works just like a string.
        <br />
        String s = ”India”;
        <br />
        The Java String class provides many methods to perform operations on
        strings, such as compare(), concat(), equals(), split(), length(),
        replace(), compareTo(), intern(), substring() , etc.The Java.lang.
        String class implements the Serializable, Comparable, and CharSequence
        interfaces.
        <br />
        Example of using a string.
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
                public class StringExample {"{"}
                <br />
                <br />
                {"    // Main Function"}
                <br />
                {"    public static void main(String args[]) {"}
                <br />
                {'        String str = new String("example");'}
                <br />
                {"        // creating Java string by new keyword"}
                <br />
                {"        // this statement create two object i.e"}
                <br />
                {"        // first the object is created in heap"}
                <br />
                {"        // memory area and second the object is"}
                <br />
                {"        // created in String constant pool."}
                <br />
                <br />
                {"        System.out.println(str);"}
                <br />
                {"    }"}
                <br />
                {"}"}
              </code>
            </pre>
          </div>
        </div>
        <br />
        Example
        <br />
        A string in Java is immutable, which means it cannot be changed. Every
        time we modify a string, a new instance is created. You can use the
        String Buffer and StringBuilder classes for mutable strings. We'll talk
        about immutable strings later. Let's start by understanding what a
        string is in Java and how to create a string object.
        <br />
        Ways of creating a string There are two ways of creating a string.
        <br /> 1) by string literal
        <br /> 2) by new keyword
      </p>
      <h3>By string literal</h3>
      <p>
        To make Java memory efficient (because no new object is created if it
        already exists in the string constant set).
        <br />
        Ex: string demostring = “India”;
      </p>
      <h3>By using keyword</h3>
      <p>
        for example: String s=new String("Welcome");
        <br />
        In this case, the JVM creates a new String object in regular
        (non-pooled) heap memory, and the literal "Welcome" is placed in the
        String constant. The variable s refers to an object in the heap
        (non-heap).
        <br />
        For example:
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
                public class StringExample
                {"{"}
                <br />
                {"    public static void main(String args[]) {"}
                <br />
                {
                  '        String s1="java";//creating string by Java string literal'
                }
                <br />
                {"        char ch[]={'s','t','r','i','n','g','s'};"}
                <br />
                {
                  "        String s2=new String(ch);//converting char array to string"
                }
                <br />
                {
                  '        String s3=new String("example");//creating Java string by new keyword'
                }
                <br />
                {"        System.out.println(s1);"}
                <br />
                {"        System.out.println(s2);"}
                <br />
                {"        System.out.println(s3);"}
                <br />
                {"    }"}
                <br />
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>
              <code>
                Java
                <br />
                Strings
                <br />
                Example
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Interfaces and classes in Strings </h3>
      <p>
        CharBuffer: This class implements the Char-Sequence interface. This
        class is used to enable the use of character buffers instead of
        Char-Sequences. An example of such usage is the regular expression
        package java.util.regex.
        <br />
        String: This is a string. In Java, string objects are immutable, which
        means they are permanent and cannot be changed after creation.
        <br />
        Char-Sequence interface The Char-Sequence interface is used to represent
        Java strings.
        <br />
        Classes that implement the Char-Sequence interface are listed below. and
        they provide many functions like substring, last occurrence, first
        occurrence, chaining, up, down, etc.
        <br />
        String
        <br />
        StringBuffer
        <br />
        StringBuilder
        <br />
        1) String
        <br />
        The string is an immutable class, which means a constant that cannot be
        changed after creation. If you want to modify, we have to create a new
        object, and even the functions it provides like toupper, tolower, etc.
        all return a new object that is not modified from the original object.
        It is automatically thread-safe.
        <br />
        Syntax: <br />
        String str= "LMS";
        <br />
        or
        <br />
        String str= new String("LMS")
        <br />
        2) String buffer <br />
        StringBuffer is an analog class for Strings that provides much of the
        functionality of Strings. String means fixed length immutable strings
        while StringBuffer is increment and writable strings means it is mutable
        in nature and it is thread safe class, we can use it when we have
        multithreaded environment and shared string buffer object ie. used
        multithreaded Because it is thread-safe, it has an overhead, so it is
        mainly used for multi-threaded programs.
        <br />
        Syntax
        <br />
        StringBuffer demoString = new StringBuffer("LMS");
        <br />
        3) String builder <br />
        StringBuilder in Java represents a mutable string. Since the String
        class in Java creates an immutable string, the StringBuilder class
        provides an alternative to the String class because it creates a mutable
        string and is not thread-safe and is only used in a thread, so there is
        no overload. above, so it is mainly used for single-threaded programs.
        <br />
        Syntax: <br />
        StringBuilder demoString = new StringBuilder();
        <br />
        demoString.append("LMS");
        <br />
      </p>
      <h3 className="subHead">Java string class methods</h3>
      <p>
        The java.lang.String class provides many useful methods for performing
        operations on an array of character values.
        <br />
        <table>
          <tr>
            <th>No.</th>
            <th>Method</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>1</td>
            <td>charAt(int index)</td>
            <td>It returns char value for the particular index</td>
          </tr>
          <tr>
            <td>2</td>
            <td>length()</td>
            <td>It returns string length</td>
          </tr>
          <tr>
            <td>3</td>
            <td>format(String format, Object... args)</td>
            <td>It returns a formatted string.</td>
          </tr>
          <tr>
            <td>4</td>
            <td>format(Locale l, String format, Object... args)</td>
            <td>It returns formatted string with given locale.</td>
          </tr>
          <tr>
            <td>5</td>
            <td>substring(int beginIndex)</td>
            <td>It returns substring for given begin index.</td>
          </tr>
          <tr>
            <td>6</td>
            <td>substring(int beginIndex, int endIndex)</td>
            <td>It returns substring for given begin index and end index.</td>
          </tr>
          <tr>
            <td>7</td>
            <td>contains(CharSequence s)</td>
            <td>
              It returns true or false after matching the sequence of char
              value.
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>join(CharSequence delimiter, CharSequence... elements)</td>
            <td>It returns a joined string.</td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              join(CharSequence delimiter, Iterable{"<"}? extends CharSequence
              {">"} elements)
            </td>
            <td>It returns a joined string.</td>
          </tr>
          <tr>
            <td>10</td>
            <td>equals(Object another)</td>
            <td>It checks the equality of string with the given object.</td>
          </tr>
          <tr>
            <td>11</td>
            <td>isEmpty()</td>
            <td>It checks if string is empty.</td>
          </tr>
          <tr>
            <td>12</td>
            <td>concat(String str)</td>
            <td>It concatenates the specified string.</td>
          </tr>
          <tr>
            <td>13</td>
            <td>replace(char old, char new)</td>
            <td>It replaces all occurrences of the specified char value.</td>
          </tr>
          <tr>
            <td>14</td>
            <td>replace(CharSequence old, CharSequence new)</td>
            <td>It replaces all occurrences of the specified CharSequence.</td>
          </tr>
          <tr>
            <td>15</td>
            <td>equalsIgnoreCase(String another)</td>
            <td>It compares another string. It doesn't check case.</td>
          </tr>
          <tr>
            <td>16</td>
            <td>split(String regex)</td>
            <td>It returns a split string matching regex.</td>
          </tr>
          <tr>
            <td>17</td>
            <td>split(String regex, int limit)</td>
            <td>It returns a split string matching regex and limit.</td>
          </tr>
          <tr>
            <td>18</td>
            <td>intern()</td>
            <td>It returns an interned string.</td>
          </tr>
          <tr>
            <td>19</td>
            <td>indexOf(int ch)</td>
            <td>It returns the specified char value index.</td>
          </tr>
          <tr>
            <td>20</td>
            <td>indexOf(int ch, int fromIndex)</td>
            <td>
              It returns the specified char value index starting with given
              index.
            </td>
          </tr>
          <tr>
            <td>21</td>
            <td>indexOf(String substring)</td>
            <td>It returns the specified substring index.</td>
          </tr>
          <tr>
            <td>22</td>
            <td>indexOf(String substring, int fromIndex)</td>
            <td>
              It returns the specified substring index starting with given
              index.
            </td>
          </tr>
          <tr>
            <td>23</td>
            <td>toLowerCase()</td>
            <td>It returns a string in lowercase.</td>
          </tr>
          <tr>
            <td>24</td>
            <td>toLowerCase(Locale l)</td>
            <td>It returns a string in lowercase using specified locale.</td>
          </tr>
          <tr>
            <td>25</td>
            <td>toUpperCase()</td>
            <td>It returns a string in uppercase.</td>
          </tr>
          <tr>
            <td>26</td>
            <td>toUpperCase(Locale l)</td>
            <td>It returns a string in uppercase using specified locale.</td>
          </tr>
          <tr>
            <td>27</td>
            <td>trim()</td>
            <td>It removes beginning and ending spaces of this string.</td>
          </tr>
          <tr>
            <td>28</td>
            <td>valueOf(int value)</td>
            <td>
              It converts given type into string. It is an overloaded method.
            </td>
          </tr>
        </table>
      </p>
      <h3 className="subHead">String tokenizer</h3>
      <p>
        The String-Tokenizer object stores the current position of the string
        internally. Some functions move the current position past the processed
        characters. The token is returned by taking a substring of the string
        used to create the String-Tokenizer object.StringJoiner is a class in
        java.util used to create string(s) separated by a delimiter and
        optionally starting with the supplied prefix and ending with the
        supplied suffix . While this can also be done by using the StringBuilder
        class to add a delimiter after each string, String-Joiner provides an
        easy way to do this without writing a lot of code.
        <br />
        Syntax: public StringJoiner(CharSequence delimiter)
        <br />
        Here, the JVM checks the string from the standard store. If the string
        does not exist, a new string instance is created and placed in the pool.
        If the string exists, it does not create a new object. Instead, it
        returns a reference to the same instance. The cache that stores these
        strings is known as the String Constant pool or String Pool. In previous
        Java versions up to JDK 6, the String collection was in PermGen
        (permanent generation) mode. But in JDK 7 it was moved to the main heap
        area.
      </p>
      <h3 className="subHead">Immutable string in Java</h3>
      <p>
        In Java, string objects are immutable. Immutable simply means unchanged
        or unchanged. Once a string object is created, its data and state cannot
        be changed, but a new string object is created. <br />
        Let us understand with a program:
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
                Let us understand with a program:
                <br />
                import java.io.*;
                <br />
                <br />
                class GFG {"{"}
                <br />
                {"    public static void main(String[] args) {"}
                <br />
                {'        String s = "Sachin";'}
                <br />
                <br />
                {"        // concat() method appends"}
                <br />
                {"        // the string at the end"}
                <br />
                {'        s.concat(" Tendulkar");'}
                <br />
                <br />
                {"        // This will print Sachin"}
                <br />
                {"        // because strings are"}
                <br />
                {"        // immutable objects"}
                <br />
                {"        System.out.println(s);"}
                <br />
                {"    }"}
                <br />
                {"}"}
                <br />
                Output
                <br />
                Sachin
              </code>
            </pre>
          </div>
        </div>
        <br />
        Here Sachin is not changed but a new item is created with "Sachin
        Tendulkar". Hence, the string is called immutable. As shown in the given
        image, two objects are created, but its reference variable still refers
        to "Sachin" and not "Sachin Tendulkar". But if we explicitly assign it
        to the reference variable, it refers to the object "Sachin Tendulkar".
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
                import java.io.*;
                <br />
                <br />
                class GFG {"{"}
                <br />
                {"    public static void main(String[] args) {"}
                <br />
                {'        String name = "Sachin";'}
                <br />
                {'        name = name.concat(" Tendulkar");'}
                <br />
                {"        System.out.println(name);"}
                <br />
                {"    }"}
                <br />
                {"}"}
                <br />
                Output
                <br />
                Sachin Tendulkar
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Memory allotment on string</h3>
      <p>
        When a string object is created as a literal, the object is created in a
        collection of string constants. This allows the JVM to optimize string
        literal initialization.
        <br />
        Syntax: string demostring = “LMS”
        <br />
        A string can also be declared using the new operator, ie. dynamically
        allocated. When a string is dynamically allocated, they are allocated a
        new memory location on the heap. This string is not added to the string
        constant set.
        <br />
        Syntax: string demostring = new string(“LMS”)
        <br />
        For example:
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
                import java.io.*;
                <br />
                import java.lang.*;
                <br />
                <br />
                class Test {"{"}
                <br />
                {"    public static void main(String[] args) {"}
                <br />
                {"        // Declare String without using new operator"}
                <br />
                {'        String name = "LMS";'}
                <br />
                <br />
                {"        // Prints the String."}
                <br />
                {'        System.out.println("String name = " + name);'}
                <br />
                <br />
                {"        // Declare String using new operator"}
                <br />
                {'        String newString = new String("LMS");'}
                <br />
                <br />
                {"        // Prints the String."}
                <br />
                {
                  '        System.out.println("String newString = " + newString);'
                }
                <br />
                {"    }"}
                <br />
                {"}"}
                <br />
                Output
                <br />
                String Stringname = LMS
                <br />
                String newString = LMS
              </code>
            </pre>
          </div>
        </div>
        <br />
        <b>
          Why did the String pool move from PermGen to the normal heap area?
        </b>
        <br />
        PermGen is limited in space, with a default size of only 64 MB. the
        problem was creating and storing too many string objects in PermGen
        space. Therefore, the String pool was moved to a larger stack area. The
        concept of a string literal is used to make Java memory more efficient.
        By using the "new" keyword, the JVM creates a new string object in the
        normal stack area, even if the same string object exists in the string
        pool.
        <br />
        Example: String demoString = new String("Bhubaneswar");
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
                class StringStorage {"{"}
                <br />
                {"    public static void main(String args[]) {"}
                <br />
                {"        // Declaring Strings"}
                <br />
                {'        String s1 = "TAT";'}
                <br />
                {'        String s2 = "TAT";'}
                <br />
                {'        String s3 = new String("TAT");'}
                <br />
                {'        String s4 = new String("TAT");'}
                <br />
                <br />
                {"        // Printing all the Strings"}
                <br />
                {"        System.out.println(s1);"}
                <br />
                {"        System.out.println(s2);"}
                <br />
                {"        System.out.println(s3);"}
                <br />
                {"        System.out.println(s4);"}
                <br />
                {"    }"}
                <br />
                {"}"}
                <br />
                Output
                <br />
                TAT
                <br />
                TAT
                <br />
                TAT
                <br />
                TAT
                <br />
                Few more examples
                <br />
                class GFG {"{"}
                <br />
                {"    // main function"}
                <br />
                {"    public static void main(String args[]) {"}
                <br />
                {"        byte ascii[] = { 71, 70, 71 };"}
                <br />
                <br />
                {"        String firstString = new String(ascii);"}
                <br />
                {"        System.out.println(firstString);"}
                <br />
                <br />
                {"        String secondString = new String(ascii, 1, 2);"}
                <br />
                {"        System.out.println(secondString);"}
                <br />
                {"    }"}
                <br />
                {"}"}
                <br />
                Output
                <br />
                GFG
                <br />
                FG
              </code>
            </pre>
          </div>
        </div>
      </p>
    </div>
  );
};

export default String;
