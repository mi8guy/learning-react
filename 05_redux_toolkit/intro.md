Until now we saw functional components, but there are class based components as well.

Companies are transitioning from class based to functional components.

Class based and Classic redux are topics that are skippable but having knowledge is nice.

Nowadays, we have redux-toolkit which a modern upgrade to redux.

we will see how context API helps to understand redux and help to transition to redux-toolkit.



3 things : 
-  Redux -- around 2015
    -  [website](https://redux.js.org)
-  react-redux
    -  [website](https://react-redux.js.org)
-  redux-toolkit
    -  [website](https://redux-toolkit.js.org)


First thing, just as there is React and React-dom and then there is react-native libraries

Redux also has similar story. It is an independent state management library. And then there is react-redux, to use redux in react.  
We need both Redux and react-redux.  

Why Redux-toolkit requires undestanding the following story

Earlier, there used to be issues while passing props, from parent to some inner component.

So, the props used to get drilled to intermediate components as well, that had absolutely no use of those props. They simply used to pass on those props to next inner component.

So, this was the issue.

In context API we created center, and provided a hook to access the value and also wrapped a provider.

But this story goes further beyond. Context API is relatively newer.

Even before redux, there was flux.

To solve this issue, facebook's team came up with `Flux`. 

Flux had a central store. Much like what we studied in context API.

But the important aspect of it was the `data-flow`. 

Even context API doesn't have as much stronger data flow as Redux.

So the thing about such central data managment stores' data flow is that data should be written in a certain way and be read in a certain way.

Unlike we saw in context API, at some place we had to spread the data so as to not overwrite it.

Flux was alright, data flow was alright, aorund 2015 in a conference, Dan Abermov and Andrew introduced redux.

Redux was a better version of flux, not so much though. Terms like single source of truth, state should be read only, never mutate your state, changes should be made via pure functions called reducers. All such things started in redux.

Redux works in many JS frameworks, not just react. It is a standalone library.

Redux has some problems. Concepts like redux thunk, some middlewares that help in debugging. Some redux chrome addons. All these were not refined, took a lot of setup.  

As we saw with context API, setup took some time. In redux it took even more time 3 to 4 times more.  

After some issues in thunk, middlewares, some sideeffects, redux-toolkit was introduced.

It is batteries included, no need for lengthy setups. Has simple flow, many things are managed by it internally. Easy way to make store. Built in middlwares, slicing, thunk is included and so on....

*********  END OF HISTORY ************   

## concepts: 

### store
central single source of truth.

### reducers
to make changes in store.

### useSelector
to select something from store.

### useDispatch
to send something to store.



