# A student's guide to AI pair programming (note: this is adapted from various online sources and edited using GPT-4)

## 1. Why good prompts matter

Working with an AI pair programmer is like having a conversation. The quality of its answers depends heavily on the quality of your questions. A well-written prompt will get you useful, relevant code and explanations. A vague or confusing prompt will lead to generic, unhelpful, or incorrect responses.

This guide will teach you how to "engineer" your prompts to get the best possible results from your AI partner. Learning this skill is a key objective of this assignment.

## 2. The four C's of effective prompting

A good prompt gives the AI the information it needs to be a helpful partner. A simple way to remember this is with the "Four C's": Context, Clarity, Conciseness, and Constraints.

- **Context:** The AI doesn't know what you know. You have to provide the background information it needs. This is the most important part of any good prompt.
- **Clarity:** Be specific. Vague questions get vague answers. Clearly state what you want the AI to do.
- **Conciseness:** Keep your prompts focused on one task at a time. If you ask the AI to do five things at once, it might do a poor job at all of them.
- **Constraints:** Tell the AI what it *shouldn't* do, or how you want the output formatted. This helps guide the AI to a better response.

---

## 3. Example scenarios

Here is how you can apply the Four C's in different situations during your project.

### Scenario 1: Starting the project

Your first prompt is crucial for setting the **Context**.

- **A bad prompt:**
  > "how do i make a temperature thing"

- **A good prompt (using the four C's):**
  > **[Context]:** "Hello! I'm a student learning Python and I'm using a **Raspberry Pi Pico** with the **Thonny IDE**. I have a **DHT11 temperature sensor** connected to **GP15**.
  > **[Clarity]:** I need to write a MicroPython script that reads the temperature and humidity from the sensor.
  > **[Conciseness]:** Can you provide the basic code to do just that one thing?
  > **[Constraints]:** Please include comments explaining each part of the code. Don't worry about printing to a display or saving to a file yet."

### Scenario 2: Asking for a specific function

When you need a new feature, be **Clear** and **Concise**.

- **A Bad Prompt:**
  > "now make it do csv"

- **A good prompt:**
  > **[Context]:** "Here is my current MicroPython code: `[paste your current, working code]`
  > **[Clarity]:** I want to write the temperature and humidity readings to a **CSV file** on the Pico called `data.csv`. The file should have three columns: `timestamp`, `temperature_C`, and `humidity`.
  > **[Conciseness]:** Can you show me how to modify my main loop to open the file, append a new line with the data, and then close it?"

### Scenario 3: Debugging an error

When you have a bug, give the AI all the information. The error message itself is critical **Context**.

- **A bad prompt:**
  > "my code is broken"

- **A good prompt:**
  > **[Context]:** "I'm using a **Raspberry Pi Pico** and my code was working, but now it's giving me an error. Here is the full error message I see in Thonny: `[paste the complete, exact error message]`.
  > Here is the full script that is causing the error: `[paste your full script]`.
  > **[Clarity]:** The error seems to happen on the line `[mention the line number or the line of code]`. I think the problem is related to converting the sensor reading to a string, but I'm not sure.
  > **[Constraints]:** Can you explain what this error means and suggest two or three possible ways I could fix it?"

## 4. What to do when the AI is wrong

**AI models are not perfect.** They will sometimes:
- Make up facts or library names ("hallucinate").
- Give you code that doesn't run.
- Give you code that is inefficient or overly complex.

**It is your job to be the human in the loop!**
- **Always test the code.** Never assume the AI's output is correct.
- **Think critically.** Does the explanation make sense? Is there a simpler way to do this?
- **Re-prompt if needed.** If you don't get a good answer, try rephrasing your question. Add more context or be more specific. Tell the AI what was wrong with its last response.

Good luck!
