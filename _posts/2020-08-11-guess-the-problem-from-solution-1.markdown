---
layout: post
title:  "Guess the Problem from Solution (1)"
date:   2020-08-11 14:26:03 +0800
categories: reverse
---
What's the problem description?
### Code:
{% highlight Java %}
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode insertIntoBST(TreeNode root, int val) {
        if(root == null) { 
            return new TreeNode(val);
        }
        if(root.val < val) {
            root.right = insertIntoBST(root.right, val);
        } else {
            root.left = insertIntoBST(root.left, val);
        }
        return root;
    }
}
{% endhighlight %}
{% if page.content contains "pre" %}
<script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js'></script>
<script src='{{site.baseurl}}/assets/js/clipboard.js'></script>
{% endif %}
