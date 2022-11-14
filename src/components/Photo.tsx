import memoji from "../assets/img/memoji.png";

export interface PhotoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
}

const Photo: React.FC<React.PropsWithChildren<PhotoProps>> = ({
  src,
  alt,
  ...rest
}) => {
  if (src) {
    return (
      <div className=" w-fit " >
        <img
          {...rest}
          alt={alt}
          src={src}
        /> 
      </div>
    );
  }
  

  return <img {...rest} alt={alt} src={memoji} />;
};

export default Photo;
