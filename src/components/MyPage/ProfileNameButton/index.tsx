import { useRecoilState } from 'recoil';
import { showSearchBarState } from '@/atoms/toggle';
import { TextButtonProps } from '@/interfaces/button';
import TextButton from '../../common/Button/TextButton';
import SearchBar from '@/components/common/Search/SearchBar';
import useInput from '@/hooks/useInput';
import RegisterButton from '@/components/MyPage/RegisterButton';
import * as Styled from './style'
import { userInfoState } from '@/atoms/userInfoState';
import { useQueryClient } from '@tanstack/react-query';
import { useChangeNickname } from '@/hooks/useChangeNickname';
import { isAxiosError } from 'axios';
import useToast from '@/hooks/useToast';

export default function ProfileNameButton(props: TextButtonProps) {
  const { displayToast } = useToast();
  const [showSearchBar, setShowSearchBar] = useRecoilState(showSearchBarState);
  const {value: nicknameTerm, setValue: setNicknameTerm, reset} = useInput<HTMLTextAreaElement>();
  const [userInfo, ] = useRecoilState(userInfoState);
  const queryClient = useQueryClient();
  const { mutate }  = useChangeNickname();

  const handleChange = (e: {target: {value: string}}) => {
    const value = e.target.value;
    setNicknameTerm(value);
  };

  const handleProfileChangeInputBarOpen = () => {
    setShowSearchBar(!showSearchBar);
  }

  const handleProfileChangeClick = () => {
    if (!nicknameTerm) {
      displayToast(`변경할 닉네임을 입력해주세요.`);
      return;
    } else {
      mutate(nicknameTerm, {
        onSuccess: async () => {
          setShowSearchBar(!showSearchBar);
          displayToast('닉네임 변경이 완료되었습니다.');
          await queryClient.invalidateQueries({queryKey: ['userInfo']});
        },
        onError: (error) => {
          if(isAxiosError(error)) {
            displayToast('변경에 실패했습니다. 다시 시도해주세요.');
          }
        },
      });
    }
  };

  return (
    <>
      {showSearchBar ? (
        <Styled.Container>
          <SearchBar 
            isOpen={false}
            openModal={function (): void {}}
            closeModal={function (): void {}} {...props}
            placeholder={'닉네임을 입력하세요.'}
            reset={reset}
            position={"relative"}
            width={195}
            margin={"0 0 0 10px"}
            maxLength={20}
            value={nicknameTerm}
            onChange={handleChange}
            defaultValue={userInfo.data.infos.nickname}
          />
          <RegisterButton 
            position={'relative'}
            onClick={() => handleProfileChangeClick()}
          />
        </Styled.Container>
      ) : (
        <TextButton {...props} 
          onClick={() => handleProfileChangeInputBarOpen()}
          fontSize={24}
        >
          {props.children}
        </TextButton>
      )}
    </>
  );
}
