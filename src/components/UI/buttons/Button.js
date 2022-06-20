import styled from 'styled-components'

const Button = (props) => {
	return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}

const ButtonStyled = styled.button`
	border: ${({ outline }) => (outline ? '1px solid yellow' : 'none')};
	width: ${({ width }) => width || '150px'};
	border-radius: ${({ radius }) => radius || '2px'};
	font-family: 'Inter', sans-serif;
	font-size: ${({ size }) => size || '14px'};
	color: ${({ color }) => color || '#000'};
	cursor: pointer;
	padding: ${({ padding }) => padding || '10px 16px'};
	:hover {
		background: #bb722b;
        border-color: #bb722b;
        color: #f7f7f7;
	}
    :active {
        background: #f2b75b;
        color: #f7f7f7;
    }
    :disabled {
        background: #c4c4c4;
        cursor: not-allowed;
    }
`

export default Button;
