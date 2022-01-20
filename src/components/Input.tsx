import tw from "twin.macro";
import styled from "styled-components";
interface Props {
	primary?: boolean;
}
const Input = styled.input<Props>`
	${tw`bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal m-10`}
	background ${(props) => (props.primary ? "black" : "transparent")}
`;
export default Input;
