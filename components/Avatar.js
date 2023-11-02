// Next Image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      {/*<Image
        src={'/avatar.png'} or src={`/avatar.png?${new Date().getTime()}`}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full"
  />*/}
      <Image
        src={'/avatar.png'}
        width={437}
        height={378}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
