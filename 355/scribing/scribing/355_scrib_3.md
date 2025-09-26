CH5:

    LibUV:
        Library in JS that is ran in C language and makes it so that we can run code in 
        an async fashion. Normally in JS we only have a single thread that can run at a time. But
        with the help of LibUV, we can send an async code to it and while v8 runs in the background, 
        going through all of the the source code unless it is told to wait, libuv will take the task and
        work on it until v8 is free and hand over the results to v8 to display to the user. This is something
        we will have to plan our code accordingly over since we have to explicitly make sure that we are
        running our code async or sync, depending on the use case

CH6:
    When using an async function, usually in the function signature at the end, you will have a callback func-
    tion where it will run once the event loop from libuv is done running the async task, and when v8 is free to take
    it from the event queue. 
    EX:
    fs.readFile('input/file01.txt', 'utf8', doAfterReading);
    functions doAfterReading(err, data){
        if (err){
            clg(err)
        }
        else{
            clg('finished reading')
        }
    }