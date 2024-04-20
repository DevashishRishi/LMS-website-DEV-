import React from "react";
import "./Java.css";
const Collection = () => {
  return (
    <div>
      <h3 className="subHead">Collections in Java </h3>
      <p>
        The Collection in Java is a framework that provides an architecture to
        store and manipulate the group of objects. Java Collections can achieve
        all the operations that you perform on a data such as searching,
        sorting, insertion, manipulation, and deletion.Java Collection means a
        single unit of objects. Java Collection framework provides many
        interfaces (Set, List, Queue, Deque) and classes (ArrayList, Vector,
        LinkedList, PriorityQueue, HashSet, LinkedHashSet, TreeSet).
      </p>
      <h3 className="subHead">Framework in Java</h3>
      <p>
        A framework is a collection of classes and interfaces that provide a
        ready-made architecture. There is no need to define a framework to
        implement a new function or class. However, an optimal object-oriented
        design always includes a framework with a set of classes so that all
        classes perform a similar task.
        <br />
        The need for a separate collection framework in Java Before the
        collection framework was released (or before JDK 1.2), the standard
        methods for objects (or collections) in Java were arrays or vectors, or
        hash tables. All these collections did not have a common interface.
        Therefore, although the basic purpose of all collections is the same,
        the implementation of each of these collections was defined
        independently and did not correlate them. Additionally, it is very
        difficult for users to remember all the different methods, syntax, and
        constructors in each collection class.
        <br />
        Let's understand this with an example of adding an element and a vector
        to a hash table.
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
                import java.util.*;
                <br />
                class CollectionDemo <br />
                {"{"}
                <br />
                public static void main(String[] args)
                <br />
                {"{"}
                <br />
                {"//"} Creating instances of the array,
                <br />
                {"//"} vector and hashtable
                <br />
                int arr[] = new int[] {"{"} 1, 2, 3, 4 {"}"};<br />
                Vector&lt;Integer&gt; v = new Vector();
                <br />
                Hashtable&lt;Integer, String&gt; h = new Hashtable();
                <br />
                {"//"} Adding the elements into the
                <br />
                {"//"} vector
                <br />
                v.addElement(1);
                <br />
                v.addElement(2);
                <br />
                {"//"} Adding the element into the
                <br />
                {"//"} hashtable
                <br />
                h.put(1, "LMS");
                <br />
                h.put(2, "4LMS");
                <br />
                {"//"} Array instance creation requires [],
                <br />
                {"//"} while Vector and hastable require ()
                <br />
                {"//"} Vector element insertion requires addElement(),
                <br />
                {"//"} but hashtable element insertion requires put()
                <br />
                {"//"} Using the break tag
                <br />
                &lt;break /&gt;;
                <br />
                {"//"} Accessing the first element of the
                <br />
                {"//"} array, vector and hashtable
                <br />
                System.out.println(arr[0]);
                <br />
                System.out.println(v.elementAt(0));
                <br />
                System.out.println(h.get(1));
                <br />
                {"//"} Array elements are accessed using [],
                <br />
                {"//"} vector elements using elementAt()
                <br />
                {"//"} and hashtable elements using get()
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
              </code>
            </pre>
          </div>
        </div>
        <br />
        As we can see, none of these collections (Array, Vector or Hashtable)
        implement a standard member interface, which made it difficult for
        developers to write algorithms that could work with all kinds of
        collections. Another disadvantage is that most 'Vector' methods are
        final, which means we cannot extend the 'Vector' class to implement a
        similar collection. Therefore, Java developers decided to come up with a
        common interface to solve the above problems and introduced the
        Collection Framework in JDK 1.2, which made both the old vectors and the
        hash table conform to the collection framework.
      </p>
      <h3 className="subHead">Advantages of java collection framework</h3>
      <p>
        Since the lack of a collection framework has caused the disadvantages
        mentioned above, the advantages of a collection framework are as
        follows. Consistent API: API has a set of basic interfaces, such as
        Collection, Set, List or Map, all classes (ArrayList, LinkedList,
        Vector, etc.) that implement these interfaces have common methods.
        Reduces programming load: The developer does not need to worry about the
        design of the collection, he can focus on the best use of it in his
        program. Therefore, the basic concept of object-oriented programming (or
        abstraction) is successfully implemented. Increases program speed and
        quality: Increases performance by providing efficient, useful data
        structures and algorithms, because in this case the programmer does not.
        one must think about the best implementation of a certain data
        structure. He can simply use the best implementation to greatly improve
        the performance of his algorithm/program.
        <br />
        Methods of collection interface.
        <br />
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Method</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>add(E e)</td>
              <td>It is used to insert an element in this collection.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>addAll(Collection&lt;? extends E&gt; c)</td>
              <td>
                It is used to insert the specified collection elements in the
                invoking collection.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>remove(Object element)</td>
              <td>It is used to delete an element from the collection.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>removeAll(Collection&lt;?&gt; c)</td>
              <td>
                It is used to delete all the elements of the specified
                collection from the invoking collection.
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>removeIf(Predicate&lt;? super E&gt; filter)</td>
              <td>
                It is used to delete all the elements of the collection that
                satisfy the specified predicate.
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>retainAll(Collection&lt;?&gt; c)</td>
              <td>
                It is used to delete all the elements of invoking collection
                except the specified collection.
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>size()</td>
              <td>
                It returns the total number of elements in the collection.
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>clear()</td>
              <td>
                It removes the total number of elements from the collection.
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>contains(Object element)</td>
              <td>It is used to search an element.</td>
            </tr>
            <tr>
              <td>10</td>
              <td>containsAll(Collection&lt;?&gt; c)</td>
              <td>
                It is used to search the specified collection in the collection.
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>iterator()</td>
              <td>It returns an iterator.</td>
            </tr>
            <tr>
              <td>12</td>
              <td>toArray()</td>
              <td>It converts collection into array.</td>
            </tr>
            <tr>
              <td>13</td>
              <td>toArray(T[] a)</td>
              <td>
                It converts collection into array. Here, the runtime type of the
                returned array is that of the specified array.
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>isEmpty()</td>
              <td>It checks if collection is empty.</td>
            </tr>
            <tr>
              <td>15</td>
              <td>parallelStream()</td>
              <td>
                It returns a possibly parallel Stream with the collection as its
                source.
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>stream()</td>
              <td>
                It returns a sequential Stream with the collection as its
                source.
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>spliterator()</td>
              <td>
                It generates a Spliterator over the specified elements in the
                collection.
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>equals(Object element)</td>
              <td>It matches two collections.</td>
            </tr>
            <tr>
              <td>19</td>
              <td>hashCode()</td>
              <td>It returns the hash code number of the collection.</td>
            </tr>
          </tbody>
        </table>
      </p>
      <h3 className="subHead">Collection interface</h3>
      <p>
        The collection interface is an interface that all classes in the
        collection framework implement. It declares the methods for each
        collection. In other words, it can be said that a collection interface
        creates the foundation on which the whole framework depends. Some
        methods of the collection interface are Boolean add ( Object obj),
        Boolean addAll ( Collection c), void clear () , etc., which are
        implemented in all subclasses of the collection interface.
        <b>List interface</b>
        <br />
        List interface is a child interface of the whole interface. This blocks
        a list type data structure where we can store an ordered collection of
        objects. It can have duplicate values.
        <br />
        The List interface is implemented by the ArrayList, LinkedList, Vector,
        and Stack classes.To create the List interface, we need to use.
        <br />
        1. List {"<data-type>"} list1= new ArrayList(); <br />
        2. List {"<data-type>"} list2 = new LinkedList(); <br />
        3. List {"<data-type>"} list3 = new Vector(); <br />
        4. List {"<data-type>"} list4 = new Stack(); <br />
        <b>Iterable interface</b>
        <br />
        The Iterable interface is the main interface of all collection classes.
        The Aggregate interface extends the Iterable interface, and therefore
        all subclasses of the Aggregate interface also implement the Iterable
        interface. It contains only one abstract method. i.e. Iterator{"<T>"}
        iterator()
        <b>Iterator interface </b>
        <br />
        The Iterator UI provides the ability to iterate elements forward only.
        Iterator UI MethodsThe Iterator UI has only three methods. They are:
        <br />
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Method</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>hasNext()</td>
              <td>
                It returns true if the iterator has more elements otherwise it
                returns false.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>next()</td>
              <td>
                It returns the element and moves the cursor pointer to the next
                element.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>remove()</td>
              <td>
                It removes the last element returned by the iterator. It is less
                used.
              </td>
            </tr>
          </tbody>
        </table>
      </p>
      <h3 className="subHead">Array list</h3>
      <p>
        ArrayList provides us dynamic arrays in Java. However, it can be slower
        than regular arrays, but it can be helpful in programs where the array
        is needed a lot. An ArrayList is automatically incremented as the
        collection grows, or decremented as objects are removed from the
        collection. Java ArrayList allows us to access the list randomly.
        ArrayList cannot be used for primitive types like int, char, etc. For
        such cases we need a wrapper class. Let's understand ArrayList with the
        following example.
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
                {"//"} Java program to demonstrate the
                <br />
                {"//"} working of ArrayList
                <br />
                import java.io.*;
                <br />
                import java.util.*;
                <br />
                <br />
                class GFG {"{"}
                <br />
                <br />
                {"//"} Main Method
                <br />
                public static void main(String[] args)
                <br />
                {"{"}
                <br />
                <br />
                {"//"} Declaring the ArrayList with
                <br />
                {"//"} initial size n<br />
                ArrayList&lt;Integer&gt; al = new ArrayList&lt;Integer&gt;();
                <br />
                <br />
                {"//"} Appending new elements at
                <br />
                {"//"} the end of the list
                <br />
                for (int i = 1; i &lt;= 5; i++)
                <br />
                al.add(i);
                <br />
                <br />
                {"//"} Printing elements
                <br />
                System.out.println(al);
                <br />
                <br />
                {"//"} Remove element at index 3<br />
                al.remove(3);
                <br />
                <br />
                {"//"} Displaying the ArrayList
                <br />
                {"//"} after deletion
                <br />
                System.out.println(al);
                <br />
                <br />
                {"//"} Printing elements one by one
                <br />
                for (int i = 0; i &lt; al.size(); i++)
                <br />
                System.out.print(al.get(i) + " ");
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                <br />
                Output <br />
                [1,2,3,4,5]
                <br />
                [1,2,3,5]
                <br />1 2 3 5
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Linked list</h3>
      <p>
        The LinkedList class is an implementation of the linear LinkedList data
        structure, in which each element is a separate object having a data
        portion and an address part, and the elements are not kept in contiguous
        places. Pointers and addresses are used to connect the elements. Every
        component is called a node. Let's use the following example to better
        understand LinkedLists.
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
                {"//"} Java program to demonstrate the
                <br />
                {"//"} working of LinkedList
                <br />
                import java.io.*;
                <br />
                import java.util.*;
                <br />
                <br />
                class GFG {"{"}
                <br />
                <br />
                {"//"} Main Method
                <br />
                public static void main(String[] args)
                <br />
                {"{"}
                <br />
                <br />
                {"//"} Declaring the LinkedList
                <br />
                LinkedList&lt;Integer&gt; ll = new LinkedList&lt;Integer&gt;();
                <br />
                <br />
                {"//"} Appending new elements at
                <br />
                {"//"} the end of the list
                <br />
                for (int i = 1; i &lt;= 5; i++)
                <br />
                ll.add(i);
                <br />
                <br />
                {"//"} Printing elements
                <br />
                System.out.println(ll);
                <br />
                <br />
                {"//"} Remove element at index 3<br />
                ll.remove(3);
                <br />
                <br />
                {"//"} Displaying the List
                <br />
                {"//"} after deletion
                <br />
                System.out.println(ll);
                <br />
                <br />
                {"//"} Printing elements one by one
                <br />
                for (int i = 0; i &lt; ll.size(); i++)
                <br />
                System.out.print(ll.get(i) + " ");
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                <br />
                Output <br />
                [1,2,3,4,5]
                <br />
                [1,2,3,5]
                <br />
                1,2,3,5
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Vector</h3>
      <p>
        In Java, a vector gives us access to dynamic arrays. Even while it could
        operate more slowly than conventional arrays, it can still be useful in
        systems that require a lot of array manipulation. The implementation of
        this is the same as that of ArrayList. But the main distinction between
        an array list and a vector is that the former is non-synchronized while
        the latter is. Let's use an example to better grasp the Vector.
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
                {"//"} Java program to demonstrate the
                <br />
                {"//"} working of Vector
                <br />
                import java.io.*;
                <br />
                import java.util.*;
                <br />
                class GFG {"{"}
                <br />
                <br />
                {"//"} Main Method
                <br />
                public static void main(String[] args)
                <br />
                {"{"}
                <br />
                <br />
                {"//"} Declaring the Vector
                <br />
                Vector&lt;Integer&gt; v = new Vector&lt;Integer&gt;();
                <br />
                {"//"} Appending new elements at
                <br />
                {"//"} the end of the list
                <br />
                for (int i = 1; i &lt;= 5; i++)
                <br />
                v.add(i);
                <br />
                {"//"} Printing elements
                <br />
                System.out.println(v);
                <br />
                {"//"} Remove element at index 3<br />
                v.remove(3);
                <br />
                <br />
                {"//"} Displaying the Vector
                <br />
                {"//"} after deletion
                <br />
                System.out.println(v);
                <br />
                {"//"} Printing elements one by one
                <br />
                for (int i = 0; i &lt; v.size(); i++)
                <br />
                System.out.print(v.get(i) + " ");
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                <br />
                Output <br />
                [1,2,3,4,5]
                <br />
                [1,2,3,5]
                <br />
                1,2,3,5
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Stack</h3>
      <p>
        The Stack data structure is modelled and implemented by the Stack class.
        The last-in, first-out rule serves as the foundation for the class.
        Apart from the fundamental push and pop actions, the class has three
        additional functions: empty, search, and peek. Another name for the
        class is the Vector subclass.
        <br />
        Let's use an example to better grasp the stack.
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
                {"//"} Java program to demonstrate the
                <br />
                {"//"} working of a stack
                <br />
                import java.util.*;
                <br />
                public class GFG {"{"}
                <br />
                <br />
                {"//"} Main Method
                <br />
                public static void main(String args[])
                <br />
                {"{"}
                <br />
                <br />
                Stack&lt;String&gt; stack = new Stack&lt;String&gt;();
                <br />
                stack.push(“LMS");
                <br />
                stack.push("IS");
                <br />
                stack.push("BEST");
                <br />
                stack.push("TOOL");
                <br />
                <br />
                {"//"} Iterator for the stack
                <br />
                Iterator&lt;String&gt; itr = stack.iterator();
                <br />
                <br />
                {"//"} Printing the stack
                <br />
                while (itr.hasNext()) {"{"}
                <br />
                System.out.print(itr.next() + " ");
                <br />
                {"}"}
                <br />
                <br />
                System.out.println();
                <br />
                <br />
                stack.pop();
                <br />
                <br />
                {"//"} Iterator for the stack
                <br />
                itr = stack.iterator();
                <br />
                <br />
                {"//"} Printing the stack
                <br />
                while (itr.hasNext()) {"{"}
                <br />
                System.out.print(itr.next() + " ");
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                <br />
                Output <br />
                LMS IS BEST TOOL
                <br />
                LMS IS BEST
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Queue interface</h3>
      <p>
        As the name suggests, the queue interface maintains a FIFO (First In
        First Out) order, similar to a real queue. This interface is designed to
        store all elements where the order of the elements is important. For
        example, when we try to book a ticket, tickets are sold on a first-come,
        first-served basis. So the ticket will be given to the person whose
        request arrives first in line. There are different classes like
        PriorityQueue, ArrayDeque etc. Since all of these subclasses implement
        Queue, we can construct a Queue object using any of these classes.
        <br />
        1. Queue {"<String"} q1 = new PriorityQueue();
        <br /> 2. Queue {"<String"} q2 = new ArrayDeque();
        <br />
      </p>
      <h3 className="subHead">Priority queue</h3>
      <p>
        Priority-Queue is used when objects need to be processed based on
        priority. It is known that the queue follows the First-In-First-Out
        algorithm, but sometimes the elements of the queue must be processed
        according to priority, and in such cases this class is used.
        PriorityQueue is based on a priority queue. The elements of the priority
        queue are sorted according to the natural order or with the Comparator
        provided when creating the queue, depending on which constructor is
        used.
        <br /> Let's understand the priority order with an example:
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
                {"//"} priority queue in Java
                <br />
                import java.util.*;
                <br />
                class GfG {"{"}
                <br />
                <br />
                {"//"} Main Method
                <br />
                public static void main(String args[])
                <br />
                {"{"}
                <br />
                <br />
                {"//"} Creating empty priority queue
                <br />
                PriorityQueue&lt;Integer&gt; pQueue
                <br />
                = new PriorityQueue&lt;Integer&gt;();
                <br />
                <br />
                {"//"} Adding items to the pQueue using add()
                <br />
                pQueue.add(10);
                <br />
                pQueue.add(20);
                <br />
                pQueue.add(15);
                <br />
                <br />
                {"//"} Printing the top element of PriorityQueue
                <br />
                System.out.println(pQueue.peek());
                <br />
                <br />
                {"//"} Printing the top element and removing it
                <br />
                {"//"} from the PriorityQueue container
                <br />
                System.out.println(pQueue.poll());
                <br />
                <br />
                {"//"} Printing the top element again
                <br />
                System.out.println(pQueue.peek());
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                <br />
                Output <br />
                10
                <br />
                10
                <br />
                15
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Deque interface</h3>
      <p>
        This is a very slight variation of the Queue data structure. A queue,
        also known as a double queue, is a data structure where we can add and
        remove elements from both ends of the queue. This interface extends the
        queue interface. The class implementing this interface is ArrayDeque.
        Since the ArrayDeque class implements the Deque interface, we can create
        a deque object with this class.
        <br /> Deque d = new ArrayDeque();
        <b>Array deque</b>
        <br />
        The ArrayDeque class implements the Deque interface. This makes Deque
        easy to use. Unlike a queue, we can add or remove elements from either
        end. ArrayDeque is faster than ArrayList and Stack and has no size
        limit. Consider the following example.
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
                import java.util.*;
                <br />
                public class TestJavaCollection6{"{"}
                <br />
                public static void main(String[] args) {"{"}
                <br />
                {"//"}Creating Deque and adding elements
                <br />
                Deque&lt;String&gt; deque = new ArrayDeque&lt;String&gt;();
                <br />
                deque.add("Gautam");
                <br />
                deque.add("Karan");
                <br />
                deque.add("Ajay");
                <br />
                {"//"}Traversing elements
                <br />
                for (String str : deque) {"{"}
                <br />
                System.out.println(str);
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                Output <br />
                Gautam
                <br />
                Karan
                <br />
                Ajay
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Set interface</h3>
      <p>
        An array is an unordered collection of items that cannot store duplicate
        values. This collection is used when we want to avoid overlapping
        objects and store only unique objects. Different classes like HashSet,
        TreeSet, LinkedHashSet etc implement this set interface. Since all
        subclasses implement set, we can create a set object with any of these
        classes.
        <br />
        For example.
        <br />
        Set {"<data-type>"} s1 = new HashSet{"<data-type>"}(); <br />
        Set{"<data-type>"} s2 = new LinkedHashSet{"<data-type>"}(); <br />
        Set {"<data-type>"} s3 = new TreeSet{"<data-type>"}();
        <br />
        Classes that implement the set interface
        <br />
        <b>Harshset</b>
        <br />
        The HashSet class is an internal implementation of the hashtable data
        structure. HashSet addable objects are not guaranteed to be added in the
        same order. Objects are added based on their hash code. This class also
        allows adding NULL elements. Let's understand HashSet with an example.
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
                import java.util.*;
                <br />
                public class HashSetDemo {"{"}
                <br />
                {"//"} Main Method
                <br />
                public static void main(String args[]) {"{"}
                <br />
                {"//"} Creating HashSet and
                <br />
                {"//"} adding elements
                <br />
                HashSet&lt;String&gt; hs = new HashSet&lt;String&gt;();
                <br />
                hs.add("LMS");
                <br />
                hs.add("IS");
                <br />
                hs.add("VERY");
                <br />
                hs.add("USEFUL");
                <br />
                hs.add("Very helpful");
                <br />
                {"//"} Traversing elements
                <br />
                Iterator&lt;String&gt; itr = hs.iterator();
                <br />
                while (itr.hasNext()) {"{"}
                <br />
                System.out.println(itr.next());
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                Output <br />
                Very helpful
                <br />
                Useful
                <br />
                Very
                <br />
                Is
                <br />
                LMS
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Sorted set interface</h3>
      <p>
        This interface is very similar to the fixed interface. The only
        difference is that this interface has additional methods that preserve
        the order of the elements. The SortedSet interface extends the Set
        interface and is used to process sorted data. The class that implements
        this interface is TreeSet. Since this class implements SortedSet, we can
        create a SortedSet object with this class.
        <br />
        SortedSet{"<data-type>"} set = new TreeSet();
        <br />
        <b>Tree set</b>
        <br />
        The TreeSet class uses a tree for storage. The order of the elements is
        maintained by the array, which uses their natural order, regardless of
        whether an explicit comparator is provided or not. To implement the set
        interface correctly, it must be compatible with peers. It can also be
        ordered with a Comparator that is delivered at a specified build time,
        depending on which builder is used.Let's understand TreeSet with an
        example.
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
                import java.util.*;
                <br />
                public class TestJavaCollection9 {"{"}
                <br />
                public static void main(String args[]) {"{"}
                <br />
                {"//"}Creating and adding elements
                <br />
                TreeSet&lt;String&gt; set=new TreeSet&lt;String&gt;();
                <br />
                set.add("Ravi");
                <br />
                set.add("Vijay");
                <br />
                set.add("Ravi");
                <br />
                set.add("Ajay");
                <br />
                {"//"}traversing elements
                <br />
                Iterator&lt;String&gt; itr=set.iterator();
                <br />
                while(itr.hasNext()) {"{"}
                <br />
                System.out.println(itr.next());
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                Output <br />
                Ajay
                <br />
                Ravi
                <br />
                Vijay
              </code>
            </pre>
          </div>
        </div>
        <br />
      </p>
      <h3 className="subHead">Map interface</h3>
      <p>
        A map is a data structure that supports key-value pairs to map data.
        This interface does not support duplicate keys because the same key
        cannot have multiple mappings, but it does allow duplicate values in
        different keys. Map is useful when the data exists and we want to
        perform operations based on the key. Several classes implement this Map
        interface, such as HashMap, TreeMap, etc. Since all subclasses implement
        Map, we can implement a Map object using any of these classes.
        <br />
        Map{"<T>"} hm = new HashMap{"<>"} ();
        <br />
        Map{"<T>"} tm = new TreeMap{"<>"} ();
        <br />
        Where T is the type of the object.
        <br />
        <b>Hash map</b>
        <br />
        HashMap provides a basic implementation of the Java map interface. It
        stores data (key, value) in pairs. To access a HashMap value, we need to
        know its key. HashMap uses a technique called Hashing. Hashing is a
        method of converting a large string into a small string that represents
        the same string for faster indexing and search operations. HashSet also
        uses HashMap internally.Let's understand HashMap with an example.
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
                import java.util.*;
                <br />
                public class HashMapDemo {"{"}
                <br />
                {"//"} Main Method
                <br />
                public static void main(String args[]) {"{"}
                <br />
                {"//"} Creating HashMap and
                <br />
                {"//"} adding elements
                <br />
                HashMap&lt;Integer, String&gt; hm = new HashMap&lt;Integer,
                String&gt;();
                <br />
                hm.put(1, "LMS");
                <br />
                hm.put(2, "IS");
                <br />
                hm.put(3, "FUN");
                <br />
                {"//"} Finding the value for a key
                <br />
                System.out.println("Value for 1 is " + hm.get(1));
                <br />
                {"//"} Traversing through the HashMap
                <br />
                for (Map.Entry&lt;Integer, String&gt; e : hm.entrySet())
                <br />
                System.out.println(e.getKey() + " " + e.getValue());
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                Output <br />
                Value for 1 is LMS
                <br />
                1 LMS
                <br />
                2 IS
                <br />3 FUN
              </code>
            </pre>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Collection;
