/* eslint-disable @typescript-eslint/no-explicit-any */
import { PuzzleWalletProvider } from '@puzzlehq/sdk';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='h-screen w-screen'>
    <PuzzleWalletProvider
      dAppName="Where's BabyCat?"
      dAppDescription='A friendly wager between friends'
      dAppUrl='https://wheres-halimao.vercel.app'
      dAppIconURL='https://wheres-halimao.vercel.app/alex_head.png'
    >
      <App />
    </PuzzleWalletProvider>
  </div>
);
