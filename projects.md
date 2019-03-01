# Current Projects
* Control theory and synthetic biology - Working on applications of three primary tools from control theory to synthetic biology.
	- Model reduction
	- Parameter identification
	- Nonlinear analysis
	
* Other current projects that I am working on are described in the following section

## Software Tools for Synthetic Biology
* sbmlsense - Python toolbox for sensitivity analysis of biomolecular systems. There are plenty of tools available for sensitivity analysis of biological systems such as [COPASI](http://copasi.org/), [AMIGO](https://sites.google.com/site/amigo2toolbox/features) and many more. However, there are a few important features that we aim to develop in sbmlsense such as having capability to do sensitivity analysis and inform the parameter identification algorithms that follow. Apart from the identifiability analysis, we envision sbmlsense to be used as a standalone tool for sensitivity analysis for multiple types of data (and possibly also together) such as multiple time series data together, distributional data etc. 

* biosysid - Serving as an extension to [bioscrape](https://github.com/ananswam/bioscrape), biosysid is the parameter identification toolbox for biological systems. 
	- Deterministic parameter estimation
	- Stochastic parameter estimation using MCMC bayesian inference algorithm (using [emcee](http://dfm.io/emcee/current/)
	
* bioCRNpyler - Python toolbox to create CRN models in SBML for biomolecular mechanisms.
A subset of functionalities in bioCRNpyler would enable the following modeling and simulation features
	- User friendly and customizable Python based software
	- SBML models of cell-free experiments.  
	- Running simulations for some of the most common transcription-translation experiments
	- Default support for [bioscrape](https://github.com/ananswam/bioscrape), [roadrunner](http://sys-bio.github.io/roadrunner/python_docs/using_roadrunner.html#running-simulations) for fast stochastic and deterministic simulations
	- Easily add new mechanisms, and components to extend modeling features.

My current progress is available at [my fork](https://github.com/ayush9pandey/BioCRNPyler) for the [original repository](https://github.com/WilliamIX/BioCRNPyler)

# Completed projects
* Intracellular transport and model composition using subsbml
	- Modeling of IPTG transport circuit (IPTG molecules transport over vesicle membrane pores created by a protein in the cell-free experiment, the transported molecule generate fluorescence)
	- Modeling of logic gates that involve multiple biocircuits working together to create a logic function
	
All code and these examples are available [here](https://github.com/BuildACell/subsbml/tree/master/examples)

* [Sub-SBML](#subsbml) : A Subsystem Interaction Modeling Toolbox for SBML Models - [Github, subsbml](https://github.com/BuildACell/subsbml/)
	- I gave a talk about this toolbox at Combine 2018 conference at Boston, the abstract for the talk is here - 
	
## <a name = "subsbml">Sub-SBML</a> : A Subsystem Interaction Modeling Toolbox for SBML Models
*Ayush Pandey and Richard Murray*

We present Sub-SBML, a Python based toolbox to create, edit, combine, and model interactions among multiple SBML models. Sub-SBML works with a “subsystem” architecture of modeling where a single SBML model can be contained within a subsystem. Three major functionalities are developed in Sub-SBML that take advantage of this subsystem framework of modeling – creating subsystems, combining multiple subsystems, and modeling interactions such as transport of molecules and input-output relationships among multiple subsystems.
Sub-SBML provides functions to create subsystems for SBML models in order to use various utility functions to edit the model (such as renaming different lists of model components, creating multiple components at once, integrations for different simulator options, simulating variable species amount in a model etc). It is often desired in modeling of compounded biomolecular systems to combine multiple smaller models for different modules. The primary features of Sub-SBML allow for modeling of such systems by creating subsystems for different models and then combining these subsystems as desired, while also modeling the interactions among the models. A list of subsystems may be combined by specifying a list of species which would be shared in the final combined model. The toolbox also provides functions to model the cases when it is desired that all species that have the same name be a single combined species in the final model.

Sub-SBML can also be used to model compartments in SBML for modeling the transport of species between different models. A subsystem object in Sub-SBML consists of an SBML model that can have one compartment to hold all the species of that model. Multiple subsystems may be placed inside a “system”. A system object in Sub-SBML acts as a container for subsystems. Subsystems may be defined to be internal to a system, external to a system, or as membranes to a system. Hence, an SBML model of a system would consist of two compartments – internal and external. The membrane subsystem will also have these two compartments and reactions modeling the transport of species across it. A system model can be generated that would give a combined model of all subsystems that are internal, external and set as membrane to this system, hence modeling the transport across this system container. Similarly, multiple system objects can be modeled and interactions across multiple systems may be modeled as well.

We consider an example of IPTG transport across synthetic vesicles when α-hemolysin is expressed inside the vesicle, which creates pores in the membrane to allow transport of IPTG molecules from the environment to inside the vesicle. We demonstrate the use of Sub-SBML to model this system in SBML. We also consider other synthetic biological circuits to demonstrate input-output species interactions among subsystems and to obtain combined SBML models.

[Wiki](https://github.com/BuildACell/subsbml/wiki)

* Other Important links 
		1. bioscrape  
		   - Wiki/Documentation - [Github](https://github.com/ananswam/bioscrape/wiki), [Paper](https://www.biorxiv.org/content/early/2017/03/27/121152)
		   - Download - [link](https://omictools.com/bio-circuit-stochastic-single-cell-reaction-analysis-and-parameter-estimation-tool)
		2. BioSIMI - [Github](https://github.com/MiroGasparek/BioSIMI)
		3. SimBiology - MATLAB [toolbox](https://www.mathworks.com/products/simbiology.html)
		4. SBML 
			- [Webpage](http://sbml.org)
			-  [A simple example in SBML](http://sbml.org/More_Detailed_Summary_of_SBML)
			-  [Specifications and Packages](http://sbml.org/Documents/Specifications)
	- Some good beginner's resources for people with non-biology background
	   1. Towards Genetically-Programmed Synthetic Cells and Multi-Cellular Machines. [PDF](http://www.cds.caltech.edu/~murray/wiki/images/2/23/Dod16-vbff.pdf)
		2. CS + Biology - Prof. Richard Murray, Caltech. [YouTube](https://youtu.be/dPcObYcFU_I) 
		3. Del Vecchio, Domitilla, and Richard M. Murray. Biomolecular feedback systems. Princeton, NJ: Princeton University Press, 2015. [Link](http://www.cds.caltech.edu/~murray/BFSwiki/index.php?title=Main_Page)
		
	- April 2018 - Sept 2018

# Past projects 

* Study of fundamental limits and tradeoffs in active and passive systems 
	- Jan - Apr 2018

* i-Bike, IIT Kharagpur
	- Won various accolades for our student project of an autonomous bicycle with dual mode of locomotion. 
		- Won $8000 for first position in national competition organized by KPIT where more than 10k students from all over India participated
		- Indian patent filed (pending application number 201631025904)
		- In the media - [Washington Post](https://www.washingtonpost.com/news/innovations/wp/2016/03/18/there-may-soon-be-another-self-driving-vehicle-on-the-road-and-its-not-a-car/), [Economic Times](http://economictimes.indiatimes.com/news/science/inspired-by-differently-abled-batchmates-iit-kgp-students-develop-driver-less-bicycle/articleshow/51047966.cms), [AutoCar Professional](http://www.autocarpro.in/news-national/iit-kharagpur-wins-gold-kpit-sparkle-2016-10525)
	
	More details [here](https://ayush-pandey.github.io/i-bike)
	
* Autonomous Ground Vehicle ([AGV](http://www.agv.iitkgp.ac.in/publications), IIT Kharagpur)
	- Team leader for two consecutive years leading the 40 student member team to Intelligent Ground Vehicle Competition [IGVC](http://www.igvc.org/objective.htm). AGV won the 2nd prize among teams from all around the world in 2018.

* State-space averaging of switched dynamical systems
	- Masters thesis project at IIT Kharagpur
	- Advisor : Prof. Siddhartha Mukhopadhyay

* Robust controller design using H-infinity loop-shaping approach
	- Bachelors thesis project at IIT Kharagpur
	- Advisor : Prof. Sourav Patra
	- Awarded best thesis project award in 2016
