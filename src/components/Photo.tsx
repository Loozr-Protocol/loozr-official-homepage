import memoji from "../assets/img/Intersect.png";

export interface PhotoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  photoColor?: string
}

const Photo: React.FC<React.PropsWithChildren<PhotoProps>> = ({
  src,
  alt,
  photoColor='transparent',
  ...rest
}) => {
  if (src) {
    return (
      <div className="   " >
        <img
          {...rest}
          className=" rounded-full object-cover"
          alt={alt}
          src={src}
        /> 
      </div>
    );
  }

  return <div {...rest}   >  
      <img src={memoji} alt="avatar"  className=" w-full rounded-full "  />
  </div>;
};

export default Photo;
