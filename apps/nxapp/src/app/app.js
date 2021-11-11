
import styles from './app.module.css';
import 'antd/dist/antd.css';
import {WindowsOutlined} from '@ant-design/icons';
import {CustomButton} from "@healthclinic/user-interface";
import { defaultItems } from './data';


const buttonDummyStyles = {
  width: '150px',
  height: '150px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '10px',
  fontSize: '20px',
  fontWeight: '300',
  backgroundColor: 'unset',
  color: 'unset',

}


export function App() {
  return (
    <div className={styles.app}>
      <CustomButton title="All" buttonProps={{
        
       block: false,
       danger:false,
       disabled:false,
       ghost:false,
       href:"",
       htmlType:"button",
       icon: <WindowsOutlined style={{fontSize: '30px'}}/>,
       loading: false,
       shape:"default",
       size:"middle",
       type:"default",
       onClick: (e) => {
         console.log(e.target)
       }
      }} customStyles={buttonDummyStyles}/>
      
    </div>
  );
}
export default App;
