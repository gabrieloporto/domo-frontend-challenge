import { AirBnbIcon, GoogleIcon, NikeIcon, TnwIcon } from "../Icons";

export default function Clients() {
  return (
    <div className="d-flex justify-content-between align-items-center clients">
      <TnwIcon />
      <GoogleIcon />
      <NikeIcon />
      <AirBnbIcon />
      <img src="/itafrica.webp" alt="it-africa-image" />
    </div>
  );
}
