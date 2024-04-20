import React from "react";

const Introduction = () => {
  return (
    <div>
      <h3>Introduction</h3>
      <p>
        Programming in an object-oriented manner is among the best methods for
        creating software. Writing classes that represent things and
        circumstances found in the actual world and then creating objects based
        on these classes is the process of writing object-oriented programming.
        Writing a class allows us to specify the general characteristics that
        all objects in that category are capable of having. In Python, a new
        statement called the class is used to create classes. we'll see that the
        built-in types we covered previously in the book can resemble the
        objects defined using classes quite a bit. Classes only apply and expand
        on the concepts we've already discussed; roughly speaking, These are
        sets of functions that process and make use of pre-built object types.
        However, classes are made to be able to generate and manage new objects
        as well as provide inheritance, which is a level of code customization
        and reuse that goes beyond anything we have seen thus far. Each object
        that is created from the class automatically has a generic behavior; we
        can then give each object any particular characteristics that we want.
        You'll be astounded at how accurately object-oriented programming can
        simulate real-world scenarios. To start, let me say that OOP is
        completely optional in Python and does not require the use of classes.
        Even basic top-level script code or simpler components like functions
        can be used to accomplish a great deal of work. People who operate in
        strategic mode—long-term product development—tend to be more interested
        in utilizing classes than those who work in tactical mode, where time is
        extremely scarce. This is because using classes successfully involves
        some upfront planning. We work with instances of a class while creating
        an object from one; this process is known as instantiation. We will
        write classes and construct instances of those classes in this chapter.
        We will designate the kind of data that can be kept in instances, and
        we'll specify what may be done with them in terms of actions.
        Additionally, we will create classes that add to the functionality of
        already existing classes, allowing related classes to exchange code more
        effectively. we will import classes created by other programmers into
        our software files and save our classes in modules. Understanding
        object-oriented programming is going to help us to see the world as a
        programmer. It’ll help us to know our code, not just what’s happening
        line by line, but also the bigger concepts behind it. By knowing the
        logic behind the classes, we will train us to think logically so we can
        write programs that effectively address almost any problem we encounter.
        Creating and Using a Class We can model almost anything using classes.
        To learn classes in Python programming language let’s first create a
        simple class called cat – not one cat in particular, but any cat. Before
        we start coding, we must first know what we know about the pet cats?
        Well, we know that they have a name and age, most of the cast jump and
        roll. These two pieces of information (name and age) and these two
        behaviors (jump and roll) will be inserted in our cat class because they
        are very common for every cat. Therefore, our class tells Python how to
        make an object representing a cat. After we create our class, we’ll use
        it to make individual instances, each of which represents one specific
        cat.
      </p>

      <p>
        <b>Creating the Cat Class</b>
        <br />
        Every instance of the Cat class that is created will have the capacity
        to sit() and roll_over() in addition to storing a name and an age:
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
                class Cat():
                {"\n"} # A simple attempt to a dog.
                {"\n"} def __init__(self, name, age):
                {"\n"} # Initialize name and age attributes.
                {"\n"} self.name = name
                {"\n"} self.age = age
                {"\n"}
                {"\n"} def sit(self):
                {"\n"} # Simulate a dog sitting in response to a command.
                {"\n"} print(self.name.title() + " is now sitting.")
                {"\n"}
                {"\n"} def roll(self):
                {"\n"} # Simulate rolling over in response to a command.
                {"\n"} print(self.name.title() + " rolled over!")
              </code>
            </pre>
          </div>
        </div>
        <br />
        In the above code in the first line, we define a class called Cat. By
        convention, capitalized names refer to classes in Python. Because we are
        creating the class from scratch therefore the parentheses in the class
        definition are empty. The second line is the docstring that describes
        what this class will do.
        <br />
        <b>The __init__() Method</b>
        <br />
        If there is a function that is a part of the class then it is called
        method. Everything we learn about functions is also applied to it. The
        only difference is that how we call the methods. In the above code line
        third we created a __init__() method, it is a special method that Python
        runs automatically whenever we create a new instance based on our Cat
        class in this program. To avoid conflicts with your method names and
        Python's default method names, this method has two leading and two
        trailing underscores.
        <br />
        In the above code, we define the __init__() method to have three
        parameters: self, name, and age. In the method specification, the
        self-argument needs to be included first, before any other parameters.
        It needs to be in the definition since the __init__() method will
        automatically pass the self-argument when Python calls it later (to
        create an instance of Cat). Self, a reference to the instance itself, is
        automatically passed along with every method call linked to a class;
        this allows the specific instance to access the properties and methods
        within the class. Python will invoke the Cat class's __init__() function
        when we create an instance of Cat.
        <br />
        Name and age are the only two factors for which we will supply values.
        Cat() will take two arguments: a name and an age. Since self is supplied
        automatically, we won't need to pass it. Only the final two parameters,
        name, and age, will have values whenever we want to create an instance
        of the Cat class.
        <br />
        The variable which we define as the __init__() function has its prefix
        self. Every method in the class has access to any variable prefixed with
        self, and we can also access these variables from any instance that is
        created from the class. self.name = name assigns the value from the
        parameter name to the variable name, which is subsequently linked to the
        newly formed instance. When self.age = age, the identical procedure
        takes place. Attributes are variables that are available through
        examples such as these.
        <br />
        The Cat class has two other methods also defined: sit() and roll(). We
        just create these methods to have one parameter, self, as they don't
        require any more data, such as a name or age. These methods will be
        available for the instances we construct later. To put it another way,
        they will be able to roll and sit. roll() and sit() don't do anything
        right now. All they do is produce an alert stating that the cat is
        either sitting or rolling. However, the idea may be applied to more
        practical scenarios: if this class were a feature of a real computer
        game, these methods would include code to make a happy cat sit and roll
        about. These methods would instruct motions that would cause a cat robot
        to sit and roll if this class was created to control a robot.
        <b>Why Use Classes?</b>
        <br />
        In Python, classes offer an ordered and reusable approach to grouping
        data and functions. They let us create objects with related methods
        (functions) and attributes (variables). This facilitates the logical
        organization of code, encourages code reuse, and makes complicated
        system management and maintenance simpler. Better modularity and
        abstraction can be attained by enclosing data and behavior into classes.
        These are fundamental concepts in software engineering. Classes also
        feature inheritance, which makes it possible to build new classes off of
        preexisting ones. This encourages the hierarchical structuring of code
        and makes code reuse easier. All things considered, classes are
        essential to Python object-oriented programming and allow for the
        building of scalable, maintainable, and effective codebases. If we use
        classes, then we can model more real-world structures and relationships.
        There are two aspects of OOP prove useful here: Inheritance: Python's
        sophisticated inheritance mechanism lets a class inherit properties and
        functions from another class, called the parent or base class. This idea
        encourages the hierarchical arrangement of code and makes code reuse
        easier. Let’s look at a very basic and simple example of Inheritance in
        Python:
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
                class Animal:
                {"\n"} def __init__(self, name):
                {"\n"} self.name = name
                {"\n"}
                {"\n"} def make_sound(self):
                {"\n"} pass
                {"\n"}
                {"\n"}class Dog(Animal): # Dog class inherits from Animal class
                {"\n"} def make_sound(self):
                {"\n"} return "Woof!"
                {"\n"}
                {"\n"}class Cat(Animal): # Cat class inherits from Animal class
                {"\n"} def make_sound(self):
                {"\n"} return "Meow!"
                {"\n"}
                {"\n"}# Creating instances of Dog and Cat
                {"\n"}dog = Dog("Buddy")
                {"\n"}cat = Cat("Whiskers")
                {"\n"}
                {"\n"}# Calling method make_sound on instances
                {"\n"}print(dog.name + ": " + dog.make_sound()) # Output: Buddy:
                Woof!
                {"\n"}print(cat.name + ": " + cat.make_sound()) # Output:
                Whiskers: Meow!
              </code>
            </pre>
          </div>
        </div>
        <br />
        In the above example, we construct a base class called Animal, which
        includes an abstract make_sound method that is not implemented, and a
        __init__ method that initializes the name attribute. Next, we define two
        subclasses that derive from Animals: Dog and Cat. Every subclass offers
        a unique make_sound function implementation. Dog and Cat instances
        inherit the name attribute from the Animal class when they are created.
        Python searches the subclass for the make_sound function before calling
        it on these instances. Dog and Cat both override the make_sound method,
        therefore when the relevant method related to the subclass is called, we
        can obtain distinct noises for each animal. Composition: In Python,
        classes are created by composing existing classes or objects, as opposed
        to inheriting their functionality, according to the composition design
        concept. This encourages the construction of complex objects by merging
        simpler ones, allowing for increased flexibility and adaptability. Let’s
        look at a very basic and simple example of Composition in Python:
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
                class Engine:
                <br />
                def start(self):
                <br />
                return "Engine started"
                <br />
                <br />
                def stop(self):
                <br />
                return "Engine stopped"
                <br />
                <br />
                class Car:
                <br />
                def __init__(self):
                <br />
                self.engine = Engine() # Car has an Engine
                <br />
                <br />
                def start(self):
                <br />
                return self.engine.start()
                <br />
                <br />
                def stop(self):
                <br />
                return self.engine.stop()
                <br />
                <br />
                # Creating an instance of Car
                <br />
                my_car = Car()
                <br />
                <br />
                # Starting and stopping the car
                <br />
                print(my_car.start()) # Output: Engine started
                <br />
                print(my_car.stop()) # Output: Engine stopped
              </code>
            </pre>
          </div>
        </div>
        <br />
        There are two classes in this example: Engine and Car. The Car class has
        an instance of Engine as one of its properties; it does not inherit from
        Engine. This is the application of composition.
        <br />
        An instance of the Engine is automatically created when we create an
        instance of the Car. The Car class's start and stop methods transfer
        their functionality to the equivalent Engine class methods, so enabling
        the Car object to compose the behavior of the Engine object. In some
        cases, composition is preferable to inheritance because it allows for
        more freedom in object formation, encourages code reuse without creating
        tight coupling between classes, and makes code maintenance and testing
        simpler.
        <br />
        All applications that can be broken down into a collection of objects
        can benefit from the general OOP concepts of inheritance and
        composition. For instance, interfaces in most GUI systems are built as
        collections of widgets, such as buttons, labels, and so on, all of which
        are drawn. Upon drawing their container (composition). Furthermore, we
        might be able to create our bespoke widgets, which are specialized
        variants of more universal interface devices (inheritance). Examples of
        these would be buttons with distinctive typefaces, labels with fresh
        color schemes, and the like - which are specialized versions of more
        general interface devices (inheritance).
        <br />
        Classes are Python program units, similar to functions and modules, from
        a more practical programming standpoint. Think of them as an additional
        container for data and logic. In actuality, classes, like modules, also
        define new namespaces. However, in contrast to Classes differ from other
        program units we've already seen three important ways that increase
        their utility for creating new objects:
        <br />
        Multiple instances: In Python, the ability to generate several objects
        (instances) of the same class is referred to as multiple instances.
        Since each instance is independent of the others, they can each execute
        methods independently and have their own set of characteristics. This
        makes it possible to create several unique objects that may have various
        states but behave similarly. Let’s see a Python code for a better
        understanding:
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
                class Rectangle:
                <br />
                def __init__(self, width, height):
                <br />
                self.width = width
                <br />
                self.height = height
                <br />
                <br />
                def area(self):
                <br />
                return self.width * self.height
                <br />
                <br />
                # Creating multiple instances of Rectangle
                <br />
                rectangle1 = Rectangle(5, 4)
                <br />
                rectangle2 = Rectangle(3, 7)
                <br />
                rectangle3 = Rectangle(6, 2)
                <br />
                <br />
                # Calculating and printing areas of each rectangle
                <br />
                print("Area of rectangle 1:", rectangle1.area()) # Output: Area
                of rectangle 1: 20
                <br />
                print("Area of rectangle 2:", rectangle2.area()) # Output: Area
                of rectangle 2: 21
                <br />
                print("Area of rectangle 3:", rectangle3.area()) # Output: Area
                of rectangle 3: 12
              </code>
            </pre>
          </div>
        </div>
        <br />
        The rectangle's width and height are defined in this example, along with
        a method called area() that determines the rectangle's area. The
        Rectangle class is then instantiated three times, with different width
        and height values (rectangle1, rectangle2, and rectangle 3). Python
        determines the area of each instance based on its unique width and
        height characteristics when we call the area() function on that
        instance. We may thus work with numerous rectangles at once because each
        instance runs independently. Customization via inheritance: In
        object-oriented programming, customization via inheritance is a potent
        idea that lets you expand or modify pre-existing classes to meet
        specific requirements. It works by inheriting their methods and
        attributes. This method allows for flexibility and adaptation in
        software architecture while promoting modularity and code reuse. Let’s
        see a Python code for a better understanding:
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
                class Animal:
                <br />
                def __init__(self, name):
                <br />
                self.name = name
                <br />
                def speak(self):
                <br />
                return "Generic animal sound"
                <br />
                class Dog(Animal):
                <br />
                def speak(self):
                <br />
                return "Woof!"
                <br />
                class Cat(Animal):
                <br />
                def speak(self):
                <br />
                return "Meow!"
                <br />
                class Bird(Animal):
                <br />
                def speak(self):
                <br />
                return "Chirp!"
                <br />
                # Creating instances of different animal types
                <br />
                dog = Dog("Buddy")
                <br />
                cat = Cat("Whiskers")
                <br />
                bird = Bird("Tweetie")
                <br />
                # Calling the speak method on each animal
                <br />
                print(dog.name + " says:", dog.speak()) # Output: Buddy says:
                Woof!
                <br />
                print(cat.name + " says:", cat.speak()) # Output: Whiskers says:
                Meow!
                <br />
                print(bird.name + " says:", bird.speak()) # Output: Tweetie
                says: Chirp!
              </code>
            </pre>
          </div>
        </div>
        <br />
        Tweetie says: Chirp! The base class Animal in this example has a generic
        speak() function. Next, we define the Dog, Cat, and Bird subclasses,
        which are all descendants of the Animal class. These subclasses override
        the speak() method, substituting their unique implementations for the
        animal sounds. We can make specific Animal classes that are suited to
        various animal species by using inheritance to modify the behavior of
        each subclass. This method preserves a distinct and well-organized class
        hierarchy while making it simple to extend and modify functionality.
        Operator overloading: Python's operator overloading feature lets you
        rewrite the way operators act on objects belonging to a custom class.
        You can define the behavior of operators like ‘+’, ‘-‘, ‘*’, ‘/’,
        ‘==’,’!=’, {"'<'"}, {"'>'"}, and so on by defining special methods
        within a class. This allows you to operate on objects in a way that
        makes sense for the particular context of that class. Let’s see a Python
        code for a better understanding:
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
                class Point:
                <br />
                def __init__(self, x, y):
                <br />
                self.x = x<br />
                self.y = y<br />
                def __add__(self, other):
                <br />
                return Point(self.x + other.x, self.y + other.y)
                <br />
                def __sub__(self, other):
                <br />
                return Point(self.x - other.x, self.y - other.y)
                <br />
                def __mul__(self, scalar):
                <br />
                return Point(self.x * scalar, self.y * scalar)
                <br />
                def __eq__(self, other):
                <br />
                return self.x == other.x and self.y == other.y
                <br />
                def __str__(self):
                <br />
                return f"({self.x}, {self.y})"
                <br />
                # Creating two Point objects
                <br />
                point1 = Point(2, 3)
                <br />
                point2 = Point(4, 5)
                <br />
                # Adding two Point objects
                <br />
                result_addition = point1 + point2
                <br />
                print("Result of addition:", result_addition) # Output: Result
                of addition: (6, 8)
                <br />
                # Subtracting two Point objects
                <br />
                result_subtraction = point2 - point1
                <br />
                print("Result of subtraction:", result_subtraction) # Output:
                Result of subtraction: (2, 2)
                <br />
                # Multiplying a Point object by a scalar
                <br />
                result_multiplication = point1 * 2<br />
                print("Result of multiplication:", result_multiplication) #
                Output: Result of multiplication: (4, 6)
                <br />
                # Testing equality of two Point objects
                <br />
                print("Are point1 and point2 equal?", point1 == point2) #
                Output: Are point1 and point2 equal? False
                <br />
              </code>
            </pre>
          </div>
        </div>
        <br />
        # Creating two Point objects
        <br />
        point1 = Point(2, 3)
        <br />
        point2 = Point(4, 5)
        <br />
        # Adding two Point objects
        <br />
        result_addition = point1 + point2
        <br />
        print("Result of addition:", result_addition) # Output: Result of
        addition: (6, 8)
        <br />
        # Subtracting two Point objects
        <br />
        result_subtraction = point2 - point1
        <br />
        print("Result of subtraction:", result_subtraction) # Output: Result of
        subtraction: (2, 2)
        <br />
        # Multiplying a Point object by a scalar
        <br />
        result_multiplication = point1 * 2<br />
        print("Result of multiplication:", result_multiplication) # Output:
        Result of multiplication: (4, 6)
        <br />
        # Testing equality of two Point objects
        <br />
        print("Are point1 and point2 equal?", point1 == point2) # Output: Are
        point1 and point2 equal? False
        <br />
        Result of addition: (6, 8)
        <br />
        Result of subtraction: (2, 2)
        <br />
        Result of multiplication: (4, 6)
        <br />
        Are point1 and point2 equal? False
        <br />
        We define a Point class in this example, which represents a point in two
        dimensions. By defining custom methods like __add__, __sub__, __mul__,
        and __eq__, we overload the operators for addition (+), subtraction (-),
        and multiplication (*), as well as the equality (==) operator. We define
        the behavior of Point class instances when these operators are applied
        by implementing these methods. This makes it possible for us to operate
        on bespoke objects in a class-appropriate and understandable manner by
        using well-known operators.
        <br />
        <b>Making an Instance from a Class</b>
        <br />
        Consider a class as a set of instructions for how to make an instance.
        The class Cat is a collection of guidelines that teach Python how to
        create unique instances that reflect particular Cats. Now let’s create
        an instance that represents a specific cat:
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
                class Cat():
                <br />
                # A simple attempt to a dog.
                <br />
                def __init__(self, name, age):
                <br />
                # Initialize name and age attributes.
                <br />
                self.name = name
                <br />
                self.age = age
                <br />
                <br />
                def sit(self):
                <br />
                # Simulate a dog sitting in response to a command.
                <br />
                print(self.name.title() + " is now sitting.")
                <br />
                <br />
                def roll(self):
                <br />
                # Simlate rolling over in response to a command.
                <br />
                print(self.name.title() + " rolled over!")
                <br />
                <br />
                my_cat = Cat('Willie', 6)
                <br />
                <br />
                print("My cat's name is " + my_cat.name.title() + ".")
                <br />
                print("My cat is " + str(my_cat.age) + " years old.")
                <br />
              </code>
            </pre>
          </div>
        </div>
        <br />
        The cat class here we’re using is the one that we created in the above
        example. In the last third line of the code, we tell Python to create a
        cat whose name is “Willie” and whose age is 6. Upon reading this line,
        Python invokes Cat's __init__() function with the parameters 'willie'
        and 6. Using the parameters we supply, the __init__() method creates an
        instance that represents this specific cat and sets the name and age
        attributes. Python automatically returns an instance representing this
        cat in place of an explicit return statement when using the __init__()
        method. That instance is kept in the variable my_cat. Here is where the
        naming convention comes in handy: we can typically infer that a
        lowercase name like my_cat refers to a single instance derived from a
        class, while a capitalized name like Cat refers to a class.
        <br />
        <b>Accessing Attributes</b>
        <br />
        Dot notation is used to access an instance's characteristics. We
        retrieve the value of the my_cat attribute name at the second last line
        by writing my_cat.name In Python, dot notation is frequently used. This
        syntax shows how to find the value of an attribute in Python. In this
        case, Python examines the instance my_cat before determining the name of
        the attribute connected to my_cat. This is the same property that the
        class Cat uses to refer to as self.name. We apply the same method to
        work with the age attribute in the final line of the code.
        My_cat.name.title() causes the value of my_cat's name attribute,
        "willie," to begin with a capital letter in our initial print statement.
        The value of the age attribute for my dog, 6, is converted to a string
        in the second print statement using str(my_cat.age).
        <br />
        <b>Calling Methods</b>
        <br />
        Any method defined in the class Cat can be called using dot notation
        once an instance has been created. Allow our dog to sit and roll.
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
                class Cat():
                <br />
                # A simple attempt to a dog.
                <br />
                def __init__(self, name, age):
                <br />
                # Initialize name and age attributes.
                <br />
                self.name = name
                <br />
                self.age = age
                <br />
                <br />
                def sit(self):
                <br />
                # Simulate a dog sitting in response to a command.
                <br />
                print(self.name.title() + " is now sitting.")
                <br />
                <br />
                def roll(self):
                <br />
                # Simulate rolling over in response to a command.
                <br />
                print(self.name.title() + " rolled over!")
                <br />
                <br />
                my_cat = Cat('Willie', 6)
                <br />
                my_cat.sit()
                <br />
                my_cat.roll()
                <br />
              </code>
            </pre>
            <br />
            Output:
            <br />
            <code>
              Willie is now sitting.
              <br />
              Willie rolled over!
              <br />
            </code>
          </div>
        </div>
        <br />
        To invoke a method, specify the desired method and the instance name
        (my_cat in this case), separated by a dot. Python searches the class Cat
        for the sit() function and executes it when it reads my_cat.sit().
        Python uses the same interpretation for the line my_cat.roll(). This
        grammar has a lot of practical applications. When methods and attributes
        have suitably descriptive names, such as roll(), sit(), age, and name,
        we can readily deduce what a block of code, even one we haven't seen
        before, is meant to accomplish.
        <br />
        <b>Creating Multiple Instances</b>
        <br />
        We can create as many as instances from the class we want. Let’s create
        another cat called your_cat”:
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
                class Cat():
                <br />
                # A simple attempt to a dog.
                <br />
                def __init__(self, name, age):
                <br />
                # Initialize name and age attributes.
                <br />
                self.name = name
                <br />
                self.age = age
                <br />
                <br />
                def sit(self):
                <br />
                # Simulate a dog sitting in response to a command.
                <br />
                print(self.name.title() + " is now sitting.")
                <br />
                <br />
                def roll(self):
                <br />
                # Simulate rolling over in response to a command.
                <br />
                print(self.name.title() + " rolled over!")
                <br />
                <br />
                my_cat = Cat('Willie', 6)
                <br />
                your_cat = Cat('Lucky', 3)
                <br />
                <br />
                print("My cat's name is " + my_cat.name.title() + ".")
                <br />
                print("My cat is " + str(my_cat.age) + " years old.")
                <br />
                my_cat.sit()
                <br />
                <br />
                print("\nYour cat's name is " + your_cat.name.title() + ".")
                <br />
                print("Your cat is " + str(your_cat.age) + " years old.")
                <br />
                your_cat.sit()
                <br />
              </code>
            </pre>
            <br />
            Output:
            <br />
            <code>
              My cat's name is Willie.
              <br />
              My cat is 6 years old.
              <br />
              Willie is now sitting.
              <br />
              <br />
              Your cat's name is Lucky.
              <br />
              Your cat is 3 years old.
              <br />
              Lucky is now sitting.
              <br />
            </code>
          </div>
        </div>
        <br />
        Two cats, Willie and Lucky, are created in this scenario. Every cat is a
        unique entity possessing unique characteristics and having the ability
        to perform identical behaviors. Python would still generate a different
        instance of the Cat class even if we gave the second cat the same name
        and age. As long as you provide each instance a unique variable name or
        ensure that it has a unique place in a list or dictionary, we can create
        as many instances of a given class as you require.
      </p>
    </div>
  );
};

export default Introduction;
