public class test 
{		
	public static void main(String[] args) 
	{	        		   
           B b = new D();
           b.show();
    }
}

class B
{
  public static void show()
  {
	  System.out.println("Base :: show() called");
  }
}

class D extends B
{
   public static void show()
   {
	   System.out.println("Derived :: show() called");
   }
}

//output "Base :: show() called" static method cant be overridden.
