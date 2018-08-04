#include <stdio.h>
#define a 20
int main()
{
    #define a 50
    printf("%d",a);
}
// output 50
//most recently assigned value will be taken by compiler
