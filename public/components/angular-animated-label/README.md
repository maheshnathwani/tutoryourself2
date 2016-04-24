# Angular Animated Label [AngularJS](http://angularjs.org/)

***

Awesome effect to save space at forms turning labels into placeholders and still make it's information visible

[DEMO](http://wender.github.io/angular-animated-label/)

This directive will look for the attribute 'animated-label' on input
## Example: 

```HTML
<div class="form-group">
    <label for="fieldName">First name</label>
    <input type="text" id="fieldName" class="form-control" data-animated-label="animated-label" >
</div>
```

The value of this attribute is the CSS class name used to make it possible, it's going to be "animated-label" by default

It will get the parent element and add you chosen class.

Now you have a few behaviour classes that will use your original className and add the behaviour name, Ex: "NAME_YOU_CHOSE-focus" OR "NAME_YOU_CHOSE-has-value"

Now let the magic with your CSS


## Example
```HTML
<style>
.animated-label {
    position:relative;
}
.animated-label.animated-label-focus label,.animated-label.animated-label-has-value label {
    -webkit-transform:translate3d(-10px,-24px,0) scale(0.75);
    transform:translate3d(-10px,-24px,0) scale(0.75);
    color:#000;
}
.animated-label label {
    position:absolute;
    font-size:13px;
    color:rgba(0,0,0,0.26);
    left:10px;
    top:8px;
    font-weight:300;
    -webkit-transform:translate3d(0,0,0) scale(1);
    transform:translate3d(0,0,0) scale(1);
    -webkit-transform-origin:left top;
    transform-origin:left top;
    -webkit-transition:0 cubic-bezier(0.25,0.8,0.25,1) .25s;
    transition:transform cubic-bezier(0.25,0.8,0.25,1) .25s;
}
.animated-label.animated-label-focus label {
    color:#087aac;
}
</style>
```

Install via Bower

	bower install angular-animated-label --save


