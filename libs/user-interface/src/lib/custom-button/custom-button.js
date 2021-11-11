import './custom-button.module.css';
import { Button } from 'antd';


export function CustomButton({title,buttonProps, customStyles = {}}) {



  return (
    <div>
      {
        <Button {...buttonProps} style={{...customStyles}}>
          
          {title}

        </Button>
      }
      
      
    </div>
  );
}
export default CustomButton;
