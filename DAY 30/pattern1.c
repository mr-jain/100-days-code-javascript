//pattern
1
3*2
4*5*6
10*9*8*7
11*12*13*14*15

#include<stdio.h>
void main()
{
    int n = 10 , count = 0 , num = 1;
    int t ;
    for(int i = 1; i<=n; i++)
    {
        if(count %2 ==0)
        {
            for(int j =1; j<=i; j++)
            {
                printf("%d",num++);
                if(i!=j)
                   printf("*");
            }
            printf("\n");
            count++;
        }
        else
        {
            for(int j = i; j>=1;j--)
            {
                if(i != j)
                  printf("*");
                t = num + j - 1;
                printf("%d",t);
            }
            num = num + i;
            printf("\n");
            count++;
        }
    }
}
