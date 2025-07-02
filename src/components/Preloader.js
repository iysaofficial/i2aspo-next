import Image from "next/image";

export default function Preloader() {
  return (
    <div className="preloader-bg">
      <div className="preloader-logo-wrap">
        <Image
          src="/assets/img/preloader-logo.png"
          alt="I2ASPO Logo"
          width={75}
          height={75}
          className="preloader-logo"
          priority
        />
      </div>
    </div>
  );
}