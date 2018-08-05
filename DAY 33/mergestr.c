//merge two strings alternatively congnizant master code problem 

#include<stdio.h>
#include<string.h>

char* getMerged(const char* str1, const char* str2) {
  char* str = malloc(strlen(str1)+strlen(str2)+1);
  int k=0,i;
  for(i=0;str1[i] !='\0' && str2[i] !='\0';i++) {
         str[k++] = str1[i];
         str[k++] = str2[i];
  }

  str[k]='\0';
  if (str1[i] != '\0') {
        strcpy(&str[k], &str1[i]); 
  } else if (str2[i] != '\0') {
        strcpy(&str[k], &str2[i]);
  }
 return str; 
}

int main()
{
    char *str1="abcdefg"; 
    char *str2="1234";
    char *output =  getMerged(str1,str2);
    printf("%s",output);
    return 0;
}
