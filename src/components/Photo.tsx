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
      <img
        {...rest}
        alt={alt}
        src={src}
      />
    );
  }
  

  return <img {...rest} alt={alt} src={memoji} />;
};

export default Photo;
