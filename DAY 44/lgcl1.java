public class exception_handling 
{		
	public static void main(String[] args) 
	{
		Test t = new Test();
        System.out.println(t.x + " " + t.y);
	}	
}

class Test
{
  int x ,y;	
}

output // 0 0
