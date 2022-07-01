import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";


const Profile = () => {
  const { githubState } = useGithub();

    return (
        <S.Wrapper>
            <S.WrapperProfileImage
                src="https://avatars.githubusercontent.com/u/7193438?v=4"
                alt="User Profile Picture"
            />
            <S.WrapperInfoUser>
                <S.WrapperUserData>
                    <h1>'{githubState.user.name}'</h1>
                    <a
                        href='https://github.com/stebsnusch'
                        target="_blank"
                        rel='noreferrer'>
                        thiagoelias99
                    </a>
                </S.WrapperUserData>

                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Stars</h4>
                        <span>2</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>8</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile