"use client";
import {App} from '../app/App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StorProvider';


export default function Page(): JSX.Element {
  return (
    <main>
      <App />
    </main>
  );
}
