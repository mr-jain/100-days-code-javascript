#include <stdio.h>

void main()
{
    int x = 40 ,y =35 , z= 20 , w = 10;
    int a = x * y / z-w;
    int b = x * y / (z-w);
    printf("%d ",a);
    printf("%d",b);
}
//output 
60  140
