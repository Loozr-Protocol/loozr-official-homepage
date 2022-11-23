
import memoji from "../assets/img/Intersect.png";  

export interface PhotoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  photoColor?: string
  userId?: string
}

const Photo: React.FC<React.PropsWithChildren<PhotoProps>> = ({
  src,
  alt,
  photoColor='transparent',
  userId,
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
      <div className=" w-full h-full flex justify-center items-center bg-blue-600 rounded-full " >
        {userId ? (
          <p className=" font-semibold " >{userId.slice(0,2).toUpperCase()}</p>
        ): (
          <p className=" font-semibold " >{}</p>
        )}
      </div> 
  </div>;
};

export default Photo;
