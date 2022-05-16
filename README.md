# TechDivision.CkStyles

This package allows you to add different styles based on your css-classes for the CkEditor in Neos.
You can define the classes in you yaml configuration.
Styles can be applied both on block- and element level.

It is also possible to set a different attribute (for usage with placeholders for example).

### Benefits/Purpose

In most projects there are requirements that you cannot achieve with tags alone, and you need classes under editorial control -
e.g. if you want to highlight some text with font size but don't use a headline for SEO reasons
or want to add an icon, adjust the font color, ...
Or you want to add data-attributes to an element for use in combination with js ...

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Development](#development)
4. [Example: add custom BlockStyle](#example-define-custom-blockstyles)
   - [Custom BlockStyle configuration](#configuration-of-new-ckeditor-style-blockstyles)
   - [Enable within Text Nodetypes](#enable-new-ckeditor-style-within-neosnodetypesbasemixinstextmixin-blockstyles)
   - [CSS: Styling](#add-styles-to-your-project-blockstyles)
   - [HTML output](#html-output-after-usage--blockstyles)
5. [Example: add custom InlineStyle](#example-define-custom-blockstyles)
   - [Custom InlineStyle configuration](#configuration-of-new-ckeditor-style-inlinestyles)
   - [Enable within Text Nodetypes](#enable-new-ckeditor-style-within-neosnodetypesbasemixinstextmixin-inlinestyles)
   - [CSS: Styling](#add-styles-to-your-project-inlinestyles)
   - [HTML output](#html-output-after-usage--inlinestyles)
6. [Further information](#further-information)
7. [Known Issues](#known-issues)
8. [Contribute](#contribute)

## Demo

![Applying inline style](Documentation/assets/InlineStyleDemo.gif "Inline style")

---

![Example output](Documentation/assets/ExampleOutput.png "Example output")

---

## Install

Default composer installation

```shell
composer require techdivision/ckstyles
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

---

## Example: Define custom BlockStyles

BlocksStyles will affect the entire paragraph of selected text within the CkEditor.

### Configuration of new CKEditor Style (BlockStyles)

```yaml
TechDivision:
  CkStyles:
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

### Enable new CKEditor Style within 'Neos.NodeTypes.BaseMixins:TextMixin' (BlockStyles)

```yaml
'Neos.NodeTypes.BaseMixins:TextMixin':
  abstract: true
  properties:
    text:
      ui:
        inline:
          editorOptions:
            blockStyling:
              indent: true
```

### Add Styles to your project (BlockStyles)

```css
.my-class-indent-2 {
  text-indent: 2rem;
}
.my-class-indent-4 {
  text-indent: 4rem;
}
```

### HTML output after usage  (BlockStyles)

```html
<p class="my-class-indent-2">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
</p>
```

---

## Example: Define custom InlineStyles

InlineStyles will affect just the selected text within the CkEditor.

### Configuration of new CKEditor Style (InlineStyles)

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
```

### Enable new CKEditor Style within 'Neos.NodeTypes.BaseMixins:TextMixin' (InlineStyles)

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
```

### Add Styles to your project (InlineStyles)

```css
.my-class-red {
    color: red;
}
.my-class-green {
    color: green;
}
```

### HTML output after usage

```html
<p>
    Lorem ipsum dolor sit amet, <span class="my-class-green">consetetur sadipscing</span> elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
</p>
```

---

## Define the used HTML Attribute at the output

You can use any html attribute, by using attribute and attributeValue at your options within your configuration.

```yaml
TechDivision:
  CkStyles:
    BlockStyles:
      presets:
        'myCustomAttribute':
          label: 'Attribute'
          options:
            'first':
              label: 'Red'
              attribute: 'data-custom'
              attributeValue: 'customValue-first'
            'second':
              label: 'Green'
              attribute: 'data-custom'
              attributeValue: 'customValue-second'
```

```html
<p data-custom="customValue-first">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
</p>
```

## Further information

Example with different Configuration: [Configuration/Settings.yaml](Configuration/Settings.yaml)

Example for extend 'Neos.NodeTypes.BaseMixins:TextMixin': [Configuration/NodeTypes.Override.BaseMixins.yaml](Configuration/NodeTypes.Override.BaseMixins.yaml)

**What values are allowed for `cssClass` and/or `attributeValue`?**

- **Not null** Using an empty class (cssClass: null) to unset the value might cause errors during rendering in the backend. The select boxes of this package contain an "x" button for resetting the value.
- Although you can add **multiple classes** by separating them with a whitespace. e.g. `btn btn-primary`, it is **highly recommended** to use only **one and unique** class across all Inline- or BlockStyles. See [known issues](#konwn-issues) for more details.

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
