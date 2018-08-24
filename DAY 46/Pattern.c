#include <stdio.h>

int main()
{
    int n;
    int s =1;
    scanf("%d",&n);
    for(int i =1; i<=n; i++)
    {
        for(int j = 1; j<=n; j++)
        {
            printf("%d",s);
            s = s+1;
            if(j!= n)
               printf("*");
        }
        printf("\n");
        if(s-1 == n)
        s = s+n;
        if(s-1 == n*n)
        s = n+1;
    }
}

output 
1*2*3*4
9*10*11*12
13*14*15*16
5*6*7*8
