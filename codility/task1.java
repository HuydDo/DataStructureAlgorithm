/* class Solution {
  int solution(int[] A) {
      int n = A.length;
      int i = n - 1;
      int result = -1;
      int k = 0, maximal = 0;
      while (i > 0) {
          if (A[i] == 1) {
              k = k + 1;
              if (k >= maximal) {
                  maximal = k;
                  result = i;
              }
          }
          else
              k = 0;
          i = i - 1;
      }
      if (A[i] == 1 && k + 1 > maximal)
          result = 0;
      return result;
  }
}

*/


public class MaxCount {
  public static void main(String[] args){
    int [] arr = new int[] {1,0,1,0};
    System.out.println(Solution(arr));
  }

  private static int class Solution{
    int solution(int[] A){
      int count = 0;
      int max = 0;

      for (int i=0; i<A.length; i++){
        if(A[i] == 1){
          count +=1;
        } else {
          count = 0;
        }
        max = count > max ? count : max;
      }
      return max; 
    }  
    
  }

}