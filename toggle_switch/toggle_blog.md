# Nonlinear Analysis of Toggle Switch
## Class project : Nonlinear Dynamics, Winter 2018-19

### Abstract - 
A toggle switch is a bistable system that can be engineered out of synthetic biological parts. 
Since the first demonstration of the toggle switch<sup>1</sup> in 2000, there have been various studies and experiments in the past decade that involve the use of such dynamics.
In this project, I studied and analyzed the nonlinear characteristics of a toggle switch model. 
Particularly, I give theoretical results regarding the stability of the equilibrium points of the two protein toggle switch circuit. 
Using this analysis, I give an estimate of the domain of attraction of a stable equilibrium point using Lyapunov methods. 
I also show that the toggle switch system is input to state stable and give appropriate bounds and convergence rates for it. 

### Toggle switch dynamics - 
![toggle-switch](model_pic.PNG)

#### Domain of attraction
![math1](nullcline_math.PNG)

### Input to state stability
![iss_model](leaky_expression.PNG)

### Convergence under disturbances
![convergence](iss_math.png)

### For more details and proofs, you can read the [technical report](https://github.com/ayush9pandey/toggle_switch/blob/master/final%20report.pdf).
### All computation and simulations performed in Python - Code available [here](https://github.com/ayush9pandey/toggle_switch).

### References -
1. Gardner, Timothy S., Charles R. Cantor, and James J. Collins. "Construction of a genetic toggle switch in Escherichia coli." Nature 403.6767 (2000): 339.


Note : If you have any comments, please feel free to email me (apandey AT caltech dot edu). I'll be glad to discuss the topics and related research. 