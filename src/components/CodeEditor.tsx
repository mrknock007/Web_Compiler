import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { githubDark } from '@uiw/codemirror-theme-github';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateCodeValue} from '@/redux/slices/compilerSlice';

function CodeEditor() {
  const currentLanguage = useSelector((state: RootState) => state.compilerSlice.currentLanguage)
  const dispatch = useDispatch()

  const fullCode = useSelector((state: RootState) => state.compilerSlice.fullCode)

  const onChange = React.useCallback((value: string,) => {
    // console.log('val:', val);
    // setValue(val);
   dispatch(updateCodeValue(value))
  }, []);
  return <CodeMirror className="text-lg" value={fullCode[currentLanguage]} theme={githubDark} height="calc(100vh - 56px - 48px)" extensions={[loadLanguage(currentLanguage)!]} onChange={onChange} />;
}
export default CodeEditor;