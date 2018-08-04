#include <stdio.h>
#include <string.h>
int main()
{
    printf("%d%d",sizeof("Hello World") , strlen("Hello World"));
}
//output 12 11
// sizeof count char , space , and null;
// strlen will count space and no. of char
