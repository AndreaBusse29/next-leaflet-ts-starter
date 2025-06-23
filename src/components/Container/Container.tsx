import styles from './Container.module.scss';
import {MapContainerProps} from "react-leaflet";

const Container = ({ children, className, ...rest }: MapContainerProps) => {
  let containerClassName = styles.container;

  if (className) {
    containerClassName = `${containerClassName} ${className}`;
  }

  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  );
};

export default Container;
