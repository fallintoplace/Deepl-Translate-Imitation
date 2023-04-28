import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar'

const App = () => {
  const [sourceText, setSourceText] = useState('');
  const [targetText, setTargetText] = useState('');
  const [sourceLang, setSourceLang] = useState('auto');
  const [targetLang, setTargetLang] = useState('en');

  const translateText = async () => {
    const apiKey = 'YOUR_AZURE_TRANSLATION_API_KEY';
    const apiUrl = `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=${sourceLang}&to=${targetLang}`;
    const headers = {
      'Ocp-Apim-Subscription-Key': apiKey,
      'Content-Type': 'application/json'
    };
    const data = [{ Text: sourceText }];
    const response = await axios.post(apiUrl, data, { headers });
    const translatedText = response.data[0].translations[0].text;
    setTargetText(translatedText);
  };

  return (
    <div>
    <div>
      <NavBar></NavBar>
    </div>
    <div className='flex flex-row items-center justify-center h-screen bg-gray-200'>
      <div className='max-w-md w-full rounded-lg shadow-lg overflow-hidden'>
        <div className='px-6 py-4 bg-white'>
          <div className='flex items-center mb-4'>
            <label htmlFor='source-lang' className='mr-2'>
              Source Language:
            </label>
            <select
              id='source-lang'
              className='border border-gray-300 rounded-lg px-2 py-1'
              value={sourceLang}
              onChange={e => setSourceLang(e.target.value)}
            >
              <option value='auto'>Auto-Detect</option>
              <option value='en'>English</option>
              <option value='fr'>French</option>
              <option value='de'>German</option>
              <option value='es'>Spanish</option>
            </select>
          </div>
          <div className='flex items-center mb-4'>
            <label htmlFor='target-lang' className='mr-2'>
              Target Language:
            </label>
            <select
              id='target-lang'
              className='border border-gray-300 rounded-lg px-2 py-1'
              value={targetLang}
              onChange={e => setTargetLang(e.target.value)}
            >
              <option value='en'>English</option>
              <option value='fr'>French</option>
              <option value='de'>German</option>
              <option value='es'>Spanish</option>
            </select>
          </div>
          <div className='mb-4'>
            <textarea
              className='border border-gray-300 rounded-lg px-2 py-1 w-full h-32 resize-none'
              placeholder='Enter text to translate...'
              value={sourceText}
              onChange={e => setSourceText(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center mb-4'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={translateText}
            >
              Translate
            </button>
            <button
              className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => {
                const temp = sourceLang;
                setSourceLang(targetLang);
                setTargetLang(temp);
              }}
            >
              Swap
            </button>
          </div>
        </div>
      </div>
      <div className='max-w-md w-full rounded-lg shadow-lg overflow-hidden mx-8'>
        <div className='px-6 py-4 bg-gray-100'>
          <div className='text-gray-500 mb-2'>Translation Result:</div>
          <div className='text-lg text-right'>{targetText}</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
