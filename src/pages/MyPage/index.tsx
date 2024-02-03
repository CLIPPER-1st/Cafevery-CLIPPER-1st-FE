import PageLayout from '@/components/PageLayout/PageLayout';
import Default from '@/assets/Images/default.png';
import * as Styled from './style';

export default function MyPage() {
  return (
    <PageLayout>
      <Styled.Container>
        <Styled.Image src={Default} />
      </Styled.Container>
    </PageLayout>
  );
}
