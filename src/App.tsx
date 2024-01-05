import { useEffect, useState } from 'react';

// 外部関数のインポート
import LoadingScreen from './Loading';
import LoadedScreen from './Loaded';

// 外部ファイルのインポート
import './App.css';

export default function App() {
  const [loading, setLoading] =useState(true);

  useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLoading(false)
      }, 5000);

      // useEffectがクリーンアップされたときにタイマーをクリア
      return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div >
      {loading ? (<LoadingScreen/>):(<LoadedScreen/>)}
    </div>
  );
}

