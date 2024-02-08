import React from 'react';
import { useRecoilState } from 'recoil';
import { showSearchBarState } from '@/atoms/toggle';
import { TextButtonProps } from '@/interfaces/button';
import TextButton from '../TextButton';
import SearchBar from '@/components/Search/SearchBar';
import useInput from '@/hooks/useInput';
import RegisterButton from '@/components/Button/RegisterButton';
import * as Styled from './style'
import { userInfoState } from '@/atoms/userInfoState';

export default function ProfileNameButton(props: TextButtonProps) {
  const [showSearchBar, setShowSearchBar] = useRecoilState(showSearchBarState);
  const {value, setValue, reset} = useInput();
  const [userInfo, ] = useRecoilState(userInfoState);

  const handleProfileChangeClick = () => {
    //TODO: 이름 변경 로직 추가
    setShowSearchBar(!showSearchBar);
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
            defaultValue={userInfo?.data?.infos?.nickname}
          />
          <RegisterButton 
            position={'relative'}
            onClick={() => handleProfileChangeClick()}
          />
        </Styled.Container>
      ) : (
        <TextButton {...props} onClick={handleProfileChangeClick}>
          {props.children}
        </TextButton>
      )}
    </>
  );
}
