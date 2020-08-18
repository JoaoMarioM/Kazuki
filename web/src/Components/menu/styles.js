import styled from 'styled-components'

export const MenuContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: 200px;
    background-color: #1C1C2D;
    top: 0;
    bottom: 0;
`
export const Nav = styled.nav`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const BtnLogout = styled.button `
    /* margin: 20px  auto; */
    background-color: transparent;
    transform: rotate(180deg);
    top: 10px;
    right: 10px;
    position: absolute;
`
export const IconUser = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`
export const NameFunc = styled.h1`
    font-size: 20px;
    margin: 25px 10px auto;
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    width: auto;
    height: auto;
`
export const LinkItem = styled.div`
    margin-top: 30px;

    .txtMenu{
    font-size: 20px;
    /* margin-top: 30px; */
    /* margin-bottom: 30px; */
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    width: auto;
    height: auto;

    .iconMenu{
    margin-right: 10px;
    }
    p{
    margin-bottom: 30px;

    }
}
`