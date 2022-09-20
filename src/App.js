import styles from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Body from './components/Body/Body';

const App = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Body/>
      
    </div>
  )
}
export default App;