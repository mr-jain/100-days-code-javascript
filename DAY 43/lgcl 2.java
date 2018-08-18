import java.util.*;


public class exception_handling 
{		
	public static void main(String[] args) 
	{
		TreeMap obj = new TreeMap();
		obj.put("A", new Integer(1));
		obj.put("B", new Integer(2));
		obj.put("C", new Integer(3));
		System.out.println(obj.entrySet());
	}	
}

output [A=1 , B=2 , C=3]
