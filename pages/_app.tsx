import React, {  useEffect } from 'react';
import dynamic from "next/dynamic"
import '../styles/base.css';
import { Loading } from '../components/layout/Loading';

const BaseComponent = dynamic(() => import('../components/Base/BaseComponent'),{
  ssr: false,
  loading: () => <Loading />
})

const App: React.FC = ({Component,pageProps}:any) => {


  useEffect(() => {
    document.title = 'Tsiory Ramanantoanina | Portfolio'
  },[])

  return <BaseComponent >
    <Component {...pageProps} />
  </BaseComponent>
};

export default App;
