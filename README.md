# jQuery IMGRights Plugin

A simple jQuery plugin for displaying image copyrights tooltip on IMG tag. 
Can get copyright data from both data-* attributes and hmedia microformat 
definition.

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


