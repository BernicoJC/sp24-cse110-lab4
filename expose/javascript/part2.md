1. 3 is printed. This is because i was declared as var, so it lasts even after the for loop ends. Its value is 3 because it goes up by 1 after every iteration and it stops after it's not < prices.length (which is 3).
2. 150 is printed. This is because it was declared as var inside the loop, so it lasts even after the for loop ends. Its value is 150 because, as implied in answer number 1, the last iteration of the loop (that runs to the inner part of it) is when i = 2, so discountedPrice = prices[2] * (1-discount). prices at index 2 is 300, and 1-discount is 0.5. As such, it's value is 300 * 0.5 = 150.
3. 150 is printed. This is because it was declared as var inside the loop, so it lasts even after the for loop ends, and it retains the value assigned at the last iteration. Its value is 150 because it's from Math.round(discountedPrice * 100) / 100. From answer number 2, discountedPrice at this last iteration is 150. As such, 150 * 100 = 15000, which is already an integer so Math.round doesn't change anything; 15000 / 100 = 150.
4. The function returns [ 50, 100, 150 ]. The for loop inside the function, as implied by the answer number 3 and 4, applies the discounted price into each index in the input (multiplied by 1-discount), round them up, and add them to a new array that's returned. As such, the numbers inside the new array is the 50% (discounted) numbers of the values in the input ([100, 200, 300]).
5. It returns an error because i is not available at this scope. Since i was declared with let, it's only available in the local scope of inside the for loop. After the for loop ends, then, it's no longer a variable and it's now undefined.
6.  It returns an error because discountedPrice is not available at this scope. Since it was declared with let inside the for loop, it's only available in the local scope of inside the for loop. After the for loop ends, then, it's no longer a variable and it's now undefined.
7.  150 is printed. It is able to be printed without error because it was declared above the for loop, and so it's local scope is the function; and since this line is still inside the function, it's still defined and still holds its value. The value is 150 for the same reason as answer number 3.
8.  The function returns [ 50, 100, 150 ]. It's able to return the value just fine because, again, discounted is defined with let above the for loop and so it still holds its value after the loop (when it's returned), and the push to it happens inside the loop so the local scopeness of i and discountedPrice don't affect the code being run correctly. The values are 50, 100, and 150, for the same reason as answer number 4.
9.  It returns an error because i is not available at this scope. This is for the same exact reason as answer number 5: i is only a local scope inside the loop.
10.  3 is printed. This doesn't cause any error because throughout the code, length isn't changed or reassigned at all, so the compiler is alright with it. It holds the value 3 because the prices array has 3 elements, so its length is 3, assigned to the constant length at line 4.
11.  [ 50, 100, 150 ] is returned. There is no error here because there is no reassignment of constants; pushing into a constant like line 8 is fine (not a reassignment, still points to the same array). The values are like such because it's doing the same thing as the previous code block (number 8), but it's not doing any rounding, which doesn't matter since none of our inputs cause decimals anyway.
12.  Notations:

A. student.name

B. student["Grad Year"]

C. student.greeting()

D. student["Favorite Teacher"].name

E. student.courseLoad[0]

13. Results:
    
A. '32'

B. 1

C. 3

D. '3null'

E. 4

F. 0

G. '3undefined'

H. NaN

14. Result:

A. true

B. false

C. true

D. false

E. false

F. true

15. The "==" notation compares the two compared values's value without worrying about the data type of the two compared values; in practice, they take into account auto conversion so that for example the int 2 and the string '2' will return true if compared because the int 2 can be converted to '2', and they will be the same. Meanwhile, "===" is more tight and compares the two values's data type on top of their values.
16. part2-question16.js
17. 
