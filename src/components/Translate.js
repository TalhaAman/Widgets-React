import React,{ useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

  const options=[
    
    {
      label: 'Urdu',
      value: 'ur'
    },
    {
      label: 'Afrikaans',
      value: 'af'
    },
    {
      label: 'Arabic',
      value: 'ar'
    },
    {
      label: 'Hindi',
      value: 'hi'
    }
    
  ]

const Translate = () => {

  const [language, setLanguage] = useState(options[0]);
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Text Here</label>
          <input type='text' onChange={(e) => setInputText(e.target.value)} ></input>
        </div>
      </div>
      <Dropdown 
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}  
      />
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert
        inputText={inputText}
        language={language}
      />
    </div>
  )
}
export default Translate;

