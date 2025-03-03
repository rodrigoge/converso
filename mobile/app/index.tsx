import { SplashScreen } from 'expo-router';
import RootStack from './routes';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    const loadData = async () => {
      setTimeout(async () => {
        await SplashScreen.hideAsync(); 
      }, 1000);  
    };

    loadData();
  }, []);
    
  return (
      <RootStack />
  );
}