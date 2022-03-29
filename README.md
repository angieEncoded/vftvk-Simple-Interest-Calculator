# Final Project for IBMCAD101EN

- The task was to code an interest calculator that looks like the reference images and has some basic functionality.
- We were given a skeleton and instructed to follow the following rubric:

## Submit your work for grading
### Upload the relevant screenshots(wherever applicable) of your project when prompted in the peer review section of the final project, you will be graded as below:
- The image of your fully designed calculator. (1 mark)
- The ‘Principal input box’ is present. (1 mark)
- The ‘Interest Slider’ is present. (1 mark)
- The ‘dropdown’ box expands to select the number of years. (1 mark)
- The ‘compute interest’ button is present. (1 mark)
- Check the answer to the values inserted: 1000 as Amount, 10% as Interest rate, and 10 as the number of years, the interest amount should be 1000 after compute interest is clicked. (1 mark)
- Check the answer to the values inserted: 4800 as Amount, 15.25% as Interest rate, and 5 as the number of years, the interest amount should be 3660 after compute interest is clicked. (1 mark)
- Alert box appears in the screenshot which asks the user to ‘Enter a positive number’ when the value of the principal is entered as zero. (1 mark)
- Alert box appears in the screenshot which asks the user to ‘Enter a positive number’ when the value of the principal is entered as a negative number. (1 mark)
- If the principal amount field is left blank, and while clicking on “Compute Interest”, there is an alert asking you to enter a positive number. (1 mark)
- All the input controls are aligned at the center. (1 mark)
- All the colors as specified in the requirements. (1 mark)
- The borders of the div that contain the input elements are rounded. (1 mark)
- After the Compute Interest is clicked, all the numbers in the output are highlighted in yellow. (1 mark)
- Everything should be spelled correctly. (1 mark)
- The title “Web App – Simple Interest Calculator” is visible on the browser page/tab. (1 mark)
- When the interest rate slider is moved to extreme left, the interest rate should show as 1%. (1 mark)
- When the interest rate slider is moved to extreme right, the interest rate should show as 20%. (1 mark)
- The slider can be moved to show the value as 4.75%. (1 mark)
- At the bottom of the calculator, there is a copyright symbol and the name of the owner. (1 mark)

## Notes about this project
- I used bootstrap in this project for its powerful grid layout utilities and other components. Anyone who knows me knows I am a huge twitter bootstrap fan
- Instead of the built-in browser alert box, I used a bootstrap modal, called programatically with javascript when the user clicks the calculation button
  - The rubric seems to suggest calling the alert on a keypress as soon as the user has inputted bad data - I thought that might be a bad user experience so I tied it to the button for all three checks.
- I converted some of the numbers to 2 digit fixed floats to display them correctly.
- It's also worth noting that I forked the project and developed it in vscode locally. So some of the elements won't match what was in the instructions in the Skills Network Lab tool and I worked from the screen shot entirely.
- However, all the elements required in the rubric are satisfied

