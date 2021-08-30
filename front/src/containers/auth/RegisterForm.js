import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";
import { changeField, initializeForm, register } from "../../modules/auth";

const RegisterForm = ({ history }) => {
	const [picture, setPicture] = useState(null);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const { form, auth, authError } = useSelector(({ auth }) => ({
		form: auth.register,
		auth: auth.auth,
		authError: auth.authError,
	}));

	const onChange = e => {
		const { value, name } = e.target;
		dispatch(
			changeField({
				form: 'register',
				key: name,
				value,
			})
		);
	};

	const onSubmit = e => {
		e.preventDefault();
		const { picture, nickname } = form;
		if ([nickname].includes('')) {
			setError('빈 칸을 모두 입력하세요');
			return ;
		}
		dispatch(register({ picture, nickname }));
	};

	const onDrop = (file, file64) => {
		console.log(file, file64)
		dispatch(changeField({
			form: 'register',
			key: 'picture',
			value: file64,
		}))
	}

	useEffect(() => {
		dispatch(initializeForm('register'));
	}, [dispatch]);

	useEffect(() => {
		if (authError) {
			if (authError.response.status === 400) {
				setError('비밀번호를 길게 써주세요');
				return ;
			}
			else if (authError.response.status === 409) {
				setError('이미 존재하는 아이디입니다');
				return ;
			}
			else if (authError.response.status === 500) {
				setError('네트워크 연결을 확인하세요');
				return ;
			}
			setError('회원가입 실패');
			console.log(authError);
			return;
		}
		if (auth) {
			console.log('회원가입 성공');
			console.log(auth);
			dispatch(initializeForm('register'));
			history.push('/login');
		}
	}, [auth, authError, dispatch, history, error]);

	// useEffect(() => {
	// 	if (user) {
	// 		try {
	// 			localStorage.setItem('user', JSON.stringify(user));
	// 		} catch (e) {
	// 			console.log('localStorage is not working');
	// 		}
	// 	}
	// }, [user]);

	return (
		<AuthForm
			type="register"
			form={form}
			onChange={onChange}
			onSubmit={onSubmit}
			onDrop={onDrop}
			error={error}
			picture={picture}
		/>
	);
};

export default withRouter(RegisterForm);
