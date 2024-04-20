import React from "react";

const STL = () => {
  return (
    <div>
      <h3 className="subHead">STL (standard tag library)</h3>
      <p>
        The Standard Template Library (STL) is a set of C++ template classes
        that provide common programming data structures and operations such as
        lists, stacks, arrays, etc. It is a library of container classes,
        algorithms and iterators. It is a public library, so its components are
        parameterized. Knowledge of model classes is a prerequisite for working
        with STL.
        <br />
        The C++ Standard Template Library (STL) is a collection of algorithms,
        data structures, and other components that can be used to simplify the
        development of C++ programs. The STL provides several containers such as
        vectors, lists, and maps, as well as algorithms for searching, sorting,
        and manipulating data.
        <br />
        One of the main advantages of the STL is that it provides the ability to
        write generic, reusable code that can be applied to various data types.
        This means that you can write an algorithm once and then use it with
        different types of data without having to write separate code for each
        type.
        <br />
        The STL also provides an efficient way to write code. Many STL
        algorithms and data structures are implemented with optimized algorithms
        that can result in faster execution times compared to custom code.
        <br />
        Some key components of STL is basically on: -
        <br />
        Containers: STL provides several containers such as vector, list, map,
        array, and array that can be used to store and manipulate data.
        <br />
        Algorithms: The STL provides a set of algorithms such as sorting,
        search, and binary search algorithms that can be used to manipulate data
        stored in containers. Iterators: Iterators are objects that allow
        traversing the elements of a container. The STL provides a set of
        iterators such as forward_iterator, bidirectional_iterator, and
        random_access_iterator that can be used with different types of
        containers.
        <br />
        Algorithms: The STL provides a set of algorithms such as sorting,
        search, and binary search algorithms that can be used to manipulate data
        stored in containers.
        <br />
        Functional Objects: Functional objects, also called functionals, are
        objects that can be used as function arguments to algorithms. They allow
        you to pass a function to an algorithm, allowing you to customize its
        behaviour.
        <br />
        Adapters: Adapters are components that change the behaviour of other STL
        components. For example, the reverse_iterator adapter can be used to
        change the order of elements in a container.
        <br />
        STL allows you to simplify the code, reduce the probability of errors,
        and improve the performance of programs. <br /> It has a total of 4
        components: <br />- 1) Algorithm <br /> 2) Container <br /> 3) Functor{" "}
        <br />
        4) Iterators
      </p>
      <h3 className="subHead">Algorithm</h3>
      <p>
        A header algorithm defines a set of functions specifically designed for
        use with multiple elements. They act on containers and provide resources
        for various operations on the contents of the containers. <br />•
        Algorithm <br />• Sorting <br />• Searching <br /> • Important STL
        Algorithms • <br />
        Useful Array Algorithms <br /> • Partition Functions <br /> • Numeric{" "}
        <br />• Valarray Class.
      </p>
      <h3 className="subHead">Containers</h3>
      <p>
        Containers or container classes store objects and data. The standards
        have a total of seven "first-class" container classes and three
        container adapters, and only seven header files that allow access to
        those containers or container adapters. Serialized containers: implement
        data structures that can be accessed sequentially. Vector List Deque
        Arrays Forward_list (Introduced in C++11) Container adapters: provides a
        different interface to sequential containers. Queue Priority queue Stack
        Association containers: implement ordered data structures that can be
        searched quickly (O(log n) complexity). Multiset Map Multimap Unordered
        associative containers: implements unordered data structures that can be
        searched quickly Unordered_set (introduced in C++ 11) Unordered_multiset
        (introduced C++ 11); Unordered_map (introduced in C++ 11)
        Unordered_multimap (introduced in C++ 11).
      </p>
      <h3 className="subHead">Functor</h3>
      <p>
        The STL contains classes that overload the function call operator.
        Instances of such classes are called function objects or functions.
        Functors allow you to customize the behaviour of the associated function
        by using passed parameters. Must Read - Functors.
      </p>
      <h3>Iterator</h3>
      <p>
        As the name suggests, iterators are used to process a series of values.
        They are the most important feature that allows generality in STL. Must
        Read – Iterators Utility Library Defined in header {"<"}utility{">"}
        <br />
        <b>Iterator categories </b>
        <br />
        Iterator mainly divided into 5 categories <br />
        1) Input
        <br />
        2) output
        <br />
        3) Forward <br />
        4) Bi-directional <br />
        5) Random access <br />
        <b>Input iterator:</b>
        <br />
        An input iterator is an iterator that allows a program to read values
        from a container. Dereferencing input iterator allows reading the value
        from the container but does not change the value. The input iterator is
        a one-way iterator. An input iterator can be incremented but not
        decremented.
        <b>Output iterator:</b>
        <br />
        The output iterator is similar to the input iterator, except that it
        allows the program to change the value of the container, but it does not
        allow it to be read. This is a one-way iterator. This is a writable
        iterator.
        <b>Forward Iterator:</b>
        <br />
        The forward iterator uses the ++ operator to navigate the container. The
        previous iterator goes through each element of the container, one
        element at a time.
        <br /> <b>Two-way iterator:</b>
        <br />
        The two-way iterator is similar to the previous iterator except that it
        also iterates backwards. This is a two-way iterator. It can be increased
        as well as decreased.
        <br />
        <b>Random Access Iterator: </b>
        <br />
        TheRandom Access Iterator can be used to access a random element of a
        container. An arbitrary iterator has all the properties of a two-way
        iterator with one additional property, namely pointer incrementing.
        Using the pointer increment function, we can access a random element
        from the container.
        <br />
      </p>
      <h3 className="subHead">Operations supported by iterators</h3>
      <table>
        <thead>
          <tr>
            <th>Iterator</th>
            <th>Element access</th>
            <th>Read</th>
            <th>Write</th>
            <th>Increment operation</th>
            <th>Comparison</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Input</td>
            <td>
              <code>v = *p</code>
            </td>
            <td></td>
            <td>
              <code>*p = v</code>
            </td>
            <td>
              <code>++</code>
            </td>
            <td>
              <code>==</code>, <code>!=</code>
            </td>
          </tr>
          <tr>
            <td>Output</td>
            <td></td>
            <td></td>
            <td>
              <code>*p = v</code>
            </td>
            <td>
              <code>++</code>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Forward</td>
            <td>
              <code>v = *p</code>
            </td>
            <td>
              <code>*p = v</code>
            </td>
            <td>
              <code>++</code>
            </td>
            <td>
              <code>++</code>
            </td>
            <td>
              <code>==</code>, <code>!=</code>
            </td>
          </tr>
          <tr>
            <td>Bidirectional</td>
            <td>
              <code>v = *p</code>
            </td>
            <td>
              <code>*p = v</code>
            </td>
            <td>
              <code>++</code>, <code>--</code>
            </td>
            <td>
              <code>++</code>, <code>--</code>
            </td>
            <td>
              <code>==</code>, <code>!=</code>
            </td>
          </tr>
          <tr>
            <td>Random access</td>
            <td>
              <code>{"->"}</code>, <code>[]</code>
            </td>
            <td>
              <code>v = *p</code>
            </td>
            <td>
              <code>*p = v</code>
            </td>
            <td>
              <code>++</code>, <code>--</code>, <code>+</code>, <code>-</code>,{" "}
              <code>+=</code>, <code>-=</code>
            </td>
            <td>
              <code>==</code>, <code>!=</code>, <code>&lt;</code>,{" "}
              <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3 className="subHead">Advantages and disadvantages of STL :-</h3>
      <p>
        Reusability: One of the main advantages of the STL is that it provides
        the ability to write generic, reusable code that can be applied to
        various data types. This can lead to more efficient and maintainable
        code.
        <br />
        Efficient Algorithms: Many STL algorithms and data structures are
        implemented with optimized algorithms that can result in faster
        execution times compared to custom code.
        <br />
        Improved code readability: The STL provides a consistent and
        well-documented way of working with data that makes code easier to
        understand and maintain.
        <br />
        Large user base: STL is widely used, which means there are a large
        number of developers who can provide support and resources such as
        tutorials and forums.
        <br />
        <b>Disadvantage </b>
        <br />
        • Learning curve: STL can be difficult to learn, especially for
        beginners, due to its complex syntax and use of advanced features such
        as iterations and function objects.
        <br />
        • Lack of control: When using the STL, you must rely on the
        implementation provided by the library, which can limit control over
        certain parts of your code.
        <br />
        • Performance: In some cases, using STL can result in slower execution
        times compared to regular code, especially when dealing with small
        amounts of data.
        <br />
        • Whether you're preparing for your first job interview or trying to
        develop your skills in this ever-evolving technology environment,
        courses are the key to your success. We offer quality content at a
        reasonable price, all geared towards accelerating your growth over time.
        Join the millions already given and we are here to do the same for you.
        <br />
      </p>
      <h3 className="subHead">STL Containers</h3>
      <p>
        Containers can be described as objects containing the same type of data.
        Containers implement various data structures such as arrays, lists,
        trees, etc. The following are containers that contain information about
        all containers and the header file and associated with them:
        <table>
          <thead>
            <tr>
              <th>Container</th>
              <th>Description</th>
              <th>Header file</th>
              <th>Iterator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>vector</td>
              <td>
                vector is a class that creates a dynamic array allowing
                insertions and deletions at the back.
              </td>
              <td>&lt;vector&gt;</td>
              <td>Random access</td>
            </tr>
            <tr>
              <td>list</td>
              <td>
                list is the sequence containers that allow the insertions and
                deletions from anywhere.
              </td>
              <td>&lt;list&gt;</td>
              <td>Bidirectional</td>
            </tr>
            <tr>
              <td>deque</td>
              <td>
                deque is the double ended queue that allows the insertion and
                deletion from both the ends.
              </td>
              <td>&lt;deque&gt;</td>
              <td>Random access</td>
            </tr>
            <tr>
              <td>set</td>
              <td>set is an associate container for storing unique sets.</td>
              <td>&lt;set&gt;</td>
              <td>Bidirectional</td>
            </tr>
            <tr>
              <td>multiset</td>
              <td>
                Multiset is an associate container for storing non-unique sets.
              </td>
              <td>&lt;set&gt;</td>
              <td>Bidirectional</td>
            </tr>
            <tr>
              <td>map</td>
              <td>
                Map is an associate container for storing unique key-value
                pairs, i.e. each key is associated with only one value (one to
                one mapping).
              </td>
              <td>&lt;map&gt;</td>
              <td>Bidirectional</td>
            </tr>
            <tr>
              <td>multimap</td>
              <td>
                multimap is an associate container for storing key-value pair,
                and each key can be associated with more than one value.
              </td>
              <td>&lt;map&gt;</td>
              <td>Bidirectional</td>
            </tr>
            <tr>
              <td>stack</td>
              <td>It follows last in first out (LIFO).</td>
              <td>&lt;stack&gt;</td>
              <td>No iterator</td>
            </tr>
            <tr>
              <td>queue</td>
              <td>It follows first in first out (FIFO).</td>
              <td>&lt;queue&gt;</td>
              <td>No iterator</td>
            </tr>
            <tr>
              <td>Priority-queue</td>
              <td>First element out is always the highest priority element.</td>
              <td>&lt;queue&gt;</td>
              <td>No iterator</td>
            </tr>
          </tbody>
        </table>
        <br />
        <b>Classification of containers :-</b>
        <br />
        1) Sequence containers <br />
        2) Associative containers <br />
        3) Derived containers <br />
      </p>
      <h3 className="subHead">Algorithms </h3>
      <p>
        Algorithms are the functions that different containers use to process
        its contents. Things to remember: Algorithms provides about 60
        algorithms to perform complex operations. The standard algorithms allow
        us to work with two different types of containers at the same time.
        Algorithms are not container member functions but are independent
        template functions. Algorithms save a lot of time and effort. If we want
        to use STL algorithms, we have to add {"<"}algorithm{">"} header file in
        our program.
      </p>
      <h3>Function objects</h3>
      <p>
        A function object is a function wrapped in a class to look like an
        object. A function object extends the capabilities of a normal function
        by using object-oriented N functions, such as generic programming.
        Therefore, a function object can be said to be a smart pointer that has
        many advantages over a normal function.
        <br />
        The advantages of function objects over a regular function are:
        <br />
        • Function objects can have both member functions and member attributes.
        <br />
        • Function objects can be initialized before they are used.
        <br />
        • Normal functions can have different types only if the signature is
        different. Function objects can have different types, even if the
        signature is the same.
        <br />
        • Function objects are faster than a normal function.
        <br />
        A functional object is also known as a functional object. A function
        object is an object that contains at least one operator () definition.
        That means that if we declare an object ‘d’ from the class where the
        function operator () is defined, we can use the object and ’d’ as a
        normal function.
        <br />
        Let’s see this with a C++ program: -
        <br />
        <div
          className="code-background"
          style={{ backgroundColor: "black", padding: "20px" }}
        >
          <div
            className="code-container"
            style={{ backgroundColor: "black", padding: "20px" }}
          >
            <pre>
              <code>
                #include &lt;iostream&gt;
                <br />
                using namespace std;
                <br />
                class function_object
                {"{"}
                <br />
                &nbsp;&nbsp;public:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;int operator(){"<<"} (int a, int b)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a {"<<"} b;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                {"};"}
                <br />
                int main()
                {"{"}
                &nbsp;&nbsp;function_object f;
                <br />
                &nbsp;&nbsp;int result = f(5, 5);
                <br />
                &nbsp;&nbsp;cout {"<<"} "Addition of a and b is : " {"<<"}{" "}
                result;
                <br />
                <br />
                &nbsp;&nbsp;return 0;
                <br />
                {"}"}
              </code>
            </pre>
            <p style={{ color: "white" }}>Output:</p>
            <pre style={{ color: "white" }}>Addition of a and b is : 10</pre>
          </div>
        </div>
      </p>
    </div>
  );
};

export default STL;
