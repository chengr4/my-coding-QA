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
# use set (集合 (Set) 其實和數組 (Tuple) 與串列 (List) 很類似, 不同的點在於集合不會包含重複的資料)

# Runtime: 256 ms, faster than 48.21% of Python3 online submissions for Count the Number of Consistent Strings.
# Memory Usage: 16.3 MB

class Solution2:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        count = 0
        sallowed = set(allowed)
        
        for i in words:
            if all(j in sallowed for j in i):
                count+=1
        return count
