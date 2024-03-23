
import java.util.*;


public class main {
   public static void main(String args[]) {
 int n=10;
 
 for(int i =1 ;i<=n;i++){
  for(int j=1;j<=n;j++){
    if (i+j==1+n||j==1||i==j||j==n){
System.out.print("*");
    }
    else{
      System.out.print(" ");
    }
  
 }
 System.out.println();
}
   }
}
