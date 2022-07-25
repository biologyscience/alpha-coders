<p align="center">
<img src="https://biologyscience.github.io/package/alpha-coders/svg/Alpha%20Coders.svg" alt="Cover" height="200px" width="600px">
</p>

# About
A complete package used to interact with the [Wallpaper Abyss API](https://wall.alphacoders.com/api.php) to get wallpapers, wallpaper count, collections, and much more !  
Please make sure that you are following the Wallpaper Abyss API [terms and conditions](https://wall.alphacoders.com/api.php) while using this package.  

You will need an API key which was given to you by the admins of [Wallpaper Abyss](https://alphacoders.com) to use this package. 

### **NOTE**:
Unfortunately they have closed their API applications, so any new user cannot use this package because you would need an API key in order to use this package.

# Installation
```
npm i alpha-coders
```
# Features
- Made with JavaScript.
- Easy to use.
- Complete coverage of all the methods in [Wallpaper Abyss API](https://wall.alphacoders.com/api.php).
- Type support.

<br>

> Make sure to have a look at the [Documentation](https://biologyscience.gitbook.io/alpha-coders) of this package to get an in depth information on how to use this package.

<br>

# Function Tree
> **C** - Class  
**P** - Property  
**M** - Method  

- [Alpha](https://biologyscience.gitbook.io/alpha-coders/reference/classes/alpha) **C**
  - [getWallpapers](https://biologyscience.gitbook.io/alpha-coders/reference/properties/getwallpapers) **P**
    - [bySort](https://biologyscience.gitbook.io/alpha-coders/reference/methods/bysort) **M**
    - [fromCategory](https://biologyscience.gitbook.io/alpha-coders/reference/methods/fromcategory) **M**
    - [fromCollection](https://biologyscience.gitbook.io/alpha-coders/reference/methods/fromcollection) **M**
    - [fromGroup](https://biologyscience.gitbook.io/alpha-coders/reference/methods/fromgroup) **M**
    - [fromSubCategory](https://biologyscience.gitbook.io/alpha-coders/reference/methods/fromsubcategory) **M**
    - [fromFeatured](https://biologyscience.gitbook.io/alpha-coders/reference/methods/fromfeatured) **M**
    - [fromPopular](https://biologyscience.gitbook.io/alpha-coders/reference/methods/frompopular) **M**
    - [fromTag](https://biologyscience.gitbook.io/alpha-coders/reference/methods/fromtag) **M**
    - [fromUser](https://biologyscience.gitbook.io/alpha-coders/reference/methods/fromuser) **M**
  - [getWallpaperCount](https://biologyscience.gitbook.io/alpha-coders/reference/properties/getwallpapercount) **P**
    - [inEntireDB](https://biologyscience.gitbook.io/alpha-coders/reference/methods/inentiredb) **M**
    - [inCategory](https://biologyscience.gitbook.io/alpha-coders/reference/methods/incategory) **M**
    - [inCollection](https://biologyscience.gitbook.io/alpha-coders/reference/methods/incollection) **M**
    - [inGroup](https://biologyscience.gitbook.io/alpha-coders/reference/methods/ingroup) **M**
    - [inSubCategory](https://biologyscience.gitbook.io/alpha-coders/reference/methods/insubcategory) **M**
    - [inTag](https://biologyscience.gitbook.io/alpha-coders/reference/methods/intag) **M**
    - [inUser](https://biologyscience.gitbook.io/alpha-coders/reference/methods/inuser) **M**
  - [getList](https://biologyscience.gitbook.io/alpha-coders/reference/properties/getlist) **P**
    - [ofCategory](https://biologyscience.gitbook.io/alpha-coders/reference/methods/ofcategory) **M**
    - [ofCollection](https://biologyscience.gitbook.io/alpha-coders/reference/methods/ofcollection) **M**
    - [ofGroup](https://biologyscience.gitbook.io/alpha-coders/reference/methods/ofgroup) **M**
    - [ofSubCategory](https://biologyscience.gitbook.io/alpha-coders/reference/methods/ofsubcategory) **M**
  - [search](https://biologyscience.gitbook.io/alpha-coders/reference/methods/search) **M**
  - [getWallpaperInfo](https://biologyscience.gitbook.io/alpha-coders/reference/methods/getwallpaperinfo) **M**
  - [getRandomWallpaper](https://biologyscience.gitbook.io/alpha-coders/reference/methods/getrandomwallpaper) **M**
  - [queryCount](https://biologyscience.gitbook.io/alpha-coders/reference/methods/querycount) **M**

# Known Issue:
### Caused due to version mismatch of [node-fetch](https://www.npmjs.com/package/node-fetch)  

Error:
```
\node_modules\alpha-coders\methods\search.js:2
const fetch = require('node-fetch');
              ^

Error [ERR_REQUIRE_ESM]: require() of ES Module ...
```
To Fix:
- Open up your terminal
- Do `npm rm node-fecth` 
- Then do `npm i node-fetch@2.x`

<br>

If you face any other issue, feel free to create an issue on the [issues page](https://github.com/biologyscience/alpha-coders/issues) in the github repository.

# Useful Links
<a href="https://github.com/biologyscience/alpha-coders">
<img alt="GitHub" src="https://biologyscience.github.io/package/alpha-coders/svg/GitHub.svg" height="40px">
</a>
<a href="https://www.npmjs.com/package/alpha-coders">
<img alt="npm" src="https://biologyscience.github.io/package/alpha-coders/svg/npm.svg" height="40px">
</a>
<a href="https://biologyscience.github.io/package/alpha-coders">
<img alt="Website" src="https://biologyscience.github.io/package/alpha-coders/svg/Website.svg" height="40px">
</a>
<a href="https://biologyscience.gitbook.io/alpha-coders/">
<img alt="Documentation" src="https://biologyscience.github.io/package/alpha-coders/svg/Docs.svg" height="40px">
</a>
<a href="https://github.com/biologyscience/alpha-coders/blob/main/LICENSE">
<img alt="License" src="https://biologyscience.github.io/package/alpha-coders/svg/Open%20Source.svg" height="40px">
</a>

---

## Happy Coding 🥳

<br>

> ###### Edit this page on [GitHub](https://github.com/biologyscience/alpha-coders/edit/main/README.md)