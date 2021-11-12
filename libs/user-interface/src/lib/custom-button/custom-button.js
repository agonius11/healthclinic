import './custom-button.module.css';
import { Button } from 'antd';


export function CustomButton({title,buttonProps, justifyContent, borderColor,  alignItems, width, backgroundColor, customStyles = {}}) {

  const style = {
    backgroundColor,
    width,
    alignItems,
    justifyContent,
    borderColor,
  }

  return (
    <div>
      {
        <Button style={style} {...buttonProps} style={{...customStyles}}>
          {title} 
        </Button>
      }
      
    </div>
  );
}
export default CustomButton;
