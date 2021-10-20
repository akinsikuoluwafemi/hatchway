import styled from 'styled-components';


export const CollapsibleContainer = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;

  .ant-collapse-content-box {
    
    & > p {
      padding-left: 0px!important;
    }

  }

`

export const AccordionSection = styled.div`
    // background: pink;
    width: 100%;

    
`;

export const AccordionItem = styled.div`
    display: flex;
    // justify-content: space-between;
    width: 100%;
    padding: 0rem 1rem;

    


`;

export const AccordionImageWrapper = styled.div`
  // border-radius: 50%;
  height: 10rem;
  width: 10rem;

  



`

export const AccordionImage = styled.div<{ img: String }>`
    background-image: url(${(props: { img: any; }) => props.img});
	  background-size: cover;
	  background-position: center;
	  background-repeat: no-repeat;

  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  margin: auto;
  border: 1px solid #ddd;


`

export const AccordionTextContainer = styled.div`
    margin-left: 1rem;
    width: 100%;
    display: flex;


`

export const AccordionTextWrapper = styled.div`

  & > h1 {
    font-weight: 800;
  }

  .details-wrapper {
    margin-left: 1rem;
    font-weight: 100;
    font-size: 1rem;
      & > p {
        margin: 0;
      }

  }

`

export const CollapseWrapper = styled.div < { active?: boolean }>`
    ${({ active }) => active ? `
      display: block;

    ` : `
      display: none;
    `}
    margin-left: 1rem;
    margin-top: 1rem;
    font-weight: 100;
    font-size: 1rem;
  & > p {
    margin: 0;

  }

`;

export const StudentTag = styled.span`
  		margin-left: 15px;
			text-transform: lowercase;
      background: #eee;
      padding: .3rem;
			// height: 32px;
			font-size: 1rem;
			white-space: nowrap;
			padding-left: 12px;
			padding-right: 12px;
			outline: none;
			border-radius: 5px;

`

export const StudentTagRow = styled.div`
  	padding: .5rem 0;
    padding-bottom: 0;
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar {
		display: none;
	}

`

export const ActionIcon = styled.span`
    cursor: pointer;
    text-align: right;
    font-size: 2rem;

`