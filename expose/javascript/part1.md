1. "values added:  20" is printed by line 9.
2. "final result:  20" is printed by line 13.
3. "values added:  20" is printed by line 9.
4. The code returns an error because of this line. This is because the variable result isn't in the scope, as its declaration above was using "let", so it's only available in the local scope (the one inside the if bracket). So when the command tries to access it, it's not available.
5. The code returns an **error** because of line 7. This is because the variable result is declared as const, so reassigning it is illegal. So line 9 was **never reached**, but if line 7 was ignored, it will just print "values added:  0".
6. The code never reaches this line. But, if line 7 were to be ignored it will still throw an error because const is also available only for the local scope, like question number 4.
