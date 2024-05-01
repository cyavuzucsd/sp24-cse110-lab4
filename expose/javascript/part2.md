1. Line 12 would print 3 becuase the i variable will increment to the length of the price array.
2. Line 13 prints out 150 because it is the last updated discounted price
3. Line 14 prints out 150 because it is the last update to the finalPrice
4. It returns the array of the discounted prices
5. There is an error because i is defined inside the scope of the for loop and not outside of it. So when it is called from the outside it will throw an error.
6. There is an error because discountedPrice is only defined in the scope of the for loop and not outside of the for loop scope.
7. The code will print 150 since finalPrice is in the same scope.
8. It will return the array [50, 100, 150] since discountedPrice is declared in the same scope.
9. There is an error because i is not declared in the same scope
10. It will return 3 because it is the lenght of the prices array.
11. It will return [50, 100, 150] but since the discountedPrice variable is a const inside the scope of the for loop it will be redeclared every iteration. To fix this the discountedPrice variable should be declared outside the for loop scope with the let tag.
12.
###
A. console.log(student.name);
B. console.log(student["Grad Year"]);
C. student.greeting();
D. console.log(student["Favorite Teacher"].name);
E. console.log(student.courseLoad[0]);
###
13.  A. '3' + 2 = '32'
It's a string of the number 3 concatenated with the number 2

B. '3' - 2 = 1
The string number converts into a integer before subtracting

C. 3 + null = 3
Null becomes  0 before adding so the answer is 3

D. '3' + null = '3null'
Null becomes a string before adding so it concatenates them

E. true + 3 = 4 
True becomes 1 before adding so it becomes 4

F. false + null = 0
False and null both become 0 before adding so it becomes 0

G. '3' + undefined = '3undefined'
Undefined becomes a string before adding so it concatenates them

H. '3' - undefined = NaN
Undefined becomes an integer but it equals NaN so the result is NaN

14. A. '2' > 1 = true
The string becomes an integer and then after comparison ir becomes true

B. '2' < '12' = false
The strings are compared in order and since 1 is less than 2 it becomes false

C. 2 == '2' = true
One of the two parameters becomes each other's type which returns true

D. 2 === '2' = false
Triple equals is doing a type and value comparison and since the types aren't the same it is false.

E. true == 2 = false 
False because true equals to 1 numerically

F. true === Boolean(2) = true
Boolean will return true unless the parameter is NaN, undefined, 0 or null. Hence true.

