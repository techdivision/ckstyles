# TechDivision.CkStyles

This package allows to add different styles based on your css-classes for the CkEditor in Neos.  
You can define the classes in you yaml configuration.  
Styles can be applied both on block- and element level.


**Demo:**
![Applying inline style](Documentation/assets/InlineStyleDemo.gif "Inline style")


**Example output:**

![Example output](Documentation/assets/ExampleOutput.png "Example output")

```html
<p class="my-class-indent-2">
  This is an 
  <span class="my-class-size-large">awesome</span> 
  inline editable 
  <span class="my-class-red">text with some custom</span> 
  styling :)
</p>
```

## Benefits 

In most projects there are requirements that you cannot achieve with tags alone and you need classes under editorial control - 
e.g. if you want to highlight some text with font size but don't use a headline for SEO reasons
or want to add an icon, adjust the font color ... 

## Getting started

**Default composer installation**

```shell
composer require techdivision/ckstyles
```

**Define some global presets for usage in different NodeTypes:**

```yaml
TechDivision:
  CkStyles:
    InlineStyles:
      presets:
        'fontColor':
          label: 'Font color'
          options:
            'primary':
              label: 'Red'
              cssClass: 'my-class-red'
            'secondary':
              label: 'Green'
              cssClass: 'my-class-green'
        'fontSize':
          label: 'Font size'
          options:
            'small':
              label: 'Small'
              cssClass: 'my-class-size-small'
            'big':
              label: 'Large'
              cssClass: 'my-class-size-large'
    BlockStyles:
      presets:
        'indent':
          label: 'Indentation'
          options:
            'primary':
              label: '2 rem'
              cssClass: 'my-class-indent-2'
            'secondary':
              label: '4 rem'
              cssClass: 'my-class-indent-4'
```

Example: [Configuration/Settings.yaml](Configuration/Settings.yaml)


**What values are allowed for cssClass?**
- **Not null** Using an empty class (cssClass: null) to unset the value might cause errors during rendering in the backend. The select boxes of this package contain an "x" button for resetting the value.
- **No whitespace** Using multiple classes seperated by whitespaces (e.g. cssClass: 'btn btn-primary') causes problems when the saved text gets loaded (classes are removed).

**Activate the preset for your inline editable NodeType property:**

```yaml
'Neos.NodeTypes.BaseMixins:TextMixin':
  abstract: true
  properties:
    text:
      ui:
        inline:
          editorOptions:
            inlineStyling:
              fontColor: true
              fontSize: true
            blockStyling:
              indent: true
```

Example: [Configuration/NodeTypes.Override.BaseMixins.yaml](Configuration/NodeTypes.Override.BaseMixins.yaml)

**Add the styling for your presets in your scss, less or css:**

```css
.my-class-red {
  color: red;
}
.my-class-green {
  color: green;
}
.my-class-size-small {
  font-size: 10px;
}
.my-class-size-large {
  font-size: 25px;
}
.my-class-indent-2 {
  text-indent: 2rem;
}
.my-class-indent-4 {
  text-indent: 4rem;
}

```

## Development 
This project works with yarn. The build process given by the neos developers is not very
configurable, only the target dir for the buildprocess is adjustable by 
package.json.

```shell
nvm install
```

If you don't have [yarn](https://yarnpkg.com/lang/en/docs/install/) already installed: 

```shell
brew install yarn
```

Build the app:

```shell
./build.sh
```

## Contribute

You are very welcome to contribute by merge requests, adding issues etc.

**Thank you** 🤝 [Sebastian Kurfürst](https://twitter.com/skurfuerst) for the great workshop which helped us 
implementing this.
