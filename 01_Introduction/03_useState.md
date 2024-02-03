## Question: Upon implementing counter, what happens if you use multiple times `setCounter(counter + 1)`

Lets say counter was initialized to 15  

`const [counter, setCounter] = useState(15)

 const addValue = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
}`

What will be reflected on UI now after clicking add button?


It seems that we see 16 and not 19.

What seems to be happening is, useState() sends updates to UI in batches. 

SO all these setCounters are updating the same counter.
Remember fiber's diffing algo, it is based on that. Updating in batches!  

But what if I wanted to increment in this particular way only...  

You need to use in such a way...  
setCounter takes in a callback.  

`
setCounter((prevCounter) => {
    prevCounter + 1
})
setCounter((prevCounter) => {
    prevCounter + 1
})
setCounter((prevCounter) => {
    prevCounter + 1
})
setCounter((prevCounter) => {
    prevCounter + 1
})
`

This updates properly in sequence. By taking previous State.

And now ouput will be 19.

