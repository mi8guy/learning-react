Story time:  
-  Once I went to the doctor, for cold   
-  Along with cold medicine, he also gave a medicine for fever.
- Upon asking why, he said he knows you'll get fever in the night. Hence precaution.

Story ka tatparya : 
-  Should we learn virtual DOM now? yes.
-  is it used even now in react? No.  
<br>

It is asked in interviews only because this question has been a norm or to test some base knowledge.

Nowadays, virtual dom is NOT in use heavily. Internal concept have changed a lot.

To update read this article:
-  [acdlite / react-fiber-architecture](https://github.com/acdlite/react-fiber-architecture)

Having a closer look at ReactDOM.createRoot() method.

The createRoot() creates a DOM like structure behind the scenes just like Browser DOM.

It compares the main DOM and its own DOM and then only updates the things that has changes.

Browser removes the whole DOM and builds another one. This is page reload.

But in virtual DOM you can track whole DOM in a tree like structure and changes only differences.

Now suppose, if there is element, say a button, that is network dependent.

Now consider that in the process of updating the button text, another network call brings in a new update, and then again a new update...

So it will update twice or thrice.
But if instead, we would have waited and directly updated the last call.

Would it be possible? This were the issues faced by the React team.

There may be some UI that dont necessarily need instant updates. So we might drop some calls and send new calls. 

So a better algorithm could be designed for UI updation.

As a result, the Fiber algorithm was developed. see link above



