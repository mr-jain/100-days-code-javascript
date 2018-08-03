//Program will print the below pattern 
3
44
555
6666
555
44
3

#include<stdio.h>
void main()
{
    int n = 3;
    for(int i = 3 ;i<=n+n; i++)
    {
        for(int j = 3 ; j<=i; j++)
        {
        printf("%d",i);
        }
        printf("\n");
    }
    
    for(int i =n+n-1 ; i>=n ;i--)
    {
        for(int j = 1; j<=i-2; j++)
        {
        printf("%d",i);
        }
        printf("\n");
    }
    
}
