'''
You are given a string allowed consisting of distinct characters 
and an array of strings words. 
A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.
'''

# my answer

# Runtime: 324 ms, faster than 16.29% of Python3 online submissions for Count the Number of Consistent Strings.
# Memory Usage: 16.1 MB

class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        ans = 0

        for word in words:
            j = True
            m = {}
            
            for l in allowed:
                m[l] = True
                
            for w in word:
                if not w in m:
                    j = False
                    break
            if j:
                ans+=1
                            
        return ans

# better answer
# 使用 all(): 如果容器所有元素的值為True，那麼all函數的值才為True。注意若參數本身為空列表，all的值則為True

# Runtime: 260 ms, faster than 45% of Python3 online submissions for Count the Number of Consistent Strings.
# Memory Usage: 16.1 MB

class Solution2:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        count = 0

        for word in words:
            if all(j in allowed for j in word):
                count+=1
        return count
