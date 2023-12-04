import React, { Suspense, useEffect } from 'react';
import dynamic from "next/dynamic"
import '../styles/base.css';
import { Loading } from '../components/layout/Loading';

const App: React.FC = ({Component,pageProps}:any) => {
const BaseComponent = dynamic(() => import('../components/Base/BaseComponent'),{
  ssr: false,
  loading: () => <Loading />
}
)

  useEffect(() => {
    document.title = 'Tsiory Ramanantoanina | Portfolio'
  },[])

  return <Suspense fallback="Chargement">
    <BaseComponent >
    <Component {...pageProps} />
  </BaseComponent>
  </Suspense>;
};

export default App;
