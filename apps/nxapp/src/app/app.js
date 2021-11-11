
import styles from './app.module.css';
import {CustomButton} from "@healthclinic/user-interface";
import { defaultItems } from './data';
console.log(defaultItems[0].icon);


export function App() {
  return (
    <div className={styles.app}>
      <CustomButton title={defaultItems[0].icon}/>
    </div>
  );
}
export default App;
