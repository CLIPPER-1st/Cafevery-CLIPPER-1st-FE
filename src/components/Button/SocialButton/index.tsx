import Button from '@/components/Button/Button';
import { SocialButtonProps } from '@/interfaces/button';
import { useSocialSignInImage } from '@/hooks/useSocialSignInImage';

export default function SocialButton(props: SocialButtonProps) {
  const socialImg = useSocialSignInImage(props.socialType);

  const handleSignIn = () => {
    window.location.href = `https://cafevery.com/oauth2/authorization/${props.socialType}`;
  };

  return (
    <Button width={236} height={52} margin={"8px 0 8px 0"} background={socialImg} onClick={handleSignIn} {...props}>
      {props.children}
    </Button>
  );
}