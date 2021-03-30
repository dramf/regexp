# regexp
My notes about Regular Expressions.

**A regular expression** is a sequence of characters that specifies a search pattern.

## Base
`^` - matches the starting position within the string.

`$` - matches the ending position of the string or the position just before a string-ending newline.

`?` - matches the previous token zero or one time.

`*` - zero or more matches.

`+` - one or more matches.

`.` - matches any character.

`\.` matches the character `.`.

`\1` matches the same text as most recently matched by the 1st capturing group.
*note*: these capturing groups capture the thing that was matched. not the pattern, reffering to the exact match and not to the pattern.

`[]` - matches a single character that is contained within the brackets. The `-` character is treated as a literal character if it is the last or the first character within the brackets.

`()` - a marked subexpression (group).

`|` - or (alternative).
`(H|h)` - 1st alternative is `H', 2st is `h`. 

## Flags
`/g` - global, don't return after first match.

`/i` - insensitive, case insensitive match.



## Testing
I use [codepen](https://codepen.io/pen/?editors=0010) and [regex101.com](https://regex101.com/) for RegExp tests.
