To print the pattern like
 for n=3
the program should print
1 1 1 2
3 2 2 2
3 3 3 4

#include<stdio.h>
void main()
{
    int num = 1;
    int count =0;
    int n;
    printf("enter the value of n");
    scanf("%d",&n);
    for(int j =0 ; j<n ; j++)
    {
        if(count%2 == 0)
        {
          for(int i =0; i<3 ; i++)
             printf("%d",num);
             printf("%d",++num);
             printf("\n");
             count++;
        }
        else
        {
            printf("%d",++num);
            num--;
         for(int t =0; t<3 ; t++)
          printf("%d",num);
           num++;
           printf("\n");
           count++;
        }
    } 
}
