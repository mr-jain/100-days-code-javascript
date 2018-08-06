#include <stdio.h>
int sq(int);
int main()
{
  int a =1 , x;
  x = sq(++a)+sq(a++)+sq(a++);
  printf("%d",x);
  return 0;
}
int sq(int num){
    return num *num;
}
//output 17
