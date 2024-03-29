import Button from '@/components/common/Button/Button';
import { SocialButtonProps } from '@/interfaces/button';
import { getSocialSignInImage } from '@/utils/getSocialSignInImage';

export default function SocialButton(props: SocialButtonProps) {
  const socialImg = getSocialSignInImage(props.socialType);

  const handleSignIn = () => {
    window.location.href = `https://api.cafevery.site/oauth2/authorization/${props.socialType}`;
  };

  return (
    <Button width={236} height={60} margin={"8px 0 8px 0"} background={socialImg} onClick={handleSignIn} {...props}>
      {props.children}
    </Button>
  );
}
