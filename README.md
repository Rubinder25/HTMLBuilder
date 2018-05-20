# HTML Builder ReadMe

This library is used to create styled HTML layout from data provided to it.
The styling can be customised using props.

The library consists of two parts
    1. Containers 
    2. Components

1. Containers:- Containers are used to hold and organize components and are responsible for the layout of the page.
                There are currently two Containers 'Page' and 'Flexbox'. 'Page' is should be used as the top level container
                with all components and containers as its child.

2. Components:- Components are generic components. They are the ones we can pass data to get a stylised HTML back from it.
                All the components are called by method 'get<Component>' e.g. for table we can use 'getTable' method.
                The components takes objects as an there props which contains all the required data and styling info and
                returns a string of HTML. The props that are customised are included as inline styles. There is a 'styles.css'
                file in the styles folder which used for with the page.

---

## Colors
The library uses theme for the colors which are stored in the './src/components/Common.ts' file

## Defaults

All the Components follow same guidlines for defaults when the props are not defined. 

e.g.

default color theme is always grey or if we don't specify the position of an element it always go to the left

---

## Container Component 

There is also a component named 'Container' which can help position the elements within itself.
An element can be placed at any of the 9 positions in the 'Container' using the Position prop.
```javascript
const container = getContainer({
        alignItems: Position.leftTop,
     });
```
---

## How it works
* <h4>Import from package 'charmander'</h4>

```javascript
import * html from 'charmander';
```

* <h4>Start by creating a Page object</h4>

```javascript
const page = new html.Page({});
```

> The Page uses default props if we pass an empty object

* <h4>Create a flexbox container with the following props</h4>

```javascript
  const flex = new html.FlexBox({
        alignItems: html.JustifyContent.spaceBetween,
        itemsHorizontal: false
    });
``` 

* <h4>Create the components using the 'get&ltComponent&gt' methods </h4>
    a text component can be created like this

```javascript
const textEle = html.getText({
        text: ` This is a demo text `,
        type: html.TextType.h2
    });
```

> const 'textEle' will contain a string containing the HTML for the text node

* <h4>Add component to a Container
we will use container 'flex' we just created above. To add a component to a container method 'add' is used on the container. The method 'add' takes a string as an argument and adds it to the child of the container. The component can be added directly on the page or in flexbox</h4>

```javascript
flex.add(textEle);
```
OR
```javascript 
page.add(textEle);
```
* <h4>All the Containers have the 'construct' method on them which returns a string containing all childs of that container wrapped in the container itself. To add flexbox to the page it needs to be constructed first and then passed to the add function of the page</h4>

```javascript
page.add(flex.construct());
```

* <h4>Page should be used as the root component as it takes care of the HTML page construction and injects CSS into it. At the end the page needs to be constructed in order to get the string containing the whole HTML page including CSS and all the components. The construct method on the page will return the HTML for that page</h4>

```javascript
page.construct();
```


---

## Example Code

Usually its preferable to make a function for the layout which recieves the data and returns a string containing the HTML for that page.

```javascript
function generateHTMLForStats(stats: string[][]){

    const page = new html.Page({});

    const header = html.getText({
        text: 'The following is the stastics for the month',
        type: html.TextType.h1
    });

    const chip = html.getChip({
        text: 'January'
    });

    const flex = new FlexBox({
        alignItems: html.JustifyContent.spaceBetween,
        itemsHorizontal: true
    });

    const table = html.getTable({
        data: stats,
        headings: ['Year', 'Sales']
    });

    flex.add(header);
    flex.add(chip);
    flex.addDivider();

    page.add(flex.construct());
    page.add(table);

    return page.construct();
}
```


So, everytime we have new data we can just call this function to generate the HTML file.

---

> * The library is extendible and new 'Containers' and 'Components' can always be added. 
> * While using it for emails FlexBox should not be used because its not supported by most email services.
