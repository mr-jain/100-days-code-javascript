#include <stdio.h>
int main()
{
    int a = 2;
    a = a++ + ~++a;
    printf("%d",a);
    return 0;
}
// output -3
//~4 will be -4-1 = -5
