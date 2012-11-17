# jQuery IMGRights Plugin

A simple jQuery plugin for displaying image copyrights tooltip on IMG tag after
mouseover event. Can get copyright data from both data-* attributes and hmedia 
microformat definition.

## Installation

Include script after the jQuery:

    <script src="/path/to/jquery.imgrights.js"></script>
    
## Initialization

Common method is to apply imgrights to all supported elements on the page:
```javascript
  $(function(){ 
      $('img, .hmedia').imgrights(); 
  });
```

Custom copyright string format:
```javascript
  $(function(){ 
      $('img, .hmedia').imgrights({format: "&copy; <a href='%copyright_url%'>%copyright%</a>"}); 
  });
```

## Copyright data
          
### data-*
       
Copyright information can be stored in IMG tag attributes.
```html
<img src="uploads/images/d.jpg" data-copyright="ZOOM-ZOOM studio" data-copyright-url="http://vk.com/club30994140">
```
Will generate tooltip with copyright owner name ZOOM-ZOOM studio, linked to http://vk.com/club30994140.

### hmedia microformat 

 - .hmedia > img.photo - image element
 - .hmedia > .contributor > .fn - author name
 - .hmedia > .contributor > .url - author URL (href attr)

hmedia classic example
```html
<div class="hmedia">
  <a rel="enclosure" type="image/jpeg" href="http://www.treeswing.net/index.php?showimage=355">
    <img class="photo" alt="Saturday Nights alright for fighting, by treeswing" 
     src="http://cache1.photoblogs.org/thumbnail/?hash=9bece0678c5610bd4b631d9037286df7&size=450"/>
  </a>
    <span class="fn">Saturday Night's Alright For Fighting</span>, 
    <em>by <span class="contributor vcard">
       <a class="url fn" href="http://www.treeswing.net/">Treeswing</a> 
      (<a class="url" href="http://www.photoblogs.org/profile/treeswing.net/">profile</a>)
    </span></em>
</div>
```
Will generate tooltip with copyright owner name Treeswing, linked to http://www.treeswing.net/. 

## Authors

[Jeka Kiselyov](https://github.com/jeka-kiselyov)




