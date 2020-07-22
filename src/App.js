import React, {useState, useEffect} from 'react';
import './App.css';
import EditorArea from './editorArea'

const App = () => {
  // const [editorValue, changeEditorValue] = useState(`<table>
  // <tbody>
  //   <tr>
  //     <td style="border-bottom:solid 1px">144</td>
  //     </tr>
  //     <tr>
  //       <td>2543453 - 44</td>
  //     </tr>
  // </tbody>
  // </table>`);
  const [editorValue, changeEditorValue] = useState(``)



  useEffect(() => {

    console.log('editorValue>>>', editorValue);

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
