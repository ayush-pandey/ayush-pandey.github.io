# A quick tutorial on setting up high performance computing at uC Merced

Author: Ayush Pandey and Gavin Abrigo
Date (last updated): March 3, 2026

## Access to HPC

You should already have access to the HPC cluster at UC Merced. If you do not, please contact your PI to understand the process.

## Logging in to the HPC cluster
To check whether your login works, you can use the terminal on your computer to ssh into the cluster. Enter the following command, replacing `username` with your actual username:

```
ssh -X username@login.rc.ucmerced.edu
```
This command will log you into the cluster. The `-X` flag allows you to use graphical applications on the cluster, which is necessary for some of the software we will be using.

## Logging in through VS Code

Since VS Code is the IDE that you are probably using already, it is highly recommended that you work on the HPC cluster through the remote development features of VS Code. This allows you to use the same interface and tools that you are used to, while still leveraging the power of the HPC cluster.
To set this up, you will need to install the "Remote - SSH" extension in VS Code. Once you have that installed, you can follow these steps:
1. Open the command palette in VS Code (Ctrl+Shift+P or Cmd+Shift+P).
2. Type "Remote-SSH: Connect to Host..." and select it.
3. In the input box that appears, enter the same ssh command as above.
4. You will be prompted to enter your password for the HPC cluster. Once you do, VS Code will establish a connection to the cluster and open a new window that is connected to the HPC environment.

If it does not work, make sure that you are on the UC Merced VPN (and try again!).

## Install Miniconda to manage your Python environments

Run the following commands in the terminal to download and install Miniconda, which will allow you to manage your Python environments on the HPC cluster:

```
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
chmod +x Miniconda3-latest-Linux-x86_64.sh
./Miniconda3-latest-Linux-x86_64.sh
```
To initialize and activate conda, run the following commands:

```
conda init
source ~/.bashrc
conda --version
```
This should print the version of conda that you have installed, confirming that it is set up correctly.

## Create a conda environment for your project
Run the following commands to create a new conda environment for your project. Replace `myenv` with the name you want to give your environment:

```
conda create -n yourprojectenv python=3.11
conda activate yourprojectenv
```
This will create a new conda environment with Python 3.11 and activate it. You can then install any packages you need for your project using `conda install` or `pip install`.

Let's install a package: the Github CLI:
```
conda install gh --channel conda-forge
```
This will install the Github CLI tool, which you can use to interact with Github from the command line. You can verify that it is installed correctly by running `gh --version`.
You should see the version of the Github CLI that you have installed, confirming that it is set up correctly.

## Clone your project repository and run example
Now, let's create some neural network models! We will do this using pytorch examples repository. The first step is to clone this public repository. Run:

```
git clone https://github.com/pytorch/examples.git
```

Then, change directory to the `mnist` example:

```cd examples/mnist
```

Now, install all package that are required to run the example:

```
pip install -r requirements.txt
```

Now it's time to make sure that pytorch can detect the GPU. Add the following code to a new Python file:

```
import torch
print('cuda:', torch.cuda.is_available())
if torch.cuda.is_available():
    print('device name:', torch.cuda.get_device_name(0))
else:
    print('No GPU detected')
```

After running the Python file, you will see that GPU is not available. This is because we need to request GPU resources from the cluster before we can use them. To do this, we will use the `srun` command, which allows us to run a command on the cluster with specific resource requirements. On the terminal (where you have the conda environment activated), run the following command:

```
srun --pty --nodes=1 --ntasks-per-node=1 --gres=gpu:1 -p test --time=00:20:00 /bin/bash
```

This command requests 1 GPU for 20 minutes on the `test` partition of the cluster. Once you run this command, you will be logged into a new shell that has access to the GPU called a `gnode`. Run `nvidia-smi` to verify that you have access to the GPU. You should see a table with information about the GPU, including its name and memory usage.

## Training and testing




