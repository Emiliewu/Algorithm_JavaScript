public class SolutionTest {
  public static void main(String[] args) {
    Solution validParenthesis = new Solution();
    String s1 = "{{}}(({{[[}]]])))";
    boolean res1 = validParenthesis.isValid(s1);
    System.out.println(s1+" is "+res1);
    String s2 = "[({})][](){}";
    boolean res2 = validParenthesis.isValid(s2);
    System.out.println(s2+" is "+res2);

  }

}