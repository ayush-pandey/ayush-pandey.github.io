# Assignment: AI pair programming with hardware verification

## 1. Objective
The goal of this assignment is to enhance your programming and engineering skills by using an AI tool as a pair programmer. You will implement a project of your choice from the provided list. A key requirement is that you must verify your final code using a physical hardware setup. Throughout this assignment, you will interact with an AI model to help you develop the project, while carefully documenting your prompts, errors, and thought processes in a reflection journal.

## 2. Introduction to AI pair programming

### What is pair programming?
Pair programming is a software development technique where two programmers work together. One, the "driver," writes code, while the other, the "navigator," reviews each line of code as it's written. This collaborative approach helps identify errors quickly and promotes knowledge sharing. In this assignment, your pair programmer is an AI tool. You will work with it back-and-forth to develop code, identify errors, and complete your project.

### What are Generative AI (GenAI) tools?
You have likely heard of GenAI tools like ChatGPT, Google Gemini, or Microsoft Copilot. These tools can generate human-like text, including code, based on input prompts. They can assist in programming by providing suggestions, generating code snippets, and offering explanations. GenAI tools are pattern matching machines and work by predicting the next word in a sequence. These models have been trained on large corpus of text and code data that helps them reliably predict the outputs of text and code, especially for examples that it has seen during training. 

_Important note:_ While an AI can be a powerful partner, it is not a replacement for your understanding. Use the AI to get ideas or initial code, but you must ensure you understand the code fully. Your role is to control the creative and critical aspects of your project and to build the physical hardware, which the AI cannot do.

## 3. Assignment tasks

### Step 1: Project selection
Choose a project from the `project_ideas.html` document. You are encouraged to propose your own personalized project that is similar to a project listed on the document. If you end up choosing from the provided list, find one that you relate with and that you believe is achievable for your skill level.

### Step 2: Start a reflection journal
You must keep a reflection journal throughout the project. This will be a key part of your submission. Document your thought process, project updates, AI prompts, key outputs of AI, your struggles, and what you learn along the way.

### Step 3: Initial interaction with the AI
Begin by signing up for an AI tool (like ChatGPT or Google Gemini) and starting a new conversation. Your first prompt should set the context for the AI.

**Starter prompt example:**
```
Hello! I'm a student learning Python. I need to build a project to create a [your chosen project idea, e.g., 'temperature logger']. I'd like you to act as my pair programmer. Please guide me through setting up the initial framework for this project, providing explanations along the way. Do you understand? Please say "yes" or "no" and do not write any code yet.
```
Record this first prompt in your journal.

### Step 4: Iterative development and prompt engineering
For each feature you want to add to your project:
1.  **Engineer a prompt:** Write a clear prompt to the AI asking for help. For example: *"I'd like to add a feature to log the temperature to a CSV file every 10 seconds. Can you show me how to implement this?"*
2.  **Implement and test:** Incorporate the AI's suggestions into your code and test it thoroughly to ensure it works.

### Step 5: Error handling
When you encounter errors, try to debug them on your own first. Use `print()` statements or your debugger (from `ipdb` introductory lecture) to understand the problem. If you are still stuck, ask the AI for help. Record your debugging steps in your journal.

**Example error prompt:**
```
I'm getting a `TypeError` when I run my code. The error is: 'unsupported operand type(s) for +: 'int' and 'str''. Here is my code: [paste your code snippet]. I tried fixing [your attempt to fix] but I am still stuck. What is wrong with my approach? Can you suggest what I should check?
```
Document the errors you encounter and how you solve them in your journal.

### Step 6: Hardware verification
This is the most important step. You must build the physical circuit/hardware for your project and verify that your code works with the hardware. For example, if you built a temperature logger, you must show the sensor collecting real data. If you built a traffic light, you must show the LEDs lighting up on your breadboard in the correct sequence.

### Step 7: Finalizing the project
- Review your entire codebase and make sure you understand every part.
- Add comments to your code to explain what it does.
- Confirm that the project runs smoothly without errors.

## 4. Submission requirements
You will submit the following items, typically in a single `.zip` file:

1.  **All code files:** All `.py`, `.ino`, or other source code files for your project.
2.  **Hardware verification video:** A short video (1-2 minutes) clearly demonstrating that your project's hardware is working as controlled by your software.
3.  **Reflection journal (PDF):** Your journal should include:
    - An introduction describing the project and its objectives.
    - A log of your thought process and development journey.
    - A clean list of the final, successful prompts you used with the AI.
    - A reflective essay on what you learned, what was challenging, and your thoughts on using AI for programming.
4.  **AI interaction transcript (PDF):** The full, unedited conversation history with your AI partner from the beginning to the end of the project.
