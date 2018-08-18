public class test
{		
	public static void main(String[] args) 
	{	        		   
           B b = new B();
           b.show();
    }
}

class B
{
  public final void show()
  {
	  System.out.println("Base :: show() called");
  }
}

class D extends B
{
   public void show()
   {
	   System.out.println("Derived :: show() called");
   }
}


//output complilation error we can not override final method.
