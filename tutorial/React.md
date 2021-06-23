# React Tutorial

##### What is React?

- Declaritive, efficient JavaScript library for UI
- Complex UI fro small isolated 'components'
- Different component types, start with `React.Component`



**Example - ShoppingList** 

```react
// New Class using base Component
class ShoppingList extends React.Component {
  render() {	
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```

- Components tell React what to put on screen. 
- When data changes, React re-renders components. 
- `ShoppingList` is a React component class. 
  - Takes parameters called `props` (properties)
  - Returns hierachy of views to display via `render` method.
- `render` method returns  *description* of what to see on screen
  - React takes descriprion and displays result
  - `render` returns a React element - lightweight desc of what to render
  - Uses syntax 'JSX' 
    e.g. `<div />` syntax transformed at build time to 
    ​		`React.createElement('div')`

    ```react
    return React.createElement('div', {className: 'shopping-list'},
      React.createElement('h1', /* ... h1 children ... */),
      React.createElement('ul', /* ... ul children ... */)
    );
    ```

    
---
[later...]

- On maintaining the state of the game; 
  - Having Board ask each Square for state possible, but is difficult to understand, potentially buggy.
  - Instead: Store game state in parent Board component instead of each square.
    - Board component can tell Squares what to display by passing prop.


>**To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead.**

>**The parent component can pass state back down to the children by using props.**

> **This keeps the child components in sync with each other and with the parent component.**




