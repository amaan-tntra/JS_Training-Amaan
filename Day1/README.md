# JS Training

## Day 1

### GradeAnalyzer Explanation

- **Student Data**:
    - The students array stores objects, each containing name and score properties.

- **Average Score Calculation**:
    - Functionality: Computes the average score of all students.
    - Method Used: ```reduce()```
    - How: Sums each student’s score divided by the total number of students.

- **Highest and Lowest Scores**:
    - Functionality: Determines the student with the highest and lowest scores.
    - Method Used: ```reduce()```
    - How: Compares each student’s score to find the maximum and minimum.

- **Grade Distribution**:
    - Functionality: Counts how many students fall into each grade category: A (≥90), B (80–89), C (70–79), D (60–69), F (<60).
    - Method Used: ```forEach()```
    - How: Iterates over each student, checks their score, and increments the corresponding grade counter.

- **Students Needing Retake**:
    - Functionality: Lists students who scored less than 60 and need to retake the exam.
    - Method Used: ```filter()```
    - How: Filters students with scores <60 and collects their names into an array.
    
- **Logging Results**:
    - Prints the average score, highest scorer, lowest scorer, grade distribution, and list of students needing retake using console.log().
