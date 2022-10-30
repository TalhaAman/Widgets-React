import React,{useState, useEffect} from "react";
import axios from "axios";

const Convert = ({inputText, language}) => {

  const [translation, setTranslation] = useState('');

  useEffect(() => {
    
    const doTranslate = async () => {
      const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
      params:{
        q: inputText,
        target: language.value,
        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
      }
    });
    setTranslation(data.data.translations[0].translatedText)
    };
    


    const timeout = setTimeout(() => {
      if(inputText.length){
        doTranslate();      
      }
    }, 500)

    return () => {
      clearTimeout(timeout);
    }

  }, [inputText, language])

  return <div>
    <h2 className="ui header">{translation}</h2>
    </div>
}

export default Convert;