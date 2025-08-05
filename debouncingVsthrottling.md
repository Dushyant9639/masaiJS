# Debouncing vs Throttling in JavaScript

Debouncing and throttling are essential optimization techniques used by developers to **reduce unnecessary executions of functions**, especially for events that fire frequently. Though often confused, they serve different purposes.

 What is Debouncing?

Debouncing is a technique used to **delay the execution** of a function until **after a certain time has passed since the last event** was triggered.

- If the event occurs again within the delay period, the timer resets.
- The function is only executed **once**, **after the event has stopped** firing for the specified time.

 Real-World Use Cases

- **Search Input Autocomplete**: Wait for the user to stop typing before sending an API request.
- **Window Resize Event**: Only run expensive layout logic after resizing has stopped.
- **Form Validation**: Validate input fields after the user finishes typing.

---
 What is Throttling?

Throttling is a technique that ensures a function is **only executed once every X milliseconds**, no matter how many times the event is triggered during that time.

- Useful when you want to guarantee **a fixed execution rate** of a function.
Real-World Use Cases

- **Infinite Scroll**: Load content every 200ms while scrolling, instead of on every scroll event.
- **Button Click Spam Prevention**: Prevent multiple submissions by limiting button clicks.
- **Mouse Movement Tracking**: Smooth drawing or analytics by reducing function calls.

 Debouncing vs Throttling – Key Differences

| Feature                     | Debouncing                                     | Throttling                                     |
|----------------------       |------------------------------------------------|------------------------------------------------|
| **Definition**              | Executes function **after event stops**        | Executes function **at fixed intervals**       |
| **Execution Frequency**     | Only once after a delay                        | Repeatedly at regular time intervals           |
| **Example Use Case**        | Typing in a search bar                         | Scrolling on a webpage                         |
| **Behavior**                | Resets timer on every trigger                  | Ignores triggers during wait period            |
| **Goal**                    | **Prevent over-invocation**                    | **Limit invocation rate**                      |

 Easy Metaphor

- **Debouncing**: Like waiting until someone stops talking to reply.
- **Throttling**: Like only letting someone speak once every 5 seconds.

---

> Use **debouncing** when you want to limit execution **after** an action has finished.  
> Use **throttling** when you want to **limit how often** an action can happen.
