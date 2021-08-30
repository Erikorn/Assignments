Sometimes you may want to select a number of elements, like all the list items in a list or all elements with a specific class name. getElementById works great for selecting a single instance (since ids should be unique), but there are other selectors you can use to get lists of elements. 

The most common are:
* getElementsByClassName
* getElementsByTagName

Since there could potentially be multiple elements in the document with the same class name or the same tag name (like `p` or `div`), these element selectors will always return an array of elements. (Strictly speaking it isn't really an array, but is an "array-like object" of all the elements that matched the selector)

Important: even if you only have one element on the page with a given class name, the `getElementsByClassName()` method will still return this array of elements - it will just be an array with a single item in it.