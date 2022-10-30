import React,{ useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Nav from './components/Nav';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite used library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'We use react by creating components'
  }
]

const options = [
  {
    label: 'Green',
    value: 'green'
  },
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Blue',
    value: 'blue'
  }
]

const App = () => {

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className='ui container'>
      
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)} >Toggle button</button>
      { showDropdown ?
        <Dropdown 
        text={`The text is  ${ selected.label}`}
        label="Select a Color"
        options={options} 
        selected={selected}
        onSelectedChange={setSelected}
      /> : null
      } */}
      {/* <Translate /> */}

      <Nav />
      <br/>
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          text={`The text is  ${ selected.label}`}
          label="Select a Color"
          options={options} 
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>

    </div>
  )
}
export default App;