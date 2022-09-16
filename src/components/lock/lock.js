import React, { useState } from 'react';
import { FormCont } from './styles';
import { Button } from './styles';
import styled from 'styled-components';

const Cover = styled.div`
    z-index: 999;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.cover};
    backdrop-filter: blur(5px);
    overflow: hidden;
`;

const Lock = ({ isLocked, setIsLocked }) => {
    return (
        <>
            {isLocked ? (
                <Cover>
                    <Form setIsLocked={setIsLocked} />
                </Cover>
            ) : (
                <> </>
            )}
        </>
    );
};

const Form = ({ setIsLocked }) => {
    const [errorAnim, setErrorAnim] = useState(false);
    const [pass, setPass] = useState('');
    const [failed, setFailed] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
            setErrorAnim(false);
        }, 1000);

        if (pass !== 'julia-ux') {
            setErrorAnim(true);
            setFailed(true);
        } else {
            setIsLocked(false);
            setErrorAnim(false);
            setFailed(false);
        }
    };

    const handleEmailChange = (event) => {
        setPass(event.target.value);
    };

    return (
        <FormCont>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                className={failed ? 'error-icon' : null}
                id='form'
            >
                <input
                    autoComplete='new-password'
                    className={
                        failed
                            ? [errorAnim ? 'error-anim' : 'form-error']
                            : null
                    }
                    type='password'
                    id='email'
                    placeholder='Password'
                    onChange={handleEmailChange}
                />
                <Button className={null} type='submit' id='submit' />
            </form>
        </FormCont>
    );
};

export default Form;
export { Lock };
