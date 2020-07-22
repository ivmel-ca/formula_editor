import React, {useState, useEffect} from 'react';
import './App.css';
import EditorArea from './editorArea'

const App = () => {
  const [editorValue, changeEditorValue] = useState('');

  useEffect(() => {
    console.log('value>>>', editorValue);
  }, [editorValue])

  return (
    <EditorArea
      editorValue={editorValue}
      onChange={event => changeEditorValue(event.target.value)}
      placeholder={'Type here...'}
    />
  );
};

export default App;
