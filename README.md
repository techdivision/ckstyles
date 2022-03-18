# TechDivision.CkStyles

This package allows you to add different styles based on your css-classes for the CkEditor in Neos.  
You can define the classes in you yaml configuration.  
Styles can be applied both on block- and element level.

It is also possible to set a different attribute (for usage with placeholders for example).


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

## Benefits/Purpose 

In most projects there are requirements that you cannot achieve with tags alone, and you need classes under editorial control - 
e.g. if you want to highlight some text with font size but don't use a headline for SEO reasons
or want to add an icon, adjust the font color, ... 
Or you want to add data-attributes to an element for use in combination with js ...


## Getting started

### 1. Default composer installation

```shell
composer require techdivision/ckstyles
```

### 2. Define some global presets for usage in different NodeTypes

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
        'dataAttribute':
          label: 'Inline data attribute'
          options:
            'data':
              label: 'Inline data'
              attribute: 'data-attribute'
              attributeValue: 'my-custom-attribute-value'
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
        'dataAttribute':
          label: 'Block data attribute'
          options:
            'data':
              label: 'Block data'
              attribute: 'data-attribute'
              attributeValue: 'my-custom-attribute-value'
```

Example: [Configuration/Settings.yaml](Configuration/Settings.yaml)


**What values are allowed for `cssClass` and/or `attributeValue`?**
- **Not null** Using an empty class (cssClass: null) to unset the value might cause errors during rendering in the backend. The select boxes of this package contain an "x" button for resetting the value.
- Although you can add **multiple classes** by separating them with a whitespace. e.g. `btn btn-primary`, it is **highly recommended** to use only **one and unique** class across all Inline- or BlockStyles. See [known issues](#konwn-issues) for more details.

### 3. Activate the preset for your inline editable NodeType property:

```yaml
'Neos.NodeTypes.BaseMixins:TextMixin':
  abstract: true
  properties:
    text:
      ui:
        inline:
          editorOptions:
            inlineStyling:
              dataAttribute: true
              fontColor: true
              fontSize: true
            blockStyling:
              indent: true
              dataAttribute: true
```

Example: [Configuration/NodeTypes.Override.BaseMixins.yaml](Configuration/NodeTypes.Override.BaseMixins.yaml)

### 4. Add the styling for your presets in your scss, less or css:

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
This project works with yarn. The build process given by the Neos developers is not very
configurable, only the target dir for the build process is adjustable by 
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
Start a watcher:

```shell
./watch.sh
```

## Known issues
- **cssClass** 
  - If you have multiple Inline- or BlockStyles configurations who contain the same class will result in the loss of one of the selected styles (e.g. if you have a InlineStyle which sets the classes `btn btn-primary` and a different InlineStyle which sets the classes `btn btn-rounded`, one of the set styles will be lost if you reopen the backend). **Note:** this doesn't apply to **one InlineStyle** with multiple duplicate classes.
  - If you have one or multiple Inline- or BlockStyles where one cssClass contains the other, e.g. `btn btn-primary` and `btn` one of them may be lost/not applied
  - *The above are caused by a bug/the behavior of CkEditor and can't easily be fixed. If you have ideas how to fix this, we would sincerely appreciate your [contribution](#contribute) to this project*
- **autoparagraph** If the autoparagraph editorOption is inactive (as e.g. for the Headline content element of the Neos demo project) inline styles are not displayed correctly in the Neos backend.

## Contribute

You are very welcome to contribute by merge requests, adding issues etc.

**Thank you** 🤝 [Sebastian Kurfürst](https://twitter.com/skurfuerst) for the great workshop which helped us 
to implement this.
