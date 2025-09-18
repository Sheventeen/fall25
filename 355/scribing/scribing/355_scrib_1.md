Princepreet Singh
24014521

LESSON 1:
    What is JavaScript? 
        JS powers the web. One of the only languages that is pre-installin in 99% of computers in even
        every OS.

        Compiled VS Interpretted languages:
        Compiled (C++, C, Rust...):
            -Code => compiler => machine code => 'Hello World'
            -we must compile the code first in order for us to run it(
                like using g++ in C++ then a. out)
        Interpreted (Python...):
            -Code => Interpreter
            -the code is ran line by line and does not need to compile

        Compile allows us to skip redundant steps in our code such as
        (Following code written in python but python is interpreted: imagine it was c++)
        for i in range(1000000000000):
            sum += 1
        return sum
            *Compiler would see that in every runtime, this is always the same reguardless of
            input, so it would optimize it and preinstall sum as 100000000000, skipping the calculations at runtime

    JavaScript is considered to be BOTH:
        -it will run line by line, but when it comes to something complex such as a while loop, it will
        send the code to a compiler to optimize the problem. It does this via the JS engine (v8)
    JS is a high level multiparadigm, dynamically typed, single threaed, garbage collcted and event driven scripting language

LESSON 2:
    JS fuctions are first class objects
    we can do the following to define functions in our programs
        - let mySum = function sum(a,b){
            return a + b
        }
        - const square = (x) => {
            return x * x
        }
        - functions myCube(y){
            return y * y * y
        }
    Data types:
        -Number
        -String
        -Boolean
        -Undefined
        -Null
        -Big int
        -Symbol
    Spread operator (using ...):
        we can use SO to concatanate arrays together such as:
            arr = [1,2,3,4]
            newArr = [...arr,5,6,7]
            (newArr = [1,2,3,4,5,6,7])