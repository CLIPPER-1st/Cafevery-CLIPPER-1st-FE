import { useRecoilState } from 'recoil';
import { showSearchBarState } from '@/atoms/toggle';
import { TextButtonProps } from '@/interfaces/button';
import TextButton from '../TextButton';
import SearchBar from '@/components/Search/SearchBar';
import useInput from '@/hooks/useInput';
import RegisterButton from '@/components/Button/RegisterButton';
import * as Styled from './style'
import { userInfoState } from '@/atoms/userInfoState';
import { useQueryClient } from '@tanstack/react-query';
import { useChangeNickname } from '@/hooks/useChangeNickname';
import { isAxiosError } from 'axios';
import { alertModalState } from '@/atoms/modalState';

export default function ProfileNameButton(props: TextButtonProps) {
  const [alertModal, setAlertModal] = useRecoilState(alertModalState);
  const [showSearchBar, setShowSearchBar] = useRecoilState(showSearchBarState);
  const {value: nicknameTerm, setValue: setNicknameTerm, reset} = useInput();
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
    mutate(nicknameTerm, {
      onSuccess: async () => {
        setShowSearchBar(!showSearchBar);
        setAlertModal({
          isOpen: true,
          message: '닉네임 변경이\n완료되었습니다.',
        });        
        await queryClient.invalidateQueries({queryKey: ['userInfo']});
      },
      onError: (error) => {
        if(isAxiosError(error)) {
          setAlertModal({
            isOpen: true,
            message: '변경에 실패했습니다.\n다시 시도해주세요.',
          });  
        }
      },
    });
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
            defaultValue={userInfo?.data?.infos?.nickname}
          />
          <RegisterButton 
            position={'relative'}
            onClick={() => handleProfileChangeClick()}
          />
        </Styled.Container>
      ) : (
        <TextButton {...props} onClick={() => handleProfileChangeInputBarOpen()}>
          {props.children}
        </TextButton>
      )}
    </>
  );
}
