import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import GoogleLogin from 'react-google-login';
import ImageUploader from "react-images-upload";

const AuthFormBlock = styled.div`
	h3 {
		margin: 0;
		color: ${palette.gray[8]};
		margin-bottom: 1rem;
	}
`;

const StyledInput = styled.input`
	font-size: 1rem;
	border: none;
	border-bottom: 1px solid ${palette.gray[5]};
	padding-bottom: 0.5rem;
	outline: none;
	width: 100%;
	&:focus {
		color: ${palette.gray[7]};
		border-bottom: 1px solid ${palette.gray[7]};
	}
	& + & {
		margin-top: 1rem;
	}
`;

const Footer = styled.div`
	margin-top: 2rem;
	text-align: right;
	a {
		color: ${palette.gray[6]};
		text-decoration: underline;
		&:hover {
			color: ${palette.gray[9]};
		}
	}
`;

const ButtonWithMarginTop = styled(Button)`
	margin-top: 1rem;
`;

const GoogleLoginButton = styled.div`
	margin-top: 1rem;
	background: none;
	width: 100%;
	button {
		width: 100%;
	}
`;

const textMap = {
	login: '로그인',
	register: '회원가입'
};

const ErrorMessage = styled.div`
	color: red;
	text-align: center;
	font-size: 0.875rem;
	margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, onSuccess, onFailure, onDrop, error, picture }) => {
	const text = textMap[type];
	return (
		<AuthFormBlock>
			<h3>{text}</h3>
			<form onSubmit={onSubmit}>
				{type === 'login' && (
					<StyledInput autoComplete="username" name="username" placeholder="아이디" onChange={onChange} value={form.username} required/>
				)}
				{type === 'login' && (
					<StyledInput autoComplete="new-password" name="password" placeholder="비밀번호" type="password" onChange={onChange} value={form.password} required/>
				)}
				{type === 'register' && (
					<StyledInput name="nickname" placeholder="닉네임" onChange={onChange} value={form.nickname} />
				)}
				{type === 'register' && (
					<StyledInput name="picture" placeholder="사진을 선택하세요." />
				)}
				{type === 'register' && (
					<ImageUploader
						withIcon={true}
						onChange={onDrop}
						imgExtension={[".jpg", ".gif", ".png", ".gif"]}
						maxFileSize={5242880}
						withPreview={true}
					/>
				)}
				{error && <ErrorMessage>{error}</ErrorMessage>}
				<ButtonWithMarginTop cyan fullWidth>{text}</ButtonWithMarginTop>
				{type === 'login' && (
					<GoogleLoginButton>
						<GoogleLogin
							clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
							onSuccess={onSuccess}
							onFailure={onFailure}
						/>
					</GoogleLoginButton>
				)}
			</form>
			<Footer>
				{type === 'login' ? (
					<Link to="/register">회원가입</Link>
				) : (
					<Link to="/login">로그인</Link>
				)}
			</Footer>
		</AuthFormBlock>
	);
};

export default AuthForm;
