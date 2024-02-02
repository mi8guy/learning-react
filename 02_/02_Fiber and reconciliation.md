The goal of React fiber is to improve the sustainability for aread like animation, layout and gestures.

The issue we talked about, sudden and propmt updates.

Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

Reconciliation - Reacts algorithm to recursively reconsider what need to be updated and what not.

Here is the takeaway from the video:

1. The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.

2. But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.

3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.

4. But some values depends on network call so if we update a value it might get update immediately via a network call.

5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.

6. The current algo used by the React is called the React Fibre algo.

7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.

8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.

9. In UI it is not necessary for every update to be applied immediately. */

<br/>
Why list need keys now?  
<br/>
Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:

-  Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.

-  Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."
