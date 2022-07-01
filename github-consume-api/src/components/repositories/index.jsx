import React from 'react'
import RepositoryItem from '../repository-item'
import * as S from './styled'

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected">

      <S.WrapperTabList>
        <S.WrapperTab>REPOSITORIES</S.WrapperTab>
        <S.WrapperTab>STARRED</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem
          name='autismo-tech'
          fullname='stebsnusch/autismo-tech'
          linkToRepo='https://github.com/stebsnusch/autismo-tech' />
        <RepositoryItem
          name='basecamp-javascript'
          fullname='stebsnusch/basecamp-javascript'
          linkToRepo='https://github.com/stebsnusch/basecamp-javascript' />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel></S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories