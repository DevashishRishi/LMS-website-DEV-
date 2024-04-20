import React from "react";

const Multithreading = () => {
  return (
    <div>
      <h3 className="subHead">Java Multithreading</h3>
      <p>
        Java multithreading is the process of running multiple threads
        simultaneously. A thread is a lightweight subprocess, the smallest unit
        of processing. Multiprocessing and multithreading are both used to
        achieve multitasking. However, we use multithreading rather than
        multiprocessing because threads use a shared memory area. They do not
        allocate a separate memory area, so it saves memory and context
        switching between threads takes less time than the process. Java
        multithreading is mostly used in games, animations, etc.
      </p>
      <h3 className="subHead">Advantages of multithreading: -</h3>
      <p>
        1) It will not block the user because threads are independent and you
        can do multiple operations at the same time.
        <br />
        2) You can do multiple operations together which saves time.
        <br />
        3) Threads are independent so it doesn't affect others. threads when an
        exception occurs in one thread.
        <br />
        Multitasking is of two types: -<br />
        1) Process based multitasking (Multiprocessing)
        <br />
        2) Thread based multitasking (Multithreading) <br />
        <b>Process based multitasking</b>
        <br />
        • Each process has an address in memory. In other words, each process
        allocates a separate area of memory.
        <br />
        • The process is heavy.
        <br />
        • The cost of transferring data between processes is high.
        <br />
        • Switching from one process to another requires some time to save and
        load registers, memory cards. . , lists. , and so on.
        <br />
        <b>Thread-based multitasking (Multithreading)</b>
        <br />
        • Threads share the same address space.
        <br />
        • Threading is lightweight.
        <br />
        • Communication between threads is low.
        <br />
      </p>
      <h3 className="subHead">What is use of thread in java?</h3>
      <p>
        A thread is a lightweight subprocess, the smallest unit of processing.
        This is a separate execution path. Threads are independent. If an
        exception occurs in one thread, it does not affect other threads. It
        uses a shared memory area. There is context switching between threads.
        An operating system can have multiple processes and a single process can
        have multiple threads.
      </p>
      <h3 className="subHead">Java thread class</h3>
      <p>
        Java provides the Thread class to achieve thread programming. The Thread
        class provides constructors and methods for creating and executing
        thread operations. The Thread class extends the Object class and
        implements the Runnable interface.
        <br />(
        <table>
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Modifier and Type</th>
              <th>Method</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>void</td>
              <td>start()</td>
              <td>It is used to start the execution of the thread.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>void</td>
              <td>run()</td>
              <td>It is used to do an action for a thread.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>static void</td>
              <td>sleep()</td>
              <td>It sleeps a thread for the specified amount of time.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>static Thread</td>
              <td>currentThread()</td>
              <td>
                It returns a reference to the currently executing thread object.
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>void</td>
              <td>join()</td>
              <td>It waits for a thread to die.</td>
            </tr>
            <tr>
              <td>6</td>
              <td>int</td>
              <td>getPriority()</td>
              <td>It returns the priority of the thread.</td>
            </tr>
            <tr>
              <td>7</td>
              <td>void</td>
              <td>setPriority()</td>
              <td>It changes the priority of the thread.</td>
            </tr>
            <tr>
              <td>8</td>
              <td>String</td>
              <td>getName()</td>
              <td>It returns the name of the thread.</td>
            </tr>
            <tr>
              <td>9</td>
              <td>void</td>
              <td>setName()</td>
              <td>It changes the name of the thread.</td>
            </tr>
            <tr>
              <td>10</td>
              <td>long</td>
              <td>getId()</td>
              <td>It returns the id of the thread.</td>
            </tr>
            <tr>
              <td>11</td>
              <td>boolean</td>
              <td>isAlive()</td>
              <td>It tests if the thread is alive.</td>
            </tr>
            <tr>
              <td>12</td>
              <td>static void</td>
              <td>yield()</td>
              <td>
                It causes the currently executing thread object to pause and
                allow other threads to execute temporarily.
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>void</td>
              <td>suspend()</td>
              <td>It is used to suspend the thread.</td>
            </tr>
            <tr>
              <td>14</td>
              <td>void</td>
              <td>resume()</td>
              <td>It is used to resume the suspended thread.</td>
            </tr>
            <tr>
              <td>15</td>
              <td>void</td>
              <td>stop()</td>
              <td>It is used to stop the thread.</td>
            </tr>
            <tr>
              <td>16</td>
              <td>void</td>
              <td>destroy()</td>
              <td>
                It is used to destroy the thread group and all of its subgroups.
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>boolean</td>
              <td>isDaemon()</td>
              <td>It tests if the thread is a daemon thread.</td>
            </tr>
            <tr>
              <td>18</td>
              <td>void</td>
              <td>setDaemon()</td>
              <td>It marks the thread as daemon or user thread.</td>
            </tr>
            <tr>
              <td>19</td>
              <td>void</td>
              <td>interrupt()</td>
              <td>It interrupts the thread.</td>
            </tr>
            <tr>
              <td>20</td>
              <td>boolean</td>
              <td>isinterrupted()</td>
              <td>It tests whether the thread has been interrupted.</td>
            </tr>
            <tr>
              <td>21</td>
              <td>static boolean</td>
              <td>interrupted()</td>
              <td>It tests whether the current thread has been interrupted.</td>
            </tr>
            <tr>
              <td>22</td>
              <td>static int</td>
              <td>activeCount()</td>
              <td>
                It returns the number of active threads in the current thread's
                thread group.
              </td>
            </tr>
            <tr>
              <td>23</td>
              <td>void</td>
              <td>checkAccess()</td>
              <td>
                It determines if the currently running thread has permission to
                modify the thread.
              </td>
            </tr>
            <tr>
              <td>24</td>
              <td>static boolean</td>
              <td>holdLock()</td>
              <td>
                It returns true if and only if the current thread holds the
                monitor lock on the specified object.
              </td>
            </tr>
            <tr>
              <td>25</td>
              <td>static void</td>
              <td>dumpStack()</td>
              <td>
                It is used to print a stack trace of the current thread to the
                standard error stream.
              </td>
            </tr>
            <tr>
              <td>26</td>
              <td>StackTraceElement[]</td>
              <td>getStackTrace()</td>
              <td>
                It returns an array of stack trace elements representing the
                stack dump of the thread.
              </td>
            </tr>
            <tr>
              <td>27</td>
              <td>static int</td>
              <td>enumerate()</td>
              <td>
                It is used to copy every active thread's thread group and its
                subgroup into the specified array.
              </td>
            </tr>
            <tr>
              <td>28</td>
              <td>Thread.State</td>
              <td>getState()</td>
              <td>It is used to return the state of the thread.</td>
            </tr>
            <tr>
              <td>29</td>
              <td>ThreadGroup</td>
              <td>getThreadGroup()</td>
              <td>
                It is used to return the thread group to which this thread
                belongs.
              </td>
            </tr>
            <tr>
              <td>30</td>
              <td>String</td>
              <td>toString()</td>
              <td>
                It is used to return a string representation of this thread,
                including the thread's name, priority, and thread group.
              </td>
            </tr>
            <tr>
              <td>31</td>
              <td>void</td>
              <td>notify()</td>
              <td>
                It is used to give the notification for only one thread which is
                waiting for a particular object.
              </td>
            </tr>
            <tr>
              <td>32</td>
              <td>void</td>
              <td>notifyAll()</td>
              <td>
                It is used to give the notification to all waiting threads of a
                particular object.
              </td>
            </tr>
            <tr>
              <td>33</td>
              <td>void</td>
              <td>setContextClassLoader()</td>
              <td>It sets the context ClassLoader for the Thread.</td>
            </tr>
            <tr>
              <td>34</td>
              <td>ClassLoader</td>
              <td>getContextClassLoader()</td>
              <td>It returns the context ClassLoader for the thread.</td>
            </tr>
            <tr>
              <td>35</td>
              <td>static Thread.UncaughtExceptionHandler</td>
              <td>getDefaultUncaughtExceptionHandler()</td>
              <td>
                It returns the default handler invoked when a thread abruptly
                terminates due to an uncaught exception.
              </td>
            </tr>
            <tr>
              <td>36</td>
              <td>static void</td>
              <td>setDefaultUncaughtExceptionHandler()</td>
              <td>
                It sets the default handler invoked when a thread abruptly
                terminates due to an uncaught exception.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        Thread creation by implementing the runnable interface We create a new
        class that implements the java.lang.Runnable interface and overrides the
        run() method. Then we create a Thread object and call the start() method
        on that object.
        <br />
        Let us understand by a program.
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
                {"//"} the Runnable Interface
                <br />
                class MultithreadingDemo implements Runnable {"{"}
                <br />
                public void run() {"{"}
                <br />
                try {"{"}
                <br />
                {"//"} Displaying the thread that is running
                <br />
                System.out.println(
                <br />
                "Thread " + Thread.currentThread().getId()
                <br />
                + " is running");
                <br />
                {"}"}
                <br />
                catch (Exception e) {"{"}
                <br />
                {"//"} Throwing an exception
                <br />
                System.out.println("Exception is caught");
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {"//"} Main Class
                <br />
                class Multithread {"{"}
                <br />
                public static void main(String[] args) {"{"}
                <br />
                int n = 8; {"//"} Number of threads
                <br />
                for (int i = 0; i {"<"} n; i++) {"{"}
                <br />
                Thread object = new Thread(new MultithreadingDemo());
                <br />
                object.start();
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                Output <br />
                Thread 13 is running
                <br />
                Thread 11 is running
                <br />
                Thread 12 is running
                <br />
                Thread 15 is running
                <br />
                Thread 14 is running
                <br />
                Thread 18 is running
                <br />
                Thread 17 is running
                <br />
                Thread 16 is running
              </code>
            </pre>
          </div>
        </div>
        <br />
      </p>
      <h3 className="subHead">Thread class Vs Runnable class</h3>
      <p>
        When we extend the Thread class, our class cannot extend any other class
        because Java does not support multiple inheritance. But if we implement
        the Runnable interface, our class can still extend other base classes.
        Basic thread functionality can be achieved by extending the Thread
        class, as it provides some built-in methods such as produce(),
        interrupt(), etc., which are not available in the Runnable interface.
        Runnable using the command gives you an object that can be shared
        between multiple threads.
      </p>
      <h3>Life cycle of a Thread (Thread states)</h3>
      <p>
        A thread lies only in one of the shown states at any instant:
        <br />
        1. New State
        <br />
        2. Runnable State
        <br />
        3. Blocked State
        <br />
        4. Waiting State
        <br />
        5. Timed Waiting State
        <br />
        6. Terminated State
        <br />
        Let us understand each one of them separately:
        <br />
        New thread: When a new thread is created, it is in a new state. The
        thread has not yet started when the thread is in this state. When a
        thread is in a new state, its code has not yet started and has not been
        started.
        <br />
        Running state: A thread ready to run is moved to the running state. In
        this state, the thread can be actually running or ready to run at any
        time. The thread scheduler is responsible for giving the thread time to
        execute. A multithreaded program allocates a certain amount of time to
        each individual thread. Each thread runs for a while, then stops and
        gives the CPU to another thread so the other threads can run. When this
        happens, all such threads that are ready for the CPU wait for the CPU
        and a running thread.
        <br />
        Blocked: One thread is blocked while acquiring the lock, but another
        thread is currently acquiring the lock. A thread goes from the blocked
        state to the running state when it is locked.
        <br />
        Waiting state: A thread is in the waiting state when it calls the wait()
        or join() method. It enters the running state when notified by another
        thread or when this thread is terminated.
        <br />
        Timed Wait: A thread is scheduled to wait when it calls a method with a
        timeout parameter. The thread remains in this state until it times out
        or until it receives a notification. For example, if a thread invokes
        sleep or a conditional wait, it is placed in a timed wait.
        <br />
        Terminated state: A thread terminates for one of the following reasons:
        Because it exits normally. This occurs when the program has finished
        executing the thread's code. Because some unusual error event occurred,
        such as a segment fault or an unhandled exception.
        <br />
      </p>
      <h3 className="subHead">Implementing thread states in java</h3>
      <p>
        In Java, you can find out the current state of a thread by using the
        Thread.getState() method to find out the current state of a thread. Java
        provides the java.lang.Thread.State class, which defines ENUM constants
        for thread state. It is summarized below.
        <br />
        1) NEW
        <br />
        It means thread has not started yet Ex: public static final Thread.State
        NEW
        <br />
        2) Runnable <br />
        The thread state of the running thread. In executable mode, a thread
        starts in the Java virtual machine, but can wait for other operating
        system resources, such as the CPU.
        <br />
        Ex. public static final Thread.State RUNNABLE
        <br />
        3) Blocked <br />
        The thread state is blocked for a thread that is waiting for a screen
        lock. In a blocked state, a thread waits until the screen lock passes to
        a synchronized block/method or re-enters a synchronized block/method
        after calling Object.wait().
        <br />
        Ex. public static final Thread.State BLOCKED
        <br />
        4) Waiting <br />
        Thread state for a waiting thread. A thread is waiting because it calls
        one of the following methods:Object.wait with no timeoutThread.join with
        no timeoutLockSupport.park.
        <br />
        Ex. public static final Thread.State WAITING
        <br />
        5) Timed waiting <br />
        The thread state of a thread waiting with a specified wait time. A
        thread is timed out while waiting because it calls one of the following
        methods with a positive timeout specified: Thread.sleepObject.wait with
        timeoutThread.join with
        timeoutLockSupport.parkNanosLockSupport.parkUntil.
        <br />
        Ex. public static final Thread.State TIMED_WAITING
        <br />
        6) Terminated <br />
        Thread state of finished thread. The thread is ready.
        <br />
        Ex. public static final Thread.State TERMINATED
        <br />
        Below is the implementation of the thread:
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
                {"//"} Java program to demonstrate thread states
                <br />
                class thread implements Runnable {"{"}
                <br />
                public void run() {"{"}
                <br />
                {"//"} moving thread2 to timed waiting state
                <br />
                try {"{"}
                <br />
                Thread.sleep(1500);
                <br />
                {"}"}
                <br />
                catch (InterruptedException e) {"{"}
                <br />
                e.printStackTrace();
                <br />
                {"}"}
                <br />
                System.out.println(
                <br />
                "State of thread1 while it called join() method on thread2 -"
                <br />
                + Test.thread1.getState());
                <br />
                try {"{"}
                <br />
                Thread.sleep(200);
                <br />
                {"}"}
                <br />
                catch (InterruptedException e) {"{"}
                <br />
                e.printStackTrace();
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                public class Test implements Runnable {"{"}
                <br />
                public static Thread thread1;
                <br />
                public static Test obj;
                <br />
                public static void main(String[] args)
                <br />
                {"{"}
                <br />
                obj = new Test();
                <br />
                thread1 = new Thread(obj);
                <br />
                {"//"} thread1 created and is currently in the NEW
                <br />
                {"//"} state.
                <br />
                System.out.println(
                <br />
                "State of thread1 after creating it - "<br />
                + thread1.getState());
                <br />
                thread1.start();
                <br />
                {"//"} thread1 moved to Runnable state
                <br />
                System.out.println(
                <br />
                "State of thread1 after calling .start() method on it - "<br />
                + thread1.getState());
                <br />
                {"}"}
                <br />
                public void run()
                <br />
                {"{"}
                <br />
                thread myThread = new thread();
                <br />
                Thread thread2 = new Thread(myThread);
                <br />
                {"//"} thread1 created and is currently in the NEW
                <br />
                {"//"} state.
                <br />
                System.out.println(
                <br />
                "State of thread2 after creating it - "<br />
                + thread2.getState());
                <br />
                thread2.start();
                <br />
                {"//"} thread2 moved to Runnable state
                <br />
                System.out.println(
                <br />
                "State of thread2 after calling .start() method on it - "<br />
                + thread2.getState());
                <br />
                {"//"} moving thread1 to timed waiting state
                <br />
                try {"{"}
                <br />
                {"//"} moving thread1 to timed waiting state
                <br />
                Thread.sleep(200);
                <br />
                {"}"}
                <br />
                catch (InterruptedException e) {"{"}
                <br />
                e.printStackTrace();
                <br />
                {"}"}
                <br />
                System.out.println(
                <br />
                "State of thread2 after calling .sleep() method on it - "<br />
                + thread2.getState());
                <br />
                try {"{"}
                <br />
                {"//"} waiting for thread2 to die
                <br />
                thread2.join();
                <br />
                {"}"}
                <br />
                catch (InterruptedException e) {"{"}
                <br />
                e.printStackTrace();
                <br />
                {"}"}
                <br />
                System.out.println(
                <br />
                "State of thread2 when it has finished it's execution - "<br />
                + thread2.getState());
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                Output <br />
                State of thread1 after creating it - NEW
                <br />
                State of thread1 after calling .start() method on it - RUNNABLE
                <br />
                State of thread2 after creating it - NEW
                <br />
                State of thread2 after calling .start() method on it - RUNNABLE
                <br />
                State of thread2 after calling .sleep() method on it -
                TIMED_WAITING
                <br />
                State of thread1 while it called join() method on thread2
                -WAITING
                <br />
                State of thread2 when it has finished it's execution –
                TERMINATED
              </code>
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Java thread priority in multithreading</h3>
      <p>
        As we already know, Java is fully object-oriented and works in a
        multi-threaded environment where thread scheduling allocates a processor
        to a thread based on thread priority. When we create a thread in Java,
        it always gets priority. The priority can be assigned by the JVM when
        the thread is created, or it can be explicitly assigned by the
        programmer. Thread priorities is a concept where each thread has a
        priority, which in layman's terms means that every object here has a
        priority, represented by numbers between 1-10. Exception is default
        priority is 5.Minimum priority is 1.Maximum priority is 10.Here 3
        constants are defined in it as follows:\public static int
        NORM_PRIORITY\public static int MIN_PRIORITY\ public static int
        MAX_PRIORITY Let's discuss it with an example to find out how the work
        is done internally. Here we use the information collected from above as
        follows: We use the currentThread() method to get the name of the
        current thread. The user can also use the setName() method if he wants
        to name the threads according to the option for understanding.getName()
        method is used to get the thread name. The accepted priority value of a
        thread is between 1-10. Let's discuss how to get and prioritize a thread
        in Java.public final int getPriority(): The method
        java.lang.Thread.getPriority() returns the priority of the given
        thread.public final void set Priority(int newPriority): The method
        java.lang.Thread.setPriority() sets the priority of the thread to a new
        thread priority. This method throws an IllegalArgumentException if the
        value of the new Priority parameter exceeds the min(1) and max(10)
        limits.
        <br />
        Let us have a program to understand this:
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
                {"//"} via help of getPriority() and setPriority() method
                <br />
                {"//"} Importing required classes
                <br />
                import java.lang.*;
                <br />
                {"//"} Main class
                <br />
                class ThreadDemo extends Thread {"{"}
                <br />
                {"//"} Method 1<br />
                {"//"} run() method for the thread that is called
                <br />
                {"//"} as soon as start() is invoked for thread in main()
                <br />
                public void run() {"{"}
                <br />
                {"//"} Print statement
                <br />
                System.out.println("Inside run method");
                <br />
                {"}"}
                <br />
                {"//"} Main driver method
                <br />
                public static void main(String[] args) {"{"}
                <br />
                {"//"} Creating random threads
                <br />
                {"//"} with the help of above class
                <br />
                ThreadDemo t1 = new ThreadDemo();
                <br />
                ThreadDemo t2 = new ThreadDemo();
                <br />
                ThreadDemo t3 = new ThreadDemo();
                <br />
                {"//"} Thread 1<br />
                {"//"} Display the priority of above thread
                <br />
                {"//"} using getPriority() method
                <br />
                System.out.println("t1 thread priority : "<br />
                + t1.getPriority());
                <br />
                {"//"} Thread 1<br />
                {"//"} Display the priority of above thread
                <br />
                System.out.println("t2 thread priority : "<br />
                + t2.getPriority());
                <br />
                {"//"} Thread 3<br />
                System.out.println("t3 thread priority : "<br />
                + t3.getPriority());
                <br />
                {"//"} Setting priorities of above threads by
                <br />
                {"//"} passing integer arguments
                <br />
                t1.setPriority(2);
                <br />
                t2.setPriority(5);
                <br />
                t3.setPriority(8);
                <br />
                {"//"} t3.setPriority(21); will throw
                <br />
                {"//"} IllegalArgumentException
                <br />
                {"//"} 2<br />
                System.out.println("t1 thread priority : "<br />
                + t1.getPriority());
                <br />
                {"//"} 5<br />
                System.out.println("t2 thread priority : "<br />
                + t2.getPriority());
                <br />
                {"//"} 8<br />
                System.out.println("t3 thread priority : "<br />
                + t3.getPriority());
                <br />
                {"//"} Main thread
                <br />
                {"//"} Displays the name of
                <br />
                {"//"} currently executing Thread
                <br />
                System.out.println(
                <br />
                "Currently Executing Thread : "<br />
                + Thread.currentThread().getName());
                <br />
                System.out.println(
                <br />
                "Main thread priority : "<br />
                + Thread.currentThread().getPriority());
                <br />
                {"//"} Main thread priority is set to 10
                <br />
                Thread.currentThread().setPriority(10);
                <br />
                System.out.println(
                <br />
                "Main thread priority : "<br />
                + Thread.currentThread().getPriority());
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                Output <br />
                t1 thread priority: 5<br />
                t2 thread priority: 5<br />
                t3 thread priority: 5<br />
                t1 thread priority: 2<br />
                t2 thread priority: 5<br />
                t3 thread priority: 8<br />
                Currently Executing Thread: main
                <br />
                Main thread priority: 5<br />
                Main thread priority: 10
              </code>
            </pre>
          </div>
        </div>
        <br />
        Output Explanation:
        <br />
        The thread with the highest priority can be executed before other
        threads. Let's say there are 3 threads t1, t2 and t3 with priorities 4,
        6 and 1. So thread t2 starts first with maximum priority 6, then t1 is
        started and then t3.The default priority of main thread is always 5, it
        can change later. The default priority of all other threads depends on
        the priority of the main thread.
        <br />
        Now you are probably wondering what happens if we assign the same
        priorities to the threads. All thread handling is done using the thread
        scheduler. The example below of what happens when the priorities are the
        same can be referred to and discussed later as an explanation of the
        result to better understand conceptually and practically.
      </p>
    </div>
  );
};

export default Multithreading;
