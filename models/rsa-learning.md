## Learning with RSA

Our general goal is to determine whether RSA provides a good inductive bias for learning. There are several dimensions along which RSA may improve learning:

1. Training set compression/memorization. RSA may reduce the number of training examples necessary to learn correct interpretations for utterances in the training data.
2. Generalization to new utterance/context pairs. Given an utterance U that has been observed in particular contexts, and a context C which has been observed for particular utterances (but not utterance U), RSA may lead to better interpretations of U in context C. More generally, for n utterances and k contexts, there are n*k utterance-context pairs; RSA may make learning linear (or something similar) in n and k. 
3. Generalization to new contexts. If the model has learned to interpret utterances in a particular set of contexts, it may be able to perform 0-shot learning for new contexts, i.e. interpret the utterances correctly in contexts which were not observed in the training set. 
4. Generalization to new observation types. We may not always observe a distribution over worlds (or a sample from this distribution) given an utterance. Instead, we may observe an action taken by the listener, given a particular goal and set of affordances. RSA may improve generalization to new tasks, i.e. predicting listener actions given new goals and affordances.

#Speaker knowledge